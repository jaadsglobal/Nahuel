
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulamos envío
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-10 rounded-2xl shadow-xl border border-green-100 text-center space-y-4">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900">¡Mensaje enviado!</h3>
        <p className="text-slate-600">Gracias por confiar en Nahuel. Un técnico te llamará en menos de 24 horas laborables.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-amber-600 font-bold"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Nombre completo</label>
          <input 
            required
            type="text" 
            placeholder="Ej: Juan Pérez"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Teléfono</label>
          <input 
            required
            type="tel" 
            placeholder="600 000 000"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">Tipo de servicio</label>
        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all">
          <option>Reforma Integral</option>
          <option>Baños o Cocinas</option>
          <option>Pintura</option>
          <option>Mantenimiento / Avería</option>
          <option>Otro</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">Tu mensaje (Opcional)</label>
        <textarea 
          rows={4}
          placeholder="Cuéntanos brevemente qué necesitas..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
        ></textarea>
      </div>
      <button 
        type="submit" 
        disabled={status === 'sending'}
        className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all active:scale-95 ${status === 'sending' ? 'bg-slate-400 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/20'}`}
      >
        {status === 'sending' ? 'Enviando...' : 'Solicitar Presupuesto'}
      </button>
      <p className="text-xs text-slate-400 text-center">
        Al hacer clic, aceptas nuestra política de privacidad. No enviamos spam.
      </p>
    </form>
  );
};

export default ContactForm;
