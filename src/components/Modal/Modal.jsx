import React, { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ modalImg, onCloseModal }) => {


  
  useEffect(() => {
    function onWindowKeypress (evt) {
      if (evt.key === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', evt => onWindowKeypress(evt));
    return () => {
      window.removeEventListener('keydown', evt => onWindowKeypress(evt));
    };
  }, [onCloseModal]);


  const { largeImageURL, tags } = modalImg;

  return (
    <div
      className={css.Overlay}
      onClick={() => {
        onCloseModal();
      }}
    >
      <div className={css.Modal}>
        <img
          src={largeImageURL}
          alt={tags}
          onClick={evt => evt.stopPropagation()}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalImg: PropTypes.object,
  onCloseModal: PropTypes.func,
};
