import React from "react";
import {Nav,Navbar,Container, Form, NavDropdown} from "react-bootstrap";
import {LinkContainer }from "react-router-bootstrap/lib/LinkContainer";
import {MdLocalOffer} from 'react-icons/md';
import {useDispatch,useSelector} from "react-redux";

import {logoutUser} from '../actions/userAction';



function Topbar() {

const dispatch=useDispatch();
   const cartState=useSelector((state)=> state.cartReducer);
   const userState=useSelector((state)=>state.loginUserReducer);

   const {currentUser}=userState;




    return (
        <>

        <Navbar  style={{backgroundColor:"purple"}}  expand="lg"> 


        <Container fluid>

            <h6 className="text-light">
            <MdLocalOffer className="text-warning"></MdLocalOffer> &nbsp; &nbsp;
            <h5> Pizza Hut</h5>
            </h6>

            <Nav className="ms-auto">
                {

                    currentUser?(
                        <>
                        <Nav.Link href="/">{currentUser.name}</Nav.Link>
                        <NavDropdown>
                        <NavDropdown.Item>
                            
                        <Nav.Link href="/order">Order</Nav.Link></NavDropdown.Item>
                  
                    <NavDropdown.Item > 
                    <Nav.Link href="/logout"   onClick={() => {
                        dispatch(logoutUser());
                      }}>Logout</Nav.Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  </>
                        ):
                        (
                        <>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">register</Nav.Link>
                       </>
                        )
                   

                    
                }
                
                    

              
                    <Nav.Link href="/cart">cart  {cartState.cartItems.length}</Nav.Link>
              




                


            </Nav>



        </Container>


        </Navbar>





        </>
    );
}
export default Topbar;