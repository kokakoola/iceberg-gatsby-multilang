import React from 'react';
import { graphql } from 'gatsby';
import TitlePage from '../components/TitlePage';
import SEO from '../components/seo';

const Page = props => {
  const post = props.data.markdownRemark;

  return (
      <>
          <SEO
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              image={post.frontmatter.image}
          />
          <TitlePage text={post.frontmatter.title} />
          <section className="bg-white py-8">
              PAGE
              <div
                  className="container py-8 px-6 mx-auto"
                  dangerouslySetInnerHTML={{ __html: post.html }}
              ></div>
          </section>
      </>
  )
};

export const query = graphql`
  query Page($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
        image
      }
      html
    }
  }
`;

export default Page;
