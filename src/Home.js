import { Box, Link, Typography } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import { Stack } from "@mui/system";

const Home = () => {
  return <Box sx={{
    my: 2,
    mx: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <Stack direction="row" spacing={2}>
      <Typography variant="h4">Ankit Prakash</Typography>
      <Link underline="none" rel="noopener" target="_blank" href="https://docs.google.com/document/d/1JqTxAiJqapYk-NC5dPnOgQGvhmhfsMA2nQRXpEU3lug/edit?usp=sharing" title="CV icons">
        <Stack direction="row" spacing={1}>
          <DescriptionIcon />
          <span>Resume</span>
        </Stack>
      </Link>
    </Stack>
  </Box>;
};

export default Home;