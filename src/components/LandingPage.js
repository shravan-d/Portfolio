import Button from './Button';
import './style.css'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import Project from './Project';
import Contact from './Contact';

function LandingPage() {

  return (
    <div id='top' className='container'>
      <div className='fixed-background'>  
        <div className='header-container'>
          <div className='header left'>Hello </div>
          <div className='header right'>There.</div>
        </div>      
        <div className='about-container'>
          <p>My name is Shravan and I'm a developer with a strong inclination towards the interplay between technology and real-world impact. I am pursuing my Masters with a focus on computer vision and machine learning, and as a researcher at the ReGame-XR Lab, I get to dive into applications that not only challenge my technical prowess but also allow me to work on applications that can genuinely enhance people's lives.</p>
        </div>
      </div>
      <div className='button-container'>
        <Button text={'Portfolio'} />
        <Button text={'Contact'} />
      </div>
      <div className='scroll-button'>
        <a href='#Portfolio'><IoChevronDown color='white' size='25px' className='scroll'/></a>
      </div>
      <div className='scrollabe-container'>
        <div className='portfolio-container' id='Portfolio'>
          <div className='header'>Portfolio</div>
          <Project />
        </div>
        <div className='contact-container' id='Contact'>
          <div className='header'>Contact</div>
          <Contact />
        </div>
        <div className='footer'>
          This website was made using HTML, CSS and beer.
        </div>
      </div>
      <div className='scroll-up-button'><a href='#top'><IoChevronUp color='white' size='25px' className='scroll'/></a></div>
    </div>
  );
}

export default LandingPage;
