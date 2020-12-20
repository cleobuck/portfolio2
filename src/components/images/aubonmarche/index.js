import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default ({ className, onClick }) => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "aubonmarche.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
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
      alt="Au Bon Marche - A social shop"
      className={className}
      onClick={onClick}
    />
  );
};
