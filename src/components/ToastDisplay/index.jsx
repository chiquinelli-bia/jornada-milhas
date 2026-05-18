/* eslint-disable react/prop-types */
import * as Styled from "./style";

const ToastDisplay = ({ notification }) => {
  return (
    <Styled.Container>
      <Styled.Icon src="./icon-192x192.png" alt="Logo Jornada Milhas" />
      <Styled.Content>
        <Styled.Title>{notification.title}</Styled.Title>
        <Styled.Body>{notification.body}</Styled.Body>
      </Styled.Content>
    </Styled.Container>
  );
};

export default ToastDisplay;
