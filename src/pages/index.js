import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
import TitlePage from '../components/TitlePage';
import Hero from '../components/Hero'
import LocalizedLink from '../components/LocalizedLink';
import useTranslations from '../components/useTranslations';

const Index = ({ data: { allMarkdownRemark } }) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const {
    hello,
    hero,
    subline,
    category,
    latestPosts,
    allPosts,
  } = useTranslations();

  const postList = allMarkdownRemark.edges;

  return (
      <div className="homepage">
          <SEO title="Home" />
          <Hero text={hero} />
          <TitlePage text={hello} />
          <section className="bg-white py-8" role="main">
              <div className="container mx-auto">
                  <div className="flex flex-col w-full  justify-center items-start  px-6 tracking-wide">
                      <p>{subline}</p>
                      <hr style={{ margin: `2rem 0` }} />
                      <h2>
                          <strong>{latestPosts}</strong>
                          <LocalizedLink to={`/blog/`}>
                              {allPosts}
                          </LocalizedLink>
                      </h2>
                      <br />
                      INDEX
                      <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/hkiLfE22C2Q"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                      ></iframe>
                  </div>
                  <div className="mx-auto flex flex-wrap pt-4 pb-12">
                      {postList.map(
                          ({
                              node: {
                                  frontmatter: {
                                      background,
                                      category,
                                      date,
                                      description,
                                      title,
                                      image,
                                  },
                                  timeToRead,
                                  fields: { slug },
                              },
                          }) => (
                              <PostItem
                                  slug={`/blog/${slug}`}
                                  background={background}
                                  category={category}
                                  date={date}
                                  timeToRead={timeToRead}
                                  title={title}
                                  description={description}
                                  image={image}
                              />
                          )
                      )}
                  </div>
                  <br />
                  <LocalizedLink to={`/blog/`}>{allPosts}</LocalizedLink>
              </div>
          </section>
      </div>
  )
};

export default Index;

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!, ) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            category
            background
            image
            date(formatString: $dateFormat)

          }
          timeToRead
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`;
