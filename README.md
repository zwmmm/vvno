# 直接运行组件

基于 **Vite** 快速运行前端组件

```bash
> vvno index.tsx
```

## 支持以下几种

- React
- Vue
- TypeScript

## 安装

```bash
> yarn global add vvno
```

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