import type { ReactNode } from "react";
import AuthArea from "./components/AuthArea";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {value}
      </span>
      <span className="mt-1 text-sm text-zinc-500">{label}</span>
    </div>
  );
}

function AgentCard({
  index,
  title,
  desc,
  from,
}: {
  index: string;
  title: string;
  desc: string;
  from: string;
}) {
  return (
    <article className="email-card surface-hover flex flex-col p-6">
      <header className="flex items-center gap-3">
        <div className="avatar-grad flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold text-white">
          {index}
        </div>
        <div className="flex min-w-0 flex-col">
          <span className="font-display text-lg font-medium leading-tight text-white">
            {title}
          </span>
          <span className="truncate text-xs text-zinc-500">{from}</span>
        </div>
      </header>
      <p className="mt-4 text-sm leading-relaxed text-zinc-400">{desc}</p>
    </article>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-400">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#0a0a0a] text-white">
      {/* Navbar glass */}
      <header className="navbar-glass sticky top-0 z-20">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <span className="font-display text-xl font-semibold tracking-tight">
            Taberna<span className="text-grad">.</span>
          </span>
          <span className="text-sm text-zinc-500">Tus taberneros IA</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6">
        {/* HERO */}
        <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 py-24 text-center sm:py-32">
          <div className="relative">
            {/* blob gradiente de fondo, firma Resend */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(124,58,237,0.2) 45%, transparent 70%)",
              }}
            />
            <strong className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Tu taberna de especialistas IA
            </strong>
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-7xl">
            Crea tus taberneros.
            <br />
            <span className="text-grad">Mira cómo trabajan.</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
            Agentes IA especializados en su oficio, cada uno con su rol en la
            oficina. Un especialista por tarea, sin saturaciones, con log visual
            de cada trabajo completado.
          </p>

          <div className="mt-2">
            <AuthArea />
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-3 gap-6 border-y border-white/5 py-10">
          <Stat value="100%" label="Especializado" />
          <Stat value="∞" label="Roles distintos" />
          <Stat value="0" label="Saturaciones" />
        </section>

        {/* GRID DE AGENTES */}
        <section className="py-24">
          <div className="mb-12 flex items-center gap-3">
            <Pill>oficina</Pill>
            <span className="text-sm text-zinc-500">Tus empleados IA con su log visual</span>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AgentCard index="01" title="Investigador" desc="Busca y sintetiza información actualizada para tus decisiones." from="rol · escritorio 1" />
            <AgentCard index="02" title="Escritor" desc="Redacta correos, blogs y respuestas con tono consistente." from="rol · escritorio 2" />
            <AgentCard index="03" title="Revisor" desc="Revisa tu inbox y prioriza lo importante sin abrumarte." from="rol · escritorio 3" />
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#131316] py-20 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -z-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-6 px-6">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Tu staff ya puede empezar.
            </h2>
            <p className="text-zinc-400">
              Arma tu taberna, contrata a tus taberneros y observalos cumplir
              cada rol en tiempo real.
            </p>
            <AuthArea />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 text-sm text-zinc-600">
          <span>
            Taberna — tu taberna de especialistas IA
          </span>
          <span className="text-zinc-700">© 2026</span>
        </div>
      </footer>
    </div>
  );
}