import './Courses.css'
import { mario, clock } from '../../assets/index'

const Courses = () => {
  return (
    <section id='courses'>
      <div className="wrapper">
        <h2 className='title_courses'>Our Courses</h2>


        <div className="courses_container">

          <div className='box_container'>
            <div className='box_data'>

              <img src={mario} alt="mario bross" />


              <div className='footer_card'>

                <p>Game Design Essential</p>
                <div className='clock_courses'>
                  <img src={clock} alt="clock" />
                  8 HRS
                </div>

              </div>

            </div>
          </div>

          <div>
            <div className='box_container'>
              <div className='box_data'>

                <img src={mario} alt="mario bross" />


                <div className='footer_card'>

                  <p>Game Design Essential</p>
                  <div className='clock_courses'>
                    <img src={clock} alt="clock" />
                    8 HRS
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Courses