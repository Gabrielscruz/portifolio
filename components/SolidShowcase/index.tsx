import React from 'react';
import classNames from 'classnames';

export interface SolidShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  locale?: 'pt' | 'en';
}

interface SolidPrinciple {
  letter: string;
  title: string;
  concept: string;
  practice: string;
  badge: string;
}

export function SolidShowcase({ locale = 'pt', className, ...props }: SolidShowcaseProps) {
  const principles: SolidPrinciple[] =
    locale === 'pt'
      ? [
          {
            letter: 'S',
            title: 'Single Responsibility',
            concept: 'Uma classe, componente ou serviço deve ter apenas uma razão para existir e mudar.',
            practice: 'Desacoplamento de regras de negócio, serviços HTTP e camadas de apresentação.',
            badge: 'SRP',
          },
          {
            letter: 'O',
            title: 'Open / Closed Principle',
            concept: 'Entidades de software devem ser abertas para extensão, mas fechadas para modificação.',
            practice: 'Uso de padrões como Strategy, Decorator e Composição em React e NestJS.',
            badge: 'OCP',
          },
          {
            letter: 'L',
            title: 'Liskov Substitution',
            concept: 'Subclasses e implementações devem ser substituíveis por seus tipos base sem quebrar o sistema.',
            practice: 'Contratos estritos com TypeScript interfaces e abstrações consistentes.',
            badge: 'LSP',
          },
          {
            letter: 'I',
            title: 'Interface Segregation',
            concept: 'Clientes não devem ser forçados a depender de interfaces que não utilizam.',
            practice: 'Criação de DTOs e tipos granulares, evitando interfaces monolíticas inchadas.',
            badge: 'ISP',
          },
          {
            letter: 'D',
            title: 'Dependency Inversion',
            concept: 'Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações.',
            practice: 'Injeção de dependências no NestJS/Node e injeção de dependências via Context no React.',
            badge: 'DIP',
          },
        ]
      : [
          {
            letter: 'S',
            title: 'Single Responsibility',
            concept: 'A module, class or component should have one and only one reason to change.',
            practice: 'Decoupling business rules, HTTP data layers, and presentation UI components.',
            badge: 'SRP',
          },
          {
            letter: 'O',
            title: 'Open / Closed Principle',
            concept: 'Software entities should be open for extension, but closed for modification.',
            practice: 'Compound components, strategy patterns, and composition in React and NestJS.',
            badge: 'OCP',
          },
          {
            letter: 'L',
            title: 'Liskov Substitution',
            concept: 'Subtypes must be substitutable for their base types without altering correctness.',
            practice: 'Strict TypeScript contracts and predictable interface implementations.',
            badge: 'LSP',
          },
          {
            letter: 'I',
            title: 'Interface Segregation',
            concept: 'Clients should not be forced to depend upon interfaces that they do not use.',
            practice: 'Fine-grained interfaces, composable hook contracts, and lean DTOs.',
            badge: 'ISP',
          },
          {
            letter: 'D',
            title: 'Dependency Inversion',
            concept: 'High-level modules should not depend on low-level modules; both depend on abstractions.',
            practice: 'Dependency injection containers in NestJS and inversion through React providers.',
            badge: 'DIP',
          },
        ];

  return (
    <div className={classNames('w-full', className)} {...props}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((item) => (
          <div
            key={item.letter}
            className="pixar-card p-6 flex flex-col justify-between border border-purple-500/20 hover:border-purple-400/50 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-700 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-purple-500/40 border border-purple-300/30 group-hover:scale-110 transition-transform">
                  {item.letter}
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-900/50 text-purple-200 text-xs font-mono font-bold border border-purple-500/30">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-purple-200/80 leading-relaxed mb-4">
                {item.concept}
              </p>
            </div>

            <div className="pt-4 border-t border-purple-500/20">
              <p className="text-xs text-amber-300/90 font-medium flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                <span>{item.practice}</span>
              </p>
            </div>
          </div>
        ))}

        {/* Clean Code Pillar Card */}
        <div className="pixar-card p-6 flex flex-col justify-between border border-amber-400/30 bg-gradient-to-br from-purple-950/60 via-[#1c0f38] to-[#120826] group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-black font-extrabold text-xl flex items-center justify-center shadow-lg shadow-amber-400/30 border border-amber-200/40 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">auto_awesome</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-mono font-bold border border-amber-400/40">
                CLEARCODE
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {locale === 'pt' ? 'Filosofia de Código Limpo' : 'Clean Code Philosophy'}
            </h3>
            <p className="text-sm text-purple-200/80 leading-relaxed mb-4">
              {locale === 'pt'
                ? 'Nomes expressivos, funções pequenas e focadas, testes automatizados (k6, Jest) e arquitetura previsível que qualquer engenheiro consegue ler e evoluir sem atrito.'
                : 'Expressive naming, concise functions, automated tests (k6, Jest), and predictable architecture that engineers can read, maintain, and scale effortlessly.'}
            </p>
          </div>

          <div className="pt-4 border-t border-purple-500/20">
            <p className="text-xs text-purple-200 font-mono flex items-center gap-1.5">
              <span className="text-amber-400">✦</span>
              <span>
                {locale === 'pt'
                  ? 'Engenharia de Software de Alta Performance'
                  : 'High-Performance Software Engineering'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
