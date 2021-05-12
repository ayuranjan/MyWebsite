import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import cnn from './cnn.jpg';
import site from './site.jpg'
import opencv from './opencv.jpg'
import bank from './banking.jpg'
import covid from './covid.jpg'
function Cards() {
  document.title = "My Projects";
  return (
    <div className='cards'>
      <h1 className="text">Check out these Top Projects !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={cnn}
              text='Sentiment Analysis Using CNN'
              label='Deep Learning'
              path='/cnn-project'
            />
            <CardItem
              src={site}
              text='Portfolio Website Hosted on Github'
              label='React'
              path='/site'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={opencv}
              text='Facial Attendance System Using OpenCV'
              label='Computer Vision'
              path='/opencv'
            />
            <CardItem
              src={bank}
              text='Banking Application'
              label='JAVA'
              path='/banking'
            />
            <CardItem
              src={covid}
              text='Covid-19 Detection From CT Scan'
              label='Deep Learning'
              path='/corona'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
