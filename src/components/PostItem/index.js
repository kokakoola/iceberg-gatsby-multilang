import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import useTranslations from '../useTranslations';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
  image,
}) => {
  const { toRead } = useTranslations();

  const { listImages } = useStaticQuery(
    graphql`
      query {
        listImages: allFile {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 350) {
                  src
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `,
  );

  const postImgCover = listImages.edges.find(img => {
    return img.node.childImageSharp.fluid.src.includes('cover');
  });

  const imgName = image ? image.split('/')[3] : false;

  const postImg = imgName
    ? listImages.edges.find(img => {
        return img.node.childImageSharp.fluid.src.includes(imgName);
      })
    : false;

  return (
      <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <Link to={slug}>
              {postImg && (
                  <Img
                      className="hover:grow hover:shadow-lg"
                      fluid={postImg.node.childImageSharp.fluid}
                      alt={title}
                  />
              )}
              {!postImg && (
                  <Img
                      className="hover:grow hover:shadow-lg"
                      fluid={postImgCover.node.childImageSharp.fluid}
                      alt={title}
                  />
              )}
              <div className="pt-3 flex items-center justify-between">
                  <h5>{title}</h5>
                  <span>{category}</span>
              </div>
              <p className="pt-1 text-gray-900">
                  {date} • {timeToRead} min {toRead}
              </p>
              <p className="pt-1 text-gray-900">{description}</p>
          </Link>
      </div>
  )
};

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostItem;
