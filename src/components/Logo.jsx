const Logo = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Bridge Icon */}
      <svg 
        width="56" 
        height="56" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Bridge structure */}
        <path 
          d="M5 25 L12 20 L20 25 L28 20 L35 25" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-primary-400"
        />
        {/* Bridge supports */}
        <line x1="12" y1="20" x2="12" y2="30" stroke="currentColor" strokeWidth="2" className="text-primary-500"/>
        <line x1="20" y1="25" x2="20" y2="35" stroke="currentColor" strokeWidth="2" className="text-primary-500"/>
        <line x1="28" y1="20" x2="28" y2="30" stroke="currentColor" strokeWidth="2" className="text-primary-500"/>
        {/* Base supports */}
        <line x1="5" y1="25" x2="5" y2="35" stroke="currentColor" strokeWidth="2" className="text-primary-600"/>
        <line x1="35" y1="25" x2="35" y2="35" stroke="currentColor" strokeWidth="2" className="text-primary-600"/>
        {/* Connection lines */}
        <line x1="5" y1="35" x2="35" y2="35" stroke="currentColor" strokeWidth="1.5" className="text-primary-600 opacity-50"/>
      </svg>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-white leading-tight">Bridge</span>
        <span className="text-base font-semibold text-primary-400 leading-tight">Yatırım</span>
      </div>
    </div>
  )
}

export default Logo

