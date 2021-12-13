/** @jsx jsx */
import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { container, header, navLink } from '../styles/layout.module.css';
import ColorSwitch from '../components/color-switch.js';
import '@fontsource/black-han-sans';
import '@fontsource/do-hyeon';
import '@fontsource/jua';
import '@fontsource/noto-sans-kr';
import { jsx } from 'theme-ui';
import { Seo } from './seo.js';

import '../styles/global.css';

const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <div className={container}>
        <header
          sx={{
            color: 'c1',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
          }}
          className={`${header}`}
        >
          <Link to="/">{meta.title}</Link>
        </header>
        <nav
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <ul
            sx={{
              color: 'c3',
            }}
            className={navLink}
          >
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div>
            <ColorSwitch />
          </div>
        </nav>

        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
