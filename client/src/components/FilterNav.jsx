import { faBicycle, faCar, faList, faMotorcycle, faMusic, faPersonSkiing } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useId } from 'react'

const navItems = [
  { icon: faBicycle, text: 'Bicicletas' },
  { icon: faMotorcycle, text: 'Motos' },
  { icon: faCar, text: 'Coches' },
  { icon: faPersonSkiing, text: 'Esquíes' },
  { icon: faMusic, text: 'Música' }
]

const allCategories = [
  'Coches',
  'TV, Audio, Foto',
  'Consolas y Videojuegos',
  'Motos',
  'Hogar y Jardin',
  'Bicicletas',
  'Construcción y Reformas',
  'Motor y Accesorios',
  'Informática y Electrónica',
  'Electrodomésticos',
  'Industria y Agricultura',
  'Moda y Accesorios',
  'Deporte y Ocio',
  'Cine, Libros y Música',
  'Inmobiliaria',
  'Nieve',
  'Servicios'
]

export function FilterNav () {
  const categoriasId = useId()

  return (
    <nav className='row'>
      <ul className='d-flex align-items-center justify-content-evenly mt-2 nav-icons-div'>
        {navItems.map((item, index) => (
          <NavItem key={index} icon={item.icon} text={item.text} />
        ))}
        <li id={categoriasId} className='d-inline-flex flex-column align-items-center pb-1 categorias-trigger nav-icons'>
          <FontAwesomeIcon icon={faList} className='fs-3 mb-1' />
          <span className='fs-6'>Categorías</span>
        </li>

        <div className='collapsed-categories bg-light rounded-3 '>
          <ul className='row list-unstyled'>
            {allCategories.map((item, index) => (
              <li className='col-6 col-sm-4 col-lg-3 my-2' key={index}>
                <span className='allCategories'>{item}</span>
              </li>
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
