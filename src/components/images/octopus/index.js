import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './style.module.scss';

export default () => {
  const { desktop, small } = useStaticQuery(
    graphql`
      query {
        small: file(relativePath: { eq: "octopus.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktop: file(relativePath: { eq: "octopus.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 90) {
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

  return <Img fluid={sources} alt="NGO Octopus's website" />;
};
