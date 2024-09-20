import imageUnique from './unique.jpeg';
import featuredin from './featuredin.jpg';
import imgAbout from './about.jpg';
import imgJoin from './join.jpg';
import imgTeamOne from './imgteam1.jpg';
import imgTeamTwo from './imgteam2.jpg';
import imgTeamThree from './imgteam3.jpg';
import imgTeamFour from './imgteam4.jpg';
import imgTeamFive from './imgteam5.jpg';
import imgTeamSix from './imgteam6.jpg';
import StateForm from '../form/StateForm';
import Footer from '../footer/Footer';
import './about.css';


const About =() => {
    return (
        <div>
            <img className='unique' src={imageUnique} alt=''/>
            <div className='about'>
                <div className='par-about-div'>
                <p className='par-about'>For over a decade, Mackenzie Interiors has gained recognition for our innovative and visionary approach to design, driving the industry towards greater creativity, inclusivity, and sustainability. At MI, we customize our interior design services to meet your specific requirements, creating spaces that are both relevant and long-lasting, regardless of the project scale. </p>
                </div>
                <div className='imgAbout-div'>
                <img className='imgAbout' src={imgAbout} alt=''/>
                </div>
            </div>
            <div className='container'>
                <h2 className='team'>Meet Our Team</h2>
            </div>
            <div>
            <div className='teamcont'>
                <div className='ourteam'>
                <img className='designer' src={imgTeamOne} alt=''/>
                <img className='designer' src={imgTeamTwo} alt=''/>
                <img className='designer' src={imgTeamThree} alt=''/>
                <img className='designer' src={imgTeamFour} alt=''/>
                <img className='designer' src={imgTeamFive} alt=''/>
                <img className='designer' src={imgTeamSix} alt=''/>
                </div>
            </div>
            </div>
            <div className='feature-div'>
            <img className='feature' src={featuredin} alt=''/>
            </div>
            <div className='join'>
                    <div className='imgJoin-div'>
                    <img className='imgJoin' src={imgJoin} alt=''/>
                    </div>
                    <div className='title-par-join-div'>
                    <h4 className='title-join'>Join our team</h4>
                    <p className='parJoin'>We're always looking for badass professionals to join our team! Follow us on Instagram or Facebook to be the first to know about open positions.</p>
                    </div>
            </div>
            <div className='container'>
            <h3 className='space space-about'>Are You Ready To Love Your Space?</h3>
            </div>
            <StateForm/>
            <Footer/>
        </div>
    )
}

export default About;