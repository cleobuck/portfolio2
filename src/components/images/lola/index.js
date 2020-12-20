import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default ({ className, onClick }) => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "lola.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <Img
      fluid={image.childImageSharp.fluid}
      alt={"Lola Buck's portfolio"}
      className={className}
      onClick={onClick}
    />
  );
};
