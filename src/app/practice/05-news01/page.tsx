'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function UbudRiceTerraceePage() {
  useEffect(() => {
    // 巴厘岛乌布梯田旅游信息展示
    const visitorsCount = 10000;
    console.log(`今年已有 ${visitorsCount} 位游客参观了乌布梯田`);
    
    const attraction_name = '德格拉朗梯田';
    console.log(`景点名称: ${attraction_name}`);
    console.log('游客类型检查:', typeof visitorsCount, typeof attraction_name, typeof true);
    
    const rating = '5';
    console.log('数字评分 + 字符串评分:', visitorsCount + rating);
    console.log('正确的评分相加:', visitorsCount + Number(rating));
    
    const expectedVisitors = '10000';
    console.log('访客数量类型:', typeof visitorsCount, typeof expectedVisitors);
    console.log('数量相等(宽松):', visitorsCount == Number(expectedVisitors));
    console.log('数量相等(严格):', visitorsCount === Number(expectedVisitors));
    
    // 最佳游览时间判断
    const currentSeason = '旱季';
    if (currentSeason === '旱季') {
      console.log('🌾 现在是最佳参观时节！水稻金黄，景色迷人！');
    } else {
      console.log('🌧️ 雨季也有独特的绿色美景……');
    }
    
    // 展示梯田层级
    console.log('🏔️ 德格拉朗梯田层级展示:');
    for (let level = 1; level <= 8; level++) {
      console.log(`第 ${level} 层梯田：海拔 ${300 + level * 20} 米`);
    }
    
    // 体验项目倒计时
    let experiences = 5;
    console.log('🎯 乌布必体验项目:');
    while (experiences > 0) {
      switch(experiences) {
        case 5:
          console.log('5. 梯田日出摄影');
          break;
        case 4:
          console.log('4. 传统农耕体验');
          break;
        case 3:
          console.log('3. 巴厘岛咖啡品尝');
          break;
        case 2:
          console.log('2. 乌布传统市场购物');
          break;
        case 1:
          console.log('1. 猴林路漫步');
          break;
      }
      experiences = experiences - 1;
    }
    
    // 景点介绍函数
    function attractionIntro() {
      console.log('🌸 欢迎来到巴厘岛乌布！这里是艺术与自然的完美结合！');
    }
    attractionIntro();
    
    function customIntro(content: string) {
      console.log('🏞️ 乌布梯田特色介绍： ' + content);
    }
    customIntro('千年传统的苏巴克灌溉系统造就了这片世界文化遗产');
    
    function experienceIntro(activity: string, duration: string) {
      console.log(`🎨 推荐体验： ${activity} - 建议游览时间：${duration}`);
    }
    experienceIntro('德格拉朗梯田观光', '2-3小时');
    experienceIntro('乌布皇宫参观', '1小时');
    experienceIntro('圣泉寺净化仪式', '1.5小时');
    
    function getBestTime(season: string): string {
      console.log(`🌅 选择的季节: ${season}`);
      if (season === '旱季') {
        return season + ' - 最佳摄影时光，稻谷金黄如画';
      } else {
        return season + ' - 绿意盎然，充满生机';
      }
    }
    
    const recommendation = getBestTime('旱季');
    console.log('🏆 推荐结果:', recommendation);
    
    setTimeout(() => {
      alert('🌾 欢迎来到巴厘岛乌布梯田！查看控制台了解更多景点信息！');
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 text-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.2),rgba(34,197,94,0))]"></div>
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>
        
        <section className="max-w-3xl mx-auto mb-10 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            🌾 巴厘岛乌布梯田探索指南
          </h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-2">
            <li>探访印尼巴厘岛乌布地区的翠绿梯田，感受传统农耕文化的智慧与美丽。</li>
            <li>了解千年传统的苏巴克灌溉系统，这是联合国教科文组织认定的世界文化遗产。</li>
            <li>页面加载后会显示详细的景点信息，请按 F12 打开浏览器控制台查看完整介绍。</li>
          </ul>
          <div className="bg-green-100/60 border border-green-300 rounded-lg p-4 mt-4">
            <h3 className="text-green-700 font-semibold mb-2">🎯 必体验项目</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500">📸</span>
                <span>梯田日出摄影</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">🌾</span>
                <span>传统农耕体验</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">☕</span>
                <span>巴厘岛咖啡品尝</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">🛍️</span>
                <span>乌布传统市场</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl border border-green-100 shadow-lg p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="巴厘岛乌布梯田"
                width={400}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-green-600 mb-4">🏞️ 德格拉朗梯田</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                德格拉朗梯田是乌布最著名的景点之一，这些美丽的梯田展现了巴厘岛传统农业的精髓。
                苏巴克灌溉系统巧妙地利用了地形和水流，创造了这片如诗如画的田园风光。
              </p>
              <div className="bg-emerald-50/80 rounded-lg p-4 border border-emerald-200">
                <h4 className="text-emerald-700 font-semibold mb-2">📍 实用信息</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• <strong>最佳参观时间:</strong> 日出时分 (6:00-7:00)</li>
                  <li>• <strong>推荐停留:</strong> 2-3小时</li>
                  <li>• <strong>门票:</strong> 免费 (停车费 5,000印尼盾)</li>
                  <li>• <strong>特色:</strong> 世界文化遗产，Instagram打卡热点</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-block text-lg text-green-700 bg-green-50/80 rounded-lg px-6 py-3 border border-green-200">
              🌱 页面加载完成后，控制台将显示详细的乌布旅游信息！
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 