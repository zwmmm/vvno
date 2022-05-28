import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = process.cwd()

export async function dev(filename: string) {
  const server = await createServer({
    root: resolve(__dirname, '../../react-ts'),
    server: {
      fs: {
        strict: false,
      },
    },
    define: {
      __MAIN__: JSON.stringify(resolve(root, filename)),
    },
    plugins: [react()],
  })
  await server.listen()
  server.printUrls()
}
