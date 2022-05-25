import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { SocialIcon } from 'react-social-icons';
import 'react-vertical-timeline-component/style.min.css';


export default function Resume(props) {
    const siStyle = {}
    const timelineElements = [
        {
            date: '2017-2021',
            title: 'High School Diploma - Apex Friendship High School',
            location: 'Apex, NC',
            description: 'Activities and Societies: Technology Student Assn (Vice President), Science Olympiad (Test Captain), National Technical Honor Society (...)'
        },
        {
            date: '2019-2021',
            title: 'Supplemental Coursework - North Carolina School of Science and Mathematics Online',
            location: 'Durham, NC',
            description: 'Notable Coursework: '
        }
    ]

    const timelineComponents = timelineElements.map((element) =>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={element.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
            <p>
            {element.description}
            </p>
        </VerticalTimelineElement>
    );

    return (
        <VerticalTimeline>
            {timelineComponents}
        </VerticalTimeline>
        );
}