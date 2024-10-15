import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [mode,setmode] = useState('dark')

  return (
    <MDBNavbar expand='lg' light style={{backgroundColor:'#454545' ,color:'white',padding:'10px'}}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' style={{ color: 'white' }}><i class="fa-solid fa-house"> Home</i></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded={openNav}
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'  style={{ color: 'white' }}>
              <i class="fa-solid fa-address-book"> About</i>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='http://localhost:5173/projects' style={{ color: 'white' }}><i class="fa-solid fa-laptop"> Projects</i></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{ color: 'white' }}><i class="fa-solid fa-phone-volume"> Contact</i></MDBNavbarLink>
            </MDBNavbarItem>
            

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
