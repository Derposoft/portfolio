import './Page.css'
import { Link } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import FancyTyper from '../../components/FancyTyper/FancyTyper'
import Typist from 'react-typist'

function Home(props) {
    const [textidx, setTextidx] = useState(0);
    const texts = ['to HMs, professors, and recruiters: welcome!', 'gamers: hmu @Derposoft#3658']
    useEffect(() => {
        const id = setInterval(() => setTextidx((oldidx) => oldidx + 1), 5000);

        return () => {
            clearInterval(id);
        };
    }, []);
    
    return (
        <div>
            <div>
                <Link color='inherit' href='https://github.com/Derposoft' target='_blank' class='socialmediaicon'>
                    <GitHub fontSize='large' />
                </Link>
                <Link color='inherit' href='https://www.linkedin.com/in/viswanath-chadalapaka-910b2013b/' target='_blank' class='socialmediaicon'>
                    <LinkedIn fontSize='large' />
                </Link>
            </div>
            <FancyTyper speed={50} eraseDelay={1500} typingDelay={1500}>
                {['to HMs, professors, and recruiters: welcome!', 'gamers: hmu @Derposoft#3658']}
            </FancyTyper>
            {/*<Typist key={textidx}>
                <Typist.Backspace count={8} delay={200} />
                {texts[textidx % texts.length]}
            </Typist>*/}
        </div>
    )
}

export default Home
