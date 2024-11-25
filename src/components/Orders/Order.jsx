import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  // MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBProgress,
  // MDBProgressBar,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import './Order.css'; // assuming you have a CSS file for styling

function Order() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/order');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="h-100 gradient-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="8">
            {cartItems.map((cartItem, index) => (
              <MDBCard key={index} style={{ borderRadius: "10px" }}>
                
                <MDBCardBody className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0" style={{ color: "#a8729a" }}>
                    {cartItem.user.email}
                    </p>
                    <p className="small text-muted mb-0">
                      Receipt Voucher : {cartItem.voucher}
                    </p>
                  </div>

                  {cartItem.cartItems.map((product, prodIndex) => (
                    <MDBCard key={prodIndex} className="shadow-0 border mb-4">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol md="2">
                            <MDBCardImage
                              src={product.image}
                              fluid
                              alt="Product"
                            />
                          </MDBCol>
                          <MDBCol md="2" className="text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0">{product.name}</p>
                          </MDBCol>
                          <MDBCol md="2" className="text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0 small">{product.color}</p>
                          </MDBCol>
                          <MDBCol md="2" className="text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0 small">Capacity: {product.capacity}</p>
                          </MDBCol>
                          <MDBCol md="2" className="text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0 small">Qty: {product.quantity}</p>
                          </MDBCol>
                          <MDBCol md="2" className="text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0 small">${product.price}</p>
                          </MDBCol>
                        </MDBRow>
                       
                        
                      </MDBCardBody>
                    </MDBCard>
                  ))}

                  <div className="order-footer">
                    <p className="fw-bold mb-0">Order Details</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Total</span> ${cartItem.total}
                    </p>
                    <p className="text-muted mb-0">Invoice Number : {cartItem.invoice}</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Discount</span> ${cartItem.discount}
                    </p>
                    <p className="text-muted mb-0">Invoice Date : {cartItem.date}</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">GST 18%</span> {cartItem.gst}
                    </p>
                    <p className="text-muted mb-0">
                      Recepits Voucher : {cartItem.receipt}
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Delivery Charges</span> {cartItem.delivery}
                    </p>
                  </div>
                </MDBCardBody>
                <MDBCardFooter
                  className="border-0 px-4 py-5"
                  style={{
                    backgroundColor: "#a8729a",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <MDBTypography
                    tag="h5"
                    className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                  >
                    Total paid: <span className="h2 mb-0 ms-2">${cartItem.totalPaid}</span>
                  </MDBTypography>
                </MDBCardFooter>
              </MDBCard>
            ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Order;
