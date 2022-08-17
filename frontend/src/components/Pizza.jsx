import React,{useState} from 'react';
import {Card,Button,Row,Col,Modal} from "react-bootstrap";

import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../actions/cartAction';


 const Pizza=({pizza}) => {
     const [varient,setVarient]=useState('small');
     const[quantity,setQuantity]=useState(1);
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     const dispatch =useDispatch();

     const addToCartHandler=()=>{
       dispatch(addToCart(pizza,quantity,varient))
     }
     



  return (
      <>
    <Card style={{ width: '18rem' , marginTop:"30px"}}>
    <Card.Img variant="top" src={pizza.image}  style={{height:"200px",cursor:"pointer"}} onClick={handleShow}/>

    <hr></hr>
    <Card.Body>
      <Card.Title>{pizza.name}</Card.Title>
      <Card.Text>
       
      <Row>
        <Col md={6}>
      <h6> variants </h6> 
       <select value={varient}  onChange={e=>setVarient(e.target.value)}>
      {pizza.varients.map(varient=>(

          <option value={varient }>{varient}</option>
      ))}

       </select>

        </Col>
        <Col md={6}>
        <h6>   Quantity</h6>

        <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
       {
      [...Array(10).keys()].map((v,i)=>(
          <option value={i+1} >{i+1} </option>
      ))



       }

        </select>
        </Col>
      </Row>

      </Card.Text>
   <Row>
    <Col md={6}>  Price:{pizza.prices[0][varient]*quantity} /Rs</Col>
    <Col md={6}>  
    <Button c onClick={addToCartHandler} lassName='bg-warning text-white'>
     Add to cart
    </Button>
    </Col>

   </Row>

      
    </Card.Body>
  </Card>

  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>   
          
          <div>
          <Card.Img variant="top" src={pizza.image}  style={{height:"200px"}} />





          </div>

          <div>
       
        <h5> Description</h5>
       <p>{pizza.description}</p>
          </div>
          
           </Modal.Body>
      
      </Modal>





  </>
  );
};

export default Pizza;