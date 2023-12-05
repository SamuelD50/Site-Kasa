import { useParams} from 'react-router-dom';
import { useState } from 'react';
import chevronNext from '../../assets/chevron-right-solid.svg';
import chevronPrevious from '../../assets/chevron-left-solid.svg';

import './Gallery.scss'

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
    <div className='gallery__globalContainer'>
      <div className='gallery__container'>
        <img src={pictures[currentPicture]} alt={description} className='gallery__image' />
      </div>
            
      {showControls && (
        <>
          <button onClick={handlePreviousPicture}>
            <img src={chevronPrevious} alt='Précédent' className='chevron__previous' />
          </button>
          <button onClick={handleNextPicture}>
            <img src={chevronNext} alt='Suivant' className='chevron__next' />
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