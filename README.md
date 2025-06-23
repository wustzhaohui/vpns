# 🚀 项目说明

## 📊 技术栈

- **React** – UI 构建
- **TypeScript** – 类型安全
- **Vite** – 极速构建工具
- **Tailwind CSS** – 原子化 CSS 框架
- **PostCSS** – 样式处理工具链

---

## 📁 项目结构说明

```
.
├── index.html                // HTML 入口
├── index.tsx                 // 应用入口文件
├── index.css                 // 全局样式入口
├── metadata.json             // 应用元信息
├── package.json              // 项目依赖配置
├── package-lock.json         // 锁定依赖版本
├── postcss.config.js         // PostCSS 配置
├── tailwind.config.js        // Tailwind 配置
├── tsconfig.json             // TypeScript 编译配置
├── tsconfig.node.json        // Node 环境 TS 配置
├── vite.config.ts            // Vite 构建配置
├── public/                   // 静态资源目录
│   ├── assets/               // 静态图片/图标等资源
│   ├── favicon.ico.png
│   ├── manifest.json         // PWA 配置
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   └── vite.svg
└── src/                      // 源码目录
    ├── App.tsx               // 根组件
    ├── main.tsx              // 应用挂载入口
    ├── components/           // 通用组件
    ├── pages/                // 页面组件
    ├── styles/               // 样式文件
    ├── index.css             // Tailwind + 全局样式引入
    └── vite-env.d.ts         // Vite 环境类型声明
```

---

## ⚙️ 常用脚本说明

```bash
# 安装依赖 (首次运行)
npm install

# 启动开发服务器
npm run dev

# 构建生产环境代码
npm run build

# 代码风格检查 (Lint)
npm run lint
```

---
