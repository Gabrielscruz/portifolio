'use client';

interface ProjectsClientProps {
  impactLabel: string;
  impactNumber: string;
  impactDesc: string;
}

export function ProjectsClient({ impactLabel, impactNumber, impactDesc }: ProjectsClientProps) {
  return (
    <div className="relative">
      <div className="aspect-square glass-card rounded-full flex items-center justify-center overflow-hidden border-2 border-outline-variant/30 p-12">
        <div
          className="w-full h-full rounded-full bg-cover bg-center grayscale contrast-125 opacity-80"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvJzD9srK3twWi55qr6uPZgtX-S2vX4IyqGWr7s3ZHWr1Xdc5Wy90P_JqbqSOGra90W3zbOVSr-2G8Us_cryY_nM93U7x13VgaX-4YX3-Y0HLtuULvDSYJ_AjFA_4lP7Sr07iAFHopIAwxUC_zHa9u-PHbOWz_2I2MmL9byxF40HNls1WRmX4Z6-uxY4NwIwb9kEDDgdDI1xRszj6UPhtMCqNQsa-xt-ZSdjgLm45fMIar30dl_wMZ')" }}
        />
      </div>
      <div className="absolute -bottom-4 -left-4 bg-surface-container border border-outline-variant/20 rounded-2xl border-l-4 border-l-primary max-w-[280px] p-8">
        <p className="font-label-sm text-primary uppercase font-bold tracking-widest mb-1">{impactLabel}</p>
        <p className="font-headline-lg-mobile text-on-surface font-bold">{impactNumber}</p>
        <p className="font-body-md text-on-surface-variant">{impactDesc}</p>
      </div>
    </div>
  );
}
