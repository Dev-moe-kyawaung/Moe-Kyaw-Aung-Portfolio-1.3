import { useEffect, useState } from 'react';

/**
 * Cycles through an array of strings with a typewriter effect.
 * Types forward, pauses, deletes, moves to next string, loops.
 */
export default function TypingText({ strings, typeSpeed = 55, deleteSpeed = 30, pause = 1600 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === strings[index].length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, strings, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="mono">
      {strings[index].substring(0, subIndex)}
      <span aria-hidden="true" style={{ opacity: 0.8, animation: 'blink 1s step-end infinite' }}>
        &nbsp;▌
      </span>
      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </span>
  );
}

