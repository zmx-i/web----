'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NorwayFjordPage() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 游轮服务类设计
    class CruiseService {
      name: string;
      duration: number;
      departure: string;
      capacity: number;
      constructor(name: string, duration: number, departure: string, capacity: number) {
        this.name = name;
        this.duration = duration;
        this.departure = departure;
        this.capacity = capacity;
      }
      sail(destination = '盖朗厄尔峡湾') {
        console.log(`🚢 ${this.name}正在前往${destination}，旅程精彩绝伦！`);
      }
      dock() {
        console.log(`⚓ ${this.name} 正在停靠港口`);
      }
    }
    const fjordCruise = new CruiseService('挪威峡湾女王号', 7, '卑尔根', 2500);
    fjordCruise.sail('吕瑟峡湾');
    fjordCruise.dock();

    class LuxuryCruise extends CruiseService {
      category: string;
      amenities: number;
      constructor(name: string, duration: number, departure: string, capacity: number, category: string, amenities: number) {
        super(name, duration, departure, capacity);
        this.category = category;
        this.amenities = amenities;
      }
      provideLuxury(service: string) {
        console.log(`🎭 ${this.name}在${service}为您提供奢华体验，舒适度提升1000%`);
        console.log(super.dock());
      }
    }
    const luxuryFjord = new LuxuryCruise('峡湾之星', 10, '特隆赫姆', 1200, '豪华游轮', 50);
    luxuryFjord.provideLuxury('观景甲板');

    // 异步获取天气信息
    console.log('🌤️ 正在获取峡湾天气信息...');
    setTimeout(function () { console.log('☀️ 今日挪威峡湾天气晴朗，适合观光！'); }, 1000);
    console.log('🗺️ 正在规划最佳游览路线...');

    // 页面交互设置
    if (h1Ref.current) {
      console.log(h1Ref.current);
      h1Ref.current.innerHTML = '🚢 挪威峡湾游轮之旅（点击了解更多）';
      h1Ref.current.style.color = '#0891B2';
    }
    if (pRef.current) {
      pRef.current.onclick = function () {
        alert('🎉 欢迎预订挪威峡湾游轮！我们将为您提供难忘的北欧之旅！');
      };
    }
    alert('⛵ 挪威峡湾游轮信息加载完成！');
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50 text-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.2),rgba(14,165,233,0))]"></div>
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>
        <section className="max-w-3xl mx-auto mb-10 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
            ⛵ 挪威峡湾游轮探索指南
          </h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-2">
            <li>体验世界上最美丽的峡湾风光，搭乘豪华游轮穿越挪威的自然奇观。</li>
            <li>页面加载后会显示游轮服务信息，请按 F12 打开浏览器控制台查看详细介绍。</li>
            <li>您可以点击标题和图片，体验交互式的游轮预订功能。</li>
            <li>了解不同类型的游轮服务和峡湾景点信息。</li>
          </ul>
          <div className="bg-blue-50/60 border border-blue-300 rounded-lg p-4 mt-4">
            <h3 className="text-blue-700 font-semibold mb-2">🎯 必体验项目</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🏔️</span>
                <span>盖朗厄尔峡湾观光</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">⛰️</span>
                <span>吕瑟峡湾布道台</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🌊</span>
                <span>纳柔依峡湾巡游</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🏘️</span>
                <span>卑尔根古城探索</span>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl border border-blue-100 shadow-lg p-8">
          <h1
            ref={h1Ref}
            style={{ cursor: 'pointer', transition: 'color 0.3s' }}
            onClick={() => alert('🎊 感谢您对挪威峡湾游轮的关注！我们的专业团队随时为您服务！')}
            className="text-3xl font-bold mb-6 text-center hover:text-blue-600 text-blue-700"
          >
            🚢 挪威峡湾游轮之旅
          </h1>
          <div className="flex flex-col items-center">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="挪威峡湾游轮"
              width={400}
              height={200}
              className="rounded-lg mb-6 shadow-lg"
            />
            <p ref={pRef} className="text-lg text-slate-700 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 cursor-pointer hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 transition-colors border border-blue-200 text-center">
              🌊 挪威峡湾 - 大自然的杰作（点击预订游轮之旅）
            </p>
            
            <div className="mt-8 grid md:grid-cols-2 gap-6 w-full">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">🚢 游轮特色</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• 豪华海景套房，360度全景观光</li>
                  <li>• 北欧美食餐厅，米其林级别体验</li>
                  <li>• 专业导游讲解，深度了解峡湾文化</li>
                  <li>• 全天候观景甲板，不错过任何美景</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-50 to-slate-50 p-6 rounded-lg border border-cyan-200">
                <h4 className="text-lg font-semibold text-cyan-700 mb-3">🗺️ 航线亮点</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• 盖朗厄尔峡湾：联合国世界遗产</li>
                  <li>• 吕瑟峡湾：奇迹石和布道台</li>
                  <li>• 纳柔依峡湾：最窄峡湾的震撼</li>
                  <li>• 卑尔根：汉萨同盟古城风貌</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 