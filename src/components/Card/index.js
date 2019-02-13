import React from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Card = ({
  mainTitle, mainSubTitle, buttonText, buttonLink,
}) => (
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">{mainTitle}</p>
      <p className="subtitle">{mainSubTitle}</p>
      <Link to={buttonLink} className="button are-small is-info is-outlined is-fullwidth">
        {buttonText}
      </Link>
    </article>
  </div>
);

// Card.propTypes = {
//   mainTitle: PropTypes.shape().isRequired,
//   mainSubTitle: PropTypes.string.isRequired,
//   buttonText: PropTypes.string.isRequired,
//   buttonLink: PropTypes.string.isRequired,
// };

export default Card;
