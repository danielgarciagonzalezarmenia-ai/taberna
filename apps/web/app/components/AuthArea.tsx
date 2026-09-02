"use client";

import { useAuth } from "../utils/auth";

export default function AuthArea() {
  const { user, loading, signInWithGoogle, logOut } = useAuth();

  if (loading) {
    return (
      <button
        disabled
        className="btn-primary h-12 w-64 cursor-wait text-sm font-medium opacity-70"
      >
        Cargando…
      </button>
    );
  }

  if (user) {
    return (
      <div className="flex w-full max-w-sm flex-col items-stretch gap-4">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
          {user.photoURL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.photoURL}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="avatar-grad h-10 w-10 rounded-full" />
          )}
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-zinc-100">
              {user.displayName ?? user.email}
            </p>
            <p className="truncate text-xs text-zinc-500">{user.email}</p>
          </div>
        </div>
        <button
          onClick={logOut}
          className="btn-ghost h-12 w-full text-sm font-medium"
        >
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="btn-primary h-12 w-64 px-6 text-sm font-semibold"
    >
      Continuar con Google
    </button>
  );
}