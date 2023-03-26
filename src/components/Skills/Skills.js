import React from 'react'
import imageLeft from '../../img/image-left.png'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProgressBar from "../ProgressBar/ProgressBar";
import './Skills.css'

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <section className='skill' id="skills">
        <Container>
            <Row className="text-align-center">
              <Col>
                <div  className='skill-box'>
                  <h2 className='h2-color'>Skills</h2>
                  <p>To estimate yourself, you need to believe in your capabilities.<br />This slide shows the tops skills/techs i like to work with the most.</p>
                  <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                    <div className='item'>
                      <ProgressBar />
                      <h5 className='h5-color'>Web Developpment</h5>
                    </div>
                    <div className='item'>
                      <ProgressBar />
                      <h5 className='h5-color'>FullStack Developpment</h5>
                    </div>
                    <div className='item'>
                      <ProgressBar />
                      <h5 className='h5-color'>FrontEnd Developpment</h5>
                    </div>
                    <div className='item'>
                      <ProgressBar />
                      <h5 className='h5-color'>BackEnd Developpment</h5>
                    </div>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </Container>
        <img className='image-left' src={imageLeft} alt="image left" />
      </section>
    </div>
  )
}

export default Skills
