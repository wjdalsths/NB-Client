import { useState } from "react";
import * as S from "./style";
import { customAxios } from "../../Utils/Libs/customAxios";
import { toast } from "react-toastify";

// const [info, setInfo] = useState<string>("");

const FreeWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [imgBase64, setimgBase64] = useState("");
  const [imgFile, setimgFile] = useState(null);

  const handleChangeFile = (event: any) => {
    var reader = new FileReader();
    reader.onloadend = () => {
      // 읽기가 완료되면 아래코드 실행
      const base64 = reader.result;
      if (base64) {
        setimgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); //파일을 읽어 버퍼에 저장
      setimgFile(event.target.files[0]); //파일상태 업데이트
      // setFileImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const deleteFileImage = () => {
    setimgBase64("");
    setimgFile(null);
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
      customAxios
        .post(
          "/FBN/CRE/",
          {
            title: title,
            context: content,
            img1: imgBase64,
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            create_user: 1,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log(res);
          console.log("성공");
          toast.success("게시되었습니다.");
          setTitle("");
          setContent("");
          deleteFileImage();
          window.location.replace("/free");
        })
        .catch((error: any) => {
          console.log("error");
        });
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Board>
          <S.Imgboard>
            <S.Img>
              {imgFile ? (
                <img alt="image" src={imgBase64} />
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
              // id=''
              value={content}
              onChange={onChangeContent}
              placeholder="CONTENT"
            />
          </S.Infobox>
        </S.Board>
        <S.SubButton type="submit" onClick={onSubmit}>
          UpLoad
        </S.SubButton>
      </S.Wrapper>
    </>
  );
};

export default FreeWrite;
