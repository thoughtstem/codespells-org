import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function HomePageCard(props){
  return(
  <Card sx={{ minWidth: 275, margin: "4px" }}>
    {props.children}
  </Card>
  )
}

function DevelopmentLivestreamCard(){
  return(
          <HomePageCard>
            <CardHeader title="Development Live Stream
">
            </CardHeader>
            <CardContent>
              Testing
            </CardContent>
          </HomePageCard>
  
  )
}

function AboutTheProjectCard(){
  return(
          <HomePageCard>
            <CardHeader title="About the Project">
            </CardHeader>
            <CardContent>
              Testing
            </CardContent>
          </HomePageCard>
  )
}

function RecentOnTwitchCard(){
  return(
          <HomePageCard>
            <CardHeader title="Recent on Twitch">
            </CardHeader>
            <CardContent>
              Testing
            </CardContent>
          </HomePageCard>
  )
}

function RecentOnYoutubeCard(){
  return(
          <HomePageCard>
            <CardHeader title="Recent on Youtube">
            </CardHeader>
            <CardContent>
              Testing
            </CardContent>
          </HomePageCard>
  )
}

function BuildsCard(){
  return(
          <HomePageCard>
            <CardHeader title="Builds">
            </CardHeader>
            <CardContent>
              Testing
            </CardContent>
          </HomePageCard>
  )
}

function WaysToSupportCard(){
  return(
          <HomePageCard>
            <CardHeader title="Ways to Support">
            </CardHeader>
            <CardContent>
              Testing
            </CardContent>
          </HomePageCard>
  )
}

function AboutTheAuthorsCard(){
  return(
          <HomePageCard>
            <CardHeader title="About the Authors">
            </CardHeader>
            <CardContent>
              Testing
            </CardContent>
          </HomePageCard>
  )
}

function BackgroundImage(){
  return(
    <div style={{position: "fixed", zIndex: 0, backgroundImage:"url(EarthBall.png)", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat: "no-repeat", backgroundAttachment:"fixed", height:"100vh", width:"100vw"}}>
    </div>
  ) 
}

function MainContent(){

  return(
    <Container maxWidth="md" style={{marginTop: 20, position:"relative", zIndex: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DevelopmentLivestreamCard/>
          <RecentOnTwitchCard/>
          <WaysToSupportCard/>
        </Grid>
        <Grid item xs={6}>
          <AboutTheProjectCard/>
          <RecentOnYoutubeCard/>
          <BuildsCard/>
          <AboutTheAuthorsCard/>
        </Grid>
      </Grid>
    </Container>
  )
}

function NavBar(){

  return(
  <AppBar position="static" color="primary" >
    <Container maxWidth="xl">
    <Toolbar disableGutters>
      <a href="https://codespells.org">
        <img src="./logo.png" style={{width: 100}}/> 
      </a>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Box sx={{ flexGrow: 0 }}>
        <a style={{color: "rgba(255,255,255,.5)"}} 
          target="_blank" 
          href="https://www.twitch.tv/codespells" 
          className="fab fa-twitch fa-2x p-1"></a>
        <a style={{color: "rgba(255,255,255,.5)"}} 
          target="_blank" 
          href="https://facebook.com/codespells" 
          className="fab fa-facebook-square fa-2x p-1"></a>
        <a style={{color: "rgba(255,255,255,.5)"}} 
          target="_blank" 
          href="https://twitter.com/codespells" 
          className="fab fa-twitter-square fa-2x p-1"></a>
        <a style={{color: "rgba(255,255,255,.5)"}} 
          target="_blank" 
          href="https://www.youtube.com/channel/UCxCGsdZJ16d1q_3SbtNMbtQ" 
          className="fab fa-youtube fa-2x p-1"></a>
        <a style={{color: "rgba(255,255,255,.5)"}} 
          target="_blank" 
          href="https://discord.gg/prsZZnm" 
          className="fab fa-discord fa-2x p-1"></a>
      </Box>
    </Toolbar>
    </Container>
  </AppBar>
  )
}

function App() {
  return (
    <>
      <NavBar/>
      <BackgroundImage/>
      <MainContent/>
    </>
  );
}

export default App;
