import './Page.css'
import Project from '../../components/Project/Project'

function Portfolio(props) {
    const projects = [
        {
            name: 'test',
            subtitle: 'did cool stuff'
        }
    ]
    return (
        <div>
            {projects.map(project => {
                return <Project name={project.name} />
            })}
        </div>
    )
}

export default Portfolio