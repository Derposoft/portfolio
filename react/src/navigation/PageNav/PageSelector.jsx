import './PageSelector.css'
import { Divider, Link } from '@mui/material'

const pages = ['home', 'resume', 'portfolio', 'about']
const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
}

function PageSelector(props) {
    return (
        <div class='selector'>
            {pages.map(x => {
                return <Link style={linkStyle} href={'#' + x}><p>{x}</p></Link>
            })}
            <Divider style={{ borderColor: 'gray' }} />
            {/*<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="viswanath-chadalapaka-910b2013b" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/viswanath-chadalapaka-910b2013b?trk=profile-badge">Viswanath Chadalapaka</a></div>*/}

            <img
                src='me_florida_beach_square.png'
                class='pfp'
                alt='me on beach'
            />
            <div class='bottomtext'>
                <Link style={{ ...linkStyle/*, position: 'absolute', bottom: '10%'*/ }} href='https://github.com/Derposoft/portfolio' target='_blank'>view source</Link>
            </div>
        </div>
    )
}

export default PageSelector