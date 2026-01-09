
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>NAHUEL</span>
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Tu empresa de confianza en servicios generales y reformas. Transformamos espacios con pasión, seriedad y resultados garantizados.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-amber-500">Navegación</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#servicios" className="hover:text-amber-500 transition-colors">Nuestros Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-amber-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#proceso" className="hover:text-amber-500 transition-colors">Metodología de Trabajo</a></li>
              <li><a href="#testimonios" className="hover:text-amber-500 transition-colors">Opiniones Clientes</a></li>
              <li><a href="#contacto" className="hover:text-amber-500 transition-colors font-bold">Solicitar Presupuesto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-amber-500">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Nahuel Servicios y Reformas. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
             <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
             <a href="#" className="hover:text-amber-500 transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-amber-500 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
