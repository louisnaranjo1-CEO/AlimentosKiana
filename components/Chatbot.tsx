import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, BENEFITS } from '../constants';

const DEEPSEEK_API_KEY = "sk-1df829cca9e8402fadf13df0a0c37a66";
const API_URL = "https://api.deepseek.com/chat/completions";

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

const SYSTEM_PROMPT = `
Eres el asistente virtual inteligente de Alimentos Kiana, una empresa venezolana líder en nutrición.
Tu objetivo principal es resolver dudas y SIEMPRE guiar al usuario a llenar el formulario de contacto ("Solicitar Lista de Precios" o "Ser Distribuidor") o a contactar a Gerencia.

INFORMACIÓN DE LA EMPRESA:
- Historia: Fundada en 1985 en Calabozo, Guárico. Más de 35 años de trayectoria.
- Misión: Llevar "Alimentos con Cariño" a la mesa. Nutrición para todos.
- Productos Estrella: Lactokiana (bebida nutricional), Harina de Maíz Kiana, Harina de Arroz, Fororo, Merengón, Choco K.
- Público: Familias, niños, programas de alimentación, industria.

REGLAS ESPECÍFICAS:
1. DONACIONES: Si el usuario pregunta por donaciones, caridad o regalado, DEBES responder EXACTAMENTE (puedes ajustar el saludo): "Alimentos Kiana no se encuentra haciendo donaciones, apoya Organizaciones con productos de calidad pensadas para satisfacer las necesidades nutricionales señaladas."
2. TONO: Amable, cercano, profesional y con calidez venezolana.
3. OBJETIVO: Vender y captar leads. Invita sutilmente a ver el catálogo o contactar.

CATÁLOGO RESUMIDO:
${PRODUCTS.map(p => `- ${p.name}: ${p.description}`).join('\n')}

BENEFICIOS:
${BENEFITS.map(b => `- ${b.title}: ${b.description}`).join('\n')}

UBICACIÓN: Calabozo, Estado Guárico, Venezuela.
CONTACTO: +58 424-353-3131 | agropecuariakiana@gmail.com
`;

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: '¡Hola! 👋 Soy el asistente virtual de Alimentos Kiana. ¿En qué puedo ayudarte a nutrir tu negocio u hogar hoy?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
                },
                body: JSON.stringify({
                    model: "deepseek-chat",
                    messages: [
                        { role: 'system', content: SYSTEM_PROMPT },
                        ...messages.filter(m => m.role !== 'system'), // Send history
                        userMessage
                    ],
                    temperature: 0.7,
                    max_tokens: 300
                })
            });

            if (!response.ok) {
                const errorData = await response.text();
                console.error("DeepSeek API Error:", errorData);
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            const botMessageContent = data.choices?.[0]?.message?.content || "Disculpa, tuve un pequeño problema de conexión. ¿Podrías intentar de nuevo?";

            setMessages(prev => [...prev, { role: 'assistant', content: botMessageContent }]);

        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Lo siento, estoy teniendo dificultades técnicas en este momento. Por favor contáctanos directamente por WhatsApp." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-[9999]">
                {/* Toggle Button */}
                <AnimatePresence>
                    {!isOpen && (
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(true)}
                            className="bg-kiana-green text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative group"
                        >
                            <MessageCircle size={32} />
                            <span className="absolute -top-2 -right-2 bg-red-500 w-4 h-4 rounded-full border-2 border-white"></span>
                            <div className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                ¡Chatea con nosotros!
                            </div>
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Chat Window */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ y: 20, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 20, opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-2xl shadow-2xl w-[90vw] sm:w-[380px] h-[500px] sm:h-[600px] flex flex-col border border-gray-100 overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-kiana-dark p-4 flex justify-between items-center text-white">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/10 p-2 rounded-full">
                                        <Bot size={24} className="text-kiana-yellow" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm">Asistente Kiana</h3>
                                        <div className="flex items-center gap-1">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                            <span className="text-xs text-green-100">En línea</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/70 hover:text-white hover:bg-white/10 rounded-lg p-1 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                {messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                                                    ? 'bg-kiana-green text-white rounded-br-none'
                                                    : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'
                                                }`}
                                        >
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2 text-gray-400 text-sm">
                                            <Loader2 size={16} className="animate-spin" />
                                            <span className="text-xs">Escribiendo...</span>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div className="p-4 bg-white border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyPress}
                                        placeholder="Escribe tu consulta..."
                                        className="flex-1 bg-gray-100 text-gray-900 placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kiana-green/50 transition-all"
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        disabled={isLoading || !input.trim()}
                                        className="bg-kiana-green text-white p-3 rounded-xl hover:bg-kiana-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-green-100"
                                    >
                                        <Send size={20} />
                                    </button>
                                </div>
                                <div className="text-center mt-2">
                                    <p className="text-[10px] text-gray-400">
                                        IA impulsada por DeepSeek - Kiana B2B
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Chatbot;
