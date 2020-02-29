import React from 'react';
import useTranslations from '../useTranslations';
import SocialLinks from '../SocialLinks';
import Form from '../Form'

const Footer = () => {
  const {
      aboutProject,
      seeMorePWA,
      maintainedBy,
      contributeMessage,
      name,
      email,
      message,
      send,
  } = useTranslations()

  return (
      <footer
          className="w-full mx-auto bg-gray-200 flex pt-12 md:pt-0 md:items-center border-t border-gray-400"
          role="main"
      >
          <div className="container mx-auto">
              <div className="flex">
                  <div className="w-1/2">
                      <SocialLinks />
                      <p>
                          {aboutProject}{' '}
                          <a
                              href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
                              target="_blank"
                          >
                              {seeMorePWA}
                          </a>
                          .
                      </p>
                      <p>
                          {maintainedBy}{' '}
                          <a
                              href="https://twitter.com/_diogorodrigues"
                              target="_blank"
                          >
                              @_diogorodrigues
                          </a>
                          . {contributeMessage}{' '}
                          <a
                              href="https://github.com/diogorodrigues/iceberg-gatsby-multilang"
                              target="_blank"
                          >
                              Github
                          </a>
                          .
                      </p>
                  </div>
                  <div className="w-1/2">
                      <Form name={name} email={email}></Form>
                  </div>
              </div>
          </div>
      </footer>
  )
};

export default Footer;
