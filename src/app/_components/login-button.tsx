"use client";

import { signIn, useSession, signOut } from "next-auth/react";

import UiButton from "./button";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>
          Signed in with: <b>{session.user.email}</b>
        </p>

        <h3
          onClick={async () => {
            await signOut();
          }}
        >
          Sign Out
        </h3>
      </div>
    );
  }

  return (
    <UiButton
      title="Sign Up with Google"
      radius="full"
      className="max-w-sm bg-white font-semibold shadow-md"
      fullWidth={true}
      onClick={async () => {
        await signIn("google");
      }}
    />
  );
}