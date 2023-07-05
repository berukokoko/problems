import React from 'react';
import Header from '../components/header.js'
import Footer from '../components/footer.js'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div class="contens">
      <div class="contenscenter">
      <h1>財布無くした</h1>
      <p>生活に必要な財布。無くしてしまったら、焦ってしまいますよね。<br/>落ち着いてこなしてみましょう。</p>  

      <div class="trianglecenter">
      <div class="triangle"></div>
      </div>

      <ul>
        <li>最後まで持っていたところを思い出す。</li>
        <li>カバンやポケットの中を探す。</li>
      </ul>


      <div class="trianglecenter">
      <div class="triangle"></div>
      </div>

      <ul>
        <li>お店や電車などに電話する。</li>
        <li>何か入れる</li>
      </ul>
      
      </div>
     </div>
      <Footer />
      <div>©  Site {new Date().getFullYear()}</div>
    </div>
  );
};

export default AboutPage;


