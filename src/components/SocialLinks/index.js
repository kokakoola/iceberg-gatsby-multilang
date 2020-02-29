import React from 'react';

import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { Github } from 'styled-icons/boxicons-logos/Github';

const SocialLinks = () => {
  return (
    <div>
      <div>
        <a
          href="https://github.com/diogorodrigues/iceberg-gatsby-multilang"
          title="Github"
          target="_blank"
        >
          <Github />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/_diogorodrigues"
          title="Twitter"
          target="_blank"
        >
          <Twitter />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
