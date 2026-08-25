'use client';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';

export default function Contact() {
  return (
    <>
      <Section.Root className="flex-grow flex items-center min-h-[calc(100vh-80px)]">
        <div className="max-w-4xl mx-auto w-full">
          <Section.Header className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Let's Build Something <span className="text-primary">Scalable</span>
            </h1>
            <Section.Subtitle className="mx-auto">
              Capable of acting from solution design to production delivery. Bridging technical, operational, and business contexts.
            </Section.Subtitle>
          </Section.Header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Details */}
            <div className="space-y-4">
              <Card.Root className="!p-6 flex-row items-center gap-5" hoverEffect={false}>
                <Card.Icon icon="mail" className="w-12 h-12 shrink-0 mb-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Email</p>
                  <a className="text-base font-semibold text-white hover:text-primary transition-colors" href="mailto:gabriel.d.silva.cruz@gmail.com">gabriel.d.silva.cruz@gmail.com</a>
                </div>
              </Card.Root>
              
              <Card.Root className="!p-6 flex-row items-center gap-5" hoverEffect={false}>
                <Card.Icon icon="hub" className="w-12 h-12 shrink-0 mb-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Connect</p>
                  <a className="text-base font-semibold text-white hover:text-primary transition-colors" href="#">LinkedIn</a>
                </div>
              </Card.Root>

              <Card.Root className="!p-6 flex-row items-center gap-5" hoverEffect={false}>
                <Card.Icon icon="location_on" className="w-12 h-12 shrink-0 mb-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Base</p>
                  <p className="text-base font-semibold text-white">São Paulo, SP, Brazil</p>
                </div>
              </Card.Root>

              <div className="mt-8 pt-8 border-t border-outline-variant/20 grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white">Solution Design</h4>
                  <p className="text-xs text-on-surface-variant leading-normal">Business needs into robust, scalable architectures.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white">Production Ready</h4>
                  <p className="text-xs text-on-surface-variant leading-normal">Reliable pipelines that deliver actual value.</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <Card.Root className="!p-8" hoverEffect={false}>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <Input label="Name" id="name" placeholder="John Doe" type="text" />
                <Input label="Email Address" id="email" placeholder="john@company.com" type="email" />
                <Textarea label="Message" id="message" placeholder="How can I help you?" className="h-32" />
                <Button variant="primary" className="w-full !justify-center group" type="submit">
                  <span>Send Proposal</span>
                </Button>
              </form>
            </Card.Root>
          </div>
        </div>
      </Section.Root>
    </>
  );
}
