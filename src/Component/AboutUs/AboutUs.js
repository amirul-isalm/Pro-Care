import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
      <div className="testSection mx-auto mt-5">
        <h2 className="text-center fw-bold mt-5">About Us</h2>

        <hr />

        <Row className="bg-light p-3 rounded-3">
          <Col xs={12} md={5}>
            <img
              className="img-fluid"
              src="https://thememakker.com/templates/oreo/hospital/front/assets/images/about-img.jpg"
              alt=""
            />
          </Col>
          <Col xs={12} md={7}>
            <h2>
              Pro Care hospital is the Lorem ipsum, dolor sit amet consectetur
               harum consequatur!
            </h2>
            <p>
              {" "}
              The hospital is a Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maiores enim autem ullam excepturi ut harum eum
              placeat earum tempora repudiandae iusto iure veniam aliquid nisi.
              Odit eveniet dolores similique cumque aperiam hic deserunt
              laudantium nesciunt ex, impedit vitae, numquam minus!
            </p>

            <p>
              We provide best Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Placeat maxime tenetur delectus voluptatibus culpa quis
              voluptatem error a. Ad atque itaque debitis distinctio. Vero,
              tenetur.
            </p>

            <Button variant="outline-primary" size="lg">
              {" "}
              More{" "}
            </Button>
          </Col>
        </Row>
      </div>
    );
};

export default AboutUs;