import './Page.css'
import { Divider, Link } from '@mui/material'
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
            <FancyTyper speed={50}>
                {['to prospective HMs: welcome to vchad\'s website!', 'gamers: visit mc.derposoft.com!']}
            </FancyTyper>
        </div>
    )
}

export default Home
