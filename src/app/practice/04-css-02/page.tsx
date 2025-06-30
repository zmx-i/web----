import Link from 'next/link';

export default function SwissAlpsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-gray-50 text-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.2),rgba(34,197,94,0))]"></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-600 via-blue-600 to-gray-600 mb-4">
            🏔️ 瑞士阿尔卑斯山脉
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            征服欧洲屋脊阿尔卑斯山脉，体验世界级滑雪胜地和迷人山村小镇的无限魅力。在雪山之巅，感受大自然的壮阔与宁静。
          </p>
        </header>

        <div className="space-y-12">
          
          {/* Section: Mountain Landscape */}
          <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-green-200 p-8">
            <h2 className="text-3xl font-bold text-green-600 mb-2 border-l-4 border-green-400 pl-4">🏔️ 山脉景观分布</h2>
            <p className="text-slate-600 mb-8 pl-5">阿尔卑斯山脉的各个景点分布在不同的海拔高度，每个位置都有其独特的风景和体验。</p>
            
            <div className="bg-gradient-to-b from-sky-100 to-green-100 p-10 rounded-lg h-80 relative border-2 border-dashed border-green-300">
              <div className="absolute top-4 left-4 text-xs text-slate-500">阿尔卑斯山脉全景图</div>
              
              <div className="w-48 h-24 bg-white/90 border border-green-300 rounded-lg p-4 text-center shadow-md">
                <p className="font-bold text-green-700">山脚村镇</p>
                <p className="text-sm text-slate-600">海拔 500-1000米</p>
              </div>

              <div className="w-48 h-24 bg-blue-100/90 border border-blue-400 rounded-lg p-4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg">
                <p className="font-bold text-blue-700">高山滑雪场</p>
                <p className="text-sm text-blue-600">海拔 2000-3000米</p>
                <p className="text-xs text-blue-500">🎿 滑雪胜地</p>
              </div>

               <div className="w-48 h-24 bg-gray-100/90 border border-gray-400 rounded-lg p-4 text-center absolute bottom-4 right-4 shadow-lg">
                <p className="font-bold text-gray-700">雪峰观景台</p>
                <p className="text-sm text-gray-600">海拔 3500-4000米</p>
                <p className="text-xs text-gray-500">🏔️ 山巅体验</p>
              </div>
            </div>
          </section>

          {/* Section: Cable Car Journey */}
          <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-green-200 p-8">
            <h2 className="text-3xl font-bold text-green-600 mb-2 border-l-4 border-green-400 pl-4">🚠 缆车观景体验</h2>
            <p className="text-slate-600 mb-8 pl-5">搭乘世界著名的阿尔卑斯山缆车，在不同高度欣赏壮丽的山景。随着海拔升高，风景也在不断变化。</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-700 mb-3">🌲 山脚景观</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• 茂密的针叶林和阿尔卑斯草甸</li>
                  <li>• 传统瑞士小木屋建筑</li>
                  <li>• 清澈的山间溪流和瀑布</li>
                  <li>• 野花盛开的高山牧场</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">🏔️ 高山景观</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• 终年积雪的壮丽雪峰</li>
                  <li>• 深邃的冰川和冰河湖</li>
                  <li>• 云海之上的震撼视野</li>
                  <li>• 多国边境的全景展望</li>
                </ul>
              </div>
            </div>

            <div className="h-48 flex justify-center items-center bg-gradient-to-r from-sky-100 to-blue-100 p-10 rounded-lg border border-sky-200">
                <p className="text-slate-600 text-center">向下滚动页面，观察右下角的固定缆车票务信息。</p>
            </div>
          </section>

          {/* This is the fixed element - Cable Car Ticket */}
          <div className="fixed bottom-10 right-10 w-48 h-20 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg shadow-2xl shadow-green-500/50 flex flex-col justify-center items-center z-50 animate-bounce cursor-pointer hover:scale-105 transition-transform">
            <span className="text-lg">🚠 缆车票务</span>
            <span className="text-sm opacity-90">立即预订</span>
          </div>

          {/* Additional Content Section */}
          <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-green-200 p-8">
            <h2 className="text-3xl font-bold text-green-600 mb-6">🎿 阿尔卑斯山活动推荐</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-700 mb-3 flex items-center gap-2">
                  <span>⛷️</span>滑雪运动
                </h4>
                <p className="text-slate-600 text-sm mb-4">世界顶级滑雪场，适合各种水平的滑雪爱好者</p>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• 策马特滑雪场</li>
                  <li>• 圣莫里茨度假村</li>
                  <li>• 格林德瓦雪域</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span>🥾</span>徒步探险
                </h4>
                <p className="text-slate-600 text-sm mb-4">穿越阿尔卑斯山的经典徒步路线，亲近自然</p>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• 勃朗峰环线TMB</li>
                  <li>• 马特洪峰步道</li>
                  <li>• 少女峰地区徒步</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                <h4 className="text-lg font-semibold text-purple-700 mb-3 flex items-center gap-2">
                  <span>🏨</span>山间住宿
                </h4>
                <p className="text-slate-600 text-sm mb-4">体验正宗的阿尔卑斯山区住宿文化</p>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• 传统山间小屋</li>
                  <li>• 奢华滑雪度假村</li>
                  <li>• 生态友好型酒店</li>
                </ul>
              </div>
            </div>
          </section>

        </div>

        {/* Add some space to allow for scrolling */}
        <div className="h-96"></div>

      </main>
    </div>
  );
} 