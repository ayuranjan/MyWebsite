import React from 'react';
import './Cards.css';
import BlogCardItem from './BlogCardItem';
import cnn from './cnn.jpg';
import site from './site.jpg'
import opencv from './opencv.jpg'
import bank from './banking.jpg'
import covid from './covid.jpg'
import Text from './Text';
function BlogCards() {
  document.title = "My Blogs";
  return (
    <div className='cards'>
      <h1 className="text">Check out My Blogs !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <BlogCardItem
              src={cnn}
              text='Sentiment Analysis Using CNN'
              label='Deep Learning'
              para =' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
              hendrerit risus, sed porttitor quam.'
            />

            <BlogCardItem
              src={site}
              text='Portfolio Website Hosted on Github'
              label='React'
            />
          </ul>
          <ul className='cards__items'>
            <BlogCardItem
              src={opencv}
              text='Facial Attendance System Using OpenCV'
              label='Computer Vision'
            />
            <BlogCardItem
              src={bank}
              text='Banking Application'
              label='JAVA'
            />
            <BlogCardItem
              src={covid}
              text='Covid-19 Detection From CT Scan'
              label='Deep Learning'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogCards;
