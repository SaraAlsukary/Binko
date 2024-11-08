import { Container } from 'react-bootstrap';
import Styles from './About.module.css';
import LottieHandler from '@components/feedback/lottieHandler/lottieHandler';
const { pic, parag, aboutContainer, cont } = Styles
const About = () => {
    return (
        <div className={aboutContainer}>
            <Container className={cont}>
                <div className={pic}>
                    <LottieHandler type='BooksAbout' loop={true} style={{
                        width: '300px', position: 'absolute',
                        left: '0',
                        top: '30%'
                    }} />
                </div>
                <div className={parag}>
                    <h2>Welcome</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam esse harum nobis corrupti veniam, quas doloribus eius ad! Nobis iusto quam deleniti iste in alias, ullam consequuntur officia totam amet.</p>
                </div>

            </Container>
        </div>
    )
}

export default About
