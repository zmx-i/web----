import Link from 'next/link';
import Image from 'next/image';
import SakuraSeasonDemo from "../my-app-demo";
import KyotoGreeting from "../my-app-hello";

export default function KyotoSakuraPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 text-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(251,207,232,0.3),rgba(251,207,232,0))]"></div>
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>
        <section className="max-w-3xl mx-auto mb-10 bg-white/70 backdrop-blur-sm rounded-xl border border-pink-200 shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
            <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3xuMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="京都樱花季" width={220} height={140} className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-2">🌸 京都樱花季漫步</h2>
            <p className="text-slate-600 mb-2">探索古都京都的春日樱花盛景，感受传统日式庭园的宁静与美丽。在粉色花瓣飞舞的季节里，体验千年古刹的禅意与和风文化。</p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-medium border border-pink-200">日本</span>
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-medium border border-pink-200">樱花</span>
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-medium border border-pink-200">文化体验</span>
            </div>
          </div>
        </section>
        <section className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl border border-pink-100 shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-pink-600">🏯 京都赏樱体验</h1>
          <div className="space-y-6">
            <div className="bg-pink-50/80 rounded-lg p-6 border border-pink-200">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">🌸 最佳赏樱地点</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• <strong>清水寺</strong> - 世界文化遗产，樱花与古建筑的完美融合</li>
                <li>• <strong>哲学之道</strong> - 樱花隧道般的浪漫步道</li>
                <li>• <strong>圆山公园</strong> - 京都最受欢迎的赏樱公园</li>
                <li>• <strong>银阁寺</strong> - 东山文化的代表，庭园樱花特别美丽</li>
              </ul>
            </div>
            <div className="bg-rose-50/80 rounded-lg p-6 border border-rose-200">
              <h3 className="text-xl font-semibold text-rose-600 mb-3">🍡 特色体验</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• <strong>樱花野餐 (花見)</strong> - 在樱花树下享受传统日式便当</li>
                <li>• <strong>和服租赁</strong> - 穿着传统和服漫步樱花小径</li>
                <li>• <strong>茶道体验</strong> - 在樱花庭园中品味抹茶的清香</li>
                <li>• <strong>夜樱观赏</strong> - 欣赏灯光下如梦似幻的夜樱</li>
              </ul>
            </div>
            <SakuraSeasonDemo />
            <KyotoGreeting />
          </div>
        </section>
      </main>
    </div>
  );
} 