import React from 'react';
import { Box, Grid, Link, Typography } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import { Stack } from "@mui/system";
import ChatRoom from "./ChatRoom";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

const Home = () => {
  return <Box sx={{
    my: 0,
    mx: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        color: '#fff',
        backgroundColor: `rgb(0 0 12)`,
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          height: {
            md: '66vh',
            sm: '50vh',
            xs: '35vh'
          },
          color: 'rgb(255, 255, 255)',
          position: 'relative',
          backgroundPositionY: 'top'
        }}
        className="home-background"
      >
        <Stack
          direction={{ xs: 'column', sm: 'column' }}
          spacing={{ xs: 1, sm: 5, md: 4 }}        
          alignItems="center"
          style={{
            position: 'relative',
            zIndex: 1
          }}
        >
          <Typography variant="h5">Hi, I'm</Typography>
          <Typography variant="h3" textAlign="center"
            sx={{
              fontSize: {
                xs: 30,
                sm: 50
              }
            }}
          >ANKIT PRAKASH</Typography>
        </Stack>
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        mt={7}
        mb={7}
      >
        <Stack direction="column" spacing={2} alignItems="center">
          <Typography variant="h4" mb={5}
            sx={{
              fontSize: {
                xs: 20,
                sm: 32
              }
            }}
          >WHO AM I?</Typography>
          <Typography variant="p" mt={10}>A well rounded Full-stack developer</Typography>
          <Typography variant="p" mt={10}>AIML Enthusiast</Typography>
          <Typography variant="p" mt={10}>A curious Musician</Typography>
          <Typography variant="p" mt={10}>A hardcore Gamer</Typography>
            
          <Typography variant="h6" padding={5}>Find out more <Link underline="none" rel="noopener" target="_blank" href="https://docs.google.com/document/d/1JqTxAiJqapYk-NC5dPnOgQGvhmhfsMA2nQRXpEU3lug/edit?usp=sharing" title="CV icons">
            <DescriptionIcon />
            <span>Resume</span>
          </Link>, and let's get in touch</Typography>
        </Stack>
      </Grid>
    </Grid>
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      mt={10}
      mb={15}
    >
      <Typography variant="h4"
        sx={{
          fontSize: {
            xs: 20,
            sm: 32
          }
        }}
      >MY CAREER</Typography>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        mt={10}
      >
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography><img width={120} alt="Thomson Reuters" src="tr.svg" /></Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography><img width={120} alt="Healthi" src="healthi_logo.png" /></Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography><img width={120} alt="Poshvine" src="poshvine-logo.png" /></Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>
                  <svg width={120} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 30" preserveAspectRatio="xMinYMid"><path d="M99.61,19.52h15.24l-8.05-13L92,30H85.27l18-28.17a4.29,4.29,0,0,1,7-.05L128.32,30h-6.73l-3.17-5.25H103l-3.36-5.23m69.93,5.23V0.28h-5.72V27.16a2.76,2.76,0,0,0,.85,2,2.89,2.89,0,0,0,2.08.87h26l3.39-5.25H169.54M75,20.38A10,10,0,0,0,75,.28H50V30h5.71V5.54H74.65a4.81,4.81,0,0,1,0,9.62H58.54L75.6,30h8.29L72.43,20.38H75M14.88,30H32.15a14.86,14.86,0,0,0,0-29.71H14.88a14.86,14.86,0,1,0,0,29.71m16.88-5.23H15.26a9.62,9.62,0,0,1,0-19.23h16.5a9.62,9.62,0,1,1,0,19.23M140.25,30h17.63l3.34-5.23H140.64a9.62,9.62,0,1,1,0-19.23h16.75l3.38-5.25H140.25a14.86,14.86,0,1,0,0,29.71m69.87-5.23a9.62,9.62,0,0,1-9.26-7h24.42l3.36-5.24H200.86a9.61,9.61,0,0,1,9.26-7h16.76l3.35-5.25h-20.5a14.86,14.86,0,0,0,0,29.71h17.63l3.35-5.23h-20.6"></path></svg>
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
    </Grid>
    <ChatRoom />
  </Box>;
};

export default Home;