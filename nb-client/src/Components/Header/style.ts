import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.a`
  font-weight: bold;
  color: #6a5acd;
  font-size: 5rem;
  margin: 0;
`;

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  img {
    width: 2.5rem;
    margin-top: 2rem;
    margin-bottom: 3px;
  }
  p {
    margin: 0;
    margin-bottom: -5px;
    font-size: 12px;
  }
`;
export const Line = styled.div`
  background: #808080;
  width: 100%;
  height: 1px;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;
