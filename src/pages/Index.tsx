
import React from 'react';
import DisclaimerBanner from '../components/DisclaimerBanner';
import ChatInterface from '../components/ChatInterface';
import { ChatProvider } from '../context/ChatContext';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm p-4 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                className="h-8 w-8 text-medicalBlue-dark fill-current mr-2"
              >
                <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm6 11h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"/>
              </svg>
              <h1 className="text-xl font-bold text-gray-800">MediBot</h1>
            </div>
            <div className="text-sm text-gray-600">
              Asistente Virtual de Salud
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-1 py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <DisclaimerBanner />
          
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">¿Cómo te sientes hoy?</h2>
            <p className="text-gray-600">
              Describe tus síntomas y MediBot te sugerirá medicamentos de venta libre y recomendaciones de autocuidado.
              Recuerda que esto no reemplaza la consulta con un profesional médico.
            </p>
          </div>
          
          <div className="h-[600px]">
            <ChatProvider>
              <ChatInterface />
            </ChatProvider>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">¿Cómo utilizar MediBot?</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Describe tus síntomas de forma clara y concisa.</li>
              <li>MediBot analizará tus síntomas y te dará sugerencias sobre posibles causas.</li>
              <li>Recibirás recomendaciones de medicamentos de venta libre si son apropiados.</li>
              <li>También se te proporcionará consejos de autocuidado.</li>
              <li>En caso de síntomas graves, MediBot te recomendará buscar atención médica.</li>
            </ol>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  className="h-6 w-6 text-medicalBlue-light fill-current mr-2"
                >
                  <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm6 11h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"/>
                </svg>
                <h3 className="text-lg font-bold">MediBot</h3>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Una herramienta de asistencia médica basada en IA
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                © 2025 MediBot. Todos los derechos reservados.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
