

const PRODUCT_IMAGES = [
    'https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/BETIZY2%20(1).png',
    'https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Chicha%20font.png',
    'https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/choco%20k.png',
    'https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/foror2.png',
    'https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Lactokiana4.png',
    'https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/MERENGON1.png',
    'https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Rico%20Cereal%20front%20a%20(1).png',
    'https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Linea.png'
];

export default function ProductShowcase() {
    return (
        <div className="py-12 bg-white border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h3 className="text-xl font-heading font-bold text-gray-400 uppercase tracking-widest">
                    Nuestra Variedad
                </h3>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Animated Track */}
                <div className="flex w-max animate-scroll gap-12 px-6">
                    {/* First Set */}
                    {PRODUCT_IMAGES.map((src, index) => (
                        <div key={`original-${index}`} className="flex-shrink-0 w-48 h-48 flex items-center justify-center p-4 transition-transform hover:scale-110 duration-300 pointer-events-auto">
                            <img
                                src={src}
                                alt={`Producto Kiana ${index + 1}`}
                                className="w-full h-full object-contain filter drop-shadow-md"
                            />
                        </div>
                    ))}

                    {/* Duplicate Set for Seamless Loop */}
                    {PRODUCT_IMAGES.map((src, index) => (
                        <div key={`duplicate-${index}`} className="flex-shrink-0 w-48 h-48 flex items-center justify-center p-4 transition-transform hover:scale-110 duration-300 pointer-events-auto">
                            <img
                                src={src}
                                alt={`Producto Kiana ${index + 1}`}
                                className="w-full h-full object-contain filter drop-shadow-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
