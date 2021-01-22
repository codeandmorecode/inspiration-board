import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      {props.text}
      {props.emoji? emoji.getUnicode(props.emoji) : null}
    </div>
  )
}

Card.propTypes = {

};

export default Card;
