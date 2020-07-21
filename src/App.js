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

  const services = ['Company Formation', 'VAT returns and submission to HMRC', 'Bookkeeping', 'Payroll services', 'Annual returns to Companies House', 'Annual statutory accounts and submission to HMRC',
'Dividends administration', 'Self-assessment','Company secretarial services', 'We represent you in all tax matters','Excel expert to macro level']
  const oneMoreThing = ["We don't increase our fees...ever", 'No hidden cost', 'We specialize in start-ups and small businesses', 'No trainees in charge of your accounts...only a chartered accountant', 'Same accountant dealing with your company', 'Emails answered within 15 minutes',
  "We don't have any offices or fancy website, so we keep our fees low", "We are not VAT registered, so you don't have to pay 20% extra", "Experience with Xero and Quickbooks"]
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
              <h1 className="text-xl font-bold text-gray-600" >ACTARUS SERVICES LTD</h1>
              <h3 className="text-gray-600 text-xs font-bold">The Solutions To Your Projects</h3>
            </div>
          </div>

          <div className="lg:hidden flex flex-col justify-center text-center">
              <div className="flex flex-col border-solid border-blue-600 mb-6">
                <h3 className="text-indigo-700 text-sm font-bold">Gerald Gurriet</h3>
                <h4 className="text-gray-600 font-bold text-xs">Association of Chartered Certified Accountants</h4>
                <img className="self-center mt-8 "src="./acca.jpg" alt="acca logo" height="40px" width="110px"/> 
              </div>
              <div className="self-start flex flex-row mb-2"> <AiOutlinePhone color='darkred' size='25px' className='mx-3 lg:hidden' /> 
                <span className="text-blue-700 font-bold unselectable">07810 018 274</span>
              </div>
              <div className="self-start flex flex-row"> <AiOutlineMail color='darkred' size='25px' className='mx-3 lg:hidden' /> 
                <span className="text-blue-700 font-bold unselectable">gerald.gurriet@hotmail.com</span>
              </div>
          </div>


              {/* mobile header ^ */}


          <div className="hidden lg:block lg:relative lg:border-0 lg:w-full lg:mb-24 lg:mt-8">
            <h1 className="lg:text-3xl lg:font-bold lg:font-serif lg:text-gray-600 lg:text-center lg:w-full" >ACTARUS SERVICES LTD</h1>
            
            <div className="lg:absolute lg:top-0 lg:w-full lg:flex lg:flex-row lg:items-end border-b-8 border-gray-600 pb-4">
                <div className="lg:flex lg:flex-col lg:w-1/3">
                  <span className="lg:text-xl lg:font-bold text-primary-blue font-serif">Gerald Gurriet</span>
                  <h4 className="lg:text-sm lg:text-gray-600 lg:font-bold">Association of Chartered Certified Accountants</h4>
                </div>
                <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-1/3">
                  <img src="./logo.png" className='' alt="main logo" height="200px" width="150px"/>
                  <h3 className="lg:text-gray-600 lg:text-sm lg:font-bold">The Solutions To Your Projects</h3>
                </div>
                <div className="lg:w-1/3 lg:flex lg:flex-row">
                  <div className="lg:flex lg:flex-row lg:mr-8">  
                    <span className="lg:text-sm lg:text-gray-600 lg:font-bold lg:mr-1 lg:">Tel:</span> <span className="lg:text-sm lg:font-bold text-primary-blue unselectable">07810 018 274</span>
                    <span className="lg:text-sm lg:text-gray-600 lg:font-bold lg:mr-1 lg:ml-8">Email:</span> <span className="lg:text-sm lg:font-bold text-primary-blue unselectable">gerald.gurriet@hotmail.com</span>

                  </div>
                </div>
              </div>
          </div>




            {/* large screen header ^ */}




          <div className="lg:mt-16">
            <p className="mt-8 text-gray-600 font-extrabold text-xs lg:text-base lg:mt-8 mb-10">We provide the following services for sole traders and small companies at a competitive price.</p>
            <div className='lg:flex lg:flex-row'>
              <div className="lg:w-2/4">
                <div className="">
                  <ul className="">
                    { services.map(element => {
                      return(
                        <div key={element} className='flex items-center mb-2'>
                          <img src="./arrow.png" alt="arrow-pointer" className='mr-3' width="32px" height="25px"/>
                          <li className="w-4/5 text-sm lg:text-base text-gray-600">{element}</li>
                        </div>
                      )
                      }
                    )}
                  </ul>
                </div>
                <div className="hidden lg:flex lg:flex-col lg:my-8 lg:mt">
                  <img className="self-start my-8 "src="./acca.jpg" alt="acca logo" height="100px" width="150px"/> 
                  <h2 className="text-primary-blue lg:font-bold lg:font-sm">Actarus Services<span className="lg:ml-2 lg:text-gray-600 lg:font-bold lg:font-sm">Ltd</span> </h2>
                  <h3 className="lg:text-gray-600 lg:text-sm">316 Wimbledon Central</h3>
                  <h3 className="lg:text-gray-600 lg:text-sm">21-33 Worple Road</h3>
                  <h3 className="lg:text-gray-600 lg:text-sm">London</h3>
                  <h3 className="lg:text-gray-600 lg:text-sm">SW19 4BJ</h3>
                </div>
              </div>


              {/* adress ^ */}



              <div className="lg:w-2/4">
                <div className="flex flex-col">
                  <ul className="">
                  <li className="text-primary-blue font-bold w-full text-left text-base mb-8 lg:mb-0"> One more thing...</li>
                    { oneMoreThing.map(element => {
                      return(
                        <div key={element} className='flex items-center mb-2'>
                          <img src="./arrow.png" alt="arrow-pointer" className='mr-3' width="32px" height="25px"/>
                          <li className="w-4/5 text-sm lg:text-base text-gray-600">{element}</li>
                        </div>
                      )
                      }
                    )}
                  </ul>
                </div>
                {/* form ^ */}
                <div className="lg:hidden my-8">
                  <h2 className="text-primary-blue font-bold font-xs">Actarus Services<span className="ml-2 text-gray-600 font-bold font-xs">Ltd</span> </h2>
                  <h3 className="text-gray-600">316 Wimbledon Central</h3>
                  <h3 className="text-gray-600">21-33 Worple Road</h3>
                  <h3 className="text-gray-600">London</h3>
                  <h3 className="text-gray-600">SW19 4BJ</h3>
                </div>
              </div>
            </div>

          </div>
      </div>
    </div>
  
  );
  }

export default App;

