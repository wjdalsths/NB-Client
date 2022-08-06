import { useEffect, useState } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import { changeQuestion, writeQuestion } from "../../Api/Question";
import getUserId from "../../Utils/Libs/getUserId";
import { useNavigate } from "react-router-dom";
import { QuestionType } from "../../types";

interface QuestionTypeProps {
  questionWatch: QuestionType | null;
}
const QuestionWrite = ({ questionWatch }: QuestionTypeProps) => {
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
      writeQuestion(title, content, getUserId)
        .then(() => {
          toast.success("게시되었습니다.");
          setTitle("");
          setContent("");
          navigate("/question");
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
      changeQuestion(questionWatch?.id, getUserId, title, content)
        .then(() => {
          toast.success("수정되었습니다.");
          setTitle("");
          setContent("");
          navigate("/question");
        })
        .catch((e: any) => {
          console.log(e.message);
        });
    }
  };

  useEffect(() => {
    async function setProps() {
      if (questionWatch) {
        setTitle(questionWatch.title);
        setContent(questionWatch.context);
      }
    }
    setProps();
  }, [questionWatch]);

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

        {questionWatch ? (
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

export default QuestionWrite;
