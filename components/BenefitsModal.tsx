import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShieldCheck, BrainCircuit, Droplet } from 'lucide-react';

interface BenefitsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BenefitsModal: React.FC<BenefitsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col md:flex-row overflow-hidden"
        >
          {/* Close Button Mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full"
          >
            <X size={24} />
          </button>

          {/* Left Side: Visual Header */}
          <div className="md:w-1/3 bg-kiana-green p-8 flex flex-col justify-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1596910547037-846b1980329f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
            <div className="relative z-10">
              <Heart className="w-16 h-16 mb-6 text-kiana-yellow" />
              <h2 className="font-heading font-extrabold text-3xl mb-4 leading-tight">
                Nutrición para el Futuro
              </h2>
              <p className="text-green-50 text-sm font-medium">
                Combatir el hambre oculta a través de alimentos nutritivos es nuestra misión principal.
              </p>
            </div>
          </div>

          {/* Right Side: Info Content */}
          <div className="md:w-2/3 p-8 md:p-12 bg-white">
            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-6">
              El Impacto de la Nutrición Infantil
            </h3>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Según el <strong>Programa Mundial de Alimentos (PMA)</strong> y <strong>UNICEF</strong>, la nutrición en los primeros años de vida es determinante. La deficiencia de micronutrientes, conocida como "hambre oculta", afecta el desarrollo físico y cognitivo de los niños, incluso si consumen suficientes calorías.
              </p>

              <p>
                En Alimentos Kiana, respondemos a esta necesidad enriqueciendo nuestros productos lácteos y cereales con vitaminas y minerales esenciales que a menudo faltan en la dieta diaria:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2 mb-2 text-kiana-dark font-bold">
                    <BrainCircuit size={20} />
                    Desarrollo Cognitivo
                  </div>
                  <p className="text-xs text-gray-600">
                    El <strong>Hierro y Zinc</strong> son fundamentales para el aprendizaje, la memoria y la concentración escolar.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2 mb-2 text-kiana-dark font-bold">
                    <ShieldCheck size={20} />
                    Sistema Inmune
                  </div>
                  <p className="text-xs text-gray-600">
                    Las <strong>Vitaminas A, C y D</strong> fortalecen las defensas naturales, reduciendo la incidencia de enfermedades comunes.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2 mb-2 text-kiana-dark font-bold">
                    <Droplet size={20} />
                    Crecimiento Óseo
                  </div>
                  <p className="text-xs text-gray-600">
                    El <strong>Calcio y Fósforo</strong> aseguran la formación de huesos fuertes y dientes sanos durante el "estirón".
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-kiana-yellow mt-6">
                <p className="text-sm text-gray-700 italic">
                  "La inversión en nutrición infantil es la base para sociedades prósperas y productivas." - <span className="font-bold">Organización Mundial de la Salud (OMS)</span>
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={onClose}
                className="bg-kiana-green text-white font-bold py-3 px-8 rounded-xl hover:bg-kiana-dark transition-colors"
              >
                Volver
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BenefitsModal;