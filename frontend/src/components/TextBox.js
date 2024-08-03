import React from 'react';
import './TextBox.css';

const TextBox = ({ reviewLink,specificationsLink,opinionsLink ,picturesLink}) => {
  const handleReviewClick = () => {
    if (reviewLink) {
      window.open(reviewLink, '_blank');
    }
  };

  const handleSpecificationsClick = () => {
    if (specificationsLink) {
      window.open(specificationsLink, '_blank');
    }
  };

  const handleOpinionsClick = () => {
    if (opinionsLink) {
      window.open(opinionsLink, '_blank');
    }
  };

  const handlePicturesClick = () => {
    if (picturesLink) {
      window.open(picturesLink, '_blank');
    }
  };

  return (
    <div className="text-box">
      <div className="text-field" onClick={handleReviewClick}>REVIEW</div>
      <div className="text-field" onClick={handleSpecificationsClick}>SPECIFICATIONS</div>
      <div className="text-field" onClick={handleOpinionsClick}>READ OPINIONS</div>
      <div className="text-field" onClick={handlePicturesClick}>PICTURES</div>
    </div>
  );
};

export default TextBox;
