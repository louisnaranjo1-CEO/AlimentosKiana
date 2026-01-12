import React, { useState, useMemo } from 'react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';
import { ShoppingCart, Trash2, Plus, Minus, Send, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

const PurchaseSimulator: React.FC = () => {
    // Only products with pricing
    const pricedProducts = useMemo(() => PRODUCTS.filter(p => p.pricing), []);

    const [cart, setCart] = useState<{ productId: string; quantity: number }[]>([]);

    const addToCart = (productId: string) => {
        setCart(prev => {
            const existing = prev.find(item => item.productId === productId);
            if (existing) {
                return prev.map(item => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { productId, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart(prev => prev.filter(item => item.productId !== productId));
    };

    const updateQuantity = (productId: string, delta: number) => {
        setCart(prev => prev.map(item => {
            if (item.productId === productId) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const totals = useMemo(() => {
        let subtotal = 0;
        let totalIVA = 0;

        cart.forEach(item => {
            const product = pricedProducts.find(p => p.id === item.productId);
            if (product && product.pricing) {
                const lineTotal = product.pricing.pricePerBulto * item.quantity;
                subtotal += lineTotal;
                totalIVA += lineTotal * product.pricing.ivaPercent;
            }
        });

        return {
            subtotal,
            iva: totalIVA,
            total: subtotal + totalIVA
        };
    }, [cart, pricedProducts]);

    const handleSendQuote = () => {
        if (cart.length === 0) return;

        let message = `*Solicitud de Cotización - Alimentos Kiana*%0A%0A`;
        message += `Hola, quisiera realizar un pedido con las siguientes especificaciones:%0A%0A`;

        cart.forEach(item => {
            const product = pricedProducts.find(p => p.id === item.productId);
            if (product) {
                message += `📦 *${product.name}* x ${item.quantity} bultos%0A`;
            }
        });

        message += `%0A💰 *Subtotal:* $${totals.subtotal.toFixed(2)}`;
        message += `%0A📝 *IVA (16%):* $${totals.iva.toFixed(2)}`;
        message += `%0A✅ *TOTAL A PAGAR:* $${totals.total.toFixed(2)}`;
        message += `%0A%0AQuedo atento para coordinar el pago y despacho.`;

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    return (
        <section id="cotizador" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-kiana-green font-bold tracking-wider uppercase text-sm mb-3 block">
                        Herramientas para Aliados
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                        Simulador de Compras
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Calcule su inversión en tiempo real. Seleccione sus productos por bulto y obtenga una cotización instantánea lista para enviar.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Product Selection */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                                <Plus className="text-kiana-green" size={20} /> Agregar Productos
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
                                {pricedProducts.map(product => {
                                    const inCart = cart.find(i => i.productId === product.id);
                                    return (
                                        <div key={product.id} className="p-4 rounded-xl border border-gray-100 hover:border-kiana-green/30 transition-colors flex justify-between items-center bg-gray-50/50">
                                            <div>
                                                <h4 className="font-bold text-gray-800">{product.name}</h4>
                                                <p className="text-xs text-gray-500">Bulto: ${product.pricing?.pricePerBulto.toFixed(2)}</p>
                                            </div>
                                            <button
                                                onClick={() => addToCart(product.id)}
                                                disabled={!!inCart}
                                                className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${inCart
                                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                                        : 'bg-white text-kiana-green border border-kiana-green hover:bg-kiana-green hover:text-white shadow-sm'
                                                    }`}
                                            >
                                                {inCart ? 'Agregado' : 'Agregar'}
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Cart Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden sticky top-24 border border-gray-100">
                            <div className="bg-kiana-dark p-6 text-white">
                                <h3 className="font-heading font-bold text-xl flex items-center gap-2">
                                    <ShoppingCart size={24} className="text-kiana-yellow" />
                                    Su Pedido
                                </h3>
                            </div>

                            <div className="p-6">
                                {cart.length === 0 ? (
                                    <div className="text-center py-10 text-gray-400">
                                        <Calculator size={48} className="mx-auto mb-4 opacity-20" />
                                        <p>Seleccione productos para comenzar su cotización.</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {/* Cart Items */}
                                        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                                            {cart.map(item => {
                                                const product = pricedProducts.find(p => p.id === item.productId);
                                                if (!product) return null;
                                                return (
                                                    <div key={item.productId} className="flex items-center justify-between text-sm border-b border-gray-50 pb-3 last:border-0">
                                                        <div className="flex-1">
                                                            <div className="font-bold text-gray-800">{product.name}</div>
                                                            <div className="text-xs text-gray-500">${product.pricing?.pricePerBulto.toFixed(2)} / bulto</div>
                                                        </div>

                                                        <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-2 py-1">
                                                            <button onClick={() => updateQuantity(item.productId, -1)} className="text-gray-500 hover:text-red-500">
                                                                <Minus size={14} />
                                                            </button>
                                                            <span className="font-bold w-4 text-center">{item.quantity}</span>
                                                            <button onClick={() => updateQuantity(item.productId, 1)} className="text-gray-500 hover:text-kiana-green">
                                                                <Plus size={14} />
                                                            </button>
                                                        </div>

                                                        <button onClick={() => removeFromCart(item.productId)} className="ml-3 text-red-300 hover:text-red-500 transition-colors">
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Totals */}
                                        <div className="border-t-2 border-dashed border-gray-200 pt-4 space-y-2 mt-4">
                                            <div className="flex justify-between text-gray-600 text-sm">
                                                <span>Subtotal</span>
                                                <span>${totals.subtotal.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-gray-600 text-sm">
                                                <span>IVA (16%)</span>
                                                <span>${totals.iva.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-gray-900 font-extrabold text-xl pt-2 border-t border-gray-100">
                                                <span>Total</span>
                                                <span>${totals.total.toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleSendQuote}
                                            className="w-full bg-kiana-green text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 flex items-center justify-center gap-2 mt-4 hover:bg-kiana-dark transition-colors"
                                        >
                                            <Send size={18} /> Solicitar Pedido
                                        </motion.button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PurchaseSimulator;
