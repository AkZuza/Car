// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import MainContent from '../components/Calling';
import Footer from '../components/Footer';
import Speedometer from '../components/speed'

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles/globals.css" />
        <title>Car Dashboard with Music Toolbar</title>
      </Head>

      <Header />
      <Speedometer/>
      <MainContent/>
      <Footer />
    </div>
  );
};

export default Home;