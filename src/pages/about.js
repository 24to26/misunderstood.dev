import * as React from 'react';
import Layout from '../components/layout';
import { greeting, highlight, content } from '../styles/about.module.css';

const AboutPage = () => {
  return (
    <Layout>
      <h1 className={greeting}>
        반갑습니다. <br />
        개발자 <span className={highlight}>채호경</span> 입니다.
      </h1>
      <div className={content}>
        <p>참 멀리 돌아왔네요.</p>
        <p>"Pessimists sound smart. Optimists make money." </p>
        <p>- Nat Friedman</p>
      </div>
    </Layout>
  );
};

export default AboutPage;
