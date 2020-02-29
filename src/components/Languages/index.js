import React from 'react';
import { Link } from 'gatsby'

const Languages = () => {
  return (
    <div>
      <div>
        <Link to="/" hrefLang="en">
          en-US
        </Link>
      </div>
      <div>
        <Link to="/pt" hrefLang="pt">
          pt-BR
        </Link>
      </div>
    </div>
  );
};

export default Languages;
