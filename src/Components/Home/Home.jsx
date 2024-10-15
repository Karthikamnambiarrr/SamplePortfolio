import React,{useState} from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

function Home() {
  const [mode,setmode] = useState(true);
  const changeMode=()=>{
    setmode(!mode);

  }
  return (
    <div style={{ backgroundColor:mode?'black':'white', color: 'white', height: '550px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}>
        <div style={{ padding: '10px' }}>
          <img src="../me.jpg" alt="" style={{ height: '300px', width: '300px', borderRadius: '50%', border: '10px black double', marginTop: '30px' }} />
        </div>
        <div className="text-center" style={{ padding: '0px', color: 'white', height: '400px', width: '800px' }}>
          <h2 className='mt-4'>KARTHIKA M NAMBIAR</h2>
          <h1 style={{ color: 'red' }}>MERN STACK DEVELOPER</h1>
          <p style={{ textAlign: 'justify', margin: '10px 50px 20px 50px',color:mode?'white':'black' }}>Hello! I’m Karthika, a passionate web developer with a strong foundation in front-end technologies. I specialize in creating dynamic, user-friendly websites using HTML, CSS, and JavaScript. With a solid grasp of Bootstrap for responsive design and React for building interactive applications, I strive to deliver seamless experiences that engage users.
            I love turning ideas into reality through code and am always eager to learn and adapt to new challenges in the ever-evolving world of web development. When I’m not coding, you can find me exploring new technologies or working on personal projects to sharpen my skills.
            Let’s connect and bring your vision to life!</p>
          <button className='btn m-2' style={{ backgroundColor: 'red', color: 'white' }}><b>Contact Me</b></button>
          <button className='btn m-2' style={{ backgroundColor: 'red', color: 'white' }} onClick={()=>{
            window.location.href='http://localhost:5173/projects';
          }}><b>My Projects</b></button><br />
          <button className='btn m-2' style={{ backgroundColor: 'red', color: 'white' }} onClick={changeMode}><b>Change Mode</b></button>

          

        </div>
      </div>



    </div>
  )
}

export default Home