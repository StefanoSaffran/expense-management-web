import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    > strong {
      margin-right: 6px;
    }
  }
`;
