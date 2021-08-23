import React from 'react';
import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  max: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const myCarousel = [
  {
    id: 1,
    uri: "./img1.jpg"
  },
  {
    id: 2,
    uri: "./img2.jpg"
  },
  {
    id: 3,
    uri: "./img3.jpg"
  },
  {
    id: 4,
    uri: "./img4.jpg"
  },
  {
    id: 5,
    uri: "./img5.jpg"
  },
  {
    id: 6,
    uri: "./img6.jpg"
  }
];

const MelbCarousel = () => {
    return(
        <Carousel afterChange={onChange}>
            {
              myCarousel.map(img => (
                <div key={img.id} style={contentStyle}>
                  <img style={{height: '360px', width: '100%', objectFit: 'cover', objectPosition: '0px 30%'}} src={img.uri} alt="" />
                </div>
              ))
            } 
        </Carousel>
    );
};

export default MelbCarousel;
