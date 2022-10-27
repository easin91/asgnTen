import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/Brand1.png';
import Brand2 from '../../../assets/brands/Brand2.png';
import Brand3 from '../../../assets/brands/Brand3.png';
import Brand4 from '../../../assets/brands/Brand4.png';
import Brand5 from '../../../assets/brands/Brand5.png';
import Brand6 from '../../../assets/brands/Brand6.png';



const BrandCarousel = () => {
    return (
        <div className=''>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Brand1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Brand2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Brand3}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Brand4}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Brand5}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Brand6}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;