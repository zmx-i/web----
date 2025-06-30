import Link from 'next/link';

export default function SaharaDesertPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 text-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(251,191,36,0.2),rgba(251,191,36,0))]"></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-600 via-amber-600 to-yellow-600 mb-4">
            🏜️ 摩洛哥撒哈拉沙漠探险
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
           体验世界最大沙漠的壮丽风光，骑骆驼穿越金色沙丘，在星空下享受贝都因人的沙漠营地生活。
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Section: Normal Travel Route */}
          <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-orange-200 p-8">
            <h2 className="text-2xl font-bold text-orange-700 mb-6 text-center">🗺️ 常规旅行路线</h2>
            <div className="space-y-4 text-slate-700 text-center">
              <div className="p-4 bg-orange-100 rounded-lg border border-orange-200">🏛️ 马拉喀什古城</div>
              <div className="p-4 bg-orange-100 rounded-lg border border-orange-200">🏔️ 阿特拉斯山脉</div>
              <div className="p-4 bg-amber-200 border-2 border-amber-400 rounded-lg font-semibold">🏜️ 撒哈拉沙漠 (即将探险)</div>
              <div className="p-4 bg-orange-100 rounded-lg border border-orange-200">🌴 瓦尔扎扎特绿洲</div>
            </div>
          </section>

          {/* Section: Desert Adventure Route */}
          <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-orange-200 p-8">
             <h2 className="text-2xl font-bold text-orange-700 mb-6 text-center">🐪 沙漠探险路线</h2>
             <div className="space-y-4 text-slate-700 text-center relative">
              <div className="p-4 bg-orange-100 rounded-lg border border-orange-200">🏛️ 马拉喀什古城</div>
              <div className="p-4 bg-orange-100 rounded-lg border border-orange-200">🏔️ 阿特拉斯山脉</div>
              
              {/* Ghost element showing original position */}
              <div className="p-4 bg-orange-50 border-2 border-dashed border-orange-300 rounded-lg text-orange-400">
                撒哈拉沙漠的原始位置
              </div>

              {/* The relatively positioned element */}
              <div className="p-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg absolute w-full shadow-lg" style={{ top: 'calc(8rem + 2rem + 8px)', left: '40px' }}>
                🏜️ 撒哈拉沙漠探险 (深入沙丘腹地 40km)
              </div>

              <div className="p-4 bg-orange-100 rounded-lg border border-orange-200">🌴 瓦尔扎扎特绿洲</div>

              <p className="text-sm text-amber-600 pt-16 text-center font-medium">
                🐪 注意：即使我们深入沙漠腹地，回程路线依然保留，确保安全返回绿洲！
              </p>
            </div>
          </section>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-orange-200 shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-4 flex items-center gap-2">
              🌟 沙漠体验亮点
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">🐪</span>
                <div>
                  <strong>骆驼骑行</strong>
                  <p className="text-sm">跟随贝都因向导，骑骆驼穿越金色沙丘</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">⭐</span>
                <div>
                  <strong>星空露营</strong>
                  <p className="text-sm">在撒哈拉沙漠中心搭建帐篷，观赏银河</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">🌅</span>
                <div>
                  <strong>日出日落</strong>
                  <p className="text-sm">欣赏沙漠中最壮观的日出日落景象</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-amber-200 shadow-lg">
            <h3 className="text-xl font-semibold text-amber-600 mb-4">🗺️ 探险路线代码</h3>
            <pre className="bg-gradient-to-r from-amber-50 to-orange-50 text-sm text-slate-700 p-4 rounded-md overflow-x-auto border border-amber-200">
              <code>
{`.desert-adventure {
  position: relative;
  top: 50km; /* 深入沙漠腹地 50 公里 */
  left: 40km; /* 向西偏移 40 公里寻找最佳营地 */
  /* 原始路线位置仍被保留，确保安全返回 */
}`}
              </code>
            </pre>
          </div>
        </div>

      </main>
    </div>
  );
} 