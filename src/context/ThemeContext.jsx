import { createContext, useContext, useEffect, useState, useCallback } from 'react'

export const THEMES = [
  {
    id: 'corporate',
    label: 'Sleek Corporate',
    blurb: 'Trust-focused. Consulting, logistics, finance.',
    dataAttr: null, // default, no data-theme override needed
  },
  {
    id: 'brutalist',
    label: 'Creative Brutalist',
    blurb: 'High-energy. Agencies, fashion, tech startups.',
    dataAttr: 'brutalist',
  },
  {
    id: 'editorial',
    label: 'Minimalist Editorial',
    blurb: 'Luxury whitespace. Hotels, real estate, lifestyle.',
    dataAttr: 'editorial',
  },
]

const STORAGE_KEY = 'sparta-inc-theme'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    if (typeof window === 'undefined') return 'corporate'
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored && THEMES.some((t) => t.id === stored)) return stored
    } catch (e) {
      /* localStorage unavailable — fall back silently */
    }
    return 'corporate'
  })

  useEffect(() => {
    const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0]
    const root = document.documentElement
    if (theme.dataAttr) {
      root.setAttribute('data-theme', theme.dataAttr)
    } else {
      root.removeAttribute('data-theme')
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, themeId)
    } catch (e) {
      /* ignore */
    }
  }, [themeId])

  const setTheme = useCallback((id) => {
    if (THEMES.some((t) => t.id === id)) setThemeId(id)
  }, [])

  const activeTheme = THEMES.find((t) => t.id === themeId) ?? THEMES[0]

  return (
    <ThemeContext.Provider value={{ themeId, activeTheme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
