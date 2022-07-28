import { BlobOptions } from "buffer";
import styled from "styled-components";

export const CommentItem = styled.div`
  width: 100%;
  /* height: 10vh; */
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;
export const CreateInformation = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

export const CreateUser = styled.div`
  font-size: 25px;
`;
export const CreateDate = styled.div`
  font-size: 15px;
  opacity: 0.5;
  padding-left: 14px;
`;
export const CommentContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 15px 45px;
`;
export const Comment = styled.div`
  font-size: 23px;
`;
export const chgComment = styled.input`
  font-size: 23px;
  border-radius: 5px;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
`;

export const BtnWrapper = styled.button`
  display: flex;
  margin-bottom: -20px;
`;
export const chgBtn = styled.button<chgType>`
  width: ${(props) => (props.state ? "80px" : "60px")};
  height: 25px;
  margin-right: 5px;

  background-color: #6a5acd;
  color: white;
  text-align: center;
  font-size: 15px;
  border-radius: 50px;
  :hover {
    background-color: #b9a0fe;
  }
`;
export const delBtn = styled.button`
  width: 60px;
  height: 25px;
  margin-right: 5px;

  background-color: #6a5acd;
  color: white;
  text-align: center;
  font-size: 15px;
  border-radius: 50px;
  :hover {
    background-color: #b9a0fe;
    color: red;
  }
`;
type chgType = { state: boolean };
