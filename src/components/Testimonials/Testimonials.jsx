import './Testimonials.css'
import { girlRounded, boyRounded } from '../../assets'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className='wrapper'>

        <div className='boxes_testimonials'>


            <div className='mast'>

            </div>
          <div className='box_one'>
            <div className='box_one_header'>
              This is a great course. It helped me a lot. Thank you :)
            </div>
            <div className='box_data'>
              <div className='box_data_text'>
                <div className='box_data_name'>
                  Jane Cooper
                </div>
                <div className='box_data_activity'>
                  Developer,Sony
                </div>
              </div>

              <div className='img_student'>
                <img src={girlRounded} alt="student" />
              </div>
            </div>
          </div>

          <div className='box_two'>
            <div className='box_two_header'>
              Amazing Work! Well done!
            </div>
            <div className='box_data'>
              <div className='box_data_text'>
                <div className='box_data_name'>
                  Jacob Jones
                </div>
                <div className='box_data_activity'>
                  Designer, Facebook
                </div>
              </div>

              <div className='img_student'>
                <img src={boyRounded} alt="student" />
              </div>
            </div>
          </div>


        </div>

        <div className='title_text_testimonials'>
          <h2 className='title_testimonials'>What our students say</h2>
          <p>All students get access to all the videos and also the source code of the projects.
            You will also have access to a private Discord channel where you can discuss your doubts.</p>
          <a href="#" className='btn_testimonials'>
            Learn More
          </a>
        </div>

      </div>
    </section>
  )
}

export default Testimonials