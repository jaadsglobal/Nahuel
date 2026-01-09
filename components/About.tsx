
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Imagen de una cocina moderna y bien organizada, un clásico de las reformas */}
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200" 
                alt="Cocina moderna reformada por Nahuel" 
                className="rounded-2xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/10 rounded-2xl -z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-amber-500/20 rounded-tl-2xl -z-0"></div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest">Sobre Nahuel</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">Excelencia en reformas para espacios con personalidad</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              En Nahuel, convertimos estancias comunes en ambientes extraordinarios. Con un enfoque puesto en la elegancia y la funcionalidad, cada proyecto es tratado con el máximo cuidado y rigor profesional.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Desde el concepto inicial hasta el último detalle de fontanería o pintura, nuestro equipo asegura que la calidad de los materiales y la precisión en la ejecución superen tus expectativas. No solo reformamos paredes; mejoramos tu calidad de vida.
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-slate-700 font-medium p-3 bg-slate-50 rounded-xl">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span>Gestión de Proyectos</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700 font-medium p-3 bg-slate-50 rounded-xl">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span>Técnicos Especializados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
