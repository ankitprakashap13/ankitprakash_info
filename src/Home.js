import React from 'react';
import { Avatar, Box, Fab, Grid, Link, Step, StepLabel, Stepper, Typography } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import { Stack } from "@mui/system";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";

const whoami = [
  {text: "A Full-stack developer"},
  {text: "An AIML Enthusiast"},
  {text: "A curious Musician"},
  {text: "A hardcore Gamer"}
];

const workOrganisations = [
  {
    name: "Thomson Reuters",
    imagePath: "tr.svg",
    exp: "Aug 2014 - Dec 2015 · 1 yr 5 mos"
  },
  {
    name: "Healthi",
    imagePath: "healthi_logo.png",
    exp: "Jan 2016 - Jun 2018 · 2 yrs 6 mos"
  },
  {
    name: "Poshvine",
    imagePath: "poshvine-logo.png",
    exp: "Jun 2018 - Nov 2020 · 2 yrs 6 mos"
  },
  {
    name: "Oracle",
    imagePath: "oracle.svg",
    exp: "Nov 2020 - Present · 2 yrs 4 mos +"
  }
];

const Home = () => {
  return <Box
    sx={{
      my: 0,
      mx: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
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
          {
            whoami && whoami.map(text => (
              <Typography variant="p" mt={10}>{text.text}</Typography>
            ))
          }
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
        <Timeline position="left">
          {workOrganisations && workOrganisations.map((item, index) => (
            <TimelineItem>
              <TimelineOppositeContent
                color="text.secondary"
              >
                <Typography sx={{ fontSize: {xs: 12, sm: 12} }}>{item.exp}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                {(workOrganisations.length - 1) !== index &&
                  <TimelineConnector />
                }
              </TimelineSeparator>
              <TimelineContent>
                <Typography><img height={25} alt={item.name} src={item.imagePath} /></Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        mt={10}
        mb={15}
        style={{
          color: '#fff',
          backgroundColor: `rgb(0 0 12)`,
        }}
      >
        <Stack direction="column" spacing={2} alignItems="center">
          Watch me on twitch
        </Stack>
        <iframe src="https://player.twitch.tv/?channel=awol_ic1101&parent=ankitprakash.online" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
      </Grid>
    </Grid>
    <Fab href='/chatroom' color="primary" variant="extended"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
      }}
    >
      Join Chatroom
    </Fab>
  </Box>;
};

export default Home;