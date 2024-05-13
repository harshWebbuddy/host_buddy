import Image from 'next/image';
import React from 'react';
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
        background:'linear-gradient(180deg, #FFF 0%, rgba(255, 117, 0, 0.70) 100%)',
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

const Uniquecpanel = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#FFFFFF]/100 to-[#FF7500]/70">
      <div className="p-4 w-full max-w-[1300px] mx-auto flex flex-col xl:flex-row items-center justify-center py-24">
        <div className="flex flex-col 2xl:flex-row mx-auto items-center justify-center ">
          <div className="w-full flex flex-col space-y-20">
            <div>
              <h2 className="text-[42px] leading-[63px] font-semibold text-black w-full 2xl:max-w-full">
                What Makes HostBuddy<span className="pb-4 border-b-4 border-orange-500"> Unique?</span>
              </h2>
            </div>
            <div className="w-full flex justify-start">
              <Image src="/cpanel/unique.jpeg" alt="" width={600} height={582} className="rounded-3xl h-[582px] w-full" />
            </div>
          </div>

          <div className="flex flex-col items-center pt-20">
            <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot style={{ backgroundColor: '#FF7500' }} />
                  <DashedTimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='flex flex-row items-start justify-start'>
                 
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot style={{ backgroundColor: '#FF7500' }} />
                  <DashedTimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='flex flex-row items-start justify-start'>
                  <TimelineDot style={{ backgroundColor: '#FF7500', marginBottom: '-10px', marginRight:'20px' }} />
                  <div className="transition-all duration-300 cursor-pointer xl:gap-6 text-[#16191C] text-left">
                    <h2 className="text-[22px] font-bold opacity-1 mb-4 ">24/7 & 365 Days Support </h2>
                    <p className="font-mona-sans text-[10px] font-normal leading-normal">
                      Lorem ipsum dolor sit amet consectetur. Lobortis ultrices nec tincidunt eget tempor tempus risus enim. Fames rhoncus sed mattis elit consectetur. Elit congue convallis quisque amet sit.
                    </p>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot style={{ backgroundColor: '#FF7500' }} />
                  <DashedTimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='flex flex-row items-start justify-start'>
                <TimelineDot style={{ backgroundColor: '#FF7500', marginBottom: '-10px', marginRight:'20px' }} />
                  <div className="transition-all duration-300 cursor-pointer xl:gap-6 text-[#16191C] text-left">
                    <h2 className="text-[22px] font-bold opacity-1 mb-4 ">30-Day Money Back</h2>
                    <p className="font-mona-sans text-[10px] font-normal leading-normal">
                      Lorem ipsum dolor sit amet consectetur. Non sagittis ullamcorper pharetra etiam. Pulvinar egestas ut sodales accumsan cras. Pretium pretium viverra nec libero vulputate ut. Cum et a dictum.
                    </p>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot style={{ backgroundColor: '#FF7500' }} />
                  <DashedTimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='flex flex-row items-start justify-start'>
                <TimelineDot style={{ backgroundColor: '#FF7500', marginBottom: '-10px', marginRight:'20px' }} />
                  <div className="transition-all duration-300 cursor-pointer xl:gap-6 text-[#16191C] text-left">
                    <h2 className="text-[22px] font-bold opacity-1 mb-4 ">99.95% Uptime </h2>
                    <p className="font-mona-sans text-[10px] font-normal leading-normal">
                        Lorem ipsum dolor sit amet consectetur. Non sagittis ullamcorper pharetra etiam. Pulvinar egestas ut sodales accumsan cras. Pretium pretium viverra nec libero vulputate ut. Cum et a dictum.
                    </p>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot style={{ backgroundColor: '#FF7500' }} />
                  <DashedTimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='flex flex-row items-start justify-start'>
                 
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uniquecpanel;