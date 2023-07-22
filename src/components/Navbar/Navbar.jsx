import './Navbar.css'

const Navbar = () => {
  return (
    <nav>

      <a href="#" className='logo_nav'>
        GD.
      </a>

      <ul className='menu_nav'>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#" className='btn_nav'>Enrol Now</a>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar