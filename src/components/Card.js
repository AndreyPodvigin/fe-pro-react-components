import React from "react";
import PropTypes from 'prop-types';

const Card = ({ content: { title, text } }) => {
  return (<li className="list__item">
    <h2>{title}</h2>
    <p>{text}</p>
  </li>)
}

Card.prototype = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default Card;