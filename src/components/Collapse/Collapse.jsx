import chevronUpAndDown from '../../assets/chevron-up-and-down.svg'
import React, { useState } from 'react';
import './Collapse.scss'

function Collapse({ collapseTitle, collapseContent }) {
  const [isShown, setIsShown] = useState(false)

  const toggleVisibility = () => {
    setIsShown(!isShown)
  }

  return (
    <div className='collapse__global'>
      <div className="collapse__heading">
        <h1 className="collapse__title">
           {collapseTitle}
        </h1>
        <img src={chevronUpAndDown} className={`collapse__chevronUpAndDown ${isShown ? 'open' : ''}`}  onClick={toggleVisibility} alt={'Ouvrir/Fermer la liste ${collapseTitle}'}/>
      </div>
      {isShown && (
        <ul className={`collapse__hiddenContent ${isShown? 'unfold' : ''}`}>
            {collapseContent}
        </ul>
      )}    
    </div>
  )
}

export default Collapse
