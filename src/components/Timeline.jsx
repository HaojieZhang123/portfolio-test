import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import { GlowCapture, Glow } from '@codaworks/react-glow'

export default function LeftAlignedTimeline() {
    return (
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                },
            }}
        >
            <GlowCapture>
                <Glow>
                    <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                            <div className='year-tag'>2023-2024</div>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='warning' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div>
                                <h3 className='glowable-about'>Field Test Engineer</h3>
                                <h6 className='glowable-text'>Thundersoft</h6>
                                <p className='grey-text'>
                                    I independently carried out localization and field tests for mobile communication modules to validate performance in real-world conditions. I managed error log collection, test log organization, and the preparation of detailed test and error reports. Working closely with R&D teams, I helped debug and analyze critical issues by capturing valid log information and delivering accurate test results to support software optimization and release readiness.
                                </p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                            <div className='year-tag'>2021-2023</div>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='warning' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div>
                                <h3 className='glowable-about'>Local Test Engineer</h3>
                                <h6 className='glowable-text'>Thundersoft</h6>
                                <p className='grey-text'>
                                    I was responsible for testing mobile phone firmware before public release, ensuring product stability and performance. I conducted comprehensive tests on mobile communication modules, including VoLTE, ViLTE, VoWiFi, and ViWiFi functionalities. My role involved collecting and analyzing system logs, identifying issues, and providing detailed feedback to development teams to improve product quality and reliability.
                                </p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Glow>
            </GlowCapture>
        </Timeline>
    );
}
