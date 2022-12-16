import './Page.css'
import Project from '../../components/Project/Project'
import config from '../../utils/config.json'

function Portfolio(props) {
    const projectNames = [
        {name: 'Derposoft.github.io', subtitle: 'the website you\'re on!'},
        {name: 'crypto_pump_and_dump_with_deep_learning', subtitle: 'a deep learning study in the domain of crypto fraud'},
        {name: 'plot_hole_detection', subtitle: 'an NLP study in detecting logical fallacies'},
        {name: 'ai-educator', subtitle: 'AI-based course generation website'},
        {name: 'discord-chess-bot', subtitle: 'a sassy Discord chess bot'},
        {name: 'multimodal-algorithm', subtitle: 'AWS SageMaker algorithm for multimodal data'},
        {name: 'commando', subtitle: 'the first thing I ever wrote: a game written in XNA'},
        {name: 'chess-visualizer', subtitle: 'a visual tool for analyzing past games'}
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