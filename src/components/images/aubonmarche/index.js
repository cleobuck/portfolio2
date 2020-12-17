import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const { desktop, small } = useStaticQuery(
    graphql`
      query {
        small: file(relativePath: { eq: "aubonmarche.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktop: file(relativePath: { eq: "aubonmarche.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const sources = [
    small.childImageSharp.fluid,
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 1024px)`,
    },
  ];

  return <Img fluid={sources} alt="Au Bon Marche - A social shop" />;
};
