
import './Host.scss'

function Host({cardTitle, location, tags, hostName, hostPicture, description, equipments}) {



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
            <div className='host__tagsGroup'>
                <ul>
                    <li>
                        {tags}
                    </li>
                </ul>
            </div>
            <div className='host__host'>
                <h2 className='host__name'>
                    {hostName}
                </h2>
                <img src={hostPicture} className='host__picture' alt={hostName} />
            </div>
            <div className='host__descriptionGroup'>
                <label for="">
                    Description
                </label>
                <select id='' name=''>
                    <option value="description">
                        {description}
                   </option>
                </select>
            </div>
            <div className='host__equipment'>
                <label for="">
                    Equipements
                </label>
                <select id='' name=''>
                    <option value="equipements">
                        {equipments}
                    </option>
                </select>
            </div>
        </div>
    )
}



export default Host;