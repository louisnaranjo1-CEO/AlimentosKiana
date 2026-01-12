import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Heart, Globe2, Users, Wheat } from 'lucide-react';

const content = [
    {
        title: "Pureza desde el Origen",
        description: "Nuestra conexión con la tierra es sagrada. Contamos con un Programa de Financiamiento Agrícola que apoya a 75 productores locales, trabajando más de 3,000 hectáreas por ciclo. Esto nos permite garantizar que nuestras materias primas, como el maíz y el arroz, nazcan en tierras privilegiadas, libres de metales pesados y contaminantes químicos, asegurando una pureza única en toda Venezuela.",
        icon: <Sprout size={32} />
    },
    {
        title: "Nutrición que Abraza a los más Vulnerables",
        description: "Nuestro propósito trasciende lo comercial. Nos especializamos en formular alimentos de alto valor nutricional diseñados para cada etapa de la vida. Con Lactokiana como estandarte y más de 22 millones de kilogramos entregados en la última década, nos enfocamos prioritariamente en la nutrición infantil y el desarrollo familiar.",
        icon: <Heart size={32} />
    },
    {
        title: "Alianzas de Clase Mundial para el \"Hambre Cero\"",
        description: "Desde 2013, mantenemos una relación técnica y de colaboración con el Programa Mundial de Alimentos (PMA/WFP). Nos guiamos por los estándares más exigentes de la ISO 9001:2015 e ISO 22000:2018, asegurando que cada producto que sale de nuestra planta de 20,500 m² sea sinónimo de inocuidad y excelencia.",
        icon: <Globe2 size={32} />
    },
    {
        title: "Un Corazón que Late en Equipo",
        description: "Nada de esto sería posible sin nuestro equipo de 88 profesionales calificados. Somos personas trabajando para personas, movidos por valores como la lealtad, la honestidad y la innovación. Cada día nos levantamos con la misión de ser líderes en generar valor agregado a los cereales nacionales, contribuyendo activamente a los Objetivos del Milenio.",
        icon: <Users size={32} />
    }
];

const MissionVisionSection: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden relative" id="mision-vision">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-50/50 to-transparent z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Main Header */}
                <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
                    <div className="flex justify-center mb-4 text-kiana-green">
                        <Wheat size={48} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">
                        Kiana: Alimentos con Cariño que <span className="text-kiana-green">Transforman Vidas</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed text-justify md:text-center">
                        En Alimentos Kiana, no solo fabricamos productos; cultivamos esperanza. Somos una empresa venezolana con raíces familiares, nacida en 1985 en Calabozo, estado Guárico, que ha evolucionado hasta convertirse en un referente de nutrición y calidad. Con más de 35 años de trayectoria, nuestra esencia sigue siendo la misma: llevar "Alimentos con Cariño" a la mesa de quienes más lo necesitan.
                    </p>
                </div>

                {/* Story Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
                    {content.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex gap-6 bg-white p-8 rounded-3xl shadow-lg border-b-4 border-kiana-green hover:shadow-2xl transition-all group"
                        >
                            <div className="shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-green-50 text-kiana-green flex items-center justify-center group-hover:bg-kiana-green group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-kiana-green transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Highlight */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-kiana-dark text-white rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-kiana-yellow opacity-10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                    <h3 className="text-2xl md:text-4xl font-heading font-bold relative z-10 max-w-3xl mx-auto leading-snug">
                        "En Alimentos Kiana, la confianza es el valor fundamental que nos dirige. Porque para nosotros, alimentar a Venezuela es la forma más pura de dar cariño."
                    </h3>
                </motion.div>
            </div>
        </section>
    );
};

export default MissionVisionSection;
