import './home.css';
import imgModern from './modernhouse.jpg';
import ImageAge from './age.jpg';
import imageHappy from './happy.jpg';
import imgHome from './homepage.jpg';
import imgHomeTwo from './homepagetwo.jpg';
import Footer from '../footer/Footer';
import StateForm from '../form/StateForm';




const Home =() => {
    return (
        <div>
            <div className='container'>
            <h1>Experience  Attentiveness  Versatility </h1>
            </div>
            <img className='modern' src={imgModern} alt=''/>
            <img className='age' src={imageHappy} alt=''/>
            <img className='happy' src={ImageAge} alt=''/>
            <img className='homepage' src={imgHome} alt=''/>
            <img className='homepage' src={imgHomeTwo} alt=''/>
            <div className='container'>
            <h3 className='space'>Are You Ready To Love Your Space?</h3>
            </div>
            <StateForm/>
            <Footer/>
        </div>
    )
}

export default Home;

// git add .
// git commit -m "some comments"
// git push --set-upstream origin master