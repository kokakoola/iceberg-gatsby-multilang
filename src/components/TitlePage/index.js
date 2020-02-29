import React from 'react';

const TitlePage = props => {
  const { text } = props;

  return (
      <>
          <section className="bg-white py-8" role="main">
              <div className="container mx-auto pt-4 pb-12">
                  <h1 className="text-black text-2xl my-4">{text}</h1>
              </div>
          </section>
      </>
  )
};

export default TitlePage;
