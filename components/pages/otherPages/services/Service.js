import React from "react";
import { Container, Row } from "reactstrap";

const ServiceSection = ({title , desc}) => {
  return (
    <>
      <section className='provide-service bg-light'>
        <Container>
          <Row>
            <div className='col-lg-6 order-lg-1'>
              <div className='service-img'>
                <img src='/assets/images/inner-pages/2.png' className='img-fluid' alt='' />
              </div>
            </div>
            <div className='col-lg-5'>
              <div className='provide-details'>
                <h2>
               
                {title}
                </h2>
                <p className='font-roboto'>
                 { desc ? desc :` Residences can be classified by and how they are connected to neighbouring residences and land. Different types of housing tenure can be used for the same physical type. For example,
                  connected residences might be owned by a single entity and leased out, or owned separately with an agreement covering the relationship between units and common areas and concerns.
                  Residences can be classified by and ow they are connected to neighbouring residences and land.`}
                </p>
              
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServiceSection;
