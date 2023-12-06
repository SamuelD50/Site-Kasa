import chevronUpAndDown from '../../assets/chevron-up-and-down.svg'
import React, { useState } from 'react';
import './Collapse.scss'

function Collapse({ collapseTitle, collapseContent }) {
  const [isShown, setIsShown] = useState(false)

  const visible = () => {
    setIsShown(!isShown)
  }

  return (
    <li className='collapse__global'>
      <div className="collapse__heading">
        <h1 className="collapse__title">
           {collapseTitle}
        </h1>
        <img src={chevronUpAndDown} className={`collapse__chevronUpAndDown ${isShown ? 'rotate' : ''}`} alt={'Ouvrir/Fermer la liste ${collapseTitle}'} onClick={visible}/>
      </div>
      {isShown && (
        <div className="collapse__hiddenContent">
          <p className="collapse__content">
            {collapseContent}
          </p>
        </div>
      )}    
    </li>
  )
}

export default Collapse
