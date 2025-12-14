const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-dark-50 via-dark-100 to-dark-50 py-20 lg:py-32 relative overflow-hidden border-b border-dark-200">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 via-transparent to-primary-600/5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-400 text-lg sm:text-xl font-semibold mb-4">
            Küresel Piyasalara Açılan Kapınız
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Finansal Geleceğinizi<br />Bridge Yatırım ile İnşa Edin
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Forex, hisse senedi ve emtia piyasalarında profesyonel rehberlik. Güvenilir altyapı ve uzman analiz desteği ile yatırımlarınızı yönetin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 transform hover:-translate-y-0.5 transition-all flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Ücretsiz Demo Hesap
            </button>
            <button className="bg-transparent text-white border-2 border-primary-600 px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors font-semibold text-lg">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

