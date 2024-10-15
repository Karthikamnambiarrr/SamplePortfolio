import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Foot() {
  return (
    <div><MDBFooter className='text-center text-white' style={{ backgroundColor: '#454545', position:'sticky', bottom:'0px' }}>
    <MDBContainer className='pt-4'>
      <section className='mb-4'>
       <MDBBtn style={{fontSize:'25px'}}
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-white m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-google' style={{color:'red'}}/>
        </MDBBtn>

        <MDBBtn style={{color:'red',fontSize:'25px'}}
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-white m-1'
          href='https://www.instagram.com/accounts/login/'
          role='button'
        >
          <MDBIcon fab className='fa-instagram' style={{color:'red'}} />
        </MDBBtn>

        <MDBBtn style={{color:'red',fontSize:'25px'}}
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-white m-1'
          href='https://www.linkedin.com/feed/'
          role='button'
        >
          <MDBIcon fab className='fa-linkedin' style={{color:'red'}} />
        </MDBBtn>

        <MDBBtn style={{color:'red',fontSize:'25px'}}
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-white m-1'
          href='https://github.com/'
          role='button'
        >
          <MDBIcon fab className='fa-github' style={{color:'red'}} />
        </MDBBtn>
      </section>
    </MDBContainer>

   
  </MDBFooter></div>
  )
}

export default Foot