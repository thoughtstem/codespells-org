import '../App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

function BackgroundImage(){
  return(
    <div style={{position: "fixed", zIndex: 0, backgroundImage:"url(EarthBall.png)", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat: "no-repeat", backgroundAttachment:"fixed", height:"100vh", width:"100vw"}}>
    </div>
  ) 
}

function SocialMediaLinks(){

 return (<>
        <a  
          target="_blank" 
          href="https://www.twitch.tv/codespells" 
          className="fab fa-twitch fa-2x p-1"></a>
        <a  
          target="_blank" 
          href="https://facebook.com/codespells" 
          className="fab fa-facebook-square fa-2x p-1"></a>
        <a  
          target="_blank" 
          href="https://twitter.com/codespells" 
          className="fab fa-twitter-square fa-2x p-1"></a>
        <a  
          target="_blank" 
          href="https://www.youtube.com/channel/UCxCGsdZJ16d1q_3SbtNMbtQ" 
          className="fab fa-youtube fa-2x p-1"></a>
        <a  
          target="_blank" 
          href="https://discord.gg/prsZZnm" 
          className="fab fa-discord fa-2x p-1"></a>
  </>)
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
        <SocialMediaLinks />
      </Box>
    </Toolbar>
    </Container>
  </AppBar>
  )
}

function FooterLink(props){
   return <a style={{display: "block", marginBottom: 10,  textDecoration: "none"}} href={props.href}>{props.children}</a>
}

function SupportUs(){
 return (<>
   <h3 style={{color: "white"}}>Support Us</h3>
   <FooterLink href="https://patreon.com/codespells">Join Our Patreon</FooterLink>
   <FooterLink href="https://twitch.tv/codespells">Become a Twitch Subscriber</FooterLink>
   <FooterLink href="https://store.steampowered.com/app/324190/CodeSpells/">Purchase Previous Version on Steam</FooterLink>
   <FooterLink href="https://codespells.us17.list-manage.com/subscribe?u=dbaae34bac76f17fad7bc6efd&id=a0f4e4cdc2">Join Our Mailing List</FooterLink>
 </>)
}

function ContactUs(){
 return (<>
   <h3 style={{color: "white"}}>Contact Us</h3>
   <p>codespells [at] thoughtstem [dot] com</p>
</>)
}

function FollowUs(){

 return (<>
   <h3 style={{color: "white"}}>Follow Us</h3>
   <SocialMediaLinks />
</>)
}

function Copyright(){

 return (<>
   <br/>
   <br/>
   <p>ThoughtSTEM, LLC Copyright 2022</p>
   <p>All Rights Reserved</p>
 </>)
}

function Footer() {
  return (
   <footer style={{zIndex: 1, position: "relative", margin: 0,  width: "100%", backgroundColor: "#343a40", paddingBottom: 20, marginTop: 100, color: "white"}}>
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={6}>
           <SupportUs />
           <ContactUs />
        </Grid>
        <Grid item xs={6}>
           <FollowUs />
           <Copyright />
        </Grid>
      </Grid>
    </Container>
   </footer>
  )
}

export function Page(props){
  return(<>
      <BackgroundImage/>
      <NavBar/>
      <div style={{paddingTop:60}}></div>
      {props.children}
      <Footer/>
  </>)
}
