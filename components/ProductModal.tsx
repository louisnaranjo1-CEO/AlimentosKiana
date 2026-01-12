import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Leaf, Scale } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    if (!product) return null;

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
                        className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-black/10 text-gray-800 p-2 rounded-full md:hidden"
                    >
                        <X size={24} />
                    </button>

                    {/* Left Side: Visuals */}
                    <div className={`md:w-2/5 ${product.imageColor} p-8 flex flex-col items-center justify-center text-center relative`}>
                        <div className="w-full max-w-[250px] aspect-[3/4] flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain filter drop-shadow-lg"
                                />
                            ) : (
                                <div className="w-48 h-64 bg-white shadow-2xl rounded-xl flex items-center justify-center">
                                    <span className="font-heading font-extrabold text-2xl text-kiana-dark px-4">
                                        {product.name}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg w-full max-w-xs">
                            <div className="flex items-center justify-between text-sm text-gray-600 mb-2 border-b border-gray-200 pb-2">
                                <span className="flex items-center gap-1"><Scale size={14} /> Presentación</span>
                                <span className="font-bold">{product.packagingType}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <span className="flex items-center gap-1"><Leaf size={14} /> Vida útil</span>
                                <span className="font-bold">{product.shelfLife}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Info */}
                    <div className="md:w-3/5 p-8 bg-white">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-kiana-green font-bold text-xs uppercase tracking-wider mb-1 block">{product.category}</span>
                                <h2 className="text-3xl font-heading font-bold text-gray-900">{product.name}</h2>
                            </div>
                            <button onClick={onClose} className="hidden md:block text-gray-400 hover:text-gray-900 transition-colors">
                                <X size={28} />
                            </button>
                        </div>

                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Features Chips */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {product.features.map((feature, i) => (
                                <span key={i} className="bg-green-50 text-kiana-dark px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 border border-green-100">
                                    <Check size={14} /> {feature}
                                </span>
                            ))}
                        </div>

                        {/* Nutritional Table */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-heading font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Leaf size={18} className="text-kiana-green" />
                                Información Nutricional
                            </h3>

                            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                                {product.nutritional.calories && (
                                    <div className="flex flex-col border-b border-gray-200 pb-2">
                                        <span className="text-gray-500 text-xs uppercase">Energía</span>
                                        <span className="font-bold text-gray-900 text-lg">{product.nutritional.calories}</span>
                                    </div>
                                )}
                                {product.nutritional.protein && (
                                    <div className="flex flex-col border-b border-gray-200 pb-2">
                                        <span className="text-gray-500 text-xs uppercase">Proteína</span>
                                        <span className="font-bold text-gray-900 text-lg">{product.nutritional.protein}</span>
                                    </div>
                                )}
                            </div>

                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {product.nutritional.vitamins.length > 0 && (
                                    <div>
                                        <span className="font-bold text-gray-700 block mb-1">Vitaminas</span>
                                        <ul className="text-gray-500 text-xs space-y-1 list-disc list-inside">
                                            {product.nutritional.vitamins.map((v, i) => <li key={i}>{v}</li>)}
                                        </ul>
                                    </div>
                                )}
                                {product.nutritional.minerals.length > 0 && (
                                    <div>
                                        <span className="font-bold text-gray-700 block mb-1">Minerales</span>
                                        <ul className="text-gray-500 text-xs space-y-1 list-disc list-inside">
                                            {product.nutritional.minerals.map((m, i) => <li key={i}>{m}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Pricing Section */}
                        {product.pricing && (
                            <div className="mt-6 bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
                                <h3 className="font-heading font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <span className="bg-kiana-yellow text-kiana-dark p-1 rounded">
                                        <Scale size={16} />
                                    </span>
                                    Precios y Presentación
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                                    <div className="flex flex-col bg-white p-3 rounded-xl shadow-sm border border-yellow-100">
                                        <span className="text-gray-500 text-xs font-bold uppercase mb-1">Unidad (Neto)</span>
                                        <span className="text-xl font-extrabold text-kiana-dark">${product.pricing.pricePerUnit.toFixed(2)}</span>
                                    </div>
                                    <div className="flex flex-col bg-white p-3 rounded-xl shadow-sm border border-yellow-100">
                                        <span className="text-gray-500 text-xs font-bold uppercase mb-1">Bulto (Neto)</span>
                                        <span className="text-xl font-extrabold text-kiana-dark">${product.pricing.pricePerBulto.toFixed(2)}</span>
                                        <span className="text-[10px] text-gray-400">Trae {product.pricing.unitsPerBulto} unidades</span>
                                    </div>
                                    <div className="flex flex-col bg-white p-3 rounded-xl shadow-sm border border-yellow-100">
                                        <span className="text-gray-500 text-xs font-bold uppercase mb-1">PVMP Sugerido</span>
                                        <span className="text-xl font-extrabold text-kiana-green">${product.pricing.pvmp?.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        )}


                        <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
                            <button
                                onClick={() => {
                                    const message = `Hola Alimentos Kiana, estoy interesado en el producto: *${product.name}*. ¿Podrían darme más información y precios?`;
                                    window.open(`https://wa.me/584243533131?text=${encodeURIComponent(message)}`, '_blank');
                                }}
                                className="bg-kiana-green text-white font-bold py-3 px-6 rounded-xl hover:bg-kiana-dark transition-colors shadow-lg shadow-green-200 flex items-center justify-center gap-2"
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-5 h-5" />
                                Cotizar en WhatsApp
                            </button>
                            <button
                                onClick={onClose}
                                className="bg-white border border-gray-200 text-gray-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>

                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProductModal;