"use client";

import { useAuth } from "../utils/auth";

export default function AuthArea() {
  const { user, loading, signInWithGoogle, logOut } = useAuth();

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center">
        <button
          disabled
          className="h-12 w-64 cursor-wait rounded-[14px] bg-white/[0.06] text-zinc-400"
        >
          Cargando…
        </button>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex w-full max-w-sm flex-col items-stretch gap-4">
        <div className="flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.06] p-3 backdrop-blur-xl">
          {user.photoURL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.photoURL}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-white/10" />
          )}
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-zinc-100">
              {user.displayName ?? user.email}
            </p>
            <p className="truncate text-xs text-zinc-400">{user.email}</p>
          </div>
        </div>
        <button
          onClick={logOut}
          className="h-12 w-full rounded-[14px] border border-white/10 bg-white/[0.04] text-sm font-medium text-zinc-300 transition-colors hover:bg-white/[0.08]"
        >
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="h-12 w-64 rounded-[14px] bg-white px-5 text-sm font-semibold text-zinc-900 shadow-float transition-transform active:scale-[0.98]"
    >
      Continuar con Google
    </button>
  );
}