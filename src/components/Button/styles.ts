import styled, { css } from 'styled-components';

import { ButtonProps } from '.';

const variants = {
  secondary: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.primary};
    :hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.label};
    }
  `,
  transparent: css`
    background: transparent;
  `,
};

export const Container = styled.button<ButtonProps>`
  ${({ theme, variant, color, background }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${background || theme.colors.background};
    border: 0;
    padding: 0.8rem 1.6rem;
    border-radius: ${theme.radii.small};
    color: ${color || theme.colors.primary};
    transition: ${theme.transition.default};

    /*  * {
      transition: ${theme.transition.default};
    } */

    ${variant && variants[variant]};
    :disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    & + button {
      padding-left: 0;
    }
  `}
`;

export const RightNav = styled.div``;
