import React from 'react';

export interface PixelSpriteProps {
  className?: string;
  hasAura?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}

/**
 * PixelSprite - Sprite 32-Bit baseado exatamente no personagem Funko Pop Gala Edition do Gabriel:
 * - Cabelo buzzcut / fade castanho
 * - Smoking preto com colete roxo imperial de 4 botões e lenço no bolso
 * - Camisa branca com gravata borboleta preta
 * - Gesto acolhedor com a mão aberta
 * - Selo Dourado Funko Pop #45 Gala Edition
 */
export function PixelSprite({
  className,
  hasAura = true,
  size = 'md',
  showBadge = true,
}: PixelSpriteProps) {
  const sizeClasses = {
    sm: 'w-36 h-36 sm:w-44 sm:h-44',
    md: 'w-52 h-52 sm:w-64 sm:h-64',
    lg: 'w-64 h-64 sm:w-72 sm:h-72',
  }[size];

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className ?? ''}`}>
      {/* Aura de Ki 32-Bit em degradê violeta e dourado */}
      {hasAura && (
        <div className="absolute -inset-6 bg-gradient-to-t from-purple-700/25 via-fuchsia-600/20 to-amber-400/20 blur-2xl rounded-full animate-pulse pointer-events-none" />
      )}

      {/* Caixa 32-Bit estilo JRPG / Caixa Colecionador Funko */}
      <div className="relative p-3 bg-gradient-to-b from-[#170a30] via-[#0f0422] to-[#080114] border-2 border-purple-400/80 shadow-[0_0_0_2px_#05010a,0_0_0_4px_#7e22ce,0_16px_36px_rgba(0,0,0,0.85)] rounded-lg">
        {/* Top Header: Edição de Gala Funko Icons #45 */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-purple-500/30 font-pixel text-[9px] text-amber-300">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-ping" />
            FUNKO POP! ICONS #45
          </span>
          <span className="text-purple-300 tracking-wider">GALA EDITION</span>
        </div>

        {/* 32-Bit Pixel Canvas (Renderizando o personagem do usuário) */}
        <div className={`${sizeClasses} relative bg-[#090217] flex items-center justify-center overflow-hidden border border-purple-500/40 rounded shadow-inner`}>
          {/* Scanlines sutis da tela arcade */}
          <div className="absolute inset-0 scanlines-overlay opacity-20 z-10 pointer-events-none" />

          {/* SVG do personagem em Pixel Art 32-Bit */}
          <svg
            viewBox="0 0 100 120"
            className="w-full h-full transform hover:scale-105 transition-transform duration-300"
            style={{ imageRendering: 'pixelated' }}
            shapeRendering="crispEdges"
          >
            {/* Fundo com gradiente sutil do estúdio */}
            <rect width="100" height="120" fill="#0b031c" />
            
            {/* Grade translúcida sutil estilo Funko / Scouter */}
            <line x1="0" y1="60" x2="100" y2="60" stroke="#1d0d38" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="120" stroke="#1d0d38" strokeWidth="0.5" />

            {/* Sombra no chão sob os sapatos */}
            <ellipse cx="50" cy="113" rx="24" ry="4" fill="#030008" opacity="0.8" />

            {/* ── CABELO BUZZCUT COM DEGRADÊ / FADE ── */}
            {/* Base escura do cabelo */}
            <path
              d="M 32,14 C 36,8 64,8 68,14 C 74,20 75,32 75,36 C 75,40 73,46 71,48 C 69,45 68,36 67,34 C 65,30 60,26 50,26 C 40,26 35,30 33,34 C 32,36 31,45 29,48 C 27,46 25,40 25,36 C 25,32 26,20 32,14 Z"
              fill="#3a2213"
            />
            {/* Topo do buzzcut com tom castanho médio */}
            <path
              d="M 34,13 C 38,9 62,9 66,13 C 71,18 73,26 71,32 C 67,23 60,18 50,18 C 40,18 33,23 29,32 C 27,26 29,18 34,13 Z"
              fill="#52321c"
            />
            {/* Destaque sutil de iluminação 32-bit no topo da cabeça */}
            <rect x="42" y="11" width="16" height="3" fill="#6d4327" opacity="0.7" />

            {/* ── CABEÇA FUNKO POP (Formato quadrado-arredondado característico) ── */}
            <rect x="27" y="24" width="46" height="36" rx="10" fill="#d99f72" />
            <rect x="29" y="26" width="42" height="32" rx="8" fill="#e2ab7d" />
            {/* Sombra inferior da mandíbula */}
            <rect x="33" y="56" width="34" height="4" rx="2" fill="#c78c5d" />

            {/* Orelhas */}
            <rect x="24" y="38" width="4" height="8" rx="2" fill="#c78c5d" />
            <rect x="72" y="38" width="4" height="8" rx="2" fill="#c78c5d" />
            <rect x="25" y="40" width="2" height="4" fill="#a76f44" />
            <rect x="73" y="40" width="2" height="4" fill="#a76f44" />

            {/* Sobrancelhas elegantes e expressivas */}
            <rect x="33" y="34" width="10" height="2.5" rx="1" fill="#3a2213" transform="rotate(-4 38 35)" />
            <rect x="57" y="34" width="10" height="2.5" rx="1" fill="#3a2213" transform="rotate(4 62 35)" />

            {/* Olhos Grandes Característicos de Funko Pop com Brilho Specular */}
            {/* Olho Esquerdo */}
            <circle cx="39" cy="44" r="5.5" fill="#121015" />
            <circle cx="37.5" cy="42.5" r="1.8" fill="#ffffff" />
            <circle cx="41" cy="45.5" r="0.7" fill="#ffffff" opacity="0.6" />

            {/* Olho Direito */}
            <circle cx="61" cy="44" r="5.5" fill="#121015" />
            <circle cx="59.5" cy="42.5" r="1.8" fill="#ffffff" />
            <circle cx="63" cy="45.5" r="0.7" fill="#ffffff" opacity="0.6" />

            {/* Nariz Funko sutil */}
            <rect x="49" y="47" width="2" height="2.5" rx="1" fill="#be8354" />

            {/* Sorriso Amigável com dentes brancos visíveis */}
            <path d="M 45,52 Q 50,56 55,52 Z" fill="#7a2b16" />
            <path d="M 46,52 Q 50,54 54,52 Z" fill="#ffffff" />

            {/* ── PESCOÇO ── */}
            <rect x="47" y="60" width="6" height="4" fill="#c78c5d" />

            {/* ── SMOKING GALA EDITION (TUXEDO PRETO + COLETE ROXO) ── */}
            {/* Camisa branca sob a gravata */}
            <polygon points="46,63 54,63 52,74 48,74" fill="#ffffff" />
            <line x1="50" y1="64" x2="50" y2="73" stroke="#cbd5e1" strokeWidth="0.5" />

            {/* Gravata borboleta preta elegante */}
            <polygon points="47,63 50,65 47,67" fill="#121018" />
            <polygon points="53,63 50,65 53,67" fill="#121018" />
            <circle cx="50" cy="65" r="1.2" fill="#241e2e" />

            {/* Colete Roxo Imperial (Royal Purple Vest com 4 botões) */}
            <polygon points="45,67 55,67 54,85 46,85" fill="#7e22ce" />
            <polygon points="46,68 50,75 46,84" fill="#6b21a8" />
            <polygon points="54,68 50,75 54,84" fill="#9333ea" />
            {/* 4 Botões do Colete */}
            <circle cx="50" cy="73" r="0.7" fill="#facc15" />
            <circle cx="50" cy="76" r="0.7" fill="#facc15" />
            <circle cx="50" cy="79" r="0.7" fill="#facc15" />
            <circle cx="50" cy="82" r="0.7" fill="#facc15" />

            {/* Paletó Preto (Tuxedo Jacket) */}
            {/* Lado Esquerdo */}
            <path d="M 38,64 L 46,65 L 45,86 L 36,83 Z" fill="#16121f" />
            <polygon points="42,65 46,65 45,78 40,70" fill="#231d30" />
            {/* Lado Direito */}
            <path d="M 62,64 L 54,65 L 55,86 L 64,83 Z" fill="#16121f" />
            <polygon points="58,65 54,65 55,78 60,70" fill="#231d30" />

            {/* Lenço de Bolso Roxo (Pocket Square Violeta) */}
            <polygon points="40,72 42,70 43,72" fill="#c084fc" />
            <line x1="39" y1="73" x2="44" y2="73" stroke="#2e263d" strokeWidth="0.8" />

            {/* Braço Direito (ao lado do corpo) */}
            <rect x="34" y="65" width="5" height="15" rx="2" fill="#16121f" transform="rotate(8 36 72)" />
            <rect x="34" y="79" width="4" height="2" fill="#ffffff" />
            {/* Mão Direita */}
            <circle cx="36" cy="83" r="2.5" fill="#d99f72" />

            {/* Braço Esquerdo (Acolhedor / Aberto Apresentando) */}
            <path d="M 61,66 L 72,74 L 69,78 L 59,70 Z" fill="#16121f" />
            <rect x="69" y="74" width="3" height="3" rx="1" fill="#ffffff" />
            {/* Mão Esquerda aberta estilizada Funko */}
            <circle cx="73" cy="77" r="3" fill="#d99f72" />
            <rect x="73" y="75" width="4" height="2" rx="0.8" fill="#e2ab7d" />
            <rect x="73" y="78" width="3.5" height="1.8" rx="0.8" fill="#e2ab7d" />

            {/* ── CALÇAS SOCIAIS PRETAS ── */}
            <rect x="42" y="85" width="7" height="21" rx="1" fill="#16121f" />
            <rect x="51" y="85" width="7" height="21" rx="1" fill="#16121f" />
            <line x1="50" y1="85" x2="50" y2="103" stroke="#0a080f" strokeWidth="1" />

            {/* ── SAPATOS SOCIAIS LUSTRADOS (Preto com brilho specular 32-bit) ── */}
            {/* Sapato Esquerdo */}
            <path d="M 39,106 L 49,106 C 49,110 40,111 39,109 Z" fill="#0c0912" />
            <rect x="41" y="106" width="4" height="1" fill="#58506b" />

            {/* Sapato Direito */}
            <path d="M 51,106 L 61,106 C 61,109 52,110 51,109 Z" fill="#0c0912" />
            <rect x="53" y="106" width="4" height="1" fill="#58506b" />
          </svg>

          {/* Selo Funko Dourado "GALA EDITION" no canto inferior direito */}
          {showBadge && (
            <div className="absolute bottom-1 right-1 bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-1.5 py-0.5 rounded font-pixel text-[7px] font-bold shadow-[0_0_8px_rgba(245,158,11,0.6)]">
              ★ GALA #45
            </div>
          )}
        </div>

        {/* Rodapé da moldura com Status RPG */}
        <div className="mt-2.5 space-y-1">
          <div className="flex justify-between font-pixel text-[8px] text-purple-200">
            <span className="tracking-wider">GABRIEL • LV 99</span>
            <span className="text-amber-300 font-bold">&gt; 8000!</span>
          </div>
          <div className="w-full h-1.5 bg-[#120526] border border-purple-500/60 rounded-sm overflow-hidden p-0.5">
            <div className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-amber-400 w-full rounded-sm animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
