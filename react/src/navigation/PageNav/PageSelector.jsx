import './PageSelector.css'
import { Divider, Link } from '@mui/material'

const pages = ['home', 'portfolio', 'about']
const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
}

function PageSelector(props) {
    const pfp_size = '50%'
    return (
        <div class='selector'>
            {pages.map(x => {
                return <Link style={linkStyle} href={'#'+x}><p>{x}</p></Link>
            })}
            <Divider />
            <img 
                src='me_shorthair_blurred_square.jpg' 
                width={pfp_size}
                height={pfp_size}
                class='pfp'
            />
            <div class='bottomtext'>
                <Link style={{...linkStyle/*, position: 'absolute', bottom: '10%'*/}} href='https://github.com/Derposoft/Derposoft.github.io'>view source</Link>
            </div>
        </div>
    )
}

export default PageSelector