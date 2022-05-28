import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = process.cwd()

export async function dev() {
  const server = await createServer({
    root: resolve(__dirname, '../../react-ts'),
    server: {
      fs: {
        strict: false,
      },
    },
    define: {
      __ROOT__: JSON.stringify(root),
    },
    plugins: [react()],
  })
  await server.listen()
  server.printUrls()
}
