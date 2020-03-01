import React from 'react';

const Hero = props => {
                          const { text } = props

                          return (
                              <section
                                  className="hero"
                                  style={{
                                      maxWidth: '1600px',
                                      height: '32rem',
                                      backgroundImage:
                                          'url( "https://images.unsplash.com/photo-1529859593319-f90e81f2db3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80")',
                                      backgroundAttachment: `fixed`,
                                  }}
                              >
                                  <div className="container mx-auto">
                                      <div class="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
                                          <h1 className="text-black text-3xl my-4">
                                              {text}
                                          </h1>
                                      </div>
                                  </div>
                              </section>
                          )
                      }

export default Hero;
