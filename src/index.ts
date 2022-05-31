import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import { resolve, extname } from 'path'
import minimist from 'minimist'
import consola from 'consola'
import { execSync } from 'child_process'

const argv = minimist(process.argv.slice(2))

const filename = process.argv[2]
const cwd = process.cwd()

async function dev(filename: string) {
  const lang = extname(filename).slice(1)
  let root
  let plugins = []
  const isReact = lang !== 'vue'

  if (isReact) {
    consola.log('  > 预览 React')
    root = resolve(__dirname, '../react')
    plugins = [react()]
  } else {
    consola.log('  > 预览 Vue')
    root = resolve(__dirname, '../vue')
    plugins = [vue()]
  }

  execSync(`rm -rf ${resolve(__dirname, 'node_modules/.vite')}`)

  const server = await createServer({
    root,
    plugins,
    server: {
      port: argv.p,
      cors: argv.cors || false,
      open: true,
      host: true,
      fs: {
        strict: false,
      },
    },
    optimizeDeps: {
      include: isReact ? ['react/jsx-runtime'] : [],
    },
    define: {
      __MAIN__: JSON.stringify(resolve(cwd, filename)),
      'process.env': {},
      global: {},
    },
  })
  await server.listen()
  server.printUrls()
}

if (!filename) {
  consola.error('请指定需要预览的文件，比如 vvd index.jsx')
  process.exit(-1)
}

dev(filename).then(() => {})
