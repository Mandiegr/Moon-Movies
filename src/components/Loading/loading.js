import styled, { keyframes } from "styled-components";

export const Loading = ({ message }) => {
  return (
    <Overlay>
      <Spinner />
      <Message>{message}</Message>
    </Overlay>
  );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color:#00072d;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid rgba(255, 255, 255, 0.2);
  border-top: 6px solid #fff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Message = styled.p`
  margin-top: 20px;
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
