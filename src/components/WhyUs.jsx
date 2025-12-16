const WhyUs = () => {
  const features = [
    {
      title: 'FCA Lisanslı',
      description: 'Financial Conduct Authority (FCA) tarafından lisanslı ve denetlenen güvenilir aracı kurum. İngiltere\'nin en prestijli finansal düzenleyici kurumu ile korunan yatırımlarınız.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: '7/24 İşlem',
      description: 'Forex piyasasında kesintisiz 24 saat işlem imkanı ve anlık emir gerçekleştirme.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Uzman Destek',
      description: 'Deneyimli yatırım danışmanlarından kişisel destek ve piyasa analizi.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: '15+ Yıl Tecrübe',
      description: 'Finans sektöründe 15 yılı aşkın deneyim ve binlerce memnun müşteri.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Güvenli Altyapı',
      description: 'En son teknoloji güvenlik protokolleri ile korunan yatırım platformu.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Hızlı İşlem',
      description: 'Milisaniye düzeyinde işlem hızı ve minimum gecikme ile optimal performans.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  const stats = [
    { number: '$2B+', label: 'Günlük İşlem' },
    { number: '50K+', label: 'Aktif Müşteri' },
    { number: '99.9%', label: 'Uptime' },
  ]

  return (
    <section id="hakkimizda" className="bg-dark-50 py-20 border-b border-dark-200 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Neden Biz?
          </h2>
          <p className="text-2xl text-primary-400 mb-2">
            Güvenilir Ortağınız, Bridge Yatırım
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            15 yılı aşkın sektör tecrübemiz ve FCA (Financial Conduct Authority) lisanslı yapımızla, yatırımcılarımıza en güvenli ve profesyonel hizmeti sunuyoruz. İngiltere'nin finansal düzenleyici kurumu tarafından denetlenen güvenilir altyapımız, küresel piyasalara erişim, rekabetçi fiyatlandırma ve kişiselleştirilmiş danışmanlık ile yanınızdayız.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-dark-100 border border-dark-300 rounded-xl p-8 text-center shadow-lg"
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-dark-100 border border-dark-300 rounded-xl p-6 hover:border-primary-600 transition-all hover:transform hover:scale-105 hover:shadow-lg hover:shadow-primary-600/30"
            >
              <div className="text-primary-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs

