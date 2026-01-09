
import React from 'react';

const steps = [
  { title: 'Contacto', desc: 'Recibimos tu solicitud y te llamamos en menos de 24h.' },
  { title: 'Evaluación Técnica', desc: 'Visitamos el lugar para tomar medidas y entender tus necesidades.' },
  { title: 'Presupuesto Detallado', desc: 'Enviamos una propuesta clara con partidas desglosadas.' },
  { title: 'Ejecución Profesional', desc: 'Nuestro equipo se pone manos a la obra bajo supervisión constante.' },
  { title: 'Entrega y Garantía', desc: 'Revisión final conjunta y entrega de llaves con garantía por escrito.' }
];

const Process: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  return (
    <section id="proceso" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">Metodología Nahuel</h2>
        <h3 className="text-4xl font-bold text-slate-900 mb-16">¿Cómo trabajamos contigo?</h3>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 group">
              <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-2xl font-black text-slate-200 mx-auto mb-6 group-hover:border-amber-500 group-hover:text-amber-500 transition-all duration-300 shadow-sm">
                0{idx + 1}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-amber-50 rounded-3xl inline-block max-w-2xl">
          <p className="text-slate-800 text-lg italic mb-6">"La planificación es el 80% del éxito en cualquier reforma. En Nahuel no dejamos nada al azar."</p>
          <button 
            onClick={onContactClick}
            className="text-amber-600 font-bold hover:underline"
          >
            Empieza hoy mismo →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
