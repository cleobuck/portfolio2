import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default ({ className }) => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "up.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  );

  return <Img fluid={image.childImageSharp.fluid} className={className} />;
};
