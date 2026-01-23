import Header from './components/Header.tsx';
import AppRoutes from './routes/routes.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

type Theme = "light" | "dark"
type ThemeContext = { theme: Theme; setTheme: (theme: Theme) => void }
interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeContext = React.createContext<ThemeContext|undefined>(undefined)
export const useTheme = (): ThemeContext => {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('undefined')
  }
  return context;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = React.useState<Theme>("light")
  
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light')
    };
    setTheme(mediaQuery.matches ? 'dark' : 'light')
    mediaQuery.addEventListener('change', handleChange)
    return ()=>{
      mediaQuery.removeEventListener('change', handleChange)
    }
  },[])
  React.useEffect(() => {
    document.body.className=theme
  },[theme])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function App() {
 return (
  <>
    <Router>
    <ThemeProvider>
      <Header/>
      <main>
        <AppRoutes/>
      </main>
    </ThemeProvider>
    </Router>
    
  </>
 )
}

export default App
