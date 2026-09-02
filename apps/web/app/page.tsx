import AuthArea from "./components/AuthArea";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#0b0d10] text-zinc-100">
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Tu taberna de especialistas IA
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Crea tus taberneros.{" "}
            <span className="bg-gradient-to-r from-[#4f8cff] to-[#8a6bff] bg-clip-text text-transparent">
              Mira cómo trabajan.
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-7 text-zinc-400">
            Agentes IA especializados en su oficio, cada uno con su rol en la
            oficina. Sin saturaciones: un especialista por tarea, con log visual
            de cada trabajo completado.
          </p>
        </div>

        <div className="mt-10">
          <AuthArea />
        </div>
      </main>
    </div>
  );
}