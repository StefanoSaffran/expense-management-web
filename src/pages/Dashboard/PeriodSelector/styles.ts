import styled, { css } from 'styled-components';

import { darken, lighten } from 'polished';
import Button from '../../../components/Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.4rem 0;
`;

export const SelectContainer = styled.div`
  position: relative;

  ${({ theme }) => css`
    > select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 100%;
      height: 4rem;
      border-radius: ${theme.radii.tiny};
      background: ${theme.colors.backgroundAlternative};
      border: 1px solid ${darken(0.1, theme.colors.lightGrey)};
      padding: 0 5.6rem 0 0.8rem;
      color: ${theme.colors.darkerGrey};

      :active {
        border: 1px solid ${lighten(0.2, theme.colors.primary)};
      }
    }

    > svg {
      position: absolute;
      right: 5%;
      top: 28%;
      pointer-events: none;
      user-select: none;

      stroke: ${theme.colors.darkGrey};
    }
  `}
`;

export const ArrowButton = styled(Button)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.backgroundAlternative};
    background: ${theme.colors.backgroundAlternative};

    :hover:not(:disabled) {
      border-color: ${theme.colors.primary};
      color: ${darken(0.2, theme.colors.primary)};
    }

    :active:not(:disabled) {
      background: ${theme.colors.primary};
      color: ${theme.colors.label};
    }
  `}
`;
