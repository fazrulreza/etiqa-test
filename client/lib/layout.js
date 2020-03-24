import React from 'react';
import Container from 'react-bootstrap/Container';
import Head from 'next/head';
import { ToastContainer } from 'react-nextjs-toast';
import '../styles/global.style.css';
// import { tabTitle } from '../configuration/parameter';

const Layout = ({ children }) => (
  <Container>
    <Head>
      <title>CDN</title>
      <link rel="shortcut icon" type="image/x-icon" href="/static/images/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <ToastContainer />
  </Container>
);
export default Layout;
