






import { useRef, useState } from 'react';
import RunChat from './Api/gemini';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog, faCompass, faHistory, faImage, faLightbulb , faPenNib, faPlus, faYinYang } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle , faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons/faMicrophone';
import Loading from './comp/loading';
import { TypeAnimation } from 'react-type-animation';





function App() {
  const [input,setinput] = useState("");
  const [result,setresult] = useState("");
  const [loading,setloading] = useState(false);
  const [show, setShow] = useState(false);
  const [show_tabs , setshow_tabs] = useState(true);
  const [copy_input, setcopy_input] = useState(input);
  const [state,setstate] = useState([]);
  const img_src = "https://clone-gemini.vercel.app/assets/user_icon-BYrw3k3X.png";
  //////////////////////////////////////////////////////////////////////////////////////////

  //array of input data 
  const data = [
    "Suggest beautiful places to see on an upcoming road trip" ,
    "Briefly summarize this concept: urban planning" ,
    "Brainstorm team bonding activities for our work retreat" ,
    "Brainstorm team bonding activities for our work retreat"
  ]
  //////////////////////////////////////////////////////////////////////////////////////////

  // handling user input
  const handle_input = (e)=> {
    setinput(e.target.value);
    //console.log(input);
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  // sending input parameter and receving response
  const chat_Ai = async()=>{
    
    try{
    setresult("");
    setloading(true);
    setshow_tabs(false);
    setcopy_input(input);
    state.push(input.slice(0,10) + "...");
    setinput("");
    const result = await RunChat(input);
    setresult(result);
    setloading(false);
    }
    catch(ex)
    {
      alert(ex);
    }
    //console.log(state);
    
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  // open settings
  const open_settings = ()=>{
    setShow(!show);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  // handle input tabs
  const handle_input_tabs =(e)=>{
    
  }

  ///////////////////////////////////////////////////////////////////////////////////////////
  
  return (
    <div className="App">

      {/* ///////////////////////////////////////////////////////////////////////// */}

      {/* ///////////////////////////////////////////////////////////////////////// */}

      {/* side bar of gemini */}
      <div className='side-bar' style={{width : show ? '14%' : '6%'}}>

      {/* setting icon */}
        <FontAwesomeIcon icon={faBars} className='side-bar-icon' onClick={open_settings} style={{marginTop:'50px',marginLeft:'35px',color:'white'}}/>

      {/* plus icon */}
        <div className='side-bar-icon-circle' onClick={()=>{setshow_tabs(true)}} style={{
          width : show ? '135px' : '50px',
          borderRadius : show ? '30px' : '50%'
          }}>
             <FontAwesomeIcon icon={faPlus}  className='side-bar-icon'/>
             
             <h6 className='side-bar-icon-circle-text' style={{display : show ? '' : 'none'}}>New chat</h6>
        </div>

       {/* div for history inputs  */}

        <div className="side-bar-div-recent h4" style={{visibility : show ? 'visible' : 'hidden' , color : 'white',fontWeight : '400'}}>
          Recent
        </div>
        <div className='side-bar-div-state' style={{visibility : show ? 'visible' : 'hidden' , color : 'white'}}>
              { 
              state ? state.map((ele)=>{
                  return <div className='side-bar-div-state-li'>
                    {ele}
                  </div>
                }) : ''
              }
        </div>

        {/* div for the remainig icons */}
        <div className='side-bar-next'>

        <div className='side-bar-icon-2'>
           <FontAwesomeIcon icon={faHistory}/>
           <h4 className='side-bar-icon-2-text' style={{visibility : show ? 'visible' : 'hidden'}}>activity</h4>
        </div>

        <div className='side-bar-icon-2'>
           <FontAwesomeIcon icon={faQuestionCircle}  style={{marginBottom: '40px'}}/>
           <h4 className='side-bar-icon-2-text' style={{visibility : show ? 'visible' : 'hidden'}}>help</h4>
        </div>
        </div>
      
      </div>

      <div className='div10'>
      
      <div className='div10-child'>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* tabs div */}
      <div className='h4 div10-child-result' style={{display : show_tabs ? '' : 'none'}}>
        <h1 className='div10-child-result-h' >
          Hello, Dev.
        </h1>
        <h2 className='div10-child-result-h'>
          How can we help you today
        </h2>
        <div className='div10-child-tabs' >
            <div className='div10-child-tabs-1' onClick={()=>{setinput(data[0])}}>
                <h2>
                Suggest beautiful places to see on an upcoming road trip
                </h2>
                <div className='div10-child-tabs-circle'>
                  <FontAwesomeIcon className='div10-child-tabs-icon' icon={faCompass}/>
                </div>
            </div>
            <div className='div10-child-tabs-1' onClick={()=>{setinput(data[1])}}>
                <h2>
                Briefly summarize this concept: urban planning
                </h2>
                <div className='div10-child-tabs-circle' style={{marginTop : '100px'}}>
                <FontAwesomeIcon className='div10-child-tabs-icon' icon={faPenNib}/>
                </div>
            </div>
            <div className='div10-child-tabs-1' onClick={()=>{setinput(data[2])}}>
                <h2>
                Brainstorm team bonding activities for our work retreat
                </h2>
                <div className='div10-child-tabs-circle'>
                <FontAwesomeIcon className='div10-child-tabs-icon' icon={faCompass}/>
                </div>
            </div>
            <div className='div10-child-tabs-1' onClick={()=>{setinput(data[3])}}>
                <h2>
                Brainstorm team bonding activities for our work retreat
                </h2>

                <div className='div10-child-tabs-circle'>
                <FontAwesomeIcon className='div10-child-tabs-icon' icon={faLightbulb} />
                </div>
            </div>
        </div>
        
        
         
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* response div */}
      <div className='div10-child-result-2 h5' style={{display : (loading || result) && !show_tabs ? 'block' : 'none'}}>
          <div className='div10-child-result-shape'>
              <div className='user-icon'>
                  <img className = "user-icon-div" src={img_src}/>
              </div>
              <div className='user-input h5'> 
                {
                   copy_input
                }
              </div>
          </div>
          <div className='div10-child-result-div'>
              <div className='rotating-icon'>
                  <FontAwesomeIcon className='rotating-icon-div' icon={faYinYang} />
              </div>
              <div className='div10-child-result-2-result'>
              {
             result ? <TypeAnimation 
             sequence={[
               result ,
               3000
             ]}
             wrapper="span"
             speed={80}
             style={{fontSize :'1.5em' , color : 'white'}}
             /> : <div style={{display : loading ? '' : 'none'}}>
                <Loading />
             </div>
              }
              </div>
          </div>
      </div>

      <div className='input-bar-div' >


      {/* input */}

      <input style={{color : 'white'}} value={input} onChange={(e)=>{handle_input(e)}} className='input-bar'  placeholder='Enter your prompt here' />

      
      {/* /////////////////////////////////////////////////////////////////////////////////// */}

      {/* div of icons inside input */}
      <div className='div10-child-icon-circle-main' style={{width : input ? '17%' : '12%' , transition : '0.5s'}}>
      
      <div className='div10-child-icon-circle'>
          <FontAwesomeIcon icon={faImage}/> 
      </div>
      <div className='div10-child-icon-circle'>
          <FontAwesomeIcon icon={faMicrophone}/> 
      </div>
      <div className='div10-child-icon-circle' onClick={chat_Ai} style={{display : input ? '' : 'none' }}>
          <FontAwesomeIcon icon={faPaperPlane} /> 
      </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      
      </div>
      </div>

      </div>

    </div>
  );
}

export default App;