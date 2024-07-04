import React from 'react';
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import Footer from ''
import { HeadContent } from '../data';

function Home() {
  return (
    <>
    <Navbar/>
   {HeadContent.show ? <Header/> : null}
    <Footer/>
    </>
  )
}

export default Home