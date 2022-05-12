import './Page.css'
import Project from '../../components/Project/Project'
import { height } from '@mui/system'

function Portfolio(props) {
    const projects = [
        {
            name: 'derposoft.com',
            subtitle: 'The website you\'re on!',
            url: 'https://github.com/Derposoft/Derposoft.github.io'
            // https://raw.githubusercontent.com/Derposoft/Derposoft.github.io/master/README.md
        }
    ]
    return (
        <div style={{overflowY: 'auto', height: '100%'}}>
            {projects.map(project => {
                return <Project {...project}/>
            })}
        </div>
    )
}

export default Portfolio