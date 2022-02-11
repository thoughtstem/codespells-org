import '../App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import MarkdownToJsx from 'markdown-to-jsx';
import {Page} from "../Components/Page"
import AuthoringToolsHelloWorldPost from "./AuthoringToolsHelloWorldPost"

export function BlogPost({title, date, children}){
  return(<>
    <Card style={{marginBottom: 10}}>
      <CardHeader title={title} subheader={date}>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  </>)
}


function TutorialBuildBlogPost(){

  return(
    <BlogPost title="Tutorial Build" date={"Feb 4, 2022"}>
      <MarkdownToJsx>
        {`
We just released a new build!  You can find it on our homepage.

This build replaces the so-called "clean" build 
-- in which CodeSpells booted up to a single code editor 
(which is theoretically sufficient for creating additional
  code editors and configuring your UI however you want).
But this kind of re-programmable UI is (obviously) a non-standard
UI paradigm, so we're adding a tutorial.

For those who have asked, our short-term goals these days are:

1) Make the tutorial build work with our auto-updater so that you don't have to keep redownloading it whenever we add tutorial content.
2) Write a blog post to help new developers install and use the CodeSpells authoring tools.
3) Make some blog posts that can be viewed and interacted with in-game

~Stephen and Lindsey
        `}
      </MarkdownToJsx>
    </BlogPost>

  )
}

function HelloWorldBlogPost(){
  return(<>
    <BlogPost title="Hello World!" date={"Jan 28, 2022"}>
      <MarkdownToJsx>
        {`Hello, world!  We have a new blog (as you can see).  This post proves it.

Because we're using \`markdown-to-jsx\`, we have fancies like...

#Headers

Oh, and...

##Subheaders

And... Code!

  \`\`\`
  (print "Hello World")
  \`\`\`

And... you get the point.  Anyway, see you in the next blog post!


~Stephen and Lindsey
        `}
      </MarkdownToJsx>
    </BlogPost>
  </>)
}

function BlogContent(){
  return(
    <Container maxWidth="md" style={{marginTop: 20, position:"relative", zIndex: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AuthoringToolsHelloWorldPost />
          <TutorialBuildBlogPost />
          <HelloWorldBlogPost />
        </Grid>
      </Grid>
    </Container>
  )
}

export function BlogPage(){
  return(
    <Page>
      <BlogContent />
    </Page>
  )
}
