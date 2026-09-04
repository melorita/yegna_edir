import React from 'react';

interface NavBarProps {
  onNavigateToAuth: (mode: 'REGISTER' | 'LOGIN') => void;
  onNavigateToTerms?: () => void;
  onNavigateHome?: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ onNavigateToAuth, onNavigateToTerms, onNavigateHome }) => {
  const handleHomeClick = (e: React.MouseEvent, sectionId?: string) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo & Wordmark */}
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={(e) => handleHomeClick(e)}
        >
          <img src="/logo.jpg" alt="YegnaEdir Logo" className="w-8 h-8 object-contain rounded-xl" />
          <span className="text-xl font-serif font-bold text-[var(--primary)] tracking-tight">
            YegnaEdir
          </span>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--foreground)]/80">
          <a href="/#home" onClick={(e) => handleHomeClick(e, 'home')} className="hover:text-[var(--primary)] transition-colors">Home</a>
          <a href="/#features" onClick={(e) => handleHomeClick(e, 'features')} className="hover:text-[var(--primary)] transition-colors">Features</a>
          <a href="/#how-it-works" onClick={(e) => handleHomeClick(e, 'how-it-works')} className="hover:text-[var(--primary)] transition-colors">How It Works</a>
          <a href="/#about" onClick={(e) => handleHomeClick(e, 'about')} className="hover:text-[var(--primary)] transition-colors">About Our Edir</a>
          <button
            onClick={onNavigateToTerms}
            className="hover:text-[var(--primary)] font-semibold transition-colors cursor-pointer"
          >
            Terms
          </button>
        </nav>

        {/* Sign In Button */}
        <div>
          <button
            onClick={() => onNavigateToAuth('LOGIN')}
            className="text-sm font-medium rounded-[0.75rem] px-5 py-2.5 bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 shadow-sm transition-all cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};
