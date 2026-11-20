"use client";

import { useActionState } from "react";
import { unlock } from "./actions";

export default function PasswordGate() {
  const [state, formAction, pending] = useActionState(unlock, { error: "" });

  return (
    <main className="pf pf-gate">
      <div className="pf-gate-box">
        <form action={formAction} className="pf-gate-form">
          <label className="pf-meta" htmlFor="pf-password">
            Password
          </label>
          <input
            id="pf-password"
            name="password"
            type="password"
            className="pf-gate-input"
            autoComplete="current-password"
            autoFocus
            required
          />

          {state.error && (
            <p className="pf-gate-error" role="alert">
              {state.error}
            </p>
          )}

          <button type="submit" className="cta-bracket" disabled={pending}>
            {pending ? "Checking…" : "Enter"}
          </button>
        </form>
      </div>
    </main>
  );
}
