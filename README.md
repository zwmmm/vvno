<h1 align='center'>
  <samp>vvno</samp>
  <a href='https://www.npmjs.com/package/vvno'>
    <img src='https://img.shields.io/npm/v/vvno?color=333&labelColor=555&style=flat-square' alt='version'/>
  </a>
</h1>

<p align='center'>
  <samp>基于 Vite 快速运行前端组件</samp>
<br>

## 安装

```bash
> yarn global add vvno
```

## 支持以下几种

- React
- Vue
- TypeScript

## 使用

- 预览 React 组件

    ```tsx
    // index.tsx
    
    export default function () {
      return <div>React</div>
    }
    
    ```
    
    ```shell
    > vvno index.tsx
    ```

- 预览 Vue 组件

    ```vue
    <!--  index.vue  -->
    
    <template>
      <div>Vue</div>
    </template>
    ```
    
    ```shell
    > vvno index.vue
    ```