import React from 'react';
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import '../components/layout.css'

const BlogPage = () => {
  return (
    <div>
      <Header />
      <div class="contens">
      <h1>サイトの名前（仮）</h1>

      <div class="contenscenter">
      <p>発達障害のお困りを解決するサイトです。</p>  
      <p>お困りの状況について無料で調べられます。</p>

      <div class="buttoncenter">
      <a href="/lostwallet" class="buttonRound">財布を無くした</a>
     </div>

      <div class="buttoncenter">
      <a href="#" class="buttonRound">忘れ物をした</a>
     </div>
     
     <div class="buttoncenter">
      <a href="#" class="buttonRound">道がわからない</a>
     </div>

     <div class="buttoncenter">
      <a href="#" class="buttonRound">ここに何か入ります</a>
     </div>

     </div>


      </div>
      <Footer />
      <div>©  Site {new Date().getFullYear()}</div>
    </div>
  );
};

export default BlogPage;