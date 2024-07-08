export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
    res.status(200).json([
      { symbol: 'BTC/USD', lastTrade: 63000, change24h: -2.21, change24hValue: -1426.18 },
      { symbol: 'ETH/USD', lastTrade: 3408.90, change24h: -0.33, change24hValue: -11.20 },
      { symbol: 'DOGE/USD', lastTrade: 0.15, change24h: 15.75, change24hValue: 0.02 },
      { symbol: 'ALGO/USD', lastTrade: 0.15, change24h: 0.00, change24hValue: 0.00 },
      { symbol: 'DOT/USD', lastTrade: 5.64, change24h: 0.00, change24hValue: 0.00 },
      { symbol: 'UNI/USD', lastTrade: 9.79, change24h: 0.00, change24hValue: 0.00 },
      { symbol: 'COMP/USD', lastTrade: 45.67, change24h: -0.95, change24hValue: -0.44 },
    ]);
  }
