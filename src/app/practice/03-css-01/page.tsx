import Link from 'next/link';

export default function ToscanaWineryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(251,191,36,0.2),rgba(251,191,36,0))]"></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-600 via-orange-600 to-yellow-600 mb-4">
            🍇 托斯卡纳葡萄酒庄探索
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            深入意大利托斯卡纳地区的精品酒庄，品味世界级葡萄酒的醇香与历史。在金色的阳光下，体验意式浪漫的田园生活。
          </p>
        </header>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-amber-200 max-w-6xl mx-auto">
          <div className="p-6 border-b border-amber-200">
            <h3 className="text-xl font-semibold text-amber-700 flex items-center gap-2">
              🏰 酒庄体验预览
            </h3>
          </div>
          <div className="p-8 space-y-6">
            <h1 className="text-3xl font-bold text-amber-600" style={{ fontFamily: 'serif' }}>
              🍷 意式酒庄之旅
            </h1>
            
            <h2 id="chianti-region" className="text-2xl font-semibold text-green-600">
              基安蒂经典产区 (Chianti Classico)
            </h2>
            
            <p className="wine-intro text-base leading-relaxed border-l-4 border-amber-400 pl-4 italic text-amber-800 bg-amber-50/50 p-4 rounded-r-lg">
              基安蒂地区是托斯卡纳最著名的葡萄酒产区，以其优质的桑娇维塞葡萄酒而闻名世界。
              这里的酒庄历史悠久，有些可以追溯到中世纪时期。
            </p>
            
            <p className="leading-relaxed text-slate-600">
              在托斯卡纳的酒庄，您不仅可以品尝到世界顶级的葡萄酒，还能欣赏到令人叹为观止的田园风光。
              点击下面的链接了解更多酒庄信息。
            </p>

            <div className="p-6 bg-gradient-to-r from-amber-100/80 to-orange-100/80 rounded-lg border border-amber-300">
               <h3 className="text-lg font-semibold text-amber-700 mb-4">🍇 推荐酒庄体验</h3>
               <div className="space-y-3">
                 <div className="flex items-start gap-3">
                   <span className="text-amber-500">•</span>
                   <div>
                     <strong className="text-amber-700">Castello di Brolio</strong>
                     <p className="text-sm text-slate-600">拥有近千年历史的古堡酒庄，基安蒂酒的发源地</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3">
                   <span className="text-amber-500">•</span>
                   <div>
                     <strong className="text-amber-700">Antinori nel Chianti Classico</strong>
                     <p className="text-sm text-slate-600">现代建筑与传统工艺完美结合的顶级酒庄</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3">
                   <span className="text-amber-500">•</span>
                   <div>
                     <strong className="text-amber-700">Badia a Coltibuono</strong>
                     <p className="text-sm text-slate-600">前修道院改建的酒庄，提供烹饪课程和品酒体验</p>
                   </div>
                 </div>
               </div>
               
               <div className="mt-6 pt-4 border-t border-amber-300">
                 <p className="text-slate-600">
                   预订酒庄参观：
                   <a href="#" className="mx-2 text-amber-600 hover:text-amber-700 hover:underline transition-all font-medium">
                     在线预约 →
                   </a>
                   或致电我们的
                   <a href="#" className="mx-2 text-orange-600 hover:text-orange-700 hover:underline transition-all font-medium">
                     专业顾问热线
                   </a>
                 </p>
               </div>
            </div>

            <div className="bg-yellow-50/80 rounded-lg p-6 border border-yellow-200">
              <h4 className="text-lg font-semibold text-yellow-700 mb-3">🎯 体验亮点</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2"><span className="text-yellow-500">✨</span> 专业侍酒师带领的品酒会</li>
                <li className="flex items-center gap-2"><span className="text-yellow-500">✨</span> 参观传统酿酒工艺流程</li>
                <li className="flex items-center gap-2"><span className="text-yellow-500">✨</span> 品尝当地特色美食搭配</li>
                <li className="flex items-center gap-2"><span className="text-yellow-500">✨</span> 欣赏托斯卡纳绝美田园风光</li>
              </ul>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
} 