import './PageSelector.css'
import { Link } from '@mui/material'

const pages = ['home', 'portfolio', 'about']
const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
}

function PageSelector(props) {
    return (
        <div class='selector'>
            {pages.map(x => {
                return <Link style={linkStyle} href={'#'+x}><p>{x}</p></Link>
            })}
        </div>
    )
}

export default PageSelector