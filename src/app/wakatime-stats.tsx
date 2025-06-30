import { Suspense } from 'react';

async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("WakaTime API key is not set.");
    return "API Key Not Configured";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;
    
    const response = await fetch(
      url,
      {
        next: {
          revalidate: 3600, // 每小时重新获取一次数据
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WakaTime API request failed with status: ${response.status}`);
      console.error(`WakaTime API error response: ${errorText}`);
      return "Error Fetching Data";
    }

    const stats = await response.json();
    return stats.data?.text || "No activity yet";
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return "Server Error";
  }
}

async function WakaTimeData() {
    const stats = await getWakaTimeStats();
    return (
        <p>网站运营时长: <span className="font-semibold text-orange-600">{stats}</span></p>
    );
}

export default function WakaTimeStats() {
  return (
    <footer className="text-slate-600 text-center p-8 mt-auto w-full z-10 bg-gradient-to-t from-orange-50/80 to-transparent">
        <div className="max-w-4xl mx-auto">
            <p className="mb-3 text-slate-700 font-medium">&copy; {new Date().getFullYear()} 梦想旅行 - 发现世界之美</p>
            <Suspense fallback={<p className="text-orange-500">正在加载统计数据...</p>}>
                <WakaTimeData />
            </Suspense>
            <p className="text-sm mt-3 text-slate-500 flex items-center justify-center gap-2">
                <span>🌍</span>
                <span>已为 10000+ 旅行者提供目的地推荐</span>
                <span>✨</span>
            </p>
        </div>
    </footer>
  );
} 