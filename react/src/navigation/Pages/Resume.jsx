import './Page.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { Button } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
    {
        icon: 'metaLogo.png',
        name: 'Meta SDE intern',
        location: 'Menlo Park, CA',
        description: 'summer 2022 intern at the shopping ads team',
        time: 'summer 2022',
        color: '#1a4261'
    },
    {
        icon: 'aws.png',
        name: 'AWS Solutions Architect',
        location: 'Seattle, WA',
        description: 'built a realtime livestream censoring solution. learned how to understand customer needs.',
        time: 'Jan 2021 - July 2021',
        color: '#d68c1c'
    },
    {
        icon: 'aws.png',
        name: 'AWS Solutions Architect intern',
        location: 'Seattle, WA',
        description: 'built a scalable, multimodal SageMaker algorithm. built an internal tool to help facilitate customer events',
        time: 'summer 2020',
        color: '#d68c1c'
    }
]
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

function Resume(props) {
    const BG_COLOR = '#53476e'
    return (
        <div className='tall'>
        <a href='2022Viswanath_Chadalapaka_Resume.pdf' target='_blank' style={{height: '10%'}}>
            <p className='resume-download'><AttachFileIcon style={{fontSize: 'medium'}} /> download resume</p>
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
                        icon={<img className='timelineicon' src={experience.icon} />}
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