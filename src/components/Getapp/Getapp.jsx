import './Getapp.css'
import { aIcon, google } from '../../assets/index'


const Getapp = () => {
  return (
    <section id='getapp'>
      <h2>
        Get our App
      </h2>
      <p>
        You can use App for better experience on smarphones
      </p>

      <div className='buttons_container'>

        <a href="#">
          <img src={aIcon} alt="" />
          App Store
        </a>

        <a href="#">
          <img src={google} alt="" />
          App Store
        </a>
      </div>
    </section>
  )
}

export default Getapp