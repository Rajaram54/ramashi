
 import img2 from "../asserts/2.jpg";
 import img12 from "../asserts/12.jpeg";
 import img6 from "../asserts/6.jpg";
 import img7 from "../asserts/7.jpg";
 import img8 from "../asserts/8.jpg";
 import img9 from "../asserts/9.jpeg";
 import img10 from "../asserts/10.jpeg";
 import img13 from "../asserts/13.jpeg";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function CustomizedTimeline() {
  return (
    <Box component="main" height="100vh">
      <Typography className='heading-span text-align-center mt-10'>We Love Each Other</Typography>
      <Typography className="heading-pink text-align-center">Our Story</Typography>
      <Typography className="heading-span text-align-center"> We love because it’s the only true adventure...</Typography>
    <Timeline position="alternate">
    <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <img className='timeline-img border-50' src={img2} alt="Avatar"></img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='span-heading-pink'>
            Got to know
          </Typography>
          <Typography className='heading-span'>17 July 2022</Typography>
          <Typography className='heading-span'>Got to know each other through traditional dating app i.e parents...</Typography>
        </TimelineContent>
      </TimelineItem>
      
      
      
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <img className='timeline-img border-50' src={img8} alt="Avatar"></img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='span-heading-pink'>
          First shopping
          </Typography>
          <Typography className='heading-span'>11 Auguest 2022</Typography>
          <Typography className='heading-span'>Shopping is no less than therapy. The kind of happiness, excitement, and satisfaction that comes with shopping is real and undeniable....</Typography>
        </TimelineContent>
      </TimelineItem>
      
     
     
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          <img className='timeline-img border-50' src={img7} alt="Avatar"></img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='span-heading-pink'>
              First Ride
          </Typography>
          <Typography className='heading-span'>20 Augest 2022</Typography>
          <Typography className='heading-span'>On our first meeting, my heart told me you are the one!!!</Typography>
        </TimelineContent>
      </TimelineItem>
      
      
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <img className='timeline-img border-50' src={img6} alt="Avatar"></img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='span-heading-pink'>
            First Date
          </Typography>
          <Typography className='heading-span'>27 Augest 2022</Typography>
          <Typography className='heading-span'>Perfect first date would be coffee at Aroma talking for hours. That’s when I would know to ask for a second date</Typography>
        </TimelineContent>
      </TimelineItem>
     
     
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          <img className='timeline-img border-50' src={img10} alt="Avatar"></img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='span-heading-pink'>
            First Fight
          </Typography>
          <Typography className='heading-span'>1 September 2022</Typography>
          <Typography className='heading-span'>Fight is a way to show no matter what, we both will stick together forever.</Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <img className='timeline-img border-50' src={img13} alt="Avatar"></img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='span-heading-pink'>
            First Beach
          </Typography>
          <Typography className='heading-span'>13 October 2022</Typography>
          <Typography className='heading-span'>The ocean stirs the heart, inspires the imagination and brings eternal joy to the soul.</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          <img className='timeline-img border-50' src={img11} alt="Avatar"></img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='span-heading-pink'>
            First Trip
          </Typography>
          <Typography className='heading-span'>13 November 2022</Typography>
          <Typography className='heading-span'>It doesn’t matter where you are going, it’s who you have beside you.</Typography>
        </TimelineContent>
      </TimelineItem> */}


      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          <img className='timeline-img border-50' src={img9} alt="Avatar"></img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='span-heading-pink'>
            Marraige shopping
          </Typography>
          <Typography className='heading-span'>11 December 2022</Typography>
          <Typography className='heading-span'>Shopping for your wedding dress is a moment you’ll remember for the rest of your life...</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <img className='timeline-img border-50' src={img12} alt="Avatar"></img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='span-heading-pink'>
            First spiritual travel
          </Typography>
          <Typography className='heading-span'>6 Jan 2023</Typography>
          <Typography className='heading-span'>Spirituality: the art of keeping your internal fire alive.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Box>
  );
}