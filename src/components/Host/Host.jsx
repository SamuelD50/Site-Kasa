import './Host.scss'

/* This component is used to create the bloc with title, location, host name and host picture in hosting page */

function Host({id, cardTitle, location, hostFirstName, hostLastName, hostPicture}) {

    return (
        <div className='host'>
            <div className='host__titleGroup'>
                <h1 className='host__title'>
                    {cardTitle}
                </h1>
                <h2 className='host__location'>
                    {location}
                </h2>
            </div>
            <div className='host__host'>
                <div className='host__name'>
                    <h2 className='host__firstName'>
                        {hostFirstName}
                    </h2>
                    <h2 className='host__lastName'>
                        {hostLastName}
                    </h2>
                </div>
                <img src={hostPicture} className='host__picture' alt={`${hostFirstName} ${hostLastName}`} />
            </div>
        </div>
    )
}

export default Host;