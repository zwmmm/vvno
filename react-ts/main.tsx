import { lazy, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

const ErrorApp = () => {
  return <div>未找到入口文件，请检查文件是否存在，且是 default 导出</div>
}

// @ts-ignore
const App = lazy(() =>
  import(/* @vite-ignore */ `${__ROOT__}/index.tsx`).catch(() => ({
    default: ErrorApp,
  }))
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={<ErrorApp />}>
      <App />
    </Suspense>
  </StrictMode>
)
