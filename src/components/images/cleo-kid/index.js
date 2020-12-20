import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './style.module.scss';

export default () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "skills/cleo-kid.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return <Img fluid={image.childImageSharp.fluid} className={styles.cleoKid} />;
};
