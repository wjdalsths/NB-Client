import React from "react";
import * as S from "./style";
import ChangeInfoContent from "../ChangeInfoContent/ChangeInfoContent";

interface ModalProps {
  open: boolean;
  close: () => void;
}
const ChangeInfoModal: React.FC<ModalProps> = ({ open, close }) => {
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
          <S.Content>
            <ChangeInfoContent />
          </S.Content>
        </S.Container>
      </S.Positioner>
    </>
  ) : (
    <></>
  );
};
export default ChangeInfoModal;
