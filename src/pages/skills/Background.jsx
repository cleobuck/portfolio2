import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './style.module.scss';

import BackgroundImage from 'gatsby-background-image';

const Background = ({ children, setLoad }) => {
  const { desktop, medium, small } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "chainsaw-background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        medium: file(relativePath: { eq: "chainsaw-background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        small: file(relativePath: { eq: "chainsaw-background-small.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Art-Direction Array
  const backgroundArtDirectionStack = [
    small.childImageSharp.fluid,
    {
      ...medium.childImageSharp.fluid,
      media: `(min-width: 1024px)`,
    },
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 1401px)`,
    },
  ];

  return (
    <BackgroundImage
      Tag="section"
      className={styles.background}
      fluid={backgroundArtDirectionStack}
      title="background of me with a chainsaw"
      role="background"
      aria-label=""
      preserveStackingContext={true}
      onLoad={setLoad}
    >
      {children}
    </BackgroundImage>
  );
};

export default Background;
