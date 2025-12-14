const Services = () => {
  const services = [
    {
      title: 'Forex Trading',
      description: '70+ döviz çifti ile dünya piyasalarında 7/24 işlem imkanı. Düşük spreadler ve yüksek kaldıraç oranları.',
      features: ['EUR/USD, GBP/USD', 'Anlık kotasyonlar', '0.0 pip\'den başlayan spreadler'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Hisse Senedi',
      description: 'Borsa İstanbul ve global borsalarda hisse senedi alım-satım işlemleri. CFD ve doğrudan erişim seçenekleri.',
      features: ['BIST 100 hisseleri', 'US & EU hisseleri', 'Temettü takibi'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Değerli Metaller',
      description: 'Altın, gümüş ve diğer değerli metallerde güvenli yatırım fırsatları. Fiziki ve kağıt altın seçenekleri.',
      features: ['XAU/USD trading', 'Fiziki altın teslimi', 'Güvenli saklama'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: 'Emtia Trading',
      description: 'Petrol, doğalgaz ve tarımsal emtialarda işlem yapın. Portföy çeşitlendirmesi için ideal araçlar.',
      features: ['Brent & WTI petrol', 'Doğalgaz', 'Tarımsal emtialar'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Kripto Paralar',
      description: 'Bitcoin, Ethereum ve önde gelen kripto paralarla dijital varlık yönetimi ve trading imkanları.',
      features: ['BTC, ETH, XRP', '7/24 işlem', 'Güvenli cüzdan'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: 'Portföy Yönetimi',
      description: 'Uzman danışmanlarımız ile kişiselleştirilmiş yatırım stratejileri ve profesyonel portföy yönetimi.',
      features: ['Risk analizi', 'Özel stratejiler', 'Düzenli raporlama'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="hizmetler" className="bg-dark-100 py-20 border-b border-dark-200 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kapsamlı Yatırım Çözümleri
          </p>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Her seviyeden yatırımcı için profesyonel trading araçları ve uzman destek hizmetleri sunuyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark-200 border border-dark-300 rounded-xl p-8 hover:border-primary-600 transition-all hover:transform hover:scale-105 hover:shadow-lg hover:shadow-primary-600/30"
            >
              <div className="text-primary-400 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-200">
                    <svg
                      className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

