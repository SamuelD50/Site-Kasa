<<<<<<< HEAD

import './Host.scss'

function Host({cardTitle, location, tags, hostName, hostPicture, description, equipments}) {

=======
import datas from '../../datas/datas.json'
import { useParams } from 'react-router-dom';
import './Host.scss'

function Host() {

    const { id } = useParams();
    const hostings = datas.find((hostings) => hostings.id === id)


/*     const {data, isLoading, error } = useFetch(`http://localhost:3000/hosting`)
    const hostData = data?.hostData; */
>>>>>>> 56f6a193487b782b2a5a32b0e37942cf27211c7a


    return (
        <div className='host__global'>
            <div className='host__titleGroup'>
                <h1 className='host__title'>
<<<<<<< HEAD
                    {cardTitle}
                </h1>
                <span className='host__location'>
                    {location}
=======
                    {hostings.title}
                </h1>
                <span className='host__location'>
                    {hostings.location}
>>>>>>> 56f6a193487b782b2a5a32b0e37942cf27211c7a
                </span>
            </div>
            <div className='host__tagsGroup'>
                <ul>
                    <li>
<<<<<<< HEAD
                        {tags}
=======
                        {hostings.tags}
>>>>>>> 56f6a193487b782b2a5a32b0e37942cf27211c7a
                    </li>
                </ul>
            </div>
            <div className='host__host'>
                <h2 className='host__name'>
<<<<<<< HEAD
                    {hostName}
                </h2>
                <img src={hostPicture} className='host__picture' alt={hostName} />
=======
                    {hostings.host.name}
                </h2>
                <img src={hostings.host.picture} className='host__picture' alt={hostings.host.name} />
>>>>>>> 56f6a193487b782b2a5a32b0e37942cf27211c7a
            </div>
            <div className='host__descriptionGroup'>
                <label for="">
                    Description
                </label>
                <select id='' name=''>
                    <option value="description">
<<<<<<< HEAD
                        {description}
=======
                        {hostings.description}
>>>>>>> 56f6a193487b782b2a5a32b0e37942cf27211c7a
                   </option>
                </select>
            </div>
            <div className='host__equipment'>
                <label for="">
                    Equipements
                </label>
                <select id='' name=''>
                    <option value="equipements">
<<<<<<< HEAD
                        {equipments}
=======
                        {hostings.equipments}
>>>>>>> 56f6a193487b782b2a5a32b0e37942cf27211c7a
                    </option>
                </select>
            </div>
        </div>
    )
}



export default Host;