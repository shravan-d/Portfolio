import { useEffect, useState } from 'react';
import './project.css'
import { IoPlayOutline } from 'react-icons/io5';
import DemoHarmonization from '../assets/DemoHarmonization.mp4'
import ScanAIApp from '../assets/ScanAIApp.mp4'
import DemoMosaic from '../assets/DemoMosaic.mp4'
import DemoFlap from '../assets/DemoFlap.mp4'
import p4 from '../assets/p4.jpg'
import mosaic4 from '../assets/mosaic4.png'
import Flappy from '../assets/Flappy.png'
import barb from '../assets/barb.png'

function Project() {
    var intervalId = null;
    const projectSteps = [
      ['Segment the foreground', 'Pick a background', 'Pick a background', 'Create the composite image', 'Run Harmonization Model', 'Run Harmonization Model', 'And there you have it', 'Composite input and realistic output'],
      [''],
      [''],
      ['Take two images with common ground', 'The model finds points of interest', 'Matches these points and filters them', 'And Finally stitches the images together']
    ]
    const projectInterval = [3000, 20000, 10000, 2500];
    const [project1Index, setProject1Index] = useState(-1);
    const [project2Index, setProject2Index] = useState(-1);
    const [project3Index, setProject3Index] = useState(-1);
    const [project4Index, setProject4Index] = useState(-1);
    
    const playDemo = (projectIndex) => {
      document.querySelector(".image-content.project"+(projectIndex+1)).style.opacity = 0;
      if (projectIndex === 0)
        setProject1Index(0);
      else if (projectIndex === 1)
        setProject2Index(0);
      else if (projectIndex === 2)
        setProject3Index(0);
      else if (projectIndex === 3)
        setProject4Index(0);
      var index = 0;
      function showNextSentence() {
        if (index + 1 === projectSteps[projectIndex].length){
          clearInterval(intervalId);
          if (projectIndex === 0)
            setProject1Index(-1);
          else if (projectIndex === 1)
            setProject2Index(-1);
          else if (projectIndex === 2)
            setProject3Index(-1);
          else if (projectIndex === 3)
            setProject4Index(-1);
          document.querySelector(".image-content.project"+(projectIndex+1)).style.opacity = 1;
          return;
        }
        index = index + 1;
        if (projectIndex === 0)
          setProject1Index(project1Index => project1Index + 1);
        else if (projectIndex === 1)
          setProject2Index(project2Index => project2Index + 1);
        else if (projectIndex === 2)
          setProject4Index(project3Index => project3Index + 1);
        else if (projectIndex === 3)
          setProject4Index(project4Index => project4Index + 1);
      }
      document.getElementById("project"+(projectIndex+1)).play()
      intervalId = setInterval(showNextSentence, projectInterval[projectIndex]);
    }

  return (
    <div className='container'>
        <div className='project project1'>
            <div className='media-container project1'>
              <div className='video-content'>
                <video id='project1' src={DemoHarmonization} width='100%' height='100%'></video>
                {project1Index === -1 && 
                  <IoPlayOutline color='white' size='35px' onClick={() => playDemo(0)} style={{position: 'absolute', top: '46%', left: '46%'}} />
                }
              </div>
              <div className='image-content project1'>
                <div className='image'><img src={barb} height={'100%'} width={'100%'}/></div>
              </div>
            </div>
            <div className='content'>
                <div className='text'>
                Compositing is a technique that allows filmmakers to create breathtaking scenes through careful adjustments of lighting, and colors. It's how actors shot in front of a green screen can be put into stunning backgrounds even though the conditions of the shot are completely different.<br/><br/>My passion project dives deep into the fusion of AI and film-making, exploring novel approaches to automate this visual sorcery. 
                </div>
                {project1Index === -1 && 
                <div className='play-button' onClick={() => playDemo(0)}>
                  <IoPlayOutline color='white' size='25px'/>
                  <p style={{color: 'white', fontSize: 30}}>Play Demo</p>
                </div>}
                {project1Index > -1 &&
                <div className='video-text'>
                  <p>{projectSteps[0][project1Index]}...</p>
                </div>}
            </div>
        </div>
        <div className='project project2'>
            <div className='media-container project2'>
              <div className='video-content'>
              <video id='project2' src={ScanAIApp} width='100%' height='100%'></video>
                {project2Index === -1 && 
                  <IoPlayOutline color='white' size='35px' onClick={() => playDemo(1)} style={{position: 'absolute', top: '46%', left: '46%'}} />
                }
              </div>
              <div className='image-content project2'>
                <div className='image'><img src={p4} height={'101%'} width={'102%'}/></div>
              </div>
            </div>
            <div className='content'>
                <div className='text'>
                To test out my computer vision models on mobile, I created an app for a marketplace. Users can scan objects in real-time, provide ratings, and view similar products from a diverse marketplace. This seamless integration of computer vision and user feedback creates a dynamic shopping experience, tailored to individual tastes and preferences.
                </div>
                {project2Index === -1 && 
                <div className='play-button' onClick={() => playDemo(1)}>
                  <IoPlayOutline color='white' size='25px'/>
                  <p style={{color: 'white', fontSize: 30}}>Play Demo</p>
                </div>}
                {project2Index > -1 &&
                <div className='video-text'>
                  <p>{projectSteps[1][project2Index]}...</p>
                </div>}
            </div>
        </div>
        <div className='project project1'>
            <div className='media-container project1'>
              <div className='video-content'>
                <video id='project3' src={DemoFlap} width='100%' height='100%'></video>
                {project3Index === -1 && 
                  <IoPlayOutline color='white' size='35px' onClick={() => playDemo(2)} style={{position: 'absolute', top: '46%', left: '46%'}} />
                }
              </div>
              <div className='image-content project3'>
                <div className='image'><img src={Flappy} height={'100%'} width={'100%'}/></div>
              </div>
            </div>
            <div className='content'>
                <div className='text'>
                Have you ever been too lazy to move your hands to play a game? Are you tired of quick aiming and virtually running around in video games? Then this is the game for you.<br/><br/> It's Flappy Bird but you jump by winking/blinking. No high-end requirements such as minimal physical energy or motivation. As a bonus, you get to practice winking.
                </div>
                {project3Index === -1 && 
                <div className='play-button' onClick={() => playDemo(2)}>
                  <IoPlayOutline color='white' size='25px'/>
                  <p style={{color: 'white', fontSize: 30}}>Play Demo</p>
                </div>}
                {project3Index > -1 &&
                <div className='video-text'>
                  <p>{projectSteps[2][project3Index]}...</p>
                </div>}
            </div>
        </div>
        <div className='project project1'>
            <div className='media-container project1'>
              <div className='video-content'>
                <video id='project4' src={DemoMosaic} width='100%' height='100%'></video>
                {project4Index === -1 && 
                  <IoPlayOutline color='white' size='35px' onClick={() => playDemo(3)} style={{position: 'absolute', top: '46%', left: '46%', cursor: 'pointer'}} />
                }
              </div>
              <div className='image-content project4'>
                <div className='image'><img src={mosaic4} height={'100%'} width={'100%'}/></div>
              </div>
            </div>
            <div className='content'>
                <div className='text'>
                This algorithm identifies corresponding points in different images and skillfully blends them together, to form a mosaic. I use feature extraction, feature matching, random sample consensus and blending techniques to allow individual images of the same scene to be molded into panaromas and 360 images.
                </div>
                {project4Index === -1 && 
                <div className='play-button' onClick={() => playDemo(3)}>
                  <IoPlayOutline color='white' size='25px'/>
                  <p style={{color: 'white', fontSize: 30}}>Play Demo</p>
                </div>}
                {project4Index > -1 &&
                <div className='video-text'>
                  <p>{projectSteps[3][project4Index]}...</p>
                </div>}
            </div>
        </div>
    </div>
  );
}

export default Project;