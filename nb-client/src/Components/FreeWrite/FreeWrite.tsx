import { useEffect, useState } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import { changeFree, writeFree } from "../../Api/Free";
import getUserId from "../../Utils/Libs/getUserId";
import { FreeType } from "../../types/FreeType";
import { useNavigate } from "react-router-dom";

interface FreeTypeProps {
  freeWatch: FreeType | null;
}
const FreeWrite = ({ freeWatch }: FreeTypeProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [imgBase64, setimgBase64] = useState("");
  const [showimg, setShowing] = useState("");
  const navigate = useNavigate();

  const handleChangeFile = (event: any) => {
    var reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setShowing(base64.toString());
        setimgBase64(base64.toString().replace("data:image/png;base64,", ""));
        setimgBase64(base64.toString().replace("data:image/jpeg;base64,", ""));
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const deleteFileImage = () => {
    setShowing("");
    setimgBase64("");
  };

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const onChangeContent = (e: any) => {
    setContent(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = () => {
    // const url = "/FBN/CRE/";
    let pattern = /^\s\s*$/;
    if (title.match(pattern) || title === "") {
      console.log("no title");
      alert("제목을 입력해주세요.");
    } else if (content.match(pattern) || content === "") {
      console.log("no content");
      alert("내용을 입력해주세요.");
    } else {
      writeFree(title, content, imgBase64, getUserId)
        .then((res) => {
          console.log(res);
          toast.success("게시되었습니다.");
          setTitle("");
          setContent("");
          deleteFileImage();
          navigate("/free");
        })
        .catch((e: any) => {
          console.log(e.message);
        });
    }
  };

  const onChange = () => {
    let pattern = /^\s\s*$/;
    if (title.match(pattern) || title === "") {
      toast.warn("제목을 입력해주세요.");
    } else if (content.match(pattern) || content === "") {
      toast.warn("내용을 입력해주세요.");
    } else {
      changeFree(freeWatch?.id, getUserId, title, content, imgBase64)
        .then((res) => {
          console.log(res);
          toast.success("수정되었습니다.");
          setTitle("");
          setContent("");
          deleteFileImage();
          navigate("/free");
        })
        .catch((e: any) => {
          console.log(e.message);
        });
    }
  };

  useEffect(() => {
    async function setProps() {
      if (freeWatch) {
        setShowing("data:image/png;base64," + freeWatch.img1);
        setTitle(freeWatch.title);
        setContent(freeWatch.context);
      }
    }
    setProps();
  }, [freeWatch]);

  return (
    <>
      <S.Positioner>
        <S.Board>
          <S.Imgboard>
            <S.Img>
              {showimg ? (
                <img alt="image" src={showimg} />
              ) : (
                <label htmlFor="select">클릭하여 이미지 넣기</label>
              )}
            </S.Img>
            <S.ImgBtnWrapper>
              <input
                id="select"
                name="imgFlie"
                type="file"
                accept="image/*"
                onChange={handleChangeFile}
              />
              <button onClick={deleteFileImage}>삭제</button>
            </S.ImgBtnWrapper>
          </S.Imgboard>
          <S.Title>
            <input
              type={"text"}
              value={title}
              placeholder={"TITLE"}
              onChange={onChangeTitle}
            />
          </S.Title>
          <S.Infobox>
            <textarea
              value={content}
              onChange={onChangeContent}
              placeholder="CONTENT"
            />
          </S.Infobox>
        </S.Board>
        {freeWatch ? (
          <S.SubButton type="submit" onClick={onChange}>
            수정
          </S.SubButton>
        ) : (
          <S.SubButton type="submit" onClick={onSubmit}>
            UpLoad
          </S.SubButton>
        )}
      </S.Positioner>
    </>
  );
};

export default FreeWrite;
