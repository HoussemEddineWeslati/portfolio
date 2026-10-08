"use client";

// The rotating role in the hero: types a role, holds, deletes, types the next.
//
// The server renders the FIRST role in full, so the line is correct before
// JavaScript runs, for search engines, and for visitors who ask for reduced
// motion (for them it never animates). The full list is also given to screen
// readers once, instead of announcing every keystroke.
import { useEffect, useState } from "react";

const TYPE_MS = 62;
const DELETE_MS = 34;
const HOLD_MS = 1700;

export function TypedRoles({ roles }: { roles: readonly string[] }) {
  const [text, setText] = useState(roles[0] ?? "");

  useEffect(() => {
    if (roles.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let role = 0;
    let length = roles[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const full = roles[role];
      if (deleting) {
        length -= 1;
        setText(full.slice(0, length));
        if (length === 0) {
          deleting = false;
          role = (role + 1) % roles.length;
        }
        timer = setTimeout(step, DELETE_MS);
      } else {
        length += 1;
        setText(roles[role].slice(0, length));
        if (length === roles[role].length) {
          deleting = true;
          timer = setTimeout(step, HOLD_MS);
        } else {
          timer = setTimeout(step, TYPE_MS);
        }
      }
    };

    timer = setTimeout(step, HOLD_MS);
    return () => clearTimeout(timer);
  }, [roles]);

  return (
    <>
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden className="accent-text">
        {text}
      </span>
      <span aria-hidden className="caret" />
    </>
  );
}
