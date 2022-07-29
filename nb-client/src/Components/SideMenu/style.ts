import styled from "styled-components";

export const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  margin-left: 1rem;
`;

export const Items = styled.div`
  display: flex;
  font-size: 2rem;
  color: #fff;
  align-items: center;
  margin-bottom: 15%;
  span {
    margin-left: 1rem;
  }
  cursor: pointer;
`;

export const Icons = styled.div`
  SVG {
    width: 3rem;
    height: 3rem;
  }
`;
