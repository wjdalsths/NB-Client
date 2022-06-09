import { useState } from "react";
import * as S from "./style";
import { customAxios } from "../../Utils/Libs/customAxios";
import { toast } from "react-toastify";

// const [info, setInfo] = useState<string>("");

const QuestionWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
    // console.log(e.target.value);
  };
  const onChangeContent = (e: any) => {
    setContent(e.target.value);
    // console.log(e.target.value);
  };

  const onSubmit = () => {
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
          "/SBN/CRE/",
          {
            title: title,
            context: content,
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
          window.location.replace("/story");
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <S.Positioner>
        <S.Board>
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
        <S.SubButton type="submit" onClick={onSubmit}>
          UpLoad
        </S.SubButton>
      </S.Positioner>
    </>
  );
};

export default QuestionWrite;
