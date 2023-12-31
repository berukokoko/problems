import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">TOP</Link>
          </li>
          <li>
            <Link to="/about">〇〇とは</Link>
          </li>
          <li>
            <Link to="/qa">よくある質問</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;