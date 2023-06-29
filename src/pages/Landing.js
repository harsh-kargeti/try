import main from '../assets/images/main.svg';
import Wrapper from  '../assets/wrappers/LandingPage'
import {Logo} from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (

        <Wrapper>
            <nav>
                <Logo />
            </nav>

            <div className='container page'>
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Kickstarter vinyl hammock, marfa organic before they sold out freegan. Before they sold out VHS fingerstache distillery XOXO. 3 wolf moon chia microdosing austin eiusmod pinterest YOLO mumblecore godard. Plaid copper mug live-edge cliche, chillwave actually ramps fixie quis nulla.
                    </p>
                <Link to="/register" className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </Wrapper>

    )
}

export default Landing;