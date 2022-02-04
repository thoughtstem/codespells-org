import '../App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import MarkdownToJsx from 'markdown-to-jsx';
import {Page} from "../Components/Page"

function BlogPost({title, date, children}){
  return(<>
    <Card >
      <CardHeader title={title} subheader={date}>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  </>)
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