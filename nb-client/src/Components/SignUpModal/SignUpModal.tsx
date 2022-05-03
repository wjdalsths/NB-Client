import React from "react";
import * as S from "./style";
import SignUpContent from "../SignUpContent/SignUpContent";

interface ModalProps {
  open: boolean;
  close: () => void;
}
const SignUpModal: React.FC<ModalProps> = ({ open, close }) => {
  const onClose = () => {
    close();
  };
  return open ? (
    <>
      <S.Positioner>
        <S.Overlay onClick={close} />
        <S.Container>
          <S.Header>
            <S.Logo>NB</S.Logo>
            <S.CloseBtn onClick={onClose}>X</S.CloseBtn>
          </S.Header>
          <SignUpContent />
          <S.BtnWrapper>
            <S.SignUpBtn onClick={onClose}>Sign Up</S.SignUpBtn>
          </S.BtnWrapper>
        </S.Container>
      </S.Positioner>
    </>
  ) : (
    <></>
  );
};
export default SignUpModal;
