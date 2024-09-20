import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import imgBar from './bar.jpg';
import commentTwo from './commentTwo.jpg';
import { useState } from "react";
import Footer from "../footer/Footer";
import StateForm from "../form/StateForm";
import { dataCommercial } from "./dataCommercial";
import './commercial.css';

const Commercial = () => {

    const [comImage, setcomImage] = useState(0);
    const { image } = dataCommercial[comImage];

    const prevComImage = () => {
        setcomImage((comImage => {
            comImage --;
            if (comImage < 0) {
                return dataCommercial.length - 1;
            }
            return comImage;
        }))
    }

    const nextComImage = () => {
        setcomImage((comImage => {
            comImage ++;
            if (comImage > dataCommercial.length - 1) {
                comImage = 0;
            }
            return comImage;
        }))
    }

    return (
        <div>
            <img className='hall' src={imgBar} alt=''/>

<div className='container'>
<h2 className='our'>A Glance At Some Of Our Commercial Projects</h2>
</div>

<div className='container'>
<button className='btn-res' onClick={prevComImage}><GrPrevious /></button>
<img className='comproject' src={image} alt=''/>
<button className='btn-res' onClick={nextComImage}><GrNext /></button>
</div>
<div className='container'>
<h2 className='award'>Award-Winning Commercial Design Services</h2>
</div>
<p className="resident">Our quick, easy design process works great for companies that are looking to freshen up their space with a remodel or new furnishings. Our designers meet with you onsite to understand your vision and functional needs and then we get to work pulling together a completely custom design plan for your space. Our process is collaborative and interactive, making sure we're on the right track from beginning to end.</p>
<img className='feature comone'  src={commentTwo} alt=''/>
<div className='container'>
<h3 className='space'>Are You Ready To Love Your Space?</h3>
</div>
            <StateForm/>
            <Footer/>
        </div>
    )
}

export default Commercial;