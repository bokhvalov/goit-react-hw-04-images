import React, { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ modalImg, onCloseModal }) => {
  useEffect(() => {
    window.addEventListener('keydown',  onWindowKeypress);
    return () => {
      window.removeEventListener('keydown', onWindowKeypress);
    };
  }, []);

  const onWindowKeypress = evt => {
    if (evt.key === 'Escape') {
      onCloseModal();
    }
  };
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
