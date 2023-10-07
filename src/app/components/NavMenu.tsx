'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="flex items-center gap-2">
          <Image
            src={session.user?.image || ''}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>{session.user?.name}</span>
        </div>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }

  return (
    <>
      <span>Not signed in</span>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

export function NavMenu() {
  return (
    <header className="bg-slate-900 w-full rounded-br-md rounded-bl-md p-4 text-white flex justify-between items-center">
      <AuthButton />
    </header>
  );
}
