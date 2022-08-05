import { useState } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import { writeStory } from "../../Api/Story";
import getUserId from "../../Utils/Libs/getUserId";
import { useNavigate } from "react-router-dom";

const StoryWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e: any) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    let pattern = /^\s\s*$/;
    if (title.match(pattern) || title === "") {
      toast.warn("제목을 입력해주세요.");
    } else if (content.match(pattern) || content === "") {
      toast.warn("내용을 입력해주세요.");
    } else {
      writeStory(title, content, getUserId)
        .then(() => {
          toast.success("게시되었습니다.");
          setTitle("");
          setContent("");
          navigate("/story");
        })
        .catch((e: any) => {
          console.log(e.message);
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

export default StoryWrite;
