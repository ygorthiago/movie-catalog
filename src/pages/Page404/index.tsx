import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import PageHeader from '../../components/PageHeader';
import { Main, BackButton } from './styles';

function Page404() {
  return (
    <>
      <PageHeader />
      <Main>
        <h1>404</h1>
        <h2>Página não encontrada!</h2>
        <BackButton to="/">
          <FiArrowLeft /> Voltar para a página inicial
        </BackButton>
      </Main> 
    </>
  );
}

export default Page404;
