//import '../App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import MarkdownToJsx from 'markdown-to-jsx';
import {Page} from "../../Components/Page"
import {BlogPost} from "./util"
import {BlogPostLink} from "./index" //circular dep, is this okay, Mr. JavaScript?
import AuthoringToolsHelloWorldPost from "./AuthoringToolsHelloWorldPost" 

function RepackagingAuthoringToolsPost(){

  return(
      <BlogPost title="Repackaging the CodeSpells Authoring Tools" date={"Feb 11, 2022"}>
        <MarkdownToJsx>
          {`Since our [RacketCon talk](https://www.youtube.com/watch?v=MEhAVz-Kpj0&ab_channel=Racket), we've heard from several people who are interested in using CodeSpells for their own projects. 
Thus, it's high time that we repackage the CodeSpells Authoring tools we've built over the last year and a half.

To that end, we've written a blog post that we *want* to be true (but isn't yet): `}
        </MarkdownToJsx>
        <BlogPostLink to={AuthoringToolsHelloWorldPost} />
        <br/>
        <MarkdownToJsx>
        {`It mentions three repositories, which we need to 
create and put stuff in.  Then, theoretically, people can go through our getting started process and write cool programs powered by React, Racket, and Unreal!`}
        </MarkdownToJsx>
      </BlogPost>
  )
}

export default RepackagingAuthoringToolsPost
