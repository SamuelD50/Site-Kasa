import chevronUpAndDown from '../../assets/chevron-up-and-down.svg'
<<<<<<< HEAD
import React, { useState } from 'react';
import './Collapse.scss'

function Collapse({collapseTitle, collapseContent}) {
    const [isShown, setIsShown] = useState(false)

    const visible = () => {
        setIsShown(!isShown)
    }

    return (
        <li className='collapse__global'>
            <div className="collapse__heading" onClick={visible}>
                <h1 className="collapse__title">
                    {collapseTitle}
                </h1>
                <img src={chevronUpAndDown} className='collapse__chevronUpAndDown' alt={'Ouvrir/Fermer la liste {collapseTitle}'}/>
            </div>
            <div className="collapse__hiddenContent" onClick={!visible}>
                <p className="collapse__content">
                    {collapseContent}
                </p>
            </div>    
        </li>
    )
}

/* const Collapse = ({ collapseTitle, collapseContent }) => {
    const [isContentVisible, setIsContentVisible] = useState(false);
  
    const toggleContent = () => {
      setIsContentVisible(!isContentVisible);
    };
  
    return (
        <li className='collapse__list'>

        </li>
      <div className="toggle-block">
        <div onClick={toggleContent} style={{ cursor: 'pointer' } className=''}>
          {collapseTitle}
        </div>
        <img src={chevronUpAndDown} className={`arrow-icon ${isContentVisible ? 'rotate' : ''}`} />
        {isContentVisible && <div className="toggle-content">{collapseContent}</div>}
      </div>
    );
  }; */

export default Collapse
=======
import 'Collapse.scss'

function Collapse() {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <button onClick={() => setIsOpen(false)}>Fermer</button>
    ) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir</button>
    )
}
>>>>>>> 56f6a193487b782b2a5a32b0e37942cf27211c7a
