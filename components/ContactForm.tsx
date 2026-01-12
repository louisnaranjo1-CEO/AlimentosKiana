import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER, VENEZUELA_LOCATIONS, ORGANIZATION_TYPES } from '../constants';
import { supabase } from '../lib/supabase';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        company: '',
        rif: '',
        type: ORGANIZATION_TYPES[0],
        state: '',
        city: ''
    });

    const [availableCities, setAvailableCities] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Save to Supabase
            const { error } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        contact_name: formData.name,
                        phone: formData.phone,
                        company_name: formData.company,
                        rif: formData.rif,
                        organization_type: formData.type,
                        state: formData.state,
                        city: formData.city
                    }
                ]);

            if (error) {
                console.error('Error saving to Supabase:', error);
                // We still proceed to WhatsApp even if DB save fails, 
                // to not block the user's primary intent
            }

            // Construct WhatsApp Message
            const text = `*Solicitud de Alianza Comercial - Alimentos Kiana*%0A%0A` +
                `Hola, mi nombre es *${formData.name}* de la organización *${formData.company}*.%0A` +
                `📞 Teléfono: ${formData.phone}%0A` +
                `📋 RIF: ${formData.rif}%0A` +
                `🏢 Tipo: ${formData.type}%0A` +
                `📍 Ubicación: ${formData.city}, Edo. ${formData.state}%0A%0A` +
                `Estoy interesado en distribuir sus productos de alta rotación. Quedo atento a su respuesta.`;

            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
        } catch (err) {
            console.error('Unexpected error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newState = e.target.value;
        const cities = VENEZUELA_LOCATIONS[newState] || [];
        setAvailableCities(cities);
        setFormData(prev => ({
            ...prev,
            state: newState,
            city: '' // Reset city when state changes
        }));
    };

    return (
        <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-kiana-green max-w-lg w-full mx-auto relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-kiana-light rounded-bl-full -mr-16 -mt-16 z-0"></div>

            <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">Conviértase en Aliado</h3>
                <p className="text-gray-500 mb-6 text-sm">
                    Complete sus datos para conectar directamente con la Gerencia. Filtramos solicitudes para garantizar atención prioritaria a comercios y mayoristas.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre de Contacto</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kiana-green focus:border-transparent outline-none transition-all placeholder-gray-400"
                            placeholder="Ej. Juan Pérez"
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Número de Teléfono</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kiana-green focus:border-transparent outline-none placeholder-gray-400"
                            placeholder="Ej. 0414-1234567"
                            onChange={handleChange}
                            value={formData.phone}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Empresa / Organización</label>
                            <input
                                type="text"
                                name="company"
                                required
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kiana-green focus:border-transparent outline-none placeholder-gray-400"
                                placeholder="Nombre Comercial"
                                onChange={handleChange}
                                value={formData.company}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">RIF / ID Fiscal</label>
                            <input
                                type="text"
                                name="rif"
                                required
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kiana-green focus:border-transparent outline-none placeholder-gray-400"
                                placeholder="J-12345678-9"
                                onChange={handleChange}
                                value={formData.rif}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Tipo de Organización</label>
                        <select
                            name="type"
                            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kiana-green outline-none appearance-none"
                            onChange={handleChange}
                            value={formData.type}
                        >
                            {ORGANIZATION_TYPES.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="border-t border-gray-100 pt-3 mt-3">
                        <span className="block text-sm font-bold text-kiana-green mb-2 flex items-center gap-1">
                            <MapPin size={14} /> Ubicación
                        </span>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Estado</label>
                                <select
                                    name="state"
                                    required
                                    className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kiana-green outline-none"
                                    onChange={handleStateChange}
                                    value={formData.state}
                                >
                                    <option value="">Seleccione Estado</option>
                                    {Object.keys(VENEZUELA_LOCATIONS).sort().map(state => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Ciudad / Pueblo</label>
                                <select
                                    name="city"
                                    required
                                    disabled={!formData.state}
                                    className={`w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kiana-green outline-none ${!formData.state ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onChange={handleChange}
                                    value={formData.city}
                                >
                                    <option value="">
                                        {formData.state ? 'Seleccione Ciudad' : 'Primero elija Estado'}
                                    </option>
                                    {availableCities.map(city => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-kiana-green hover:bg-kiana-dark text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-200 transition-colors mt-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? (
                            <span className="animate-pulse">Procesando...</span>
                        ) : (
                            <>
                                <Send size={18} />
                                Contactar a Gerencia
                            </>
                        )}
                    </motion.button>

                    <p className="text-xs text-center text-gray-400 mt-2 flex items-center justify-center gap-1">
                        <CheckCircle size={12} /> Respuesta directa vía WhatsApp
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;