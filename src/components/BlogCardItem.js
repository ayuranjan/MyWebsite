import React from 'react';
import { Modal } from 'react-responsive-modal';
import './BlogCards.css'
import Text from './Text';

function BlogCardItem(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <li className='cards__item'>
        <button className='cards__item__link'  onClick={() => setOpen(true)} >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
         
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </button>

        <Modal
        open={open}
        onClose={() => setOpen(false)}
        right top
        classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={800}
      >
       <p className='text'> {props.para}</p>
        
       
      </Modal>
      </li>
    </>
  );
}

export default BlogCardItem;