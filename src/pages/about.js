import React from 'react';
import Header from '../components/header.js'
import Footer from '../components/footer.js'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div class="wrapper">
      <div class="contens">
      <div class="contenscenter">
      <h1>このサイトについて</h1>
      <p>「〇〇」は、
        質問に答えるだけで発達障害に関する困りごとや不安を解決することができます。
        ｢発達障害の生きるための手がかり｣が無料でわかるサイトです。
      </p>  
      </div>
     </div>
     </div>
      <Footer />
    </div>
  );
};

export default AboutPage;


