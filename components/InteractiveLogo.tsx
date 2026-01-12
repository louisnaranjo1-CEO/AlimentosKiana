import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveLogoProps {
    mainLogoSrc: string;
    phraseSrc: string;
    className?: string; // For sizing
}

const InteractiveLogo: React.FC<InteractiveLogoProps> = ({ mainLogoSrc, phraseSrc, className = "h-24 md:h-32" }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        // Reset after animation
        setTimeout(() => setIsAnimating(false), 3000);
    };

    return (
        <div className="relative inline-flex justify-center items-center cursor-pointer group" onClick={handleClick}>
            {/* The Phrase (Hidden Behind) */}
            <AnimatePresence>
                {isAnimating && (
                    <motion.img
                        src={phraseSrc}
                        alt="Frase Kiana"
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: -140, // Mucho más alto
                            rotate: [0, -5, 5, 0]
                        }}
                        exit={{ opacity: 0, scale: 0.5, y: 0 }} // Regresa a su posición original detrás
                        transition={{
                            type: "spring",
                            stiffness: 180,
                            damping: 12,
                            duration: 0.5
                        }}
                        className="absolute z-0 w-24 md:w-32 max-w-none pointer-events-none drop-shadow-lg"
                    />

                )}
            </AnimatePresence>

            {/* Main Logo */}
            <motion.img
                src={mainLogoSrc}
                alt="Logo Kiana Main"
                className={`w-auto relative z-10 ${className}`}
                animate={isAnimating ? {
                    filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.8)) brightness(1.2)",
                    scale: 1.1
                } : {
                    filter: "drop-shadow(0 0 0px rgba(0,0,0,0)) brightness(1)",
                    scale: 1
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Click Hint (Optional, only when not animating) */}
            {!isAnimating && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute -bottom-8 text-white/50 text-xs font-bold uppercase tracking-widest whitespace-nowrap"
                >
                    ¡Haz click!
                </motion.div>
            )}
        </div>
    );
};

export default InteractiveLogo;
