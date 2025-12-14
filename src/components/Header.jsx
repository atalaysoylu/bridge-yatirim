import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="bg-dark-100 border-b border-dark-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="text-2xl font-bold text-white"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Bridge Yatırım
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href="#hakkimizda" 
              className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, 'hakkimizda')}
            >
              Hakkımızda
            </a>
            <a 
              href="#hizmetler" 
              className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, 'hizmetler')}
            >
              Hizmetler
            </a>
            <a 
              href="#piyasalar" 
              className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, 'piyasalar')}
            >
              Piyasalar
            </a>
            <a 
              href="#iletisim" 
              className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, 'iletisim')}
            >
              İletişim
            </a>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
              Hesap Aç
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-300 hover:bg-dark-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4">
            <a
              href="#hakkimizda"
              className="block text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, 'hakkimizda')}
            >
              Hakkımızda
            </a>
            <a
              href="#hizmetler"
              className="block text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, 'hizmetler')}
            >
              Hizmetler
            </a>
            <a
              href="#piyasalar"
              className="block text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, 'piyasalar')}
            >
              Piyasalar
            </a>
            <a
              href="#iletisim"
              className="block text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, 'iletisim')}
            >
              İletişim
            </a>
            <button className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
              Hesap Aç
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

