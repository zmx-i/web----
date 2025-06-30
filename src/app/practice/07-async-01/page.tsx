'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function KenyaSafariPage() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [safariHtml, setSafariHtml] = useState('');

  useEffect(() => {
    // 模拟动物观察时间延迟
    setTimeout(() => {
      console.log('🦁 发现狮子群！');
    }, 2000);
    console.log('🚙 野生动物园探险开始...');

    // Promise模拟动物发现过程
    function spotAnimal() {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('🐘 发现象群在河边饮水');
          resolve();
        }, 1000);
      });
    }
    spotAnimal().then(() => {
      console.log('📸 完美的拍摄机会！');
    });

    // async/await模拟动物迁徙观察
    async function observeMigration() {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('🦓 角马大迁徙正在进行中...');
          resolve();
        }, 1000);
      });
    }
    (async () => {
      await observeMigration();
      console.log('🌅 这是非洲大草原最壮观的景象！');
    })();

    // 模拟获取野生动物观察记录
    async function getAllAnimalSightings() {
      // 模拟API延迟
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      try {
        // 模拟野生动物观察数据
        const animalSightings = [
          { time: '06:30', animal: '狮子群', location: '马拉河畔', count: 8 },
          { time: '07:15', animal: '象群', location: '金合欢树下', count: 12 },
          { time: '08:00', animal: '长颈鹿', location: '开阔草原', count: 6 },
          { time: '09:30', animal: '猎豹', location: '岩石堆', count: 2 },
          { time: '10:45', animal: '斑马群', location: '水塘附近', count: 25 },
          { time: '11:20', animal: '犀牛', location: '灌木丛', count: 3 },
          { time: '14:00', animal: '河马', location: '马拉河', count: 15 },
          { time: '16:30', animal: '花豹', location: '树上', count: 1 },
        ];
        return animalSightings;
      } catch (error) {
        console.error('🦒 获取动物观察记录失败:', error);
        return [];
      }
    }

    function showAnimalSightingsTable(sightings: { time: string; animal: string; location: string; count: number }[]) {
      let html = '<table class="w-full text-left border-collapse border border-orange-300 text-slate-700 bg-white/90 rounded-lg overflow-hidden">';
      html += '<thead><tr class="bg-orange-100"><th class="p-3 border border-orange-300 font-semibold">观察时间</th><th class="p-3 border border-orange-300 font-semibold">动物种类</th><th class="p-3 border border-orange-300 font-semibold">发现地点</th><th class="p-3 border border-orange-300 font-semibold">数量</th></tr></thead><tbody>';
      sightings.forEach((sighting, idx) => {
        const rowClass = idx % 2 === 0 ? 'bg-orange-50' : 'bg-white';
        html += `<tr class="${rowClass}"><td class="p-3 border border-orange-300">${sighting.time}</td><td class="p-3 border border-orange-300">🦁 ${sighting.animal}</td><td class="p-3 border border-orange-300">📍 ${sighting.location}</td><td class="p-3 border border-orange-300">${sighting.count}只</td></tr>`;
      });
      html += '</tbody></table>';
      setSafariHtml(html);
    }

    getAllAnimalSightings()
      .then(sightings => {
        console.log('🦓 今日动物观察记录:', JSON.stringify(sightings));
        showAnimalSightingsTable(sightings);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 text-slate-800">
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
            🦁 肯尼亚野生动物园探险指南
          </h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-2">
            <li>体验非洲大草原的野生动物王国，观察狮子、大象、长颈鹿等野生动物的自然生活。</li>
            <li>页面会自动模拟动物观察过程并生成今日动物发现记录表格。</li>
            <li>请按 F12 打开浏览器控制台，跟随我们的探险足迹观察野生动物。</li>
          </ul>
          <div className="bg-orange-50/60 border border-orange-300 rounded-lg p-4 mt-4">
            <h3 className="text-orange-700 font-semibold mb-2">🎯 必体验项目</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-orange-500">🦁</span>
                <span>马赛马拉大迁徙观察</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">🐘</span>
                <span>安博塞利象群拍摄</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">🦒</span>
                <span>长颈鹿庄园亲密接触</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">🏕️</span>
                <span>草原奢华营地住宿</span>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl border border-orange-100 shadow-lg p-8 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 text-center text-orange-700">🦓 今日野生动物观察记录</h1>
          <div className="w-full mb-6">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200 text-center">
                <div className="text-2xl font-bold text-orange-600">8</div>
                <div className="text-sm text-slate-600">动物种类</div>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-600">72</div>
                <div className="text-sm text-slate-600">观察总数</div>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200 text-center">
                <div className="text-2xl font-bold text-yellow-600">10小时</div>
                <div className="text-sm text-slate-600">观察时长</div>
              </div>
            </div>
          </div>
          <div id="demo" ref={demoRef} className="w-full overflow-x-auto mt-4" dangerouslySetInnerHTML={{ __html: safariHtml }} />
          {!safariHtml && (
            <div className="w-full text-center py-8">
              <div className="animate-pulse text-orange-500">🦁 正在获取今日动物观察记录...</div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
} 