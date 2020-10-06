import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundAlternative};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 1.6rem;

  max-width: 116.2rem;
  width: 100%;
  height: 10.4rem;
`;

export const LeftNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;

  > svg {
    cursor: pointer;
    max-width: 11.2rem;
    height: auto;
    margin: 0 2.4rem 0.4rem -0.4rem;
  }
`;

export const RightNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > img {
    width: 4.8rem;
    height: 4.8rem;
  }
`;
