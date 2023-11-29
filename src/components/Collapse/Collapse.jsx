import chevronUpAndDown from '../../assets/chevron-up-and-down.svg'
import 'Collapse.scss'

function Collapse() {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <button onClick={() => setIsOpen(false)}>Fermer</button>
    ) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir</button>
    )
}