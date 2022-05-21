import './Page.css'
import { Link } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'
import FancyTyper from '../../components/FancyTyper/FancyTyper'

function Home(props) {
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
        </div>
    )
}

export default Home
