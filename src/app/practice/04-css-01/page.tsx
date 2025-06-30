import Link from 'next/link';

export default function MaldivesVillaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 text-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.2),rgba(6,182,212,0))]"></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-cyan-600 hover:text-cyan-700 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-cyan-600 via-blue-600 to-teal-600 mb-4">
            🏝️ 马尔代夫水上别墅
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            体验马尔代夫独特的水上别墅生活，在碧蓝海水上享受奢华的私密度假时光。这里是地球上最接近天堂的地方。
          </p>
        </header>

        <div className="space-y-12">
          
          {/* Section: Villa Features */}
          <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-cyan-200 p-8">
            <h2 className="text-3xl font-bold text-cyan-600 mb-6 border-l-4 border-cyan-400 pl-4">🌊 水上别墅特色</h2>
            <p className="text-slate-600 mb-8">马尔代夫水上别墅的设计理念融合了现代奢华与自然和谐，每个空间都经过精心规划。</p>
            <div className="flex justify-center items-center bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-lg border border-blue-200">
              <div className="bg-white/90 p-5 text-center rounded-lg shadow-md" style={{ margin: '2rem' }}>
                <div className="bg-cyan-50 p-5 rounded-lg" style={{ border: '2px dashed #0891B2' }}>
                  <div className="bg-cyan-100/60 text-cyan-700 p-10 rounded-lg font-medium">
                    私人海景套房
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-6 text-sm text-slate-500">
              <p>外层: 私人泳池 → 中层: 观景阳台 → 内层: 起居空间 → 核心: 卧室套房</p>
            </div>
          </section>

          {/* Section: Villa Layout */}
          <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-cyan-200 p-8">
            <h2 className="text-3xl font-bold text-cyan-600 mb-6 border-l-4 border-cyan-400 pl-4">🏡 别墅布局设计</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-700">水上平台布局</h3>
                <p className="text-slate-600 mb-4">每栋水上别墅都建在独立的木制平台上，与海水完美融合，营造出漂浮在海面的奇妙体验。</p>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                  <div className="inline-block bg-blue-100 text-blue-700 p-3 rounded-lg mr-2 mb-2 border border-blue-300">主卧室</div>
                  <div className="inline-block bg-blue-100 text-blue-700 p-3 rounded-lg mr-2 mb-2 border border-blue-300">客厅</div>
                  <div className="inline-block bg-blue-100 text-blue-700 p-3 rounded-lg mb-2 border border-blue-300">浴室</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-700">设施配置</h3>
                <p className="text-slate-600 mb-4">现代化设施与自然环境的完美结合，为客人提供极致的舒适体验。</p>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200 flex justify-around items-center">
                  <div className="bg-teal-100 text-teal-700 p-3 rounded-lg border border-teal-300 text-center">私人泳池</div>
                  <div className="bg-teal-100 text-teal-700 p-3 rounded-lg border border-teal-300 text-center">观景阳台</div>
                  <div className="bg-teal-100 text-teal-700 p-3 rounded-lg border border-teal-300 text-center">直通海梯</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Experience Highlight */}
          <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-cyan-200 p-8">
            <h2 className="text-3xl font-bold text-cyan-600 mb-6 border-l-4 border-cyan-400 pl-4">✨ 特色体验</h2>
            <p className="text-slate-600 mb-8">在马尔代夫，每一刻都充满惊喜。将鼠标悬停在下面的体验项目上，感受马尔代夫的魅力。</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 flex flex-col justify-center items-center text-cyan-700 font-bold cursor-pointer transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-400 hover:text-white hover:rounded-full hover:scale-110 hover:shadow-lg border-2 border-cyan-200 rounded-lg">
                <span className="text-2xl mb-1">🤿</span>
                <span className="text-sm text-center">浮潜探索</span>
              </div>
              <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-blue-100 flex flex-col justify-center items-center text-teal-700 font-bold cursor-pointer transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-teal-400 hover:to-blue-400 hover:text-white hover:rounded-full hover:scale-110 hover:shadow-lg border-2 border-teal-200 rounded-lg">
                <span className="text-2xl mb-1">🐠</span>
                <span className="text-sm text-center">海豚观赏</span>
              </div>
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-100 to-teal-100 flex flex-col justify-center items-center text-cyan-700 font-bold cursor-pointer transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-cyan-400 hover:to-teal-400 hover:text-white hover:rounded-full hover:scale-110 hover:shadow-lg border-2 border-cyan-200 rounded-lg">
                <span className="text-2xl mb-1">🏄‍♀️</span>
                <span className="text-sm text-center">水上运动</span>
              </div>
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-teal-100 flex flex-col justify-center items-center text-blue-700 font-bold cursor-pointer transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-blue-400 hover:to-teal-400 hover:text-white hover:rounded-full hover:scale-110 hover:shadow-lg border-2 border-blue-200 rounded-lg">
                <span className="text-2xl mb-1">🌅</span>
                <span className="text-sm text-center">日出瑜伽</span>
              </div>
            </div>
            
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
                <h4 className="text-lg font-semibold text-cyan-700 mb-3">🏊‍♀️ 水上活动</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• 私人泳池无限畅游</li>
                  <li>• 水上摩托艇驾驶体验</li>
                  <li>• 透明皮划艇海底观光</li>
                  <li>• 深海潜水与鲨鱼同游</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200">
                <h4 className="text-lg font-semibold text-teal-700 mb-3">🍽️ 餐饮服务</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• 24小时室内私人管家服务</li>
                  <li>• 海上浮动早餐体验</li>
                  <li>• 沙滩烛光晚餐</li>
                  <li>• 新鲜海鲜BBQ派对</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
} 