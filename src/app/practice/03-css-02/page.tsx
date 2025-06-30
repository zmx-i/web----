import Link from 'next/link';

export default function IcelandAuroraPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.2),rgba(99,102,241,0))]"></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-600 via-purple-600 to-blue-600 mb-4">
            ❄️ 冰岛极光奇观
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            在冰岛的璀璨星空下，捕捉北极光的神秘舞蹈，体验大自然的震撼之美。这里是世界上观赏极光的最佳地点之一。
          </p>
        </header>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-200 max-w-6xl mx-auto">
          <div className="p-6 border-b border-indigo-200">
            <h3 className="text-xl font-semibold text-indigo-700 flex items-center gap-2">
              🌌 极光观赏体验
            </h3>
          </div>
          <div className="p-8 space-y-6">
            <p className="text-slate-600 text-lg">探索冰岛神奇的极光世界，每一种体验都有其独特的魅力：</p>
            
            <div className="space-y-6">
              <div className="p-6 bg-green-50/80 rounded-lg border border-green-200">
                <h4 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                  🏔️ 极光观赏地点推荐
                </h4>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3 text-green-600">
                    <span className="font-semibold">雷克雅未克周边:</span>
                    <span className="text-slate-600">距离首都最近的观赏点，交通便利，适合初次体验者。设有专业观测设施和温暖的休息区。</span>
                  </li>
                  <li className="flex items-start gap-3 text-blue-600">
                    <span className="font-semibold">维克镇黑沙滩:</span>
                    <span className="text-slate-600">独特的黑色火山沙滩背景，与绿色极光形成强烈对比，是摄影师的最爱。周边有温泉可以暖身。</span>
                  </li>
                  <li className="flex items-start gap-3 text-purple-600" style={{ color: '#8A2BE2', fontWeight: 'bold' }}>
                    <span style={{ color: '#7C3AED', textDecoration: 'none' }}>杰古沙龙冰河湖:</span>
                    <span style={{ color: '#475569', fontWeight: 'normal' }}>最震撼的极光观赏地，巨大的冰山倒影与极光相映成趣，营造出如梦似幻的奇景。</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-indigo-50/80 rounded-lg border border-indigo-200">
                  <h4 className="text-lg font-semibold text-indigo-700 mb-3">🌟 最佳观赏时间</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• <strong>季节:</strong> 9月至次年3月</li>
                    <li>• <strong>时间:</strong> 晚上8点至凌晨2点</li>
                    <li>• <strong>天气:</strong> 晴朗无云的夜晚</li>
                    <li>• <strong>月亮:</strong> 新月期间光污染最少</li>
                  </ul>
                </div>

                <div className="p-6 bg-purple-50/80 rounded-lg border border-purple-200">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">📸 摄影贴士</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• <strong>相机设置:</strong> 手动模式，ISO 800-3200</li>
                    <li>• <strong>快门速度:</strong> 5-30秒长曝光</li>
                    <li>• <strong>构图:</strong> 包含前景元素增加层次</li>
                    <li>• <strong>装备:</strong> 三脚架必备，备用电池</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-slate-700 mb-3">🧊 冰岛极光小知识</h4>
                <div className="text-slate-600 space-y-2 text-sm">
                  <p>极光是太阳风粒子与地球磁场相互作用的结果。冰岛位于极光带上，拥有得天独厚的观赏条件。</p>
                  <p>不同颜色的极光代表不同的大气层：绿色（氧气，100-300km），红色（氧气，300km以上），蓝紫色（氮气）。</p>
                </div>
              </div>

              <div className="text-center p-6 bg-slate-50/80 rounded-lg border border-slate-200">
                <p className="text-slate-600 mb-3">想要追寻极光的足迹？</p>
                <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-medium">
                  🎫 预订极光观赏团
                </button>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
} 