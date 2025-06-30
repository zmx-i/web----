"use client";
import Link from 'next/link';

export default function SeineRiverCruisePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-slate-800 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(251,191,36,0.15),rgba(251,191,36,0))] z-0"></div>
      <main className="flex-grow w-full h-full relative z-10">
        <div className="fixed top-0 left-0 w-full z-20 bg-white/95 backdrop-blur-md border-b border-amber-200 shadow-lg">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-amber-600 hover:text-amber-700 text-xl font-bold transition-colors">← 返回首页</Link>
              <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent drop-shadow">🌅 塞纳河夕阳巡游体验</span>
            </div>
            <span className="text-slate-500 text-sm hidden md:block">浪漫巴黎水上之旅</span>
          </div>
        </div>
        <section className="max-w-3xl mx-auto mt-20 mb-4 bg-white/90 backdrop-blur-sm rounded-xl border border-amber-200 shadow-lg p-4 relative z-20">
          <h2 className="text-lg font-bold text-amber-600 mb-2 flex items-center gap-2">
            ⛵ 塞纳河夕阳巡游 - 智能旅游问答服务
          </h2>
          <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
            <li>本案例演示了如何在 Next.js 页面中嵌入第三方智能问答服务，为塞纳河巡游提供贴心的旅游咨询。</li>
            <li>顶部为精美的巴黎风格导航栏，下方为沉浸式的智能问答体验区域。</li>
            <li>如需体验交互，请直接在下方问答区输入关于塞纳河巡游的问题。</li>
          </ul>
        </section>
        <iframe
          src="https://ai.youdao.com/saas/qanything/#/home"
          title="塞纳河巡游智能问答服务"
          width="100%"
          height="100%"
          className="fixed left-0 w-full z-10 rounded-t-xl border-t-4 border-amber-300"
          style={{
            top: 140, // 减少高度以避免遮挡
            height: 'calc(100vh - 140px)',
            border: 'none',
            borderTop: '4px solid #f59e0b',
          }}
          allowFullScreen
        />
      </main>
    </div>
  );
} 