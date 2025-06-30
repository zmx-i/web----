import Link from 'next/link';
import Image from 'next/image';

export default function CappadociaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 text-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(251,146,60,0.2),rgba(251,146,60,0))]"></div>
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>
        <section className="max-w-3xl mx-auto mb-10 bg-white/80 backdrop-blur-sm rounded-xl border border-orange-200 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">🎈 土耳其卡帕多奇亚热气球之旅</h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-2">
            <li>体验世界上最壮观的热气球飞行，俯瞰卡帕多奇亚的奇异地貌和童话般的石柱森林。</li>
            <li>包含详细的飞行路线、预订信息和实用旅行指南。</li>
            <li>探索这个UNESCO世界文化遗产的魅力所在。</li>
          </ul>
        </section>
        <section className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl border border-orange-100 shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-orange-600">🌅 卡帕多奇亚热气球体验</h1>
          <div className="prose prose-lg max-w-none prose-p:text-slate-600 prose-a:text-orange-600 hover:prose-a:text-orange-700 prose-li:text-slate-600 prose-table:border-orange-300 prose-th:bg-orange-100 prose-th:text-orange-700 prose-td:border-orange-200 prose-img:rounded-lg prose-img:shadow-lg prose-img:my-2">
            <p>
              卡帕多奇亚被誉为世界上最适合热气球飞行的地区之一，这里拥有独特的地质奇观和完美的飞行条件。
              <a href="https://www.cappadocia-balloons.com" target="_blank" rel="noopener noreferrer">点击这里了解更多热气球公司信息。</a>
            </p>
            
            <h3 className="text-xl font-semibold text-orange-600 mb-3">🎯 热气球飞行亮点</h3>
            <ol className="space-y-2">
              <li><strong>仙女烟囱</strong> - 数百万年风化形成的奇特石柱</li>
              <li><strong>地下城市</strong> - 古代基督徒的地下避难所</li>
              <li><strong>岩石教堂</strong> - 格雷梅露天博物馆的拜占庭壁画</li>
              <li><strong>日出美景</strong> - 在600米高空观赏安纳托利亚高原的壮丽日出</li>
            </ol>
            
            <div className="flex gap-4 flex-wrap items-center my-6 bg-orange-50/80 p-6 rounded-lg border border-orange-200">
              <Image 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="卡帕多奇亚热气球" 
                width={300} 
                height={200} 
                className="rounded-lg shadow-lg"
              />
              <div className="flex-1 min-w-[200px]">
                <h4 className="text-lg font-semibold text-orange-600 mb-2">📍 飞行信息</h4>
                <p className="text-sm text-slate-600">
                  热气球飞行通常在日出前开始，持续约1小时。飞行高度可达600米，
                  能够俯瞰整个卡帕多奇亚地区的壮丽景色。
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-orange-600 mb-3">💰 价格与预订信息</h3>
            <table className="w-full border border-orange-300 text-slate-600 bg-orange-50/50">
              <thead>
                <tr className="bg-orange-100">
                  <th className="border border-orange-300 p-3 text-left">套餐类型</th>
                  <th className="border border-orange-300 p-3 text-left">价格 (USD)</th>
                  <th className="border border-orange-300 p-3 text-left">时长</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-orange-300 p-3">标准飞行</td>
                  <td className="border border-orange-300 p-3">$150-200</td>
                  <td className="border border-orange-300 p-3">1小时</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 p-3">豪华飞行</td>
                  <td className="border border-orange-300 p-3">$250-350</td>
                  <td className="border border-orange-300 p-3">1.5小时</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 p-3">私人包机</td>
                  <td className="border border-orange-300 p-3">$800-1200</td>
                  <td className="border border-orange-300 p-3">1-2小时</td>
                </tr>
              </tbody>
            </table>
            
            <div className="mt-6 p-4 bg-amber-100/80 rounded-lg border border-amber-300">
              <h4 className="text-lg font-semibold text-amber-700 mb-3">🔍 搜索卡帕多奇亚旅游信息</h4>
              <form action="https://www.google.com/search" method="get" className="flex gap-2 items-center">
                <input 
                  type="hidden" 
                  name="q" 
                  value="卡帕多奇亚热气球" 
                />
                <input 
                  type="text" 
                  name="q" 
                  className="px-3 py-2 rounded bg-white border border-amber-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 flex-1" 
                  placeholder="搜索卡帕多奇亚旅游信息..." 
                  defaultValue="卡帕多奇亚热气球"
                />
                <input 
                  type="submit" 
                  value="搜索" 
                  className="px-4 py-2 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors cursor-pointer" 
                />
              </form>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50/80 rounded-lg border border-yellow-300">
              <h4 className="text-lg font-semibold text-yellow-700 mb-3">⚠️ 重要提醒</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> 热气球飞行依赖天气条件，可能因风力过大而取消</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> 建议提前2-3天预订，旺季需要更早预订</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> 飞行当天需要早起(通常4:30-5:00AM集合)</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> 穿着舒适的服装和运动鞋</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> 携带相机记录这一生难忘的体验</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 