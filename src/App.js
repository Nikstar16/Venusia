import React, { useState } from 'react';
import './App.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { GoArrowRight } from 'react-icons/go';

const App = () => {


return (
  <div className="lg:min-h-screen" id='home'>

    <div className="hidden bg-white lg:flex fixed top-0 left-0 flex-row justify-between pr-32 pl-32 p-2 z-1 lg:border-0 lg:w-full bg-orange-200" style={{
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "saturate(180%) blur(20px)",
        color: "white",
      }}>

        <div className='flex flex-col items-center justify-center'>
          <h1 className="lg:text-3xl lg:font-bold lg:font-serif lg:text-brown-500 lg:text-left mb-0 tracking-widest">VENUSIA<span className='text-brown-300 ml-4'>LTD</span></h1>
          <h4 className='text-brown-300 '>Accounting & Bookkeeping</h4>
        </div>

        <div className='w-full'>
          <ul className='flex flex-row mt-6 justify-center'>
            <li className="lg:text-xl lg:font-bold lg:font-serif lg:text-brown-500 lg:text-left mx-8" style={{textShadow: "0.5px 0.5px black"}}><a href='#home'>Home</a></li>
            <li className="lg:text-xl lg:font-bold lg:font-serif lg:text-brown-500 lg:text-left mx-8" style={{textShadow: "0.5px 0.5px black", width: "max-content"}}><a href='#weOffer'>What we offer</a></li>
            <li className="lg:text-xl lg:font-bold lg:font-serif lg:text-brown-500 lg:text-left mx-8" style={{textShadow: "0.5px 0.5px black"}}><a href='#team'>Team</a></li>
            <li className="lg:text-xl lg:font-bold lg:font-serif lg:text-brown-500 lg:text-left mx-8" style={{textShadow: "0.5px 0.5px black"}}><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        {/* <div className='flex flex-row align-center'>
          <span className="lg:text-sm lg:text-gray-600 lg:font-bold lg:mr-1 lg xl:text-sm xl:text-brown-400 xl:font-bold xl:mr-1 xl:">Tel:</span> <span className="lg:text-sm lg:font-bold text-cream-100 unselectable xl:text-sm xl:font-bold text-cream-100 unselectable ">07810 018 274</span>
        </div> */}
    </div>
    <div className='lg:relative bg-main-100 lg:mt-16'>
      <img className='h-60vh m-auto ' src='/logo-nobackground-500.png'></img>
    </div>
    <div className="relative h-60vh">
    
      <div className='lg: 2-full h-60vh text-center py-48 bg-hero-pattern bg-no-repeat bg-cover'>
  
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex lg:text-center lg:justify-center lg:items-center flex-col" style={{background: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))"}}>
        <h1 className='text-brown-300 font-roboto lg:text-4xl xl:text-5xl' style={{textShadow: "1px 1px black"}}>Our affordable fees reflect our contributions to your projects.</h1>

      </div>

    </div>  

      

                  {/* Services */}

                  {/* cic */}

  

      <div className='' id='weOffer'>
          <div>
            <div className='relative'>
                <div style={{
                    position: "absolute",
                    overflow: 'hidden',
                    background: 'white',
                    width: '100%',
                    marginTop: '2rem',
                }}>
                    <div className='h-20 border-b text-center my-4'>
                      <span className='text-1xl lg:text-3xl mb-8 lg:w-auto font-mono'>What we offer</span>
                    </div>
                    <div className='mx-site-w mt-5 bg-main-100 lg:mt-10 px-4 lg:px-0 text-center' >
                        <h1 className='pt-8 text-2xl'>C.I.C</h1>
                        <div className='mb-8 lg:mb-0 lg:mb-24 lg:w-full lg:pl-5 lg:my-20' style={{}} >
                            <div className='lg:w-full lg:flex'>
                                <div className='lg:w-full px-5 py-3 lg:text-lg lg:flex lg:flex-row lg:h-full lg:items-left text-justify font-roboto xl:w-6/7 justify-center divide-x'>
                                    {/* <p className='w-1/3'>
                                      A CIC is a special type of limited company which exists to benefit the community rather than private shareholders and is regulated by:
                                          <ul className='list-disc p-4'>
                                            <li>Companies House</li>
                                            <li>HMRC</li>
                                            <li>The Office of the Regulator of Community Interest Companies</li>
                                          </ul>
                                      Although a CIC is a social enterprise, the reporting and filing follow the same principal as a Limited company. A members’ report also needs to be provided.
                                      As such we can help your Community Interest Company by:                                                                              
                                    </p>  */}
                                    <div className='p-8 mx-4 text-left lg:w-3/4 xl:w-1/2' >
                                      <ul className='ml-4 list-disc'> 
                                        <li>We file the Confirmation Statement to Companies House on your behalf</li>
                                        <li>We prepare the payroll if needed</li>
                                        <li>We file the accounts with HMRC and Companies House</li>
                                        <li>We pre-populate form CIC34 for ease of use</li>
                                        <li>We represent your company with the authorities</li>
                                        <li>We keep track of all the deadlines, so that you don't have to</li>
                                        <li>We are flexible with any extra work you require from us</li>
                                      </ul>
                                  </div>       
                                  <div className='lg:w-1/2 lg:mt-10 xl:flex xl:w-1/3 xl:pl-10 justify-start'>
                                    <img
                                        loading="lazy"
                                        className="m-auto lg:px-4 lg:w-full  xl:pb-10"
                                        src={'/cic1.jpg'}
                                    />
                                  </div>
                              </div>
                            </div>

                        </div>


                        <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

                          {/* charity */}

                      <div className='mx-site-w mb-10 lg:mb-20 mt-5 lg:mt-10 px-4 lg:px-0 text-center' >
                        <h1 className='pt-8 text-2xl'>CHARITY</h1>
                          <div className='mb-8 lg:mb-0 lg:flex lg:pl-10 justify-center lg:mb-24 lg:w-full lg:pl-5 lg:my-20' style={{}} >
                              <div className='lg:w-full '>
                                  <div className='px-5 py-3 lg:w-full xl:w-6/7 lg:text-lg lg:flex lg:flex-row lg:h-full lg:items-left text-justify font-roboto w-full justify-center divide-x'>
                                      {/* <p className='w-1/3'>
                                        A CIC is a special type of limited company which exists to benefit the community rather than private shareholders and is regulated by:
                                            <ul className='list-disc p-4'>
                                              <li>Companies House</li>
                                              <li>HMRC</li>
                                              <li>The Office of the Regulator of Community Interest Companies</li>
                                            </ul>
                                        Although a CIC is a social enterprise, the reporting and filing follow the same principal as a Limited company. A members’ report also needs to be provided.
                                        As such we can help your Community Interest Company by:                                                                              
                                      </p>  */}
                                    <div className='lg:w-1/3 xl:w-1/3'>
                                      <img
                                          loading="lazy"
                                          className="m-auto lg:h-48 xl:h-56 mt-10"
                                          src={'/charity.jpeg'}
                                      />
                                    </div>
                                    <div className='p-8 mx-4 text-left lg:w-3/4 xl:w-1/2' >
                                      <ul className='ml-4 list-disc'> 
                                        <li>We file the accounts with the Charity Commission on your behalf</li>
                                        <li>We prepare the payroll if needed</li>
                                        <li>We prepare the annual accounts (SORP)</li>
                                        <li>We help the charity to claim gift aids from HMRC</li>
                                        <li>We liaise with your Independent Examiner</li>
                                        <li>We represent your charity with the authorities</li>
                                        <li>We keep track of all the deadlines, so that you don't have to</li>
                                        <li>We are flexible with any extra work you require from us</li>
                                      </ul>  
                                    </div>       
                                  </div>
                              </div>
                          </div> 
                      </div>
                        <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>


                                    {/* Independent Examiner */}



                      <div className='mx-site-w mb-10 lg:mb-20 mt-5 lg:mt-10 px-4 lg:px-0 text-center'>
                        <h1 className='pt-8 text-2xl'>IDNEPENDENT EXAMINATION</h1>
                          <div className='mb-8 lg:mb-0 lg:w-full lg:pl-5 lg:my-20' style={{}} >
                              <div className='lg:w-full lg:flex justify-center'>
                                  <div className='px-5 py-3 lg:w-full xl:w-6/7 lg:text-lg lg:flex lg:flex-row lg:h-full lg:items-left text-justify font-roboto w-full justify-center divide-x'>
                                      {/* <p className='w-1/3'>
                                        A CIC is a special type of limited company which exists to benefit the community rather than private shareholders and is regulated by:
                                            <ul className='list-disc p-4'>
                                              <li>Companies House</li>
                                              <li>HMRC</li>
                                              <li>The Office of the Regulator of Community Interest Companies</li>
                                            </ul>
                                        Although a CIC is a social enterprise, the reporting and filing follow the same principal as a Limited company. A members’ report also needs to be provided.
                                        As such we can help your Community Interest Company by:                                                                              
                                      </p>  */}

                                      <div className='p-8 mx-4 text-left lg:w-3/4 xl:w-1/2' >
                                        <ul className='ml-4 list-disc'> 
                                          <li>Liaising with the Charity accountant / bookkeeper to get the information required for the examination</li>
                                          <li>All the accounts in the balance sheets are reviewed, especially the opening and closing balances of the bank accounts</li>
                                          <li>The revenue is checked against the relevant grants applications and paperwork</li>
                                          <li>The expenses are reviewed based on invoices and receipts</li>
                                          <li>The materiality of the transactions are appreciated</li>
                                          <li>The Independent Examination is sanctioned with a report submitted to the Trustees to be included in the Trustees Annual Report</li>
                                        </ul>
                                      </div>      
                                      <div className='lg:w-1/3 xl:w-1/3'>
                                      <img
                                          loading="lazy"
                                          className="m-auto lg:h-48 xl:h-56 lg:px-4 lg:mb-8 mt-16"
                                          src={'/Audit.jpg'}
                                      />
                                    </div>
                                </div>
                            </div>

                          </div> 
                      </div>

                      <div className='border-b pt-4 bg-white h-16' id='team'>
                          <span className='text-1xl lg:text-3xl lg:w-auto font-mono'>Team</span>                       
                      </div>    
                        <div className='h-8 bg-white'>
                        </div>          
                      <div className='h-60vh'>
                          <div className='flex inline-flex justify-center'>
                            <div>
                              <img className=' mt-24' src='/gerald.png'></img>  
                              <h2>Gerald Gurriet</h2>
                            </div>  
                              <img className='lg:h-64 lg:mt-32 m-auto' src='/aia.png'></img>
                          </div>
                          {/* <div>
                              <h3>Alona Grinevecka</h3>
                          </div> */}
                        <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
                      </div>

                      <div className='h-14 bg-white pt-8 border-b'>
                          <span className='text-1xl lg:text-3xl mb-8 lg:w-auto font-mono'>Contact</span>
                      </div>
                       <div className='h-8 bg-white'>  
                       </div>  
                      <div className='pt-12  h-56 bg-main-100 flex flex-row justify-evenly' id='contact'>  
                        <div>
                            <h2 className="text-brown-200 lg:font-bold lg:font-sm">V E N U S I A<span className="lg:ml-2 lg:text-brown-300 lg:font-bold lg:font-sm">L T D</span> </h2>
                            <h3 className="lg:text-sm">316 Wimbledon Central</h3>
                            <h3 className="lg:text-sm">21-33 Worple Road</h3>
                            <h3 className="lg:text-sm">London</h3>
                            <h3 className="lg:text-sm">SW19 4BJ</h3>
                        </div>  
                      <div className=''>
                        <div>
                          <span className="lg:text-sm lg:text-brown-300 lg:font-bold lg:mr-1 lg xl:text-sm xl:text-brown-300 xl:font-bold xl:mr-1 xl:">Tel:</span> <span className="lg:text-sm lg:font-bold text-brown-200 unselectable xl:text-sm xl:font-bold text-brown-200 unselectable w-max">07810 018 274</span>
                        </div>
                        <div>
                         <span className="lg:text-sm lg:text-brown-300 lg:font-bold lg:mr-1 xl:text-sm xl:text-brown-300 xl:font-bold xl:mr-1 xl:ml-8">Email:</span> <span className="lg:text-sm lg:font-bold text-brown-200 unselectable xl:text-sm xl:font-bold text-brown-200 unselectable">accounts@venusia.co.uk</span>
                        </div>
                      </div>
                    </div>

                    </div>
                </div>        

            </div>
        </div>
  
    </div>
  </div>
  

);

}

export default App;

