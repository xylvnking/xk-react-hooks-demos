import React from 'react'
import hookStyles from '../../styles/Hooks.module.scss'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <div className={hookStyles.container}>
      <header>
          <h1><small>home</small><span>:)</span></h1>
          <nav>
              <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
              <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
              <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
          </nav>
      </header>
      <main>
        <section>
          <h2> {'>'} This is a forever-on-going reference guide to working with React hooks. I started this because I kept forgetting small things and wanted a quick reference online in my own language.</h2>
          <h3>I'd like to include other topics about React over time. There's some custom hooks like useSound and the firebase hooks which are great. When I started this reference guide I had mostly only used useState and useEffect, so learning thr others throughout this process was a great experience.</h3>
          <h3>I used TypeScript for this project and the examples. I'm not an expert with TypeScript by any means, but I figured I'd do my best. If you notice anything I could do better please do let me know! Or just make a pull request, the code is open on GitHub.</h3>
          <h4>If you're a recruiter or hiring manager or somebody else with a work opportunity reading this, it means I'm actively looking for work. I'd love to hear from you and have a conversation :)</h4>
          <h3>Enjoy!</h3>
        </section>
      </main>
    </div>
  )
}