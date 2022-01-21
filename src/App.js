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
        <div className="twitch">
          <div className="twitch-video embed-responsive embed-responsive-16by9">
            <iframe src="https://player.twitch.tv/?channel=codespells&parent=codespells.org&autoplay=false" frameBorder={0} scrolling="no" allowFullScreen={true} height="100%" width="100%"/>   
          </div>
        </div>
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
        <p>Coding is the closest thing to magic we’ve got. So why doesn’t everyone want to learn it?</p>
        <p>CodeSpells is the platform for you if:</p>
        <ul>
          <li>You’ve always wanted to be a wizard.</li>
          <li>You secretly suspect that other coding platforms aren’t as magical as they could be.</li>
          <li>You want to learn (and perhaps teach) the magic of coding.</li>
        </ul>
        <p>Although CodeSpells is under active development, it’s already quite powerful. We use it ourselves every day to produce computer science educational content on <a href="https://www.twitch.tv/codespells">Twitch</a> and <a href="https://www.youtube.com/channel/UCxCGsdZJ16d1q_3SbtNMbtQ">YouTube</a>.</p>
        <p>If you’re interested in our content or in getting CodeSpells for yourself, see below! And please consider supporting us on <a href="https://patreon.com/codespells">Patreon</a>.</p>
        <p>Sincerely,</p>
        <p>Stephen Foster, Ph.D. and Lindsey Handley, Ph.D.</p>
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
        <div className="twitch">
          <div className="twitch-video embed-responsive embed-responsive-16by9">
            <iframe src="https://player.twitch.tv/?collection=wWRRKZeIsxYyAw&parent=codespells.org&autoplay=false" frameBorder={0} scrolling="no" allowFullScreen={true} height="100%" width="100%"/>   
          </div>
        </div>
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
        <iframe src="https://www.youtube.com/embed/videoseries?list=PLZfqZ8S_29LHAhwyI6DoMNsUfWzv8kMOK" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen height={315} width="100%"/>
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
        <ul>
          <li><b><a href="https://codespells-org.s3.amazonaws.com/Nexus/Versions/Clean-0.0.7z">The Clean Build:</a></b> A simple but powerful build of CodeSpells. It ships with a sleek, highly-configurable UI, an infinite voxel world, a powerful scripting language, and extensive documentation. We use this build ourselves when we make educational content.</li>
          <li><b><a href="https://codespells-org.s3.amazonaws.com/Nexus/Versions/RacketConPresentation.7z">The Racketcon Build:</a></b> A presentation we built for RacketCon. We’ve frozen that build so that you can (if you wish) run the examples from our RacketCon talk.</li>
          <li><b><a href="https://nexus.codespells.org/#/">The Sock Puppet Build:</a></b> A demonstration of how the CodeSpells UI can be used to create story-driven coding experiences that blur the lines between educational technology and games. Under the mentorship of a mysterious sock puppet, you must infiltrate and reprogram a super-intelligent “Learn to Code” app that seeks global domination. Solve puzzles. Learn to code. Hack the Nexus.</li>
        </ul>
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
        <ul>
          <li><a href="https://www.patreon.com/codespells"><i className="fas fa-gem">Join our Patreon</i></a></li>
          <li><a href="https://discord.gg/prsZZnm"><i className="fas fa-user-friends">Join the Discord</i></a></li>
          <li><a href="http://store.steampowered.com/app/324190"><i className="fas fa-gamepad">Get the Original Game on Steam</i></a></li>
          <li><a href="http://eepurl.com/hacdwD"><i className="fas fa-envelope">Join the Mailing List</i></a></li>
        </ul>
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
        <p><b>Stephen R. Foster, Ph.D.</b> and <b>Lindsey D. Handley, Ph.D.</b></p>

        <p>We founded <a href="https://www.thoughtstem.com/">ThoughtSTEM</a>, wrote a book called <a href="https://dont-teach.com/">Don't Teach Coding</a>, and currently work full-time on CodeSpells.</p>
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
