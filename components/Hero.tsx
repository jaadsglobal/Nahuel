
import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Espacio de transición entre hogar y oficina moderna */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          alt="Reformas de oficinas y hogares Nahuel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-amber-500 text-sm font-bold tracking-wide uppercase">Servicios y reformas</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Expertos en Reformas para <span className="text-amber-500">Hogares, Oficinas y Negocios</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed font-light max-w-2xl">
            Soluciones integrales de mantenimiento y construcción. Maximizamos el valor de tu vivienda y la productividad de tu empresa con acabados profesionales.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={onContactClick}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
            >
              Solicitar Presupuesto Gratis
            </button>
            <a 
              href="#servicios"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center flex items-center justify-center"
            >
              Ver Servicios para Empresas
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-amber-500 font-bold text-2xl">+15</p>
              <p className="text-slate-400 text-sm">Años de Trayectoria</p>
            </div>
            <div>
              <p className="text-amber-500 font-bold text-2xl">Líderes</p>
              <p className="text-slate-400 text-sm">En Mantenimiento B2B</p>
            </div>
            <div>
              <p className="text-amber-500 font-bold text-2xl">Garantía</p>
              <p className="text-slate-400 text-sm">Por Escrito</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
