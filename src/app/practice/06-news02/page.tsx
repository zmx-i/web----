'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SantoriniSunsetPage() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 希腊岛屿体验类设计
    class IslandExperience {
      island: string;
      activity: string;
      duration: number;
      constructor(island: string, activity: string, duration: number) {
        this.island = island;
        this.activity = activity;
        this.duration = duration;
      }
      start() {
        console.log(`🌅 在${this.island}开始${this.activity}体验`);
      }
      complete() {
        console.log(`✨ 在${this.island}的${this.activity}体验完成了`);
      }
    }
    const santoriniSunset = new IslandExperience('圣托里尼', '日落观赏', 2);
    santoriniSunset.start();
    santoriniSunset.complete();

    class LuxuryExperience extends IslandExperience {
      viewpoint: string;
      constructor(island: string, activity: string, duration: number, viewpoint: string) {
        super(island, activity, duration);
        this.viewpoint = viewpoint;
      }
      enjoy() {
        console.log(`🥂 在${this.island}的${this.viewpoint}享受${this.activity}奢华体验`);
      }
    }
    const oiaSunset = new LuxuryExperience('圣托里尼', '私人日落晚餐', 3, '伊亚小镇');
    oiaSunset.start();
    oiaSunset.enjoy();

    // 异步获取日落时间
    console.log('🌅 正在获取今日日落时间...');
    setTimeout(function () {
      console.log('🌇 圣托里尼今日日落时间：19:30，请提前到达观景点！');
    }, 2000);
    console.log('📍 正在推荐最佳观景位置...');

    // 页面交互设置
    if (divRef.current) {
      console.log(divRef.current);
      divRef.current.innerHTML = '🌅 圣托里尼日落观赏体验（点击预订）';
      divRef.current.onclick = function () {
        alert('🎉 感谢您的预订！圣托里尼的日落将带给您终生难忘的美妙体验！');
      };
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 text-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(251,146,60,0.2),rgba(251,146,60,0))]"></div>
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>
        <section className="max-w-3xl mx-auto mb-10 bg-white/80 backdrop-blur-sm rounded-xl border border-orange-200 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
            🌅 希腊圣托里尼日落体验指南
          </h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-2">
            <li>体验世界上最美的日落之一，在爱琴海上观赏令人屏息的绚烂晚霞。</li>
            <li>页面加载后请按 F12 打开浏览器控制台，查看日落时间和观景位置推荐。</li>
            <li>您可以点击标题和下方内容，体验交互式的日落观赏预订功能。</li>
          </ul>
          <div className="bg-orange-50/60 border border-orange-300 rounded-lg p-4 mt-4">
            <h3 className="text-orange-700 font-semibold mb-2">🎯 必体验项目</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-orange-500">🏛️</span>
                <span>伊亚小镇日落观赏</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">🍷</span>
                <span>悬崖餐厅日落晚餐</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">⛵</span>
                <span>爱琴海日落游轮</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">📸</span>
                <span>蓝顶教堂摄影</span>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl border border-orange-100 shadow-lg p-8 flex flex-col items-center">
          <Image
            src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="圣托里尼日落"
            width={400}
            height={200}
            className="rounded-lg mb-6 shadow-lg"
          />
          <h1
            ref={h1Ref}
            style={{ cursor: 'pointer', transition: 'color 0.3s' }}
            onClick={() => alert('🌅 欢迎来到圣托里尼！让我们一起欣赏世界上最美的日落！')}
            className="text-3xl font-bold mb-6 text-center hover:text-orange-600 text-orange-700"
          >
            🌇 圣托里尼日落奇观（点击了解更多）
          </h1>
          <div
            ref={divRef}
            className="text-lg text-slate-700 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-6 text-center cursor-pointer hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100 transition-colors border border-orange-200 w-full max-w-md"
          >
            🌅 圣托里尼日落体验
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-6 w-full">
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-orange-700 mb-3">🏛️ 伊亚小镇</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• 世界闻名的日落观赏圣地</li>
                <li>• 经典的蓝白色基克拉迪建筑</li>
                <li>• 悬崖边的浪漫餐厅和咖啡厅</li>
                <li>• 艺术画廊和精品店购物</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
              <h4 className="text-lg font-semibold text-pink-700 mb-3">🌊 爱琴海体验</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• 私人游艇日落巡游</li>
                <li>• 火山岛温泉浴体验</li>
                <li>• 传统希腊美食品尝</li>
                <li>• 海滩俱乐部休闲时光</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 