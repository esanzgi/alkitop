import { faBicycle, faCar, faList, faMotorcycle, faMusic, faPersonSkiing } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useId } from 'react'

const navItems = [
  { icon: faBicycle, text: 'Bicicletas' },
  { icon: faMotorcycle, text: 'Motos' },
  { icon: faCar, text: 'Coches' },
  { icon: faPersonSkiing, text: 'Esquíes' },
  { icon: faMusic, text: 'Music' }
]

export function FilterNav () {
  const categoriasId = useId()

  return (
    <nav className='row'>
      <ul className='d-flex align-items-center justify-content-between mt-2 nav-icons-div'>
        {navItems.map((item, index) => (
          <NavItem key={index} icon={item.icon} text={item.text} />
        ))}
        <li id={categoriasId} className='d-inline-flex flex-column align-items-center pb-1 categorias-trigger nav-icons'>
          <FontAwesomeIcon icon={faList} className='fs-3 mb-1' />
          <span className='fs-6'>Categorías</span>
        </li>

        <div className='collapsed-categories'>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>
      </ul>

    </nav>
  )
}

function NavItem ({ icon, text }) {
  return (
    <li className='d-inline-flex flex-column align-items-center pb-1 nav-icons'>
      <FontAwesomeIcon icon={icon} className='fs-3 mb-1' />
      <span className='fs-6'>{text}</span>
    </li>
  )
}
