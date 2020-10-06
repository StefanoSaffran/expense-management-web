import React from 'react';
import Loader from 'react-loader-spinner';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <Loader type="TailSpin" />
    </Container>
  );
};

export default Loading;
