// @ts-nocheck
import React, { lazy, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

const ErrorApp = (props) => {
  return (
    <pre>
      <code>{props.message}</code>
    </pre>
  )
}

const App = lazy(() =>
  import(/* @vite-ignore */ __MAIN__).catch((e) => {
    console.error(e)
    return {
      default: () => <ErrorApp message={e.message} />,
    }
  })
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </StrictMode>
)
