'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    const dark = saved === null || saved === 'dark';
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark, isInitialized]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-xl text-lg text-slate-100 transition"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '☀' : '☾'}
    </button>
  );
}
