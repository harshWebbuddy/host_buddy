import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { styled } from '@mui/system';

const DashedTimelineConnector = () => (
  <TimelineConnector style={{ flex: 1 }}>
    <div
      style={{
        height: '100%',
        backgroundColor:'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '2px',
          borderLeft: '2px dashed #FF7500',
          height: '100%',
        }}
      />
    </div>
  </TimelineConnector>
);

export default function BasicTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: '#FF7500' }} />
          <DashedTimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineDot style={{ backgroundColor: '#FF7500', marginRight: '8px' }} />
          Eat
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: '#FF7500' }} />
          <DashedTimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineDot style={{ backgroundColor: '#FF7500', marginRight: '8px' }} />
          Code
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: '#FF7500' }} />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineDot style={{ backgroundColor: '#FF7500', marginRight: '8px' }} />
          Sleep
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
    