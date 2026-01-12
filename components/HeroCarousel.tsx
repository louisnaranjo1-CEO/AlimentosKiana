import React from 'react';
import { motion } from 'framer-motion';

const HERO_IMAGES = [
    "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/BETIZY2%20(1).png",
    "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/choco%20k.png",
    "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/foror2.png",
    "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/haz%20crecer%20tu%20negocio.png",
    "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Lactokiana4.png",
    "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Linea.png",
    "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/MERENGON1.png",
    "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Rico%20Cereal%20front%20a%20(1).png",
    "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/bebida%20instantea.png",
    "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Chicha%20font.png"
];


const HeroCarousel: React.FC = () => {
    return (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20 pb-8 pointer-events-none">
            {/* Gradient mask for smooth fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-kiana-dark to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-kiana-dark to-transparent z-10"></div>

            <motion.div
                className="flex items-end gap-8 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {/* Duplicated list for seamless infinite scroll */}
                {[...HERO_IMAGES, ...HERO_IMAGES].map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-24 md:w-48 lg:w-56 transform hover:scale-110 transition-transform duration-300">
                        <img
                            src={src}
                            alt="Producto Kiana"
                            className="w-full h-auto object-contain drop-shadow-2xl filter brightness-110" // Brightness boost helps against dark bg
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default HeroCarousel;
