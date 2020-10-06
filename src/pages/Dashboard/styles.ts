import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -4.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  z-index: 0;
  padding: 0 1.6rem;
`;

export const Wrapper = styled.div`
  max-width: 110rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 0.8rem;
  padding: 1.6rem;

  > h1 {
    text-align: center;
  }
`;
