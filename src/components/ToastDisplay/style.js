import styled from "styled-components";

export const Container = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #5a189a;
`;

// código omitido
export const Body = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
