import './Page.css'
import { Link } from '@mui/material'

function About(props) {
    return (
        <div class='blurb'>
            <p>my name is Viswanath Chadalapaka. i am a computer scientist. i 
                also play on <Link href='https://lichess.org/@/Derposoft' target='_blank'>lichess</Link>.</p>
        </div>
    )
}

export default About