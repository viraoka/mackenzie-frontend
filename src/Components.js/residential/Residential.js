import { useState } from 'react';
import { dataResidential } from './dataResidential';
import imgHall from './hallway.jpg';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import commentOne from './commentsOne.jpg';
import Footer from "../footer/Footer";
import StateForm from "../form/StateForm";
import './residential.css';


const Residential = () => {

    const [project, setProject] = useState(0);
    const { image } = dataResidential[project];

    const previousProject = () => {
        setProject((project => {
            project --;
            if (project < 0) {
                return dataResidential.length - 1;
            }
            return project;
        }))
    }
    
    const nextProject = () => {
        setProject((project => {
            project ++;
            if (project > dataResidential.length - 1) {
                project = 0;
            }
            return project;
        }))
    }

    return (
        <div>
            <img className='hall' src={imgHall} alt=''/>
            <div className='container'>
            <h2 className='our'>A Glance At Some Of Our Residential Projects</h2>
            </div>

            <div className='container'>
            <button className='btn-res' onClick={previousProject}><GrPrevious /></button>
            <img className='project' src={image} alt=''/>
            <button className='btn-res' onClick={nextProject}><GrNext /></button>
            </div>
            <div className='container'>
            <h2 className='award'>Award-Winning Residential Design Services</h2>
            </div>
            
            <p className='resident'>Taking on a design project independently can be complicated, time-consuming, and sometimes overwhelming. To ensure that the time, energy, and financial investment you make in your home is sound, many folks find it very beneficial to work with a professional interior designer. At MI, we tailor our interior design services to your specific needs, delivering spaces that are both relevant and enduring, no matter the scope.</p>
            <div className='container'>
            <img className='feature '  src={commentOne} alt=''/>
            </div>
            <div className='container'>
            <h3 className='space'>Are You Ready To Love Your Space?</h3>
            </div>
            <StateForm/>
            <Footer/>
        </div>
    )
}

export default Residential;