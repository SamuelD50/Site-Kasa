import './Host.scss'

/* This component is used to create the bloc with host name and host picture in hosting page */

function Host({hostFirstName, hostLastName, hostPicture}) {

    return (
        <div className='host'>
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
    )
}

export default Host;