import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import BenefitsModal from './components/BenefitsModal';
import ContactForm from './components/ContactForm';
import { PRODUCTS, BENEFITS, DISTRIBUTORS, WHATSAPP_NUMBER } from './constants';
import { ProductCategory, Product } from './types';
import { ChevronDown, TrendingUp, CheckCircle2, Factory, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

import { supabase } from './lib/supabase';

function App() {
    const [activeCategory, setActiveCategory] = useState<string>('Todos');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isBenefitsModalOpen, setIsBenefitsModalOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>(PRODUCTS);
    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        async function fetchProducts() {
            try {
                const { data, error } = await supabase
                    .from('products')
                    .select('*')
                    .order('name');

                if (error) throw error;

                if (data && data.length > 0) {
                    // Map DB fields to component props if they differ
                    const mappedProducts: Product[] = data.map(p => ({
                        id: p.id,
                        name: p.name,
                        category: p.category as ProductCategory,
                        description: p.description,
                        features: p.features,
                        nutritional: p.nutritional,
                        imageColor: p.image_color,
                        packagingType: p.packaging_type,
                        shelfLife: p.shelf_life,
                        isNew: p.is_new
                    }));
                    setProducts(mappedProducts);
                }
            } catch (err) {
                console.error('Error fetching products:', err);
                // Fallback to constants if DB fetch fails or table is empty
            } finally {
                setIsLoading(false);
            }
        }

        fetchProducts();
    }, []);

    const filteredProducts = activeCategory === 'Todos'
        ? products
        : products.filter(p => p.category === activeCategory);

    const categories = ['Todos', ...Object.values(ProductCategory)];


    return (
        <div className="font-sans text-gray-800 bg-gray-50">
            <Navbar onOpenBenefits={() => setIsBenefitsModalOpen(true)} />

            {/* HERO SECTION */}
            <header className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-kiana-dark">
                {/* Abstract Green Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-kiana-green via-kiana-dark to-black opacity-80 z-0"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-40 z-0"></div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6 text-white font-semibold text-sm tracking-wider uppercase shadow-lg">
                            Alimentos con cariño
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 leading-tight drop-shadow-lg">
                            El Cariño<br />
                            <span className="text-kiana-yellow drop-shadow-md">a tu Mesa</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
                            Llevamos lo mejor de nuestra tierra a cada hogar. Productos nutritivos, hechos con dedicación en el corazón de Venezuela.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contacto"
                                className="bg-kiana-yellow text-kiana-dark font-bold py-4 px-8 rounded-full shadow-xl hover:bg-yellow-400 hover:scale-105 transition-all flex items-center justify-center gap-2"
                            >
                                Solicitar Lista de Precios
                            </a>
                            <a
                                href="#catalogo"
                                className="bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold py-4 px-8 rounded-full hover:bg-white/30 hover:scale-105 transition-all shadow-lg"
                            >
                                Ver Productos
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="text-white opacity-80" size={32} />
                </div>
            </header>

            {/* STATS / TRUST INDICATORS */}
            <section className="bg-white py-12 shadow-sm relative z-20 -mt-8 rounded-t-[2.5rem] mx-0 md:mx-4 lg:mx-8 border-b border-gray-100">
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                    {[
                        { label: "Años de Cariño", value: "+26" },
                        { label: "Producción", value: "Industrial" },
                        { label: "Distribución", value: "Directo de la Fábrica" },
                        { label: "Alcance", value: "Nacional" },
                    ].map((stat, i) => (
                        <div key={i} className="p-2 flex flex-col items-center">
                            <div className="text-3xl md:text-4xl font-heading font-extrabold text-kiana-green mb-1 text-center leading-tight">{stat.value}</div>
                            <div className="text-sm text-gray-500 font-bold uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CATALOG SECTION */}
            <section id="catalogo" className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">Nuestros Productos</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Nutrición pensada para cada miembro de la familia. Toca cada producto para conocer sus beneficios.
                    </p>
                </div>

                {/* Categories Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-14">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all shadow-sm ${activeCategory === cat
                                    ? 'bg-kiana-green text-white shadow-green-200 shadow-md transform scale-105'
                                    : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-kiana-dark border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={setSelectedProduct}
                        />
                    ))}
                </div>
            </section>

            {/* VALUE PROPOSITION / BENEFITS */}
            <section id="beneficios" className="py-24 bg-kiana-light/40 relative overflow-hidden">
                {/* Background Decorative Blob */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">
                                Más que alimentos, <br />
                                <span className="text-kiana-green">es bienestar para todos</span>
                            </h2>
                            <p className="text-gray-600 mb-10 text-lg">
                                En Kiana, nos esforzamos por ofrecer productos que no solo sean deliciosos, sino que aporten valor real a la salud de los venezolanos y crecimiento a nuestros aliados.
                            </p>

                            <div className="space-y-8">
                                {BENEFITS.map((benefit, idx) => {
                                    // Dynamic Icon Mapping
                                    const Icon = benefit.icon === 'TrendingUp' ? TrendingUp :
                                        benefit.icon === 'Award' ? CheckCircle2 :
                                            benefit.icon === 'Heart' ? CheckCircle2 : Factory;

                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex gap-5"
                                        >
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-kiana-green shrink-0 border border-green-50">
                                                <Icon size={28} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-lg mb-1">{benefit.title}</h4>
                                                <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="relative order-1 md:order-2">
                            <div className="absolute inset-0 bg-kiana-green rounded-[2rem] transform rotate-3 opacity-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Estantería Kiana"
                                className="rounded-[2rem] shadow-2xl relative z-10 w-full object-cover h-[600px]"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-10 -left-6 md:-left-10 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs border-l-8 border-kiana-yellow">
                                <p className="font-bold text-gray-800 text-base">"Alimentos hechos con dedicación para nutrir sonrisas."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLIENTS / DISTRIBUTORS */}
            <section id="clientes" className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-heading font-bold text-gray-400 mb-14 uppercase tracking-widest">
                        Encuéntranos en los mejores comercios
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
                        {DISTRIBUTORS.map((dist, idx) => (
                            <div key={idx} className="flex flex-col items-center group cursor-default">
                                <div className="w-44 h-24 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 group-hover:border-kiana-green/30 group-hover:shadow-lg transition-all p-4">
                                    <span className="font-heading font-bold text-lg text-gray-500 group-hover:text-kiana-dark text-center leading-tight">
                                        {dist.name}
                                    </span>
                                </div>
                                <span className="text-xs text-gray-400 mt-3 flex items-center gap-1 font-medium">
                                    <MapPin size={10} /> {dist.location}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT / CTA SECTION */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-green-50 to-white relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-kiana-green font-bold tracking-wider uppercase text-sm mb-3 block">
                            Seamos Aliados
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                            Únete a la familia Kiana
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto text-lg">
                            Contacte directamente con nuestra Gerencia Comercial para llevar la fábrica del cariño a su negocio.
                        </p>
                    </div>

                    <ContactForm />

                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-kiana-dark text-white py-16 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-10 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-3xl font-heading font-extrabold mb-6 tracking-tight">Alimentos Kiana</h3>
                            <p className="text-gray-200 max-w-sm mb-8 leading-relaxed">
                                Comprometidos con la inocuidad, la calidad y el amor por lo nuestro. Llevamos nutrición a la mesa del venezolano desde hace más de 26 años.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-kiana-yellow text-lg">Ubicación</h4>
                            <p className="text-gray-200 text-sm leading-7">
                                Carretera Nacional Vía San Fernando de Apure,<br />
                                Zona Industrial "El Ique",<br />
                                Calabozo, Estado Guárico,<br />
                                Venezuela.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-kiana-yellow text-lg">Contacto Gerencia</h4>
                            <p className="text-gray-200 text-sm leading-7">
                                <span className="block mb-2 text-white/60">WhatsApp Oficial:</span>
                                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-xl font-bold hover:text-white transition-colors">
                                    +58 424-353-3131
                                </a>
                                <br /><br />
                                <span className="block mb-1 text-white/60">Correo:</span>
                                agropecuariakiana@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
                        <p>&copy; {new Date().getFullYear()} Agropecuaria Kiana C.A. - J-00207338-1. Todos los derechos reservados.</p>
                        <p className="font-medium">
                            Página desarrollada por <span className="text-white">Louis Marketing</span>
                        </p>
                    </div>
                </div>
            </footer>

            {/* Modals */}
            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
            <BenefitsModal
                isOpen={isBenefitsModalOpen}
                onClose={() => setIsBenefitsModalOpen(false)}
            />
        </div>
    );
}

export default App;