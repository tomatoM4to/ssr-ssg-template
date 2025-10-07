import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { StaticRouter } from 'react-router'

//@ts-ignore
import markdownit from 'markdown-it'

const md = markdownit();

export function render(_url: string) {
  const url = `/${_url}`;

  // call SSR function or API here and pass the result as props
  const result = "# React Markdown"
  // const result = md.render('# markdown-it rulezz!');

  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App markdown={result} />
      </StaticRouter>
    </StrictMode>,
  )
  return {
    html,
    result
  }
}
