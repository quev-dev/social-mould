import Navbar   from './components/Navbar.jsx';
import Header   from './components/Header.jsx';
import Form     from './components/Form.jsx';
import Footer   from './components/Footer.jsx';

import { useState } from 'react';

export default function Home() 
{

  const [formSubmitted, setFormSubmitted] = useState(false);
  function updateFormSubmitted()
  {
    setFormSubmitted(true);
  }

  return <>
    <Navbar/>

    <Header/>
    <Form/>

    <Footer/>
  </>
}