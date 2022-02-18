//import '../App.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import MarkdownToJsx from 'markdown-to-jsx';
import {Page} from "../../Components/Page"
import {BlogPost} from "./util"

function AuthoringToolsHelloWorldPost(){
  return(
      <BlogPost title="Getting Started with the CodeSpells Authoring Tools" date={"Feb 4, 2022"}>
        <MarkdownToJsx>
          {`
For almost a year now, we've been working on making a clear distinction between 1) CodeSpells Authored Works
and 2) the CodeSpells Authoring Tools.  Granted, sometimes that distinction can be hard for people to understand 
because any CodeSpells Authored work can actually embed many of the Authoring Tools (allowing you to make 
  reprogrammable Authored Works).  

If any of the following apply, then this post is for you: 

1. You're interested in using CodeSpells to build a brand new reprogrammable 2D or 3D game (or research project, or educational tool).
2. You have an existing Unreal game and want to either make it reprogrammable or embed a web browser so you can use React for your UI.
3. You have an existing React UI and want to embed it in an Unreal-powered environment.

NOTE: If you just want to play with existing Authored Works -- then please simply download those from our homepage.  This post is for 
advanced developers.

The first thing to know is that there are three categories of CodeSpells Authoring Tools:

1. *Unreal Plugins* that help you make an Unreal environment reprogrammable.
2. *React Components* that help you create the UI for reprogrammable Unreal environments.
3. *Racket Systems* that 1) bridge React and Unreal, and 2) help you create novel programming languages (if you want).

You don't *technically* need to set up all of these (if, for example, you already have a React UI or an Unreal Project),
but to understand how the Authoring Tools fit together, you probably should.  So here goes.

First, make a directory:

\`\`\`
  mkdir MyAuthoredWork
\`\`\`

By the end of this tutorial, you'll have three sub-folders:

\`\`\`
  MyAuthoredWork/
  - my-codespells-ui/
  - my-codespells-language/
  - my-codespells-world/
\`\`\`

### React Components 

We distribute the React-powered Authoring Tools as an NPM package that can be added to any React project.  We'll assume you've made
a React project before, [using \`create-react-app\`](https://create-react-app.dev/).

\`\`\`
  cd MyAuthoredWork
  npx create-react-app my-codespells-ui
  cd my-codespells-ui
  npm i https://github.com/thoughtstem/codespells-react#main
\`\`\`

Now in \`App.js\` add the import:

\`\`\`
  import * as CS from "codespells-react"
\`\`\`

Then, somewhere in your main component, add:

\`\`\`
  <CS.CloseSpellbook />
\`\`\`

Or, if you want a prettier example, try replacing your entire \`App\` component with:

\`\`\`
  function App(){
    return(<CS.Window>
             <CS.CloseSpellbook />
           </CS.Window>)
  }
\`\`\`

Now check http://localhost:3000.  If you see a humble window with a humble button, then you've set up 33% of the CodeSpells Authoring Tools!  Nice job!

### Racket Systems 

Racket is a programming language for making programming languages.  First, [install it](https://racket-lang.org/).

Then, install our package:

\`\`\`
  raco pkg install https://github.com/thoughtstem/codespells-language-tools
\`\`\`

Now, let's use them

\`\`\`
  cd MyAuthoredWork
  mkdir my-codespells-language
  cd my-codespells-language
  cat "#lang racket" >> main.rkt
  cat "(require codespells-language-tools)" >> main.rkt
  cat "(start-websocket)" >> main.rkt
  racket main.rtk
\`\`\`

You will now see output from the websocket.  In fact, if you go back to http://localhost:3000 and press the \`<CS.CloseSpellbook/>\` button
we created earlier, you should see some output in the terminal running \`racket main.rkt\`.

Congratulations!  You now have 66% percent of the Authoring tools installed!

### Unreal Plugins

We're going to assume you've already [installed Unreal](https://docs.unrealengine.com/4.27/en-US/Basics/InstallingUnrealEngine/).  Use it
to create a new, empty Blueprint project called \`my-codespells-world\` in your \`MyAuthoredWork\` folder.

\`\`\`
  cd MyAuthoredWork
  mkdir my-codespells-world/Plugins
  cd my-codespells-world/Plugins
  git clone https://github.com/thoughtstem/codespells-unreal-plugins
\`\`\`

Now, in the Unreal Editor, enable the \`CodeSpells\` plugin and restart.  Then drag the \`CodeSpells\` blueprint 
(from the \`CodeSpells\` plugin) into your level.  When you launch your level, you should see whatever is running at http://localhost:3000
rendered atop your game world.

When you press the "Close" button, the UI will disappear.  When you press Spacebar, it will return.  

Congratulations!  You now have a working React-powered UI inside your Unreal world.  You're 100% ready to start 
creating your own Authored Work.

Sort of...  Documentation coming soon!  Read the source code for now.  (Hey, we said this is a tutorial for advanced developers!)

~Stephen and Lindsey
        `}
        </MarkdownToJsx>
      </BlogPost>
  )
}

export default AuthoringToolsHelloWorldPost
