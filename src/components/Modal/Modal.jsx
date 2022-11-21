import React, { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';


export class Modal extends Component {
  // componentWillUnmount(){
  //   window.removeEventListener('keydown', this.onWindowKeypress);
  // }
  constructor() {
    super();
    this.onWindowKeypress = this.onWindowKeypress.bind(this);
    this.onClickOverlay = this.onClickOverlay.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onWindowKeypress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onWindowKeypress);
  }

  onWindowKeypress(evt) {
    if (evt.key === 'Escape') {
      console.log('closeModal');
      this.props.onCloseModal();
    }
  }

  onClickOverlay() {
    this.props.onCloseModal();
  }

  render() {
    const { largeImageURL, tags } = this.props.modalImg;
    return (
      <div className={css.Overlay} onClick={this.onClickOverlay}>
        <div className={css.Modal}>
          <img
            src={largeImageURL}
            alt={tags}
            onClick={evt => evt.stopPropagation()}
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes ={
  modalImg:PropTypes.object,
  onCloseModal:PropTypes.func
}