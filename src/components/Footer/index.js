import React from 'react';
import useTranslations from '../useTranslations';
import Logo from '../Logo';
import Form from '../Form'

const Footer = () => {
  const {
      company,
      street,
      address,
      phone,
      formTitle,
      name,
      email,
      message,
      send,
  } = useTranslations()

  return (
      <footer
          className="w-full mx-auto flex pt-12 md:pt-0 md:items-center border-t border-gray-400"
          role="main"
      >
          <div className="container mx-auto my-8">
              <div className="sm:flex">
                  <div className="w-full lg:w-1/2">
                      <ul className="list-reset">
                          <li>{company}</li>
                          <li>{street}</li>
                          <li>{address}</li>
                          <li>
                              <a
                                  className="hover:text-blue-900 text-grey-darker"
                                  href="mailto:info@hansaassets.eu"
                              >
                                  info@hansaassets.eu
                              </a>
                          </li>
                          <li>{phone}</li>
                      </ul>
                      <p>
                          <a
                              href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
                              target="_blank"
                          >
                            <Logo />
                          </a>
                      </p>
                  </div>
                  <div className="w-full lg:w-1/2 px-8 pb-8 ">
                      <h1 className="pb-8">{formTitle}</h1>
                      <Form
                          name={name}
                          email={email}
                          message={message}
                          send={send}
                      ></Form>
                  </div>
              </div>
          </div>
      </footer>
  )
};

export default Footer;
