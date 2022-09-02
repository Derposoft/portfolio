import './Page.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import 'react-vertical-timeline-component/style.min.css';
/*
import axios from 'axios'
const cheerio = require('cheerio')
const LINKEDIN_URL = 'https://www.linkedin.com/in/viswanath-chadalapaka-910b2013b/'
axios.get(LINKEDIN_URL).then(res => {
    const $ = cheerio.load(res.data)
    const lists = $('.pvs-list')
    console.log(lists)
})

const educations = [
    {
        icon: 'ucdLogo.png',
        name: 'B.S. in Computer Science',
        location: 'Davis, CA',
        description: '',
        time: '2017 - 2020',
        color: '#fff'
    }
]
*/
const experiences = [
    {
        icon: 'metaLogo.png',
        name: 'meta SWE intern',
        location: 'menlo park, CA',
        description: 'designed and developed a metrics collection framework for Facebook and Instagram Ads models. \
        also generated and tested novel features for those models.',
        time: 'summer 2022',
        color: '#1a4261'
    },
    {
        icon: 'ict_logo.jpeg',
        iconRadius: '50%',
        name: 'USC ICT grad student researcher',
        location: 'Los Angeles, CA',
        description: 'grad student researcher at the USC Institute for Creative Technologies, exploring the \
        intersection of graph learning and reinforcement learning. funded by DARPA.',
        time: '09/2021-05/2022, 08/2022-Present',
        color: '#1a4261'
    },
    {
        icon: 'aws.png',
        name: 'aws solutions architect',
        location: 'seattle, WA',
        description: 'built a realtime livestream censoring solution. learned how to understand customer needs.',
        time: 'Jan 2021 - July 2021',
        color: '#d68c1c'
    },
    {
        icon: 'aws.png',
        name: 'aws solutions architect intern',
        location: 'seattle, WA',
        description: 'built a scalable, multimodal SageMaker algorithm. built an internal tool to help facilitate customer events',
        time: 'summer 2020',
        color: '#d68c1c'
    }
]

function Resume(props) {
    const BG_COLOR = '#53476e'
    return (
        <div className='tall'>
        <a href='Viswanath_Chadalapaka_Resume.pdf' download='Viswanath_Chadalapaka_Resume.pdf' style={{height: '10%'}}>
            <p className='resume-download'><AttachFileIcon style={{fontSize: 'large'}} /> download resume</p>
        </a>
        <div class='projectlist' style={{height: '90%'}}>
            {experiences.map(experience => {
                return (<VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: BG_COLOR, color: '#fff', boxShadow: '0 3px 0 '+experience.color }}
                        contentArrowStyle={{ borderRight: '7px solid  ' + BG_COLOR }}
                        date={experience.time}
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<img style={{verticalAlign: 'top', borderRadius: experience.iconRadius}} className='timelineicon' src={experience.icon} alt='logo' />}
                    >
                        <h3 className="vertical-timeline-element-title">{experience.name}</h3>
                        <h5 className="vertical-timeline-element-subtitle">{experience.location}</h5>
                        <p>
                        {experience.description}
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>)
            })}
        </div>
        </div>
    )
}

export default Resume