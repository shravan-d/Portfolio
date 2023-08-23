import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import LinkdedInImage from '../assets/LinkedInImage.jpg'
import GithubImage from '../assets/GithubImage.jpg'
import './contact.css'

function Contact() {
  const styles = {  
    text: {
        color: 'black',
        fontSize: '14px',
        fontWeight: 600
    },
    image: {
        marginTop: 10,
        width: 75,
        height: 75,
        borderRadius: 50,
        backgroundColor: 'red',
        overflow: 'hidden'
    }
  }
  return (
    <div style={styles.container} className='contact-container'>
        <div className='card-container'>
        <div className='linkedin-card'>
            <div className='image-container'>
                <div style={styles.image}><img src={LinkdedInImage} width={'100%'} height={'100%'}/></div>
                <div style={{color: 'black', marginTop: 'auto', marginBottom: 10, fontWeight: 600, alignItems: 'center', justifyContent: 'center', display: 'flex', columnGap: 10}}>
                    <IoLogoLinkedin /> 
                    <a href='https://www.linkedin.com/in/shravan-dinakaran/' target="_blank" rel="noopener noreferrer" style={{color: 'black', fontWeight: 800}}>LinkedIn</a>
                </div> 
            </div>
            <div className='text-container'>
                <div><a href='https://www.linkedin.com/in/shravan-dinakaran/' target="_blank" rel="noopener noreferrer" style={{color: 'black', fontWeight: 800}}>Shravan Dinakaran</a></div> 
                <div>
                    <a href='https://www.linkedin.com/company/regame-xr/' target="_blank" rel="noopener noreferrer" style={{color: 'black', fontWeight: 600, fontSize: 14}}>ReGame-XR Lab | </a>
                    <a href='https://www.linkedin.com/school/northeastern-university/' target="_blank" rel="noopener noreferrer" style={{color: 'black', fontWeight: 600, fontSize: 14}}>Northeastern University</a>
                </div> 
                <div style={styles.text}>Graduate Student | Research Assistant | Computer Vision and Machine Learning</div> 
            </div>
        </div>
        <div className='github-card'>
            <div className='image-container'>
                <div style={styles.image}><img src={GithubImage} width={'100%'} height={'100%'}/></div>
                <div style={{color: 'black', marginTop: 'auto', marginBottom: 10, fontWeight: 600, alignItems: 'center', justifyContent: 'center', display: 'flex', columnGap: 10}}>
                    <IoLogoGithub /> 
                    <a href='https://github.com/shravan-d?tab=repositories' target="_blank" rel="noopener noreferrer" style={{color: 'black', fontWeight: 800}}>Github</a>
                </div> 
            </div>
            <div className='text-container'>
                <div><a href='https://github.com/shravan-d?tab=repositories' target="_blank" rel="noopener noreferrer" style={{color: 'black', fontWeight: 800}}>shravan-d</a></div> 
                <div style={styles.text}><a href='https://github.com/shravan-d?tab=repositories' target="_blank" rel="noopener noreferrer"  style={{color: 'black'}}>Check out my Github for more of my projects</a></div> 
            </div>
        </div>
        </div>
    </div>
  );
}

export default Contact;
