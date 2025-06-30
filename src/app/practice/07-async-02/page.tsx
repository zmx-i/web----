'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HobbitonPage() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [weatherInfo, setWeatherInfo] = useState<string | null>(null);

  useEffect(() => {
    // 模拟异步获取霍比特人村参观信息
    async function getHobbitonInfo() {
      await new Promise<void>((resolve) => {
        setTimeout(function () {
          console.log('🏡 正在准备霍比特人村参观信息...');
          resolve();
        }, 2000);
      });
    }
    getHobbitonInfo().then(
      result => console.log('✅ 霍比特人村信息加载完成:', result)
    );
    console.log('🌿 新西兰北岛马塔马塔欢迎您！');

    // 模拟获取新西兰天气信息的API调用
    async function getNewZealandWeather(location: string = 'Matamata') {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      try {
        // 模拟天气数据（实际项目中会调用真实的天气API）
        const weatherData = {
          location: location,
          temperature: '18°C',
          condition: '晴朗',
          humidity: '65%',
          windSpeed: '15 km/h',
          timestamp: new Date().toISOString()
        };
        
        console.log('🌤️ 获取到新西兰天气信息:', weatherData);
        return `${weatherData.location}: ${weatherData.temperature}, ${weatherData.condition}, 湿度${weatherData.humidity}`;
      } catch (error) {
        console.error('🌦️ 获取天气信息失败:', error);
        return '天气信息暂时无法获取，但霍比特人村依然美丽！';
      }
    }

    getNewZealandWeather('马塔马塔霍比特人村').then(weather => {
      console.log('🌈 当前天气状况:', weather);
      setWeatherInfo(weather);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-yellow-50 text-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.2),rgba(34,197,94,0))]"></div>
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>
        <section className="max-w-3xl mx-auto mb-10 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            🏡 新西兰霍比特人村体验指南
          </h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-2">
            <li>探访《指环王》和《霍比特人》三部曲的拍摄地，体验中土世界的魔幻魅力。</li>
            <li>页面会自动获取新西兰马塔马塔地区的实时天气信息，为您的参观做好准备。</li>
            <li>请按 F12 打开浏览器控制台，查看霍比特人村的详细信息。</li>
          </ul>
          <div className="bg-green-50/60 border border-green-300 rounded-lg p-4 mt-4">
            <h3 className="text-green-700 font-semibold mb-2">🎯 必体验项目</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500">🏠</span>
                <span>44个霍比特人洞屋参观</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">🌳</span>
                <span>派对树和磨坊拍照</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">🍺</span>
                <span>绿龙酒馆品尝特色饮品</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">🎬</span>
                <span>电影场景重现体验</span>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl border border-green-100 shadow-lg p-8 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 text-center text-green-700">🌿 霍比特人村实时信息</h1>
          <div
            id="demo"
            ref={demoRef}
            className="text-lg text-slate-700 bg-gradient-to-r from-green-50 to-lime-50 rounded-lg p-6 text-center w-full mt-4 border border-green-200"
          >
            {weatherInfo ? (
              <div className="space-y-2">
                <div className="text-green-600 font-semibold">🌤️ 当前天气状况</div>
                <div className="text-slate-600">{weatherInfo}</div>
                <div className="text-sm text-slate-500 mt-2">非常适合参观霍比特人村！</div>
              </div>
            ) : (
              <div className="text-slate-500">
                <div className="animate-pulse">🌿 正在获取霍比特人村天气信息...</div>
              </div>
            )}
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-6 w-full">
            <div className="bg-gradient-to-r from-green-50 to-lime-50 p-6 rounded-lg border border-green-200">
              <h4 className="text-lg font-semibold text-green-700 mb-3">🏡 霍比特人村特色</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• 44个不同大小的霍比特人洞屋</li>
                <li>• 完全按照电影场景1:1还原</li>
                <li>• 美丽的英式乡村花园景观</li>
                <li>• 专业导游讲解电影拍摄故事</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-lime-50 to-yellow-50 p-6 rounded-lg border border-lime-200">
              <h4 className="text-lg font-semibold text-lime-700 mb-3">🍻 绿龙酒馆体验</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• 品尝独家酿制的霍比特人啤酒</li>
                <li>• 享用传统的新西兰美食</li>
                <li>• 体验中土世界的酒馆文化</li>
                <li>• 购买独家纪念品和周边</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 