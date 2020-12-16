import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styles from 'pages/home/style.module.scss';

import BackgroundImage from 'gatsby-background-image';

const FullBackground = ({ className, children, setLoad }) => {
  const { desktop, medium, small } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "home-background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        medium: file(relativePath: { eq: "home-background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        small: file(relativePath: { eq: "home-background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 90) {
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
      media: `(min-width: 491px)`,
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
      title="Art-Directed Fullscreen Background"
      role="background"
      aria-label=""
      preserveStackingContext={true}
      onLoad={setLoad}
    >
      {children}
    </BackgroundImage>
  );
};

export default FullBackground;
