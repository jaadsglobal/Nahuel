
import React from 'react';

const testimonials = [
  {
    name: 'Carlos Martínez',
    role: 'Propietario en Madrid',
    text: 'Hicieron la reforma integral de mi piso y no puedo estar más contento. Cumplieron los plazos al día y el presupuesto no varió ni un euro.',
    rating: 5
  },
  {
    name: 'Elena Rodríguez',
    role: 'Dueña de Local Comercial',
    text: 'Nahuel gestionó la pintura y la electricidad de mi nueva tienda. Rápidos, limpios y muy profesionales. Altamente recomendables.',
    rating: 5
  },
  {
    name: 'Juanjo Ruiz',
    role: 'Particular',
    text: 'Me reformaron el baño en tiempo récord. Lo mejor es que cada día dejaban todo recogido y limpio. Un alivio trabajar con gente así.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-bold text-amber-600 uppercase tracking-widest mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex text-amber-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 flex-grow">"{t.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
