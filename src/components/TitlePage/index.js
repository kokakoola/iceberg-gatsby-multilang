import React from 'react';
import * as S from './styled';

const TitlePage = props => {
  const { text } = props;

  return (
      <>
          <section className="bg-white py-8" role="main">
              <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                  <S.TitleElement>{text}</S.TitleElement>
              </div>
          </section>
      </>
  )
};

export default TitlePage;
