import './footer.css'
import { facebook, instagram } from '../../assets/index'

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Course</h3>
          <ul>
            <li>
              <a href="#">Log In</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li>
              <a href="#">All Courses</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact Us</h3>
          <ul>
            <li className='email_contact'>
              contact@email.com
            </li>

            <div className='social_container'>
              <li>
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
            </div>
          </ul>
          <form>
            <input type="text" className='input_contact' placeholder='Email Adress' />
            <button>Suscribe</button>
          </form>
        </div>

      </div>
      <div className='wrapper footer'>This website is developed by GTCoding © 2021</div>
    </footer>
  )
}

export default Footer