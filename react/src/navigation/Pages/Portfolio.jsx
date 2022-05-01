import './Page.css'
import Project from '../../components/Project/Project'

function Portfolio(props) {
    const projects = [
        {
            name: 'derposoft.com',
            subtitle: 'The website you\'re on!',
            url: 'https://github.com/Derposoft/Derposoft.github.io'
        }
    ]
    return (
        <div>
            {projects.map(project => {
                return <Project {...project}/>
            })}
        </div>
    )
}

export default Portfolio