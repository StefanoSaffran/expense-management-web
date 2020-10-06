import styled, { css } from 'styled-components';

import { darken } from 'polished';
import Button from '../../../components/Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.4rem 0;
`;

export const ArrowButton = styled(Button)`
  ${({ theme }) => css`
    :hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `}
`;
