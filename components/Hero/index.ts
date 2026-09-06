import { HeroRoot } from './HeroRoot';
import { HeroBadge } from './HeroBadge';
import { HeroTitle } from './HeroTitle';
import { HeroSubtitle } from './HeroSubtitle';
import { HeroDescription } from './HeroDescription';
import { HeroActions } from './HeroActions';
import { HeroVisual } from './HeroVisual';

/**
 * Padrão de Composição React (Compound Components Pattern):
 * Permite flexibilidade estrutural, alta legibilidade e baixo acoplamento.
 */
export const Hero = {
  Root: HeroRoot,
  Badge: HeroBadge,
  Title: HeroTitle,
  Subtitle: HeroSubtitle,
  Description: HeroDescription,
  Actions: HeroActions,
  Visual: HeroVisual,
};

export {
  HeroRoot,
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroActions,
  HeroVisual,
};
