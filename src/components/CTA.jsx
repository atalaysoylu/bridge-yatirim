const CTA = () => {
  return (
    <section id="iletisim" className="bg-gradient-to-br from-dark-100 via-primary-50 to-dark-100 text-white py-20 lg:py-24 relative overflow-hidden border-b border-dark-200 scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-primary-600/10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Yatırım Yolculuğunuza<br />Bugün Başlayın
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Ücretsiz demo hesabınızı açın ve 100.000$ sanal bakiye ile risk almadan trading deneyimi kazanın. Uzman ekibimiz her adımda yanınızda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center gap-2">
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
              Ücretsiz Demo Hesap Aç
            </button>
            <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-700 transition-colors font-semibold text-lg">
              Yatırım Danışmanı Ara
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-200">
            <a
              href="tel:+902121234567"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg">+90 212 123 45 67</span>
            </a>
            <a
              href="mailto:info@bridgeyatirim.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-lg">info@bridgeyatirim.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

