export default function SakuraSeasonDemo() {
  return (
    <div style={{ 
      border: '2px solid #f472b6', 
      padding: '20px', 
      margin: '10px', 
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #fdf2f8, #fff7ed)',
      color: '#be185d'
    }}>
      <h2 style={{ color: '#ec4899', marginBottom: '15px' }}>🌸 樱花季节信息</h2>
      <p style={{ lineHeight: '1.6', color: '#475569' }}>
        京都的樱花季通常从3月下旬开始，持续到4月中旬。最佳观赏时间是满开后的一周内，
        此时樱花如云似霞，美不胜收。建议提前预订住宿，因为这是京都最受欢迎的旅游季节！
      </p>
      <div style={{ marginTop: '15px', fontSize: '14px', color: '#64748b', backgroundColor: '#fef3f2', padding: '10px', borderRadius: '8px', border: '1px solid #fecaca' }}>
        💡 贴士：早晨7-8点是拍摄樱花的最佳时间，人少光线好
      </div>
    </div>
  );
} 