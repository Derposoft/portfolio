import './Page.css'
import Project from '../../components/Project/Project'
import config from '../../utils/config.json'

function Portfolio(props) {
    const projectNames = [
        {name: 'Derposoft.github.io', subtitle: 'The website you\'re on!'},
        {name: 'discord-chess-bot', subtitle: 'A sassy Discord chess bot'},
        {name: 'ai-educator', subtitle: 'AI-based course generation website'},
        {name: 'multimodal-algorithm', subtitle: 'AWS SageMaker algorithm for multimodal data'},
        {name: 'crypto_pump_and_dump_with_deep_learning', subtitle: 'A deep learning study in the domain of crypto fraud'}
    ]
    
    const projects = projectNames.map(x => {
        return {
            name: x.name,
            subtitle: x.subtitle,
            url: config.GITHUB_URL+config.GITHUB_USER+'/'+x.name
        }
    })
    return (
        <div className='projectlist'>
            <p style={{fontSize: '1.5vw'}}>click on a project to see its GitHub README</p>
            {projects.map(project => {
                return <Project {...project}/>
            })}
        </div>
    )
}

export default Portfolio