import Navbar from '../Navbar/Navbar'
import './Header.css'
import { heroImage, pencil } from '../../assets/index'

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="header_container">

          <div className="header_description">
            <h1>Learn the art of Game Dev</h1>
            <p>This is a comprehensive course on Game Development.
              You will learn everything from generating an idea to
              publishing your games to different platforms.</p>
            <div>
              <a href="#" className='btn_hero'>
                <img src={pencil} alt="pencil" />
                Enrol Now
              </a>

            </div>
          </div>

          <div className='header_image_container'>
            <img src={heroImage} alt="hero image" className='hero_image' />

            <div className='box_container'>
              <div className='hero_box_one'>
                <div className='hero_box_number'>
                  32K
                </div>
                <p className='hero_box_description'>
                  Students Enrolled
                </p>
              </div>
              <div className='box_one_shadow'>

              </div>
              <div className='box_two_shadow'>

              </div>

              <div className='hero_box_two'>
                <div className='hero_box_number'>
                  4.7
                </div>
                <p className='hero_box_description'>
                  Overall Rating
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </header>
  )
}

export default Header