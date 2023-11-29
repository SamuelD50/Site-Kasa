import datas from '../../datas/datas.json'
import { useParams } from 'react-router-dom';
import './Host.scss'

function Host() {

    const { id } = useParams();
    const hostings = datas.find((hostings) => hostings.id === id)


/*     const {data, isLoading, error } = useFetch(`http://localhost:3000/hosting`)
    const hostData = data?.hostData; */


    return (
        <div className='host__global'>
            <div className='host__titleGroup'>
                <h1 className='host__title'>
                    {hostings.title}
                </h1>
                <span className='host__location'>
                    {hostings.location}
                </span>
            </div>
            <div className='host__tagsGroup'>
                <ul>
                    <li>
                        {hostings.tags}
                    </li>
                </ul>
            </div>
            <div className='host__host'>
                <h2 className='host__name'>
                    {hostings.host.name}
                </h2>
                <img src={hostings.host.picture} className='host__picture' alt={hostings.host.name} />
            </div>
            <div className='host__descriptionGroup'>
                <label for="">
                    Description
                </label>
                <select id='' name=''>
                    <option value="description">
                        {hostings.description}
                   </option>
                </select>
            </div>
            <div className='host__equipment'>
                <label for="">
                    Equipements
                </label>
                <select id='' name=''>
                    <option value="equipements">
                        {hostings.equipments}
                    </option>
                </select>
            </div>
        </div>
    )
}



export default Host;