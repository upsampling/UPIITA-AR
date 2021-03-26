import React from 'react'
import TimeLineData from './TimeLineData'
import '../../styles/TimeLine.css'
import { Container } from 'react-bootstrap';

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

export const Timeline = () =>
    TimeLineData.length > 0 && (
        <Container fluid>
        <div className="timeline-container">
            {TimeLineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
        </Container>

    );

