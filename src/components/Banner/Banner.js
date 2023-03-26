import React, { useState, useEffect } from 'react';
import HeaderImg from '../../img/header-img.svg'
import './Banner.css'

const TypingComponent = ({ sentences, intervalTime }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBackward, setIsBackward] = useState(false);

  useEffect(() => {
    setCurrentSentence(sentences[currentSentenceIndex]);
  }, [currentSentenceIndex, sentences]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isBackward) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [currentIndex, isBackward, 2000]);

  useEffect(() => {
    if (currentIndex === currentSentence.length) {
      setIsBackward(true);
      setTimeout(() => {
        setIsBackward(false);
        setCurrentSentenceIndex((currentSentenceIndex + 2) % sentences.length);
      }, 2000);
    } else if (currentIndex === 0) {
      setIsBackward(false);
      setCurrentSentenceIndex((currentSentenceIndex + 2) % sentences.length);
    }
  }, [currentIndex, currentSentence, currentSentenceIndex, sentences]
  );

  return (
<div className='padding-bottom pt-5 ms-lg-5 ms-md-2 ms-2 ps-ms-1 row margin-top'>
    <div className='col-xl-7 col-md-6 col-12'>
      <button className='btn-gradient text-light border-0 px-2 fs-3'>Welcom All In My Profile</button>
      <p className='text-light fs-10 retyper'><span className='border-right'>{currentSentence.slice(0, currentIndex)}</span></p>
      <p className='text-secondary fs-5' >Hello everyone , i have 8 years of Experience in Web Developpment</p>
      <p className='text-light fs-4 circle1-container'>Let's connect <div className='circle1'></div></p>
    </div>
    <div className='col-xl-5 col-md-6 col-12 '>
      <img className='astraunot' src={HeaderImg} alt="Astraunot" />
    </div>
</div>
  );
};

export default TypingComponent;
