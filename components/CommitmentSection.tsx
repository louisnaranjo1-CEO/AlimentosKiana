import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Heart, Zap, Award, Activity } from 'lucide-react';

const productsData = [
    {
        name: "Lactokiana / Plus",
        benefit: "Crecimiento y desarrollo integral",
        nutrients: "Proteína (13g-16g), Calcio, Hierro, Zinc",
        icon: <Activity />
    },
    {
        name: "Rico Cereal",
        benefit: "Especial para bebés (+6 meses)",
        nutrients: "Arroz fortificado, 14g de Proteína",
        icon: <Heart />
    },
    {
        name: "Betsy",
        benefit: "Crema de arroz instantánea para población vulnerable",
        nutrients: "Vitaminas A, C, B12 y Hierro",
        icon: <ShieldCheck />
    },
    {
        name: "Fororo",
        benefit: "Energía tradicional basada en maíz tostado",
        nutrients: "Proteína (14g), Vitaminas y Minerales",
        icon: <Zap />
    },
    {
        name: "Merengón / Choco K",
        benefit: "Bebidas nutritivas con sabor superior",
        nutrients: "Base de arroz/cacao, Vitaminas y Calcio",
        icon: <Award />
    }
];

const CommitmentSection: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50/50 skew-x-12 transform origin-top-right z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-kiana-green font-bold tracking-wider uppercase text-sm mb-3 block">
                            Misión 2026
                        </span>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-8">
                            Nuestro Compromiso
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Como Alimentos Kiana, nos tomamos muy en serio nuestro compromiso con la nutrición de tu familia y el crecimiento de tu negocio.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-justify">
                            En este 2026, la seguridad alimentaria global enfrenta retos sin precedentes. Organismos internacionales como la FAO y la OMS han subrayado que, para combatir la malnutrición y el retraso del crecimiento, es imperativo el consumo de alimentos fortificados que combinen proteínas de alta calidad con una densidad nutricional superior. En este contexto, nuestras mezclas instantáneas no son solo una opción, sino una solución estratégica diseñada bajo estándares científicos para garantizar el bienestar integral.
                        </p>
                    </div>

                    {/* Lactokiana Feature */}
                    <div className="bg-kiana-dark rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-kiana-green rounded-full opacity-30 blur-3xl"></div>

                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 relative z-10">
                            Lactokiana: La Excelencia en Nutrición Familiar
                        </h3>
                        <p className="text-gray-100 mb-8 relative z-10">
                            Nuestro producto estrella, Lactokiana, ha sido formulado específicamente para abordar las carencias nutricionales en grupos sensibles como niños, adolescentes, mujeres embarazadas y adultos mayores.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 relative z-10">
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="bg-kiana-yellow text-kiana-dark p-2 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                                        <Zap size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-kiana-yellow mb-1">Poder Proteico Dual</h4>
                                        <p className="text-sm text-gray-200">Combina proteína vegetal de alta calidad (soya) con proteína láctea, proporcionando los aminoácidos esenciales necesarios para la reparación muscular y el desarrollo físico.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-kiana-yellow text-kiana-dark p-2 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-kiana-yellow mb-1">Fortificación Integral</h4>
                                        <p className="text-sm text-gray-200">Enriquecida con vitaminas (A, B1, B2, B6, B12, C, D, K, Ácido Fólico y Niacina) y minerales (Calcio, Hierro, Zinc, Fósforo y Magnesio).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="bg-kiana-yellow text-kiana-dark p-2 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                                        <Heart size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-kiana-yellow mb-1">Salud Cardiovascular</h4>
                                        <p className="text-sm text-gray-200">Naturalmente libre de colesterol gracias a su base de soya, ayudando a reducir el riesgo de enfermedades coronarias según estándares internacionales.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-kiana-yellow text-kiana-dark p-2 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                                        <Check size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-kiana-yellow mb-1">Versatilidad</h4>
                                        <p className="text-sm text-gray-200">Bebida instantánea, fácil de preparar y con una vida útil de 12 meses, ideal para mantener la estabilidad alimentaria.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quality Commitment Table */}
                    <div className="mb-16">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                                Nuestro Compromiso con la Calidad 2026
                            </h3>
                            <p className="text-gray-600">
                                Entendemos que el consumidor de hoy busca alimentos con propósito. Por ello, cada gramo de nuestros productos refleja nuestra dedicación:
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px] bg-white rounded-2xl shadow-lg border-hidden overflow-hidden">
                                <thead className="bg-green-50">
                                    <tr>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-kiana-dark uppercase tracking-wider">Producto</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-kiana-dark uppercase tracking-wider">Beneficio Principal</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-kiana-dark uppercase tracking-wider">Nutrientes Clave</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {productsData.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-gray-100 rounded-lg text-kiana-green">
                                                        {item.icon}
                                                    </div>
                                                    <span className="font-bold text-gray-800">{item.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-gray-600 font-medium">
                                                {item.benefit}
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className="bg-green-100 text-kiana-dark px-3 py-1 rounded-full text-xs font-bold inline-block">
                                                    {item.nutrients}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Closing */}
                    <div className="bg-gray-50 border-l-4 border-kiana-green p-6 md:p-8 rounded-r-xl">
                        <p className="text-gray-700 italic text-lg leading-relaxed">
                            "Como bien señalan las tendencias globales de este año, la transparencia y el valor nutricional real son los nuevos estándares de la industria. En Alimentos Kiana, no solo alimentamos; cuidamos el futuro con cada vaso de bienestar."
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CommitmentSection;
