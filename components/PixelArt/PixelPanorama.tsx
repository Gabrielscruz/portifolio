import React from 'react';

interface PixelPanoramaProps {
  className?: string;
  badgeText?: string;
}

/**
 * PixelPanorama - Inspirado diretamente na paisagem panorâmica de PixelLab.ai.
 * Banner panorâmico em pixel art 16/32-bit com céu crepúsculo roxo, castelo com janelas acesas,
 * montanhas em silhueta violeta, pinheiros, lago reflexivo e barco a vela pixelado.
 */
export function PixelPanorama({
  className = '',
  badgeText = '★ PANORAMA ARQUITETURAL 32-BIT ★',
}: PixelPanoramaProps) {
  return (
    <div className={`relative w-full overflow-hidden border-b-2 border-purple-500/30 ${className}`}>
      {/* SVG Panorâmico com shape-rendering crispEdges (100% autêntico pixel art) */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
        <svg
          viewBox="0 0 1200 360"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full block select-none"
          style={{ shapeRendering: 'crispEdges' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradiente do Céu Crepúsculo Roxo PixelLab */}
            <linearGradient id="twilightSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#080314" />
              <stop offset="35%" stopColor="#1a0833" />
              <stop offset="65%" stopColor="#2c1154" />
              <stop offset="85%" stopColor="#431c77" />
              <stop offset="100%" stopColor="#1f0a3a" />
            </linearGradient>

            {/* Gradiente das Águas Roxas */}
            <linearGradient id="purpleWaters" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a0a33" />
              <stop offset="50%" stopColor="#120524" />
              <stop offset="100%" stopColor="#070110" />
            </linearGradient>
          </defs>

          {/* Céu Crepuscular */}
          <rect x="0" y="0" width="1200" height="240" fill="url(#twilightSky)" />

          {/* Estrelas Cintilantes em Pixel Art */}
          <g fill="#ffffff">
            <rect x="45" y="24" width="3" height="3" opacity="0.9" />
            <rect x="110" y="52" width="2" height="2" opacity="0.7" />
            <rect x="180" y="18" width="4" height="4" opacity="0.95" />
            <rect x="260" y="65" width="2" height="2" opacity="0.6" />
            <rect x="340" y="30" width="3" height="3" opacity="0.85" />
            <rect x="420" y="45" width="2" height="2" opacity="0.6" />
            <rect x="495" y="16" width="3" height="3" opacity="0.9" />
            <rect x="580" y="60" width="2" height="2" opacity="0.75" />
            <rect x="660" y="25" width="4" height="4" opacity="0.95" />
            <rect x="745" y="40" width="2" height="2" opacity="0.6" />
            <rect x="830" y="20" width="3" height="3" opacity="0.8" />
            <rect x="915" y="55" width="2" height="2" opacity="0.7" />
            <rect x="990" y="32" width="4" height="4" opacity="0.9" />
            <rect x="1070" y="18" width="2" height="2" opacity="0.6" />
            <rect x="1145" y="48" width="3" height="3" opacity="0.85" />
          </g>

          {/* Estrelas com Brilho Cruzado em Pixel Art (Cruzes de Luz) */}
          <g fill="#fef08a">
            {/* Estrela 1 */}
            <rect x="145" y="35" width="3" height="9" opacity="0.9" />
            <rect x="142" y="38" width="9" height="3" opacity="0.9" />
            <rect x="144" y="37" width="5" height="5" fill="#ffffff" />

            {/* Estrela 2 */}
            <rect x="530" y="25" width="2" height="6" opacity="0.85" />
            <rect x="528" y="27" width="6" height="2" opacity="0.85" />

            {/* Estrela 3 */}
            <rect x="880" y="32" width="3" height="9" opacity="0.9" />
            <rect x="877" y="35" width="9" height="3" opacity="0.9" />
            <rect x="879" y="34" width="5" height="5" fill="#ffffff" />
          </g>

          {/* Lua Pixel Art Crescente Dourada / Violeta */}
          <g>
            <rect x="710" y="25" width="28" height="28" fill="#fde047" />
            <rect x="708" y="27" width="32" height="24" fill="#fde047" />
            <rect x="706" y="29" width="36" height="20" fill="#fde047" />
            {/* Sombra da lua criando o crescente */}
            <rect x="700" y="22" width="24" height="28" fill="#1b0834" />
            <rect x="698" y="24" width="28" height="24" fill="#1b0834" />
            <rect x="718" y="27" width="6" height="6" fill="#fef08a" />
          </g>

          {/* Camada 1 de Montanhas Distantes (Silhueta Violeta Escura) */}
          <polygon
            points="0,175 60,140 140,165 220,130 310,170 410,135 500,160 580,125 670,165 760,130 860,170 960,128 1070,165 1160,132 1200,150 1200,240 0,240"
            fill="#180730"
          />

          {/* Camada 2 de Montanhas Médias (Violeta Profundo) */}
          <polygon
            points="0,185 85,155 170,178 260,148 350,182 450,152 540,180 620,145 710,180 800,150 900,182 1010,146 1120,178 1200,160 1200,240 0,240"
            fill="#230b42"
          />

          {/* Castelo Medieval Pixel Art (Inspirado no castelo à esquerda de PixelLab.ai) */}
          <g id="pixel-castle">
            {/* Base e Muralhas de Pedra */}
            <rect x="40" y="90" width="130" height="110" fill="#1c0a32" />
            <rect x="40" y="90" width="130" height="8" fill="#2d1250" />

            {/* Ameias das Muralhas */}
            <rect x="40" y="82" width="14" height="10" fill="#2d1250" />
            <rect x="64" y="82" width="14" height="10" fill="#2d1250" />
            <rect x="88" y="82" width="14" height="10" fill="#2d1250" />
            <rect x="112" y="82" width="14" height="10" fill="#2d1250" />
            <rect x="136" y="82" width="14" height="10" fill="#2d1250" />
            <rect x="156" y="82" width="14" height="10" fill="#2d1250" />

            {/* Torre Principal Alta */}
            <rect x="75" y="45" width="46" height="70" fill="#240c42" />
            <polygon points="75,45 98,18 121,45" fill="#4c1d95" />
            <rect x="97" y="10" width="3" height="10" fill="#a855f7" />
            {/* Bandeira no topo da torre */}
            <polygon points="100,10 115,14 100,18" fill="#f59e0b" />

            {/* Torre Esquerda Menor */}
            <rect x="42" y="65" width="30" height="40" fill="#200a3a" />
            <polygon points="42,65 57,48 72,65" fill="#3b0764" />

            {/* Torre Direita Menor */}
            <rect x="130" y="68" width="32" height="40" fill="#200a3a" />
            <polygon points="130,68 146,50 162,68" fill="#3b0764" />

            {/* Janelas Acessas em Luz Dourada (Aconchego Retrô 32-bit) */}
            <rect x="88" y="62" width="6" height="10" fill="#fef08a" />
            <rect x="102" y="62" width="6" height="10" fill="#fde047" />
            <rect x="95" y="86" width="7" height="12" fill="#f59e0b" />
            <rect x="52" y="78" width="5" height="8" fill="#fef08a" />
            <rect x="142" y="80" width="5" height="8" fill="#fef08a" />

            {/* Portão do Castelo com Arco de Pedra */}
            <rect x="92" y="150" width="24" height="38" fill="#0d041c" />
            <rect x="95" y="145" width="18" height="8" fill="#0d041c" />
            <rect x="98" y="142" width="12" height="6" fill="#0d041c" />
            <rect x="103" y="160" width="2" height="28" fill="#581c87" />
          </g>

          {/* Colinas com Vegetação e Flores Roxas / Verdes (Primeiro Plano Terrestre) */}
          <g id="rolling-hills">
            {/* Colina Esquerda */}
            <polygon
              points="0,175 120,185 240,195 380,215 480,230 0,240"
              fill="#183226"
            />
            <polygon
              points="0,182 100,190 200,198 320,220 0,240"
              fill="#11241b"
            />

            {/* Flores Silvestres / Arbustos Roxos (PixelArt) */}
            <rect x="190" y="194" width="10" height="6" fill="#a855f7" />
            <rect x="225" y="200" width="8" height="5" fill="#c084fc" />
            <rect x="270" y="206" width="12" height="6" fill="#9333ea" />
            <rect x="330" y="218" width="9" height="5" fill="#d8b4fe" />

            {/* Árvores e Pinheiros Pixelados (Estilo Chrono Trigger) */}
            {/* Árvore 1 */}
            <polygon points="195,192 205,160 215,192" fill="#14532d" />
            <polygon points="198,175 205,150 212,175" fill="#16a34a" />
            <rect x="203" y="192" width="4" height="8" fill="#3e2723" />

            {/* Árvore 2 */}
            <polygon points="250,202 262,168 274,202" fill="#14532d" />
            <polygon points="253,184 262,158 271,184" fill="#15803d" />
            <rect x="260" y="202" width="4" height="8" fill="#3e2723" />

            {/* Árvore 3 (Mais densa) */}
            <circle cx="310" cy="208" r="14" fill="#14532d" />
            <circle cx="312" cy="204" r="10" fill="#166534" />
            <rect x="308" y="214" width="4" height="10" fill="#3e2723" />
          </g>

          {/* Vilarejo / Casas Mediterrâneas à Direita (Como no PixelLab.ai) */}
          <g id="coastal-village">
            {/* Casa 1 */}
            <rect x="1030" y="115" width="46" height="55" fill="#f8fafc" />
            <polygon points="1025,115 1053,88 1081,115" fill="#b91c1c" />
            <rect x="1042" y="132" width="8" height="12" fill="#0284c7" />
            <rect x="1058" y="132" width="8" height="12" fill="#0284c7" />
            <rect x="1048" y="152" width="10" height="18" fill="#78350f" />

            {/* Casa 2 (Mais alta atrás) */}
            <rect x="1085" y="100" width="50" height="75" fill="#e2e8f0" />
            <polygon points="1080,100 1110,75 1140,100" fill="#991b1b" />
            <rect x="1098" y="118" width="10" height="14" fill="#0369a1" />
            <rect x="1118" y="118" width="10" height="14" fill="#0369a1" />
            <rect x="1108" y="148" width="12" height="27" fill="#451a03" />

            {/* Casa 3 (Frontal) */}
            <rect x="990" y="135" width="38" height="42" fill="#cbd5e1" />
            <polygon points="986,135 1009,112 1032,135" fill="#dc2626" />
            <rect x="1002" y="150" width="8" height="10" fill="#0ea5e9" />

            {/* Colina sob as casas */}
            <polygon
              points="940,240 960,195 1030,170 1140,175 1200,165 1200,240"
              fill="#1e293b"
            />
            {/* Gramado / Vegetação costeira */}
            <polygon
              points="950,225 1000,180 1100,182 1200,178 1200,240 950,240"
              fill="#166534"
            />
          </g>

          {/* Lago / Águas Roxas com Reflexo (PixelLab Waters) */}
          <rect x="0" y="235" width="1200" height="125" fill="url(#purpleWaters)" />

          {/* Ondas e Ondulações de Luz no Lago */}
          <g fill="#a855f7" opacity="0.6">
            <rect x="420" y="242" width="60" height="2" />
            <rect x="540" y="246" width="90" height="2" />
            <rect x="680" y="244" width="70" height="2" />
            <rect x="480" y="255" width="110" height="2" />
            <rect x="630" y="258" width="80" height="2" />
            <rect x="750" y="254" width="50" height="2" />
            <rect x="360" y="268" width="75" height="3" />
            <rect x="520" y="272" width="130" height="3" />
            <rect x="690" y="270" width="95" height="3" />
            <rect x="440" y="285" width="150" height="3" fill="#c084fc" />
            <rect x="620" y="288" width="110" height="3" fill="#c084fc" />
            <rect x="300" y="302" width="180" height="4" fill="#e9d5ff" opacity="0.7" />
            <rect x="560" y="306" width="220" height="4" fill="#e9d5ff" opacity="0.7" />
          </g>

          {/* Barco a Vela em Pixel Art com Navegador (Inspirado no barco central de PixelLab) */}
          <g id="pixel-boat" transform="translate(680, 185)">
            {/* Casco de Madeira do Barco */}
            <polygon
              points="10,62 80,62 95,48 5,48"
              fill="#78350f"
            />
            <polygon
              points="15,62 75,62 88,52 10,52"
              fill="#92400e"
            />
            <rect x="25" y="48" width="45" height="4" fill="#b45309" />

            {/* Mastro Principal */}
            <rect x="50" y="8" width="3" height="45" fill="#451a03" />

            {/* Vela Branca / Creme */}
            <polygon
              points="52,10 52,44 88,44"
              fill="#f8fafc"
            />
            <polygon
              points="50,14 50,42 22,42"
              fill="#f1f5f9"
            />
            {/* Linhas da vela */}
            <line x1="52" y1="10" x2="88" y2="44" stroke="#e2e8f0" strokeWidth="1" />

            {/* Personagem Navegador (Gabriel Pixel Art em miniatura no leme) */}
            <rect x="28" y="38" width="7" height="12" fill="#090314" /> {/* Smoking preto */}
            <rect x="29" y="32" width="6" height="6" fill="#c49a6c" /> {/* Rosto */}
            <rect x="29" y="30" width="6" height="3" fill="#1c1917" /> {/* Cabelo escuro */}
            <rect x="30" y="40" width="4" height="5" fill="#7e22ce" /> {/* Colete roxo */}
            <rect x="32" y="44" width="28" height="2" fill="#451a03" /> {/* Remo na água */}

            {/* Reflexo do Barco na Água */}
            <polygon
              points="12,66 78,66 90,74 8,74"
              fill="#3b0764"
              opacity="0.5"
            />
          </g>
        </svg>

        {/* Gradiente de Fusão com o Fundo Escuro do Site */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#090314] via-[#090314]/80 to-transparent pointer-events-none" />

        {/* Badge Flutuante no Topo Esquerdo (PixelLab Aesthetic) */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#090314]/85 backdrop-blur-md border border-purple-400/40 shadow-lg text-[10px] font-pixel text-teal-300">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_#2dd4bf]" />
            <span>{badgeText}</span>
          </div>
        </div>

        {/* Coordenadas / Status Retrô no Topo Direito */}
        <div className="hidden sm:inline-flex absolute top-6 right-6 z-10 items-center gap-3 px-3 py-1 rounded-full bg-[#090314]/80 backdrop-blur-md border border-purple-500/30 text-[9px] font-mono text-purple-300">
          <span className="text-amber-300 font-pixel">RES: 32-BIT HIGH-FI</span>
          <span>•</span>
          <span className="text-teal-400">FPS: 60</span>
        </div>
      </div>
    </div>
  );
}
