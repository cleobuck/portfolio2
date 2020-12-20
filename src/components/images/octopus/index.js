import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default ({ className, onClick }) => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "octopus.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
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
      alt="NGO Octopus's website"
      className={className}
      onClick={onClick}
    />
  );
};
