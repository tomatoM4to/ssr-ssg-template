import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Link, Route, Routes } from "react-router";
import Markdown from 'react-markdown';

function App({
  markdown
}: {
  markdown: string
}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Markdown>
        {markdown}
      </Markdown>
      {/* <div dangerouslySetInnerHTML={{ __html: markdown }} /> */}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

const Home = () => {
  return <h1>I am Home</h1>;
};

const About = () => {
  return <h1>I am About</h1>;
};