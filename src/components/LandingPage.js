import Button from './Button';
import './style.css'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import Project from './Project';
import Experience from './Experience';
import Education from './Education';
import { IoLogoLinkedin, IoLogoGithub, IoMail } from 'react-icons/io5';
import avatar from'../assets/avatar.jpg';

function LandingPage() {

  return (
    <div id='top' className='container'>
      <div className='fixed-background'>  
        <div className='header-container'>
          <div className='image-container'>
            <img src={avatar} alt="Avatar" className="header-image"/>
            <div className='name-container'>
              <div className='header left'>Shravan </div>
              <div className='header right'>Dinakaran</div>
            </div>
          </div>
          <div className='about-container'>
            <p>Hi! I’m Shravan, a software developer with a passion for building technology that has real-world impact. I have a Master’s degree in engineering and experience working at big-name companies and early-stage startups. I’ve also created open-source applications that hundreds of people use.</p>
          </div>
          <div className='socials'>
            <a href='https://www.linkedin.com/in/shravan-dinakaran/' target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin style={{ fontSize: '30px', margin: '20px' }}/></a>
            <a href='https://github.com/shravan-d' target="_blank" rel="noopener noreferrer">
              <IoLogoGithub style={{ fontSize: '30px', margin: '20px' }}/></a>
            <a href='mailto:dinakaran.s@northeastern.edu' target="_blank" rel="noopener noreferrer">
              <IoMail style={{ fontSize: '30px', margin: '20px' }}/></a>
          </div>  
        </div>

      </div>
      <div className='button-container'>
        <Button text={'Professional Experience'} />
        <Button text={'Academia'} />
        <Button text={'Projects'} />
      </div>
      <div className='scroll-button'>
        <a href='#Professional Experience'><IoChevronDown color='white' size='25px' className='scroll'/></a>
      </div>
      <div className='scrollabe-container'>
        <div className='experience-container' id='Professional Experience'>
          <div className='header'>Professional Experience</div>
          <Experience />
        </div>
        <div className='experience-container' id='Academia'>
          <div className='header'>Academia</div>
          <Education />
        </div>
        <div className='portfolio-container' id='Projects'>
          <div className='header'>Projects</div>
          <Project />
        </div>
        <div className='footer'>
          This website was made using HTML, CSS and React.
        </div>
      </div>
      <div className='scroll-up-button'><a href='#top'><IoChevronUp color='white' size='25px' className='scroll'/></a></div>
    </div>
  );
}

export default LandingPage;
