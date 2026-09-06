import React from 'react';

interface PixelCitySkylineProps {
  className?: string;
  badgeText?: string;
}

/**
 * PixelCitySkyline - Recriação fiel em pixel art 32-bit de alta resolução
 * da imagem panorâmica enviada pelo usuário:
 * Skyline de cidade noturna iluminada, nuvens roxas volumosas, céu estrelado
 * em gradiente violeta profundo e águas calmas com reflexos pixelados das luzes douradas e ciano.
 */
export function PixelCitySkyline({
  className = '',
  badgeText = '★ NIGHT CITYSCAPE 32-BIT ★',
}: PixelCitySkylineProps) {
  return (
    <div className={`relative w-full overflow-hidden border-b border-purple-500/30 ${className}`}>
      {/* SVG Panorâmico de Alta Resolução Pixel Art (shape-rendering: crispEdges) */}
      <div className="relative w-full h-56 sm:h-72 md:h-88 lg:h-[400px]">
        <svg
          viewBox="0 0 1200 420"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full block select-none"
          style={{ shapeRendering: 'crispEdges' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradiente do Céu Noturno Roxo Profundo */}
            <linearGradient id="nightSkyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#040114" />
              <stop offset="25%" stopColor="#0a0328" />
              <stop offset="55%" stopColor="#150642" />
              <stop offset="80%" stopColor="#250b64" />
              <stop offset="100%" stopColor="#18073e" />
            </linearGradient>

            {/* Gradiente das Águas Roxas com Profundidade */}
            <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#12042a" />
              <stop offset="35%" stopColor="#1e0842" />
              <stop offset="70%" stopColor="#150530" />
              <stop offset="100%" stopColor="#070114" />
            </linearGradient>

            {/* Brilho da Linha d'Água / Névoa no Horizonte */}
            <linearGradient id="horizonGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a157c" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#12042a" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* 1. CÉU NOTURNO PROFUNDO */}
          <rect x="0" y="0" width="1200" height="270" fill="url(#nightSkyGrad)" />

          {/* 2. ESTRELAS & CONSTELAÇÕES PIXELADAS */}
          {/* Estrelas Brancas e Ciano Finas */}
          <g fill="#ffffff">
            <rect x="35" y="18" width="2" height="2" opacity="0.9" />
            <rect x="75" y="42" width="2" height="2" opacity="0.6" />
            <rect x="120" y="24" width="3" height="3" opacity="0.95" />
            <rect x="175" y="55" width="2" height="2" opacity="0.7" />
            <rect x="230" y="15" width="2" height="2" opacity="0.85" />
            <rect x="290" y="38" width="3" height="3" opacity="0.9" />
            <rect x="340" y="20" width="2" height="2" opacity="0.7" />
            <rect x="410" y="48" width="2" height="2" opacity="0.8" />
            <rect x="460" y="16" width="3" height="3" opacity="0.95" />
            <rect x="520" y="32" width="2" height="2" opacity="0.6" />
            <rect x="585" y="18" width="3" height="3" opacity="0.9" />
            <rect x="640" y="45" width="2" height="2" opacity="0.7" />
            <rect x="710" y="22" width="2" height="2" opacity="0.85" />
            <rect x="770" y="36" width="3" height="3" opacity="0.95" />
            <rect x="835" y="14" width="2" height="2" opacity="0.75" />
            <rect x="895" y="48" width="3" height="3" opacity="0.9" />
            <rect x="960" y="20" width="2" height="2" opacity="0.8" />
            <rect x="1025" y="35" width="3" height="3" opacity="0.95" />
            <rect x="1090" y="16" width="2" height="2" opacity="0.7" />
            <rect x="1150" y="42" width="3" height="3" opacity="0.9" />
          </g>

          {/* Nuvem de Poeira Estelar / Constelações Densas no Centro (como na imagem) */}
          <g fill="#38bdf8" opacity="0.75">
            <rect x="420" y="70" width="2" height="2" />
            <rect x="435" y="85" width="2" height="2" />
            <rect x="450" y="65" width="2" height="2" />
            <rect x="470" y="90" width="2" height="2" />
            <rect x="485" y="75" width="3" height="3" fill="#ffffff" />
            <rect x="500" y="105" width="2" height="2" />
            <rect x="515" y="80" width="2" height="2" />
            <rect x="535" y="95" width="3" height="3" fill="#ffffff" />
            <rect x="550" y="60" width="2" height="2" />
            <rect x="570" y="110" width="2" height="2" />
            <rect x="585" y="85" width="2" height="2" />
            <rect x="610" y="70" width="3" height="3" fill="#ffffff" />
            <rect x="630" y="100" width="2" height="2" />
          </g>

          {/* Cruzes de Luz Cintilantes (Laranja e Vermelho como na imagem) */}
          <g fill="#f97316">
            <rect x="95" y="50" width="3" height="9" />
            <rect x="92" y="53" width="9" height="3" />
            <rect x="94" y="52" width="5" height="5" fill="#fef08a" />

            <rect x="440" y="40" width="3" height="11" />
            <rect x="436" y="44" width="11" height="3" />
            <rect x="439" y="43" width="5" height="5" fill="#ffffff" />

            <rect x="735" y="65" width="2" height="7" />
            <rect x="732" y="67" width="8" height="2" />
            <rect x="734" y="66" width="4" height="4" fill="#fde047" />

            <rect x="1005" y="30" width="3" height="9" />
            <rect x="1002" y="33" width="9" height="3" />
            <rect x="1004" y="32" width="5" height="5" fill="#ffffff" />

            <rect x="1110" y="55" width="3" height="9" fill="#ef4444" />
            <rect x="1107" y="58" width="9" height="3" fill="#ef4444" />
            <rect x="1109" y="57" width="5" height="5" fill="#fca5a5" />
          </g>

          {/* 3. NUVENS VOLUMOSAS ROXAS / MAGENTA (Camada de Fundo) */}
          <g id="clouds-back" fill="#20063b" opacity="0.9">
            {/* Nuvem Esquerda */}
            <rect x="0" y="140" width="260" height="130" />
            <rect x="20" y="115" width="180" height="50" />
            <rect x="60" y="95" width="120" height="40" />
            <rect x="90" y="80" width="70" height="30" />

            {/* Nuvem Centro */}
            <rect x="240" y="150" width="720" height="120" />
            <rect x="280" y="130" width="300" height="50" />
            <rect x="360" y="110" width="160" height="40" />
            <rect x="620" y="130" width="280" height="50" />
            <rect x="690" y="110" width="150" height="40" />

            {/* Nuvem Direita */}
            <rect x="940" y="140" width="260" height="130" />
            <rect x="980" y="115" width="180" height="50" />
            <rect x="1020" y="90" width="110" height="40" />
          </g>

          {/* Camada Média de Nuvens (Violeta Médio com Bordas Pixeladas) */}
          <g id="clouds-mid" fill="#380c5e">
            {/* Formações Esquerda */}
            <rect x="0" y="165" width="280" height="105" />
            <rect x="15" y="145" width="140" height="45" />
            <rect x="130" y="140" width="130" height="50" />
            <rect x="160" y="125" width="85" height="30" />

            {/* Formações Centro */}
            <rect x="310" y="155" width="180" height="60" />
            <rect x="340" y="140" width="120" height="40" />
            <rect x="520" y="160" width="170" height="55" />
            <rect x="550" y="145" width="110" height="35" />
            <rect x="710" y="155" width="180" height="60" />
            <rect x="740" y="135" width="120" height="40" />

            {/* Formações Direita */}
            <rect x="900" y="165" width="300" height="105" />
            <rect x="930" y="145" width="140" height="45" />
            <rect x="1050" y="135" width="130" height="45" />
          </g>

          {/* Destaque Superior das Nuvens (Púrpura Vibrante) */}
          <g id="clouds-highlights" fill="#581c87" opacity="0.85">
            <rect x="25" y="145" width="50" height="6" />
            <rect x="140" y="140" width="60" height="6" />
            <rect x="170" y="125" width="55" height="6" />
            <rect x="350" y="140" width="70" height="6" />
            <rect x="560" y="145" width="60" height="6" />
            <rect x="750" y="135" width="70" height="6" />
            <rect x="940" y="145" width="60" height="6" />
            <rect x="1060" y="135" width="70" height="6" />
          </g>

          {/* 4. SILHUETA DA CIDADE NOTURNA (SKYLINE COM PRÉDIOS E ARRANHA-CÉUS) */}
          {/* Base Escura dos Edifícios */}
          <g id="city-silhouettes" fill="#0d031e">
            {/* Prédios da Margem Esquerda */}
            <rect x="0" y="235" width="180" height="35" />
            <rect x="40" y="225" width="35" height="45" />
            <rect x="95" y="220" width="40" height="50" />
            <rect x="150" y="215" width="45" height="55" />

            {/* Skyline Principal Central (Arranha-céus de Várias Alturas) */}
            <rect x="210" y="228" width="22" height="42" />
            <rect x="238" y="215" width="28" height="55" />
            <rect x="270" y="222" width="26" height="48" />
            <rect x="302" y="200" width="32" height="70" />
            <rect x="338" y="210" width="24" height="60" />
            <rect x="366" y="185" width="36" height="85" />
            <rect x="406" y="172" width="40" height="98" />
            <rect x="450" y="190" width="32" height="80" />
            <rect x="486" y="165" width="44" height="105" />
            <rect x="534" y="178" width="38" height="92" />
            <rect x="576" y="160" width="46" height="110" />
            <rect x="626" y="180" width="34" height="90" />
            <rect x="664" y="195" width="38" height="75" />
            <rect x="706" y="175" width="42" height="95" />
            <rect x="752" y="205" width="32" height="65" />
            <rect x="788" y="218" width="28" height="52" />
            <rect x="820" y="210" width="35" height="60" />
            <rect x="860" y="225" width="30" height="45" />

            {/* Prédios da Margem Direita */}
            <rect x="900" y="220" width="45" height="50" />
            <rect x="955" y="228" width="35" height="42" />
            <rect x="1000" y="235" width="200" height="35" />
          </g>

          {/* Luzes das Janelas da Cidade (Amarelo Ouro, Laranja, Âmbar e Ciano) */}
          <g id="city-lights">
            {/* Bloco Central Alto 1 (486-530) */}
            <g fill="#fbbf24">
              <rect x="492" y="172" width="4" height="6" />
              <rect x="500" y="172" width="4" height="6" />
              <rect x="512" y="172" width="4" height="6" />
              <rect x="520" y="172" width="4" height="6" />

              <rect x="492" y="184" width="4" height="6" />
              <rect x="500" y="184" width="4" height="6" />
              <rect x="512" y="184" width="4" height="6" />
              <rect x="520" y="184" width="4" height="6" />

              <rect x="492" y="196" width="4" height="6" />
              <rect x="504" y="196" width="4" height="6" />
              <rect x="516" y="196" width="4" height="6" />

              <rect x="492" y="208" width="4" height="6" />
              <rect x="504" y="208" width="4" height="6" />
              <rect x="520" y="208" width="4" height="6" />

              <rect x="492" y="220" width="4" height="6" />
              <rect x="508" y="220" width="4" height="6" />
              <rect x="518" y="220" width="4" height="6" />
            </g>

            {/* Bloco Central Alto 2 (576-622) - Mais Alto da Linha de Horizonte */}
            <g fill="#f59e0b">
              <rect x="582" y="168" width="4" height="7" fill="#ffffff" />
              <rect x="590" y="168" width="4" height="7" />
              <rect x="602" y="168" width="4" height="7" />
              <rect x="612" y="168" width="4" height="7" />

              <rect x="582" y="180" width="4" height="7" />
              <rect x="594" y="180" width="4" height="7" fill="#38bdf8" />
              <rect x="604" y="180" width="4" height="7" />
              <rect x="612" y="180" width="4" height="7" fill="#fde047" />

              <rect x="584" y="194" width="4" height="7" />
              <rect x="592" y="194" width="4" height="7" fill="#fde047" />
              <rect x="606" y="194" width="4" height="7" />

              <rect x="582" y="208" width="4" height="7" fill="#f97316" />
              <rect x="596" y="208" width="4" height="7" />
              <rect x="610" y="208" width="4" height="7" />

              <rect x="584" y="222" width="4" height="7" />
              <rect x="600" y="222" width="4" height="7" fill="#fbbf24" />
              <rect x="612" y="222" width="4" height="7" />
            </g>

            {/* Prédios Vizinhos (Luzes Ciano, Laranja e Douradas) */}
            <g fill="#38bdf8">
              <rect x="372" y="192" width="3" height="5" />
              <rect x="382" y="192" width="3" height="5" />
              <rect x="392" y="192" width="3" height="5" />
              <rect x="372" y="204" width="3" height="5" fill="#fbbf24" />
              <rect x="385" y="204" width="3" height="5" />
              <rect x="394" y="204" width="3" height="5" fill="#f97316" />
              <rect x="376" y="218" width="3" height="5" fill="#fde047" />
              <rect x="388" y="218" width="3" height="5" />

              {/* Prédio 410-446 */}
              <rect x="412" y="180" width="4" height="6" fill="#f59e0b" />
              <rect x="424" y="180" width="4" height="6" fill="#ffffff" />
              <rect x="434" y="180" width="4" height="6" fill="#f59e0b" />
              <rect x="412" y="194" width="4" height="6" fill="#38bdf8" />
              <rect x="426" y="194" width="4" height="6" fill="#fbbf24" />
              <rect x="436" y="194" width="4" height="6" />
              <rect x="416" y="208" width="4" height="6" fill="#f97316" />
              <rect x="428" y="208" width="4" height="6" fill="#fbbf24" />
              <rect x="438" y="208" width="4" height="6" fill="#fde047" />

              {/* Prédio 538-570 */}
              <rect x="542" y="188" width="4" height="6" fill="#fbbf24" />
              <rect x="552" y="188" width="4" height="6" fill="#f97316" />
              <rect x="562" y="188" width="4" height="6" fill="#38bdf8" />
              <rect x="544" y="202" width="4" height="6" fill="#ffffff" />
              <rect x="556" y="202" width="4" height="6" fill="#fbbf24" />
              <rect x="564" y="202" width="4" height="6" fill="#f59e0b" />

              {/* Prédio 710-745 */}
              <rect x="712" y="184" width="4" height="6" fill="#fde047" />
              <rect x="724" y="184" width="4" height="6" fill="#38bdf8" />
              <rect x="736" y="184" width="4" height="6" fill="#f59e0b" />
              <rect x="714" y="198" width="4" height="6" fill="#f97316" />
              <rect x="728" y="198" width="4" height="6" fill="#ffffff" />
              <rect x="738" y="198" width="4" height="6" fill="#fbbf24" />
            </g>

            {/* Linhas de Luz na Orla (Luzes da Avenida Marginal) */}
            <g fill="#fde047">
              <rect x="220" y="260" width="8" height="3" />
              <rect x="260" y="261" width="10" height="3" fill="#f97316" />
              <rect x="310" y="259" width="14" height="3" />
              <rect x="360" y="261" width="16" height="3" fill="#38bdf8" />
              <rect x="410" y="260" width="20" height="3" fill="#f59e0b" />
              <rect x="470" y="259" width="24" height="3" fill="#ffffff" />
              <rect x="520" y="260" width="26" height="3" fill="#fde047" />
              <rect x="580" y="259" width="30" height="3" fill="#fbbf24" />
              <rect x="640" y="260" width="24" height="3" fill="#f97316" />
              <rect x="700" y="261" width="20" height="3" fill="#38bdf8" />
              <rect x="750" y="259" width="18" height="3" fill="#fde047" />
              <rect x="800" y="261" width="12" height="3" fill="#f59e0b" />
              <rect x="850" y="260" width="14" height="3" />
            </g>
          </g>

          {/* 5. LINHA DO HORIZONTE E ÁGUAS CALMAS COM REFLEXOS */}
          {/* Base da Água */}
          <rect x="0" y="265" width="1200" height="155" fill="url(#waterGrad)" />

          {/* Névoa de Luz no Ponto de Contato com a Água */}
          <rect x="0" y="265" width="1200" height="20" fill="url(#horizonGlow)" />

          {/* REFLEXOS VERTICAIS PIXELADOS DAS LUZES DA CIDADE NA ÁGUA (Como na imagem do usuário) */}
          <g id="water-reflections" opacity="0.65">
            {/* Reflexo Central Quente (450 a 650) - Onde o skyline é mais brilhante */}
            {/* Linha de reflexo 1 (Próxima ao horizonte) */}
            <rect x="370" y="272" width="30" height="4" fill="#fbbf24" />
            <rect x="415" y="271" width="35" height="5" fill="#f59e0b" />
            <rect x="480" y="270" width="55" height="5" fill="#fde047" />
            <rect x="540" y="271" width="45" height="5" fill="#38bdf8" />
            <rect x="590" y="270" width="60" height="5" fill="#fbbf24" />
            <rect x="660" y="272" width="35" height="4" fill="#f97316" />
            <rect x="710" y="271" width="40" height="5" fill="#fde047" />

            {/* Linha de reflexo 2 (Média) */}
            <rect x="380" y="282" width="22" height="4" fill="#f59e0b" />
            <rect x="425" y="280" width="28" height="5" fill="#fbbf24" />
            <rect x="490" y="281" width="42" height="5" fill="#fde047" />
            <rect x="550" y="280" width="34" height="6" fill="#38bdf8" opacity="0.8" />
            <rect x="595" y="282" width="48" height="5" fill="#fbbf24" />
            <rect x="670" y="281" width="28" height="5" fill="#f97316" />
            <rect x="720" y="283" width="26" height="4" fill="#fde047" />

            {/* Linha de reflexo 3 (Ondulações Longas no Centro) */}
            <rect x="430" y="295" width="22" height="4" fill="#f59e0b" />
            <rect x="485" y="294" width="48" height="5" fill="#fbbf24" />
            <rect x="545" y="296" width="38" height="5" fill="#38bdf8" />
            <rect x="590" y="294" width="55" height="6" fill="#fde047" />
            <rect x="665" y="295" width="32" height="5" fill="#f97316" />

            {/* Linha de reflexo 4 (Mais dispersa) */}
            <rect x="440" y="310" width="18" height="4" fill="#f59e0b" />
            <rect x="495" y="309" width="36" height="4" fill="#fbbf24" />
            <rect x="555" y="311" width="28" height="4" fill="#38bdf8" />
            <rect x="600" y="310" width="42" height="4" fill="#fde047" />
            <rect x="660" y="312" width="22" height="4" fill="#f97316" />

            {/* Linha de reflexo 5 (Profundidade suave) */}
            <rect x="510" y="328" width="28" height="4" fill="#fbbf24" opacity="0.6" />
            <rect x="560" y="330" width="22" height="4" fill="#38bdf8" opacity="0.6" />
            <rect x="605" y="328" width="34" height="4" fill="#fde047" opacity="0.6" />

            {/* Linha de reflexo 6 (Fundo) */}
            <rect x="525" y="348" width="20" height="3" fill="#fbbf24" opacity="0.4" />
            <rect x="595" y="350" width="26" height="3" fill="#fde047" opacity="0.4" />
          </g>

          {/* Ondulações Horizontais Roxas Suaves na Água */}
          <g fill="#7e22ce" opacity="0.3">
            <rect x="80" y="280" width="120" height="2" />
            <rect x="240" y="285" width="80" height="2" />
            <rect x="820" y="282" width="110" height="2" />
            <rect x="990" y="288" width="90" height="2" />

            <rect x="130" y="305" width="140" height="2" />
            <rect x="290" y="310" width="90" height="2" />
            <rect x="780" y="308" width="130" height="2" />
            <rect x="950" y="312" width="120" height="2" />

            <rect x="180" y="335" width="180" height="3" />
            <rect x="740" y="340" width="160" height="3" />

            <rect x="260" y="368" width="220" height="3" />
            <rect x="680" y="372" width="240" height="3" />
          </g>
        </svg>

        {/* Gradiente de Fusão Elegante com o Fundo Escuro do Site */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#090314] via-[#090314]/85 to-transparent pointer-events-none" />

        {/* Badge Flutuante no Topo Esquerdo (PixelLab Aesthetic) */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#090314]/85 backdrop-blur-md border border-purple-400/40 shadow-lg text-[10px] font-pixel text-teal-300">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_#2dd4bf]" />
            <span>{badgeText}</span>
          </div>
        </div>

        {/* Status Tecnológico Retrô no Topo Direito */}
        <div className="hidden sm:inline-flex absolute top-6 right-6 z-10 items-center gap-3 px-3 py-1 rounded-full bg-[#090314]/80 backdrop-blur-md border border-purple-500/30 text-[9px] font-mono text-purple-300">
          <span className="text-amber-300 font-pixel">RES: 32-BIT HI-FI</span>
          <span>•</span>
          <span className="text-teal-400">FPS: 60</span>
        </div>
      </div>
    </div>
  );
}
