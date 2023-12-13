import './Host.scss'

function Host({id, cardTitle, location, hostName, hostPicture}) {



    return (
        <div className='host__global'>
            <div className='host__titleGroup'>
                <h1 className='host__title'>
                    {cardTitle}
                </h1>
                <span className='host__location'>
                    {location}
                </span>
            </div>
            <div className='host__host'>
                <h2 className='host__name'>
                    {hostName}
                </h2>
                <img src={hostPicture} className='host__picture' alt={hostName} />
            </div>
        </div>
    )
}

export default Host;