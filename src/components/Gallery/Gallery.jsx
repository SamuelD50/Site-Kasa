import { useState } from 'react';
import chevronNext from '../../assets/chevron-right-solid.svg';
import chevronPrevious from '../../assets/chevron-left-solid.svg';
import './Gallery.scss'

/* This component is used to create the carousel in hosting page. */

function Gallery({ pictures, description }) {

  const [currentPicture, setCurrentPicture] = useState(0)

  const handlePreviousPicture = () => {
    setCurrentPicture((index) => (index > 0 ? index - 1 : pictures.length - 1))
  }

  const handleNextPicture = () => {
    setCurrentPicture((index) => (index < pictures.length - 1 ? index + 1 : 0))
  }

  const showControls = pictures.length > 1


  return (
    <div className='gallery'>
      <img src={pictures[currentPicture]} alt={description} className='gallery__image' />
            
      {showControls && (
        <>
          <button onClick={handlePreviousPicture} className='gallery__chevronPrevious'>
            <img src={chevronPrevious} alt='Précédent'  />
          </button>
          <button onClick={handleNextPicture} className='gallery__chevronNext'>
            <img src={chevronNext} alt='Suivant' />
          </button>
          <span className='gallery__counter'>
            {currentPicture + 1} / {pictures.length}
          </span>
        </>
      )}
    </div>
  )
}

export default Gallery