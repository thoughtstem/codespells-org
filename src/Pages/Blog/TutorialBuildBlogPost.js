

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
