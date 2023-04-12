import './Page.css'
import Project from '../../components/Project/Project'
import { useEffect, useState } from 'react'

function Portfolio(props) {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("config.json").then(config => {
            config.json().then(config => {
                const projectNames = config["projects"]

                setProjects(projectNames.map(x => {
                    return {
                        name: x.name,
                        subtitle: x.subtitle,
                        url: config.GITHUB_URL + config.GITHUB_USER + '/' + x.name
                    }
                }))
            })
        })
    }, [])
    return (
        <div className='projectlist'>
            <p style={{ fontSize: '1.5vw' }}>click on a project to see its GitHub README</p>
            {projects.map(project => {
                return <Project {...project} />
            })}
        </div>
    )
}

export default Portfolio