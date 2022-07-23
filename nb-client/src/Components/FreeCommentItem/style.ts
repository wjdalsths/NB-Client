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

export const BtnWrapper = styled.button`
  display: flex;
  margin-bottom: -20px;
`;
export const Btn = styled.button`
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
  }
`;
