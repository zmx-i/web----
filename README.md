# 梦想旅行博客平台

## 项目简介

这是一个基于Next.js构建的旅行主题博客平台，展示了世界各地的旅游景点和旅行体验。项目采用现代化UI设计，结合Tailwind CSS实现响应式布局，提供了丰富的交互体验和视觉效果。用户可以浏览不同地区的旅游目的地，查看详细介绍和相关活动推荐。

## QAnything集成路径与实现细节

### 选择的路径
项目采用API集成方式与QAnything进行对接，通过后端服务调用QAnything API实现智能问答功能。

### 实现原因
1. 保持前端应用的轻量化，避免直接在客户端集成复杂逻辑
2. 通过后端代理可以有效保护API密钥和敏感信息
3. 便于未来扩展更多AI功能和服务

### 实现步骤
1. 在`src/app/api/qanything/route.ts`创建API路由
2. 实现请求验证和参数处理
3. 调用QAnything API并处理返回结果
4. 前端通过`fetch`调用该API获取智能问答服务

## WakaTime API集成方法

项目集成了WakaTime API用于统计开发时间和代码活动。

### 集成步骤
1. 在`.env.local`文件中配置API密钥：
```
WAKATIME_API_KEY="your_api_key_here"
```
2. 创建`src/app/wakatime-stats.tsx`组件获取和展示统计数据
3. 在页面中引入该组件显示开发统计信息

## Next.js项目结构

```
blog-platform/
├── .env.local                # 环境变量配置
├── next.config.ts            # Next.js配置
├── package.json              # 项目依赖
├── public/                   # 静态资源
└── src/
    └── app/
        ├── exercise-card.tsx # 练习卡片组件
        ├── exercises.json   # 练习数据
        ├── globals.css      # 全局样式
        ├── layout.tsx       # 根布局
        ├── page.tsx         # 首页
        ├── practice/        # 练习页面目录
        └── wakatime-stats.tsx # WakaTime统计组件
```

## 旧作业整合方式

以往的作业练习通过以下方式整合到项目中：

1. 所有练习页面存放在`src/app/practice/`目录下
2. 每个练习主题创建独立的子目录，如`03-css-01`、`04-css-02`等
3. 练习页面使用统一的导航组件，提供返回首页功能
4. 共享组件和工具函数在多个练习中复用

## 项目运行指南

### 开发环境设置

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### 构建生产版本

```bash
npm run build
# or
yarn build
```

### 运行生产版本

```bash
npm run start
# or
yarn start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
<div class="section">
## 项目技术栈

- Next.js
- TypeScript
- Tailwind CSS
- React
- QAnything API
- WakaTime API
    <div class="gallery">
        <img src="blog-platform\public\screenshots\QAnything运行截图.png" alt="QAnything运行截图" />
        <img src="blog-platform\public\screenshots\WakaTime运行截图.png" alt="WakaTime运行截图" />
        <img src="blog-platform\public\screenshots\Next.js运行截图.png" alt="Next.js运行截图" />
    </div>
</div>