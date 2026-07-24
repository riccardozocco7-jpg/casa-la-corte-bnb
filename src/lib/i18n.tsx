import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "it" | "en";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void };

const LangCtx = createContext<Ctx | null>(null);

const STORAGE_KEY = "corte-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "it" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    } catch {}
  };

  const toggle = () => setLang(lang === "it" ? "en" : "it");

  return <LangCtx.Provider value={{ lang, setLang, toggle }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}

/** Pick between IT and EN values. */
export function useT() {
  const { lang } = useLang();
  return function t<T>(it: T, en: T): T {
    return lang === "en" ? en : it;
  };
}
