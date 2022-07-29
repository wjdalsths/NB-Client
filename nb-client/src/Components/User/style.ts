import styled from "styled-components";

export const Positioner = styled.div`
  width: 15rem;

  display: flex;
  flex-direction: column;
`;
export const ProfileWrapper = styled.div`
  /* width: 100%; */
  width: 15rem;
  height: 8rem;
  border-radius: 40px;
  margin-top: 1rem;
  background-color: #6a5acd;
  display: flex;
  display: flex;
`;
export const ProfileImg = styled.div`
  SVG {
    width: 6rem;
    height: 6rem;
  }
  margin: 1rem;
`;
export const UserContents = styled.div`
  margin-top: 2rem;
  color: white;
  font-size: 1rem;
  margin-right: 1rem;
  line-height: 2rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  /* width: 13vw; */
`;
export const Btn = styled.button`
  width: 8rem;
  height: 4vh;
  margin-top: 1rem;
  border-radius: 10px;
  background-color: #6a5acd;
  color: #fff;
  font-size: 1.25rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);
  :first-child {
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: #f8f9fa;
    color: #6a5acd;
    border: 3px solid #6a5acd;
  }
`;
