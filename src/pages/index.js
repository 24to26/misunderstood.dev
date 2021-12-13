import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

export const query = graphql`
  query MainImage {
    file(name: { eq: "misunderstood" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;
const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <GatsbyImage
        image={getImage(data.file)}
        alt="누명 - 내게 있어 승리라는 건 거울 앞에 섰을 때 어제의 나보다 나은 자신을
        맞이하는 것."
      />
    </Layout>
  );
};

export default IndexPage;
