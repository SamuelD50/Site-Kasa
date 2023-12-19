import chevronUpAndDown from '../../assets/chevron-up-and-down.svg'
import React, { useState } from 'react';
import './Collapse.scss'

/* This component is used to create dropdown lists in hosting and about pages. */

function Collapse({ collapseTitle, collapseContent }) {
  const [isShown, setIsShown] = useState(false)

  const toggleVisibility = () => {
    setIsShown(!isShown)
  }

  return (
    <div className='collapse'>
      <div className="collapse__heading">
        <h1 className="collapse__title">
           {collapseTitle}
        </h1>
        <img src={chevronUpAndDown} className={`collapse__chevronUpAndDown ${isShown ? 'open' : ''}`}  onClick={toggleVisibility} alt={`Ouvrir/Fermer la liste ${collapseTitle}`}/>
      </div>
      <ul className={`collapse__hiddenContent ${isShown? 'unfold' : ''}`}>
        {collapseContent}
      </ul>  
    </div>
  )
}

export default Collapse
