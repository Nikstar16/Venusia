import React, {useState} from 'react';
import './App.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { GoArrowRight } from 'react-icons/go';

const App = () => {
  const [fName, setfName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [validationErros, setValidationErrors] = useState([]);
  const [validationErrosPhone, setValidationErrorsPhone] = useState([]);
  const [validationErrorsEmpty, serValidationErrorEmpty] = useState([]);

  const services = ['Company Formation', 'VAT returns and submission to HMRC', 'Bookkeeping', 'Payroll services', 'Annual return to Company House', 'Annual statutory accounts and submissions to HMRC',
'Divident administrations', 'Self-assessment','Company secreterial services', 'We represent you in all tax matters']
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  const validateEmail = (input) => {

    setemail(input);
    if (email == ''){

      validationErrorsEmpty.push('empty');

     }else{
       validationErrorsEmpty.shift('empty');
     }
    
    if (emailRegex.test(email)){
      
      validationErros.splice(0);
      
     }else{
      validationErros.push('error');
   }
  }
  const validatePhone = (input) => {

    setphoneNumber(input);
    if (phoneRegex.test(phoneNumber)){;

      validationErrosPhone.splice(0);
      
     }else{

      validationErrosPhone.push('phoneError');
    
    }


  }
  return (
    <div className="lg:min-h-screen main-background-color">
        <div className="px-2 lg:px-24 flex flex-col justify-center">

          <div className="lg:hidden flex flex-row items-center mb-8 px-3  border-b-2 border-solid border-red-800">
            <img src="./logo.png" className='mr-4' alt="main logo" height="60px" width="60px"/>
            <div className="">
              <h1 className="text-xl font-bold text-gray-700" >ACTARUS SERVICES</h1>
              <h3 className="text-gray-700 text-xs font-bold">The Solutions To Your Projects</h3>
            </div>
          </div>

          <div className="lg:hidden flex flex-col justify-center text-center">
              <div className="flex flex-col border-solid border-blue-600 mb-6">
                <h3 className="text-indigo-700 text-sm font-bold">Gerald Gurriet</h3>
                <h4 className="text-gray-700 font-bold text-xs">Association of Chartered Certified Accountants</h4>
                <img className="self-center mt-8 "src="./acca.jpg" alt="acca logo" height="40px" width="110px"/> 
              </div>
              <div className="self-start flex flex-row"> <AiOutlinePhone color='darkred' size='25px' className='mx-3 lg:hidden' /> 
                <span className="text-blue-700 font-bold unselectable">07810 018 274</span>
              </div>
          </div>


              {/* mobile header ^ */}


          <div className="hidden lg:block lg:relative lg:border-0 lg:w-full lg:mb-24 lg:mt-8">
            <h1 className="lg:text-3xl lg:font-bold lg:font-serif lg:text-gray-700 lg:text-center lg:w-full" >ACTARUS SERVICES</h1>
            
            <div className="lg:absolute lg:top-0 lg:w-full lg:flex lg:flex-row lg:items-end border-b-8 border-gray-600 pb-4">
                <div className="lg:flex lg:flex-col lg:w-1/3">
                  <span className="lg:text-xl lg:font-bold text-primary-blue font-serif">Gerald Gurriet</span>
                  <h4 className="lg:text-sm lg:text-gray-700 lg:font-bold">Association of Chartered Certified Accountants</h4>
                </div>
                <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-1/3">
                  <img src="./logo.png" className='' alt="main logo" height="200px" width="150px"/>
                  <h3 className="lg:text-gray-700 lg:text-sm lg:font-bold">The Solutions To Your Projects</h3>
                </div>
                <div className="lg:w-1/3 lg:flex lg:flex-row">
                  <div className="lg:flex lg:flex-row lg:mr-8 ml-16">  
                      <span className="lg:text-sm lg:text-gray-700 lg:font-bold lg:mr-1 lg:">Tel:</span> <span className="lg:text-sm lg:font-bold text-primary-blue unselectable">07810 018 274</span>
                  </div>
                </div>
              </div>
          </div>




            {/* large screen header ^ */}




          <div className="lg:flex lg:flex-row lg:mt-16">
            <div className="lg:w-2/4">
              <div className="lg:mt-20 ">
                <p className="mt-8 text-gray-700 font-extrabold text-xs lg:text-sm">We provide the following services for sole traders and small companies at a competitive price.</p>
                <ul className="mt-8">
                  { services.map(element => {
                    return(
                      <div key={element} className='flex items-center mb-2'>
                        <img src="./arrow.png" alt="arrow-pointer" className='mr-3' width="32px" height="25px"/>
                        <li className="w-4/5 text-sm lg:text-base text-gray-700 font-bold">{element}</li>
                      </div>
                    )
                    }
                  )}
                </ul>
              </div>
              <div className="hidden lg:flex lg:flex-col lg:my-16 lg:mt">
                <img className="self-start my-8 "src="./acca.jpg" alt="acca logo" height="100px" width="150px"/> 
                <h2 className="text-primary-blue lg:font-bold lg:font-sm">Actarus Services<span className="lg:ml-2 lg:text-gray-700 lg:font-bold lg:font-sm">Ltd</span> </h2>
                <h3 className="lg:text-gray-700 lg:text-sm">316 Wimbledon Central</h3>
                <h3 className="lg:text-gray-700 lg:text-sm">21-33 Worple Road</h3>
                <h3 className="lg:text-gray-700 lg:text-sm">SW19 4BJ</h3>
              </div>
            </div>


                  {/* adress ^ */}



            <div className="lg:w-2/4">
              <div className="flex flex-col lg:mt-4-8">
                <h3 className="text-gray-700 font-bold w-full text-center text-base lg:pl-5 lg:mb-4"> Contact us to discuss your requirements</h3>
                <form className="flex flex-col" action="https://api.staticforms.xyz/submit" method="post">
                  <input type="hidden" name="accessKey" value="1adfcbe5-ac9d-4692-8761-aa518a8e8569"></input>
                  <div className="my-4 flex flex-col lg:flex-row">
                    <label className="lg:mx-2 lg:w-3/12 text-gray-700 w-full" htmlFor='fname'>Name*</label>
                    <input onChange={(e) => setfName(e.target.value)} value={fName} className="main-background-color outline-none hover:cursor-text focus:bg-white border-2 border-solid border-black lg:w-9/12 w-full h-6" type='text'></input>
                  </div>

                  <div className="mt-4 mb-2 flex flex-col lg:flex-row ">
                    <label className="lg:mx-2 lg:w-3/12 text-gray-700 w-full" htmlFor='phone-number'>Phone Number*</label>
                    <input onChange={(e) => validatePhone(e.target.value)} onBlur={(e) => validatePhone(e.target.value)} value={phoneNumber} placeholder ="+44 (0)7111 11111"className="main-background-color outline-none hover:cursor-text focus:bg-white border-2 border-solid border-black lg:w-9/12 w-full h-6" type='text'></input>
                  </div>
                  <div className="sm:flex self-end">
                    <span className="text-red-600 lg:inline lg:mb-4 lg:h-none">{validationErrosPhone.includes('phoneError') ? 'Phone number is invalid.' : ''}</span>
                  </div>

                  <div className="mt-4 flex flex-col lg:flex-row ">
                    <label className="lg:mx-2 lg:w-3/12 text-gray-700 w-full" htmlFor='email'>Email*</label>
                    <input onChange={(e) => validateEmail(e.target.value)} onBlur={(e) => validateEmail(e.target.value)} value= {email} className="main-background-color outline-none hover:cursor-text focus:bg-white border-2 border-solid border-black lg:w-9/12 w-full h-6" type='email'></input>
                  </div>
                  <div className="sm:flex self-end mt-2">
                    <span className="text-red-600 lg:text-sm lg:font-boldlg:inline lg:mb-4 lg:h-none">{validationErros.includes('error') ? 'Please enter a valid email address.' : ''}</span>
                  </div>
                 
                  <input type="hidden" name="redirectTo" value="http://localhost:3000"></input>
                  <input type="text" name="honeypot" className="hidden"></input>
                  <div className="my-4 flex flex-col lg:flex-row">
                    <label className="lg:w-3/12 mr-3 text-gray-700 w-full lg:pl-7" htmlFor='message'>Messsage*</label>
                    <textarea onChange={(e) => setmessage(e.target.value)} value ={message} className="main-background-color outline-none hover:cursor-text focus:bg-white border-2 border-solid border-black lg:w-9/12 w-full h-32 lg:h-48 lg:ml-3.3" wrap="hard" ></textarea>
                  </div>

                  <h3 className="text-gray-700 text-center ">Boxes marked with * are mandatory</h3>

                  <button type="submit" value="Submit" className="transition duration-500 ease-in-out main-background-color hover:text-white hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110 hover:border-transparent mt-8 self-center lg:self-end lg:w-1/6 w-2/6 border-2 border-2 border-black text-primary-blue font-bold">SEND</button>
                </form>
              </div>

                                {/* form ^ */}



              <div className="lg:hidden my-8">
                <h2 className="text-primary-blue font-bold font-xs">Actarus Services<span className="ml-2 text-gray-700 font-bold font-xs">Ltd</span> </h2>
                <h3 className="text-gray-700">316 Wimbledon Central</h3>
                <h3 className="text-gray-700">21-33 Worple Road</h3>
                <h3 className="text-gray-700">SW19 4BJ</h3>
              </div>
            </div>
          </div>
      </div>
    </div>
  
  );
  }

export default App;

