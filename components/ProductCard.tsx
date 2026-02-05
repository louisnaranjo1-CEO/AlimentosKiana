import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { Zap, Info, PlusCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(product)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full relative group cursor-pointer transition-all hover:shadow-xl hover:border-kiana-green/30"
    >
      {/* Visual Indicator of "High Sales" without text */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-kiana-yellow text-kiana-dark text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
          <Zap size={12} fill="currentColor" />
          Favorito
        </div>
      </div>

      <div className={`h-48 w-full ${product.imageColor} flex items-center justify-center relative p-6 overflow-hidden`}>
        {/* Placeholder for Product Image */}
        <motion.div
          className="w-32 h-40 bg-white/90 shadow-xl rounded-lg flex items-center justify-center text-center p-2 relative z-10"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 3, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Logo fallback since we don't have product images yet */}
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src="https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/logo-color.png"
              alt="Kiana"
              className="h-12 w-auto object-contain opacity-80"
            />
            <span className="font-heading font-bold text-kiana-dark text-sm leading-tight">{product.name}</span>
          </div>
        </motion.div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
          <span className="bg-white/90 text-kiana-green px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <PlusCircle size={14} /> Ver Nutrición
          </span>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-heading font-bold text-gray-800 leading-tight group-hover:text-kiana-green transition-colors">{product.name}</h3>
          </div>
          <p className="text-gray-500 text-sm mb-4 line-clamp-3">{product.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {product.features.slice(0, 2).map((feature, idx) => (
              <span key={idx} className="bg-kiana-light text-kiana-dark text-xs font-semibold px-2 py-1 rounded-md">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span className="flex items-center gap-1 font-semibold">
              <Info size={16} className="text-kiana-green" />
              {product.packagingType}
            </span>
            <span className="text-kiana-green font-bold text-xs underline">
              Ver Detalles
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;