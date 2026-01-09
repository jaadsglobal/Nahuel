
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const points = [
    { title: 'Presupuestos Cerrados', desc: 'Sin sorpresas de última hora. Lo que firmamos es lo que pagas.' },
    { title: 'Plazos Garantizados', desc: 'Entendemos tu tiempo. Penalizamos los retrasos en contrato.' },
    { title: 'Garantía de Obra', desc: 'Ofrecemos hasta 2 años de garantía en todos nuestros trabajos.' },
    { title: 'Limpieza e Higiene', desc: 'Entregamos tu espacio impecable, listo para ser disfrutado.' }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">¿Por qué elegirnos?</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">La confianza se construye con resultados impecables</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {points.map((p, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-slate-900">
                    {i + 1}
                  </div>
                  <h4 className="text-xl font-bold">{p.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/10 blur-[120px] rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592dee584446?auto=format&fit=crop&q=80&w=800" 
              alt="Obra bien ejecutada" 
              className="rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
