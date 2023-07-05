import React from 'react';
import Header from '../components/header.js'
import Footer from '../components/footer.js'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div class="contens">
      <div class="contenscenter">
      <h1>このサイトについて</h1>
      <p>何かここに説明。</p>  
      </div>
     </div>
      <Footer />
      <div>©  Site {new Date().getFullYear()}</div>
    </div>
  );
};

export default AboutPage;


