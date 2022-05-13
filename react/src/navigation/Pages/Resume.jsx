import './Page.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
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
        <div class='projectlist'>
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
                        <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
                        <p>
                        {experience.description}
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>)
            })}
        </div>
    )
}

export default Resume