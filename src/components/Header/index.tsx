import React from 'react';

import { useTheme } from 'styled-components';

import { Container, Wrapper, LeftNav, RightNav, User } from './styles';
import Gradient from './Gradient';

import { removeHashFromColor } from '../../utils';

interface IUser {
  name: string;
}

const Header = () => {
  const user: IUser = { name: 'Stefano Saffran' };
  const { lightGrey, primary } = useTheme().colors;

  return (
    <Container>
      <Wrapper>
        <LeftNav>Controle Financeiro Pessoal</LeftNav>

        <RightNav>
          <User>
            <img
              src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=${removeHashFromColor(
                lightGrey,
              )}&color=${removeHashFromColor(primary)}&name=${user.name}`}
              alt={user.name}
            />
          </User>
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default Header;
