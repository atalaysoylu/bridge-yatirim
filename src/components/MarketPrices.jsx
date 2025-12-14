const MarketPrices = () => {
  const markets = [
    { symbol: 'EUR/USD', price: '1.0856', change: '+0.15%', isPositive: true },
    { symbol: 'XAU/USD', price: '2,342.50', change: '+0.82%', isPositive: true },
    { symbol: 'BIST 100', price: '10,245.80', change: '-0.24%', isPositive: false },
    { symbol: 'USD/TRY', price: '32.45', change: '+0.08%', isPositive: true },
    { symbol: 'GBP/USD', price: '1.2654', change: '-0.12%', isPositive: false },
    { symbol: 'BTC/USD', price: '67,450.00', change: '+2.35%', isPositive: true },
    { symbol: 'S&P 500', price: '5,432.10', change: '+0.45%', isPositive: true },
    { symbol: 'DAX', price: '18,456.30', change: '-0.18%', isPositive: false },
  ]

  return (
    <section id="piyasalar" className="bg-dark-50 py-16 border-b border-dark-200 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
          Canlı Piyasa Fiyatları
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {markets.map((market, index) => (
            <div
              key={index}
              className="bg-dark-100 border border-dark-300 rounded-lg p-6 hover:border-primary-600 transition-all hover:shadow-lg hover:shadow-primary-600/30"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-white font-semibold text-lg">{market.symbol}</span>
                <span
                  className={`text-sm font-medium ${
                    market.isPositive ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {market.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-primary-400">{market.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarketPrices

