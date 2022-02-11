
import {BlogPost} from "./util"
import MarkdownToJsx from 'markdown-to-jsx';

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


export default HelloWorldBlogPost