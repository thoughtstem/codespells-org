// import '../App.css';
import {Page} from "../../Components/Page"
import {Link} from "react-router-dom"

import AuthoringToolsHelloWorldPost from "./AuthoringToolsHelloWorldPost"
import RepackagingAuthoringToolsPost from "./RepackagingAuthoringToolsPost"
import HelloWorldBlogPost from "./HelloWorldBlogPost"

let blogPosts = [
  {title: "Getting Started with the CodeSpells Authoring Tools",
   slug: "getting-started-with-the-codespells-authoring-tools",
   component: AuthoringToolsHelloWorldPost,
   published: false
  },
  {title: "Repackaging the CodeSpells Authoring Tools",
   slug: "repackaging-the-codespells-authoring-tools",
   component: RepackagingAuthoringToolsPost,
   published: true
  },
  {title: "Hello World",
   slug: "hello-world",
   component: HelloWorldBlogPost,
   published: true
  },
]

export function publishedBlogPosts(){
  return blogPosts.filter((b) => b.published)
}

export function allBlogPosts(){
  return blogPosts
}

export function BlogPostLink(props){
  let postToLinkTo = blogPosts.find((b)=> {return b.component.name == props.to.name})

  return <Link to={ "/blog/" + postToLinkTo.slug}> 
    {postToLinkTo.title}
  </Link>
}

export function BlogIndexPage(){
  return <Page>
    {blogPosts.map((b)=>{
      if(b.published)
        return b.component()
    })}
  </Page>
}