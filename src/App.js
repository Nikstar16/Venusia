import React, { useState } from 'react';
import './App.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { GoArrowRight } from 'react-icons/go';

const App = () => {


return (
  <div className="lg:min-h-screen bg-main-100 ">

    <div className="hidden lg:flex fixed top-0 left-0 flex-row justify-between pr-32 pl-32 p-2 z-1 lg:border-0 lg:w-full" style={{
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "saturate(180%) blur(20px)",
      }}>

        {/* <div className='flex flex-col items-center justify-center'>
          <h1 className="lg:text-3xl lg:font-bold lg:font-serif lg:text-brown-500 lg:text-left mb-0 tracking-widest">VENUSIA<span className='text-brown-300 ml-4'>LTD</span></h1>
          <h4 className='text-brown-300 '>Accounting & Bookkeeping</h4>
        </div> */}


        <div className='w-full'>
          <ul className='flex flex-row mt-6 justify-center'>
            <li className="lg:text-xl lg:font-bold lg:font-serif lg:text-main-200 lg:text-left mx-8" style={{textShadow: "0.5px 0.5px black"}}><a href='#'>Home</a></li>
            {/* <li className="lg:text-xl lg:font-bold lg:font-serif lg:text-brown-500 lg:text-left mx-8" style={{textShadow: "0.5px 0.5px black", width: "max-content"}}><a href='#weOffer'>What we offer</a></li> */}
            <li className="lg:text-xl lg:font-bold lg:font-serif lg:text-main-200 lg:text-left mx-8" style={{textShadow: "0.5px 0.5px black"}}><a href='#reviews'>Clients' Reviews</a></li>
            <li className="lg:text-xl lg:font-bold lg:font-serif lg:text-main-200 lg:text-left mx-8" style={{textShadow: "0.5px 0.5px black"}}><a href='#contact'>Contact</a></li>

          </ul>
        </div>
        {/* <div className='flex flex-row align-center'>
          <span className="lg:text-sm lg:text-gray-600 lg:font-bold lg:mr-1 lg xl:text-sm xl:text-brown-400 xl:font-bold xl:mr-1 xl:">Tel:</span> <span className="lg:text-sm lg:font-bold text-cream-100 unselectable xl:text-sm xl:font-bold text-cream-100 unselectable ">07810 018 274</span>
        </div> */}
    </div>
    <div className='lg:relative bg-main-100 lg:mt-16'>
      <img className='lg:h-64 xl:h-64 m-auto ' src='/logo-nobackground-500.png'></img>
    </div>
    {/* <div className="relative h-60vh">
    
      <div className='lg: 2-full h-60vh text-center py-48 bg-hero-pattern bg-no-repeat bg-cover'>
  
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex lg:text-center lg:justify-center lg:items-center flex-col" style={{background: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))"}}>
        <h1 className='text-brown-300 font-roboto lg:text-4xl xl:text-5xl' style={{textShadow: "1px 1px black"}}>Our affordable fees reflect our contributions to your projects.</h1>

      </div>

    </div>   */}

    <h1 className='text-brown-200 text-center xl:w-4/5 xl:ml-32  font-roboto lg:text-3xl xl:text-3xl' style={{textShadow: "1px 1px black"}}>We are an accounting practice dedicated to social enterprises. Whether you have a Community Interest Company or a Charity, we endeavour to be by your side and support your by taking over the administration of your new venture so that you can dedicate your time to the running and development of your organization.</h1>

                  {/* Services */}

                  {/* cic */}

  

      <div className='' id='weOffer'>
          <div>
            <div className='relative'>
                <div style={{
                    position: "absolute",
                    overflow: 'hidden',
                    width: '100%',
                }}>
                    {/* <div className='h-20 border-b text-center my-4'>
                      <span className='text-1xl lg:text-3xl mb-8 lg:w-auto font-mono'>What we offer</span>
                    </div> */}
                    <div className='mx-site-w bg-main-100 lg:mt-10 px-4 lg:px-0 text-center' >
                        <h1 className='pt-8 text-2xl text-main-200 text-3xl'>COMMUNITY INTEREST COMPANY</h1>
                        <div className='mb-8 lg:mb-0 lg:mb-24 lg:w-full lg:pl-5 lg:my-20' style={{}} >
                            <div className='lg:w-full lg:flex flex-col'>
                              <div className='text-left relative'>
                                  <p className='font-roboto lg:text-lg '>
                                        A CIC is a special type of limited company which exists to benefit the community rather than private shareholders and is regulated by:
                                        <div className='lg:ml-14 xl:ml-44 lg:left-14'>
                                          <ul className='list-disc p-4 text-left'>
                                            <li>Companies House</li>
                                            <li>HMRC</li>
                                            <li>The Office of the Regulator of Community Interest Companies</li>
                                          </ul>
                                        </div>
                                      Although a CIC is a social enterprise, the reporting and filing follow the same principal as a Limited company. A members’ report also needs to be provided.
                                      As such we can help your Community Interest Company by:                                                                              
                                  </p> 
                              </div>     
                                <div className='lg:w-full py-3 lg:text-lg lg:flex lg:flex-row lg:h-full lg:items-left text-justify font-roboto xl:w-6/7 justify-center'>
                                    <div className='p-8 mx-4 text-left xl:mt-14 lg:w-2/4 xl:w-1/2'>
                                      <ul className='ml-4 list-disc'> 
                                        <li>Filing the Confirmation Statement with Companies House on your behalf</li>
                                        <li>Preparing the payroll</li>
                                        <li>Filing the accounts with HMRC and Companies House</li>
                                        <li>We pre-populate form CIC34 for ease of use</li>
                                        <li>We also represent your company with the authorities</li>
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



                          {/* charity */}

                      <div className='mx-site-w mb-10 lg:mb-20 mt-5 lg:mt-10 px-4 lg:px-0 text-center' >
                        <h1 className='pt-8 font-mono text-main-200 text-3xl'>CHARITY</h1>
                          <div className='mb-8 lg:mb-0 lg:flex lg:pl-10 justify-center lg:mb-24 lg:w-full lg:pl-5 lg:my-20' style={{}} >
                              <div className='lg:w-full lg:flex lg:flex-col'>
                                <div className=''>
                                    <p className='text-left lg:text-lg font-roboto my-8'>
                                      All charities, whether registered with the commission or not must prepare accounts and make them available on request.</p> 

                                      <p className='text-left lg:text-lg font-roboto my-8'>Registered charities must prepare a trustees’ annual report and make it available on request.</p> 
                                      <p className='text-left lg:text-lg font-roboto my-8'>The duty to file accounts and the trustees’ annual report with the commission applies to all CIOs irrespective of income and to all other registered charities whose gross yearly income exceeds £25,000. 
                                        The trustees’ annual report and accounts should be filed online.</p> 
                                      <p className='text-left lg:text-lg font-roboto my-8'>The duty to complete and file the annual return with the commission applies to all CIOs, and to all other registered charities whose gross yearly income exceeds £10,000. 
                                        Charities whose gross income is below £10,000 have an obligation to keep their registered details up to date – they can use the annual return to do this.</p> 
                                      <p className='text-left lg:text-lg font-roboto my-8'>Each registered charity receives an annual return form from the commission shortly after its financial year end. In all cases the annual return should be completed online.</p> 
                                      <p className='text-left lg:text-lg font-roboto my-8'>The annual return form enables the commission to ensure that the details of every charity on the register of charities are as complete and accurate as possible. 
                                        The annual return gives the commission basic financial details, and details of contacts, trustees, activities and of the charity’s classification.</p>
                                      <p className='text-left lg:text-lg font-roboto my-8'>We believe that Trustees, employees and volunteers should spend their time towards the cause of the charity and let us deal with the administration, such as:</p>
                                  </div>
                                  <div className='px-5 py-3 lg:w-full lg:text-lg lg:flex lg:flex-row lg:h-full lg:items-left text-justify font-roboto w-full justify-center'>
                                    <div className='lg:w-1/3 xl:w-2/3'>
                                      <img
                                          loading="lazy"
                                          className="m-auto lg:h-48 xl:h-56 mt-10"
                                          src={'/charity.jpeg'}
                                      />
                                    </div>
                                    <div className='p-8 mx-4 text-left lg:w-3/4 xl:w-1/2' >
                                      <ul className='ml-4 list-disc'> 
                                        <li>File the accounts with the Charity Commission on your behalf</li>
                                        <li>Prepare the payroll</li>
                                        <li>Prepare the annual accounts (SORP)</li>
                                        <li>Help the charity to claim gift aids from HMRC</li>
                                        <li>Liaise with your Independent Examiner</li>
                                        <li>Represent your charity with the authorities</li>
                                        <li>Keep track of all the deadlines, so that you don't have to</li>
                                        <li>We are flexible with any extra work you require from us</li>
                                      </ul>  
                                    </div>       
                                  </div>
                              </div>
                          </div> 
                      </div>


                                    {/* Independent Examiner */}



                      <div className='mx-site-w mb-10 lg:mb-20 mt-5 lg:mt-10 px-4 lg:px-0 text-center'>
                        <h1 className='pt-8 text-2xl text-main-200 text-3xl'>INDEPENDENT EXAMINATION</h1>
                          <div className='mb-8 lg:mb-0 lg:w-full lg:pl-5 lg:my-20' style={{}} >
                              <div className='lg:w-full lg:flex flex-col justify-center'>
                              <div className=''>
                                    <p className='text-left lg:text-lg font-roboto my-8'>
                                    There are statutory thresholds which determine the type of external scrutiny which is needed for a charity’s accounts.</p> 

                                      <p className='text-left lg:text-lg font-roboto my-8'>Where a charity’s annual income is over £25,000, the trustees must also arrange for an independent person or accountancy firm holding a practising certificate to carry out either an audit or an independent examination of their charity’s accounts. The purpose of this is to give the charity’s trustees, supporters, beneficiaries and the wider public, some independent assurance that the charity’s money has been properly accounted for and accounting records kept.</p> 
                                      <p className='text-left lg:text-lg font-roboto my-8'>Independent examination is a ‘light touch’ scrutiny involving the examiner checking for specific matters only.</p>                                                                   
                                      <p className='text-left lg:text-lg font-roboto my-8'>The trustees will usually be able to choose an independent examination instead of an audit if your charity’s gross income is:</p> 
                                      <p className='text-left lg:text-lg font-roboto my-8'>
                                      <div className='lg:ml-14 lg:left-14'>
                                          <ul className='list-disc p-4 text-left xl:ml-36 lg:ml-5'>
                                            <li>more than £25,000, but not more than £1 million, provided that</li>
                                            <li>if its gross income is more than £250,000, its gross assets (fixed assets plus current assets) are £3.26 million or less</li>
                                          </ul>
                                      </div>
                                      At Venusia Ltd, we provide an independent examination of the Charity’s accounts. In particular:
                                      </p>
                                  </div>
                                  <div className='px-5 py-3 lg:w-full xl:w-6/7 lg:text-lg lg:flex lg:flex-row lg:h-full lg:items-left text-justify font-roboto w-full justify-center'>
                                      <div className='p-8 mx-4 text-left lg:w-3/4 xl:w-1/2' >
                                        <ul className='ml-4 xl:mt-14 list-disc'> 
                                          <li>We Liaise with the Charity accountant to get the information required for the examination</li>
                                          <li>All the accounts in the balance sheets are reviewed.</li>
                                          <li>The revenue is checked against the relevant grants applications and paperwork</li>
                                          <li>We look at some expenses based on invoices and receipts</li>
                                          <li>The materiality of the transactions are appreciated</li>
                                          <p className='my-8'>The Independent Examination is sanctioned with a report submitted to the Trustees to be included in the Trustees Annual Report</p>
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
                          <div id='reviews'></div>
                      </div>
                      {/* <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div> */}
                      <h1 className='pt-8 font-mono text-main-200 text-3xl' >CLIENTS REVIEWS</h1>

                      <div className='grid grid-rows-2 grid-flow-col gap-4 my-24 mx-10 content-start'>
                        <div className='border h-72 flex flex-col justify-evenly items-center'>
                          <h2 className='text-main-300 font-bold'>GitanjaliP</h2>
                          {/* <img className='h-8' src='/reviews.png'></img>                          */}
                          <p className='text-main-200'>Couldn't ask for a better accountant
                            Gerald is a fantastic accountant. Always very helpful, quick to reply, 
                            and goes out of his way to make sure that you understand everything. 
                            I couldn't recommend him more!</p>
                        </div>
                        <div className='border flex flex-col justify-evenly items-center'>
                          <h2 className='text-main-300 font-bold'>TomW-779</h2>
                          {/* <img className='h-8' src='/reviews.png'></img>                          */}
                          <p className='text-main-200'>Helpful, trustworthy, diligent
                            I've been using Gerald to do my company accounts for the past 2 years. 
                            He is generous with his time and has managed our annual accounts, 
                            VAT returns and payroll excellently and promptly. He's always responsive if ever there are issues, 
                            and goes the extra mile to make sure everything's squared away.</p>
                        </div>
                        <div className='border flex flex-col justify-evenly items-center'>
                          <h2 className='text-main-300 font-bold'>AbbieJ-34</h2>
                          {/* <img className='h-8' src='/reviews.png'></img>                          */}
                          <p className='text-main-200'>HExcellent, friendly, reliable accounting service
                          We have been extremely happy with our decision to use Gerald as our business accountant. He has endless patience, 
                          takes a lot of time to explain every detail of the process and is reliable at delivering our accounts on time and in full. 
                          He regularly goes over and above the call of duty. We would definitely recommend him.</p>
                        </div>
                        <div className='border flex flex-col justify-evenly items-center'>
                          <h2 className='text-main-300 font-bold'>MetroM-1</h2>
                          {/* <img className='h-8' src='/reviews.png'></img>                          */}
                          <p className='text-main-200'>Glad I switched to this company!
                          I had a referral from a friend and must say these guys went the extra mile and then some! Ever found it impossible to get through to your 
                          accountant at crunch time with the needed support to submit? I did and Gerald supported me and helped deliver what my accountant would not. 
                          Highly recommended 5 STARS xxxxx</p>
                        </div>
                      </div>
                      {/* <div className='border-b pt-4 bg-white h-16' id='team'>
                          <span className='text-1xl lg:text-3xl lg:w-auto font-mono'>Team</span>                       
                      </div>    
                        <div className='h-8 bg-white'>
                        </div>           */}
                      
{/* 
                      <div className='h-14 bg-white pt-8 border-b'>
                          <span className='text-1xl lg:text-3xl mb-8 lg:w-auto font-mono'>Contact</span>
                      </div>
                       <div className='h-8 bg-white'>  
                       </div>   */}
                      <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

                      <div className='pt-12 h-72 items-center bg-main-100 flex flex-row justify-evenly' id='contact'>  
                        <div className=''>
                            <div className='flex inline-flex justify-center'>
                              <div>
                                <img className='h-40 mt-24' src='/gerald.png'></img>  
                                <h2>Gerald Gurriet</h2>
                              </div>  
                                <img className='lg:h-64 lg:mt-24 m-auto' src='/aia.png'></img>
                            </div>
                            {/* <div>
                                <h3>Alona Grinevecka</h3>
                            </div> */}
                          {/* <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div> */}
                        </div>
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

