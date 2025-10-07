import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router'

// @ts-ignore
let initialData = window.__INITIAL_DATA__;

// ⬇️ 데이터가 없을 경우, 눈에 띄는 기본값을 넣어줍니다. ⬇️
if (initialData === undefined) {
  initialData = "# 클라이언트에서 렌더링됨!";
}


hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <BrowserRouter>
      <App markdown={initialData} />
    </BrowserRouter>
  </StrictMode>,
)
