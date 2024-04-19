import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HomeImage from '/home-image-mobile.png';
import Button from '@mui/material/Button';

const Home = () => (
  <div style={{ height: '100vh' }}>
    <div>
      <img src={HomeImage} />
    </div>
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly" height="28vh">
      <Typography component="h1" color="#000000" fontWeight={800} fontFamily="Raleway" fontSize={30}>
        Welcome to Easy Key
      </Typography>
      <Button
        sx={{
          color: '#ffffff',
          backgroundColor: '#1336AC',
          width: '350px',
          padding: '12px 12px',
          border: 'solid 1px #1336AC',
          borderRadius: '20px',
          fontFamily: 'inter',
          fontSize: '16px',
          fontWeight: '600',
          textTransform: 'none',
          // marginTop: '45px',
        }}
      >
        Create account
      </Button>
    </Box>
  </div>
);

export default Home;
