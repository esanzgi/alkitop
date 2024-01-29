import { allCategories } from '@/assets/utils/constants'
import { faBicycle, faCar, faList, faMotorcycle, faMusic, faPersonSkiing } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from '@inertiajs/react'
import { useId } from 'react'

const navItems = [
  { icon: faBicycle, text: 'Bizikletak' },
  { icon: faMotorcycle, text: 'Motorrak' },
  { icon: faCar, text: 'Kotxeak' },
  { icon: faPersonSkiing, text: 'Elurra' },
  { icon: faMusic, text: 'Musika' }
]

export function FilterNav() {
  const { get } = useForm()
  const categoriasId = useId()

  const handleClick = (category) => {
    console.log('CATEGORY', category)
    get(`/products/category/${category}`)

  }

  return (
    <nav className='row'>
      <ul className='d-flex align-items-center justify-content-evenly mt-2 nav-icons-div'>
        {navItems.map((item, index) => (
          <NavItem key={index} icon={item.icon} text={item.text} handleClick={handleClick} />
        ))}
        <li id={categoriasId} className='d-inline-flex flex-column align-items-center pb-1 categorias-trigger nav-icons'>
          <FontAwesomeIcon icon={faList} className='fs-3 mb-1' />
          <span className='fs-6'>Kategoriak</span>
        </li>

        <div className='collapsed-categories bg-light rounded-3 '>
          <ul className='row list-unstyled'>
            {allCategories.map((item, index) => (
              <li onClick={() => handleClick(item)} className='col-6 col-sm-4 col-lg-3 my-2' key={index}>
                <span className='allCategories'>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </ul>

    </nav>
  )
}

function NavItem({ icon, text, handleClick }) {
  return (
    <li
      onClick={() => handleClick(text)}
      className='d-inline-flex flex-column align-items-center pb-1 nav-icons'>
      <FontAwesomeIcon icon={icon} className='fs-3 mb-1' />
      <span className='fs-6'>{text}</span>
    </li>
  )
}
