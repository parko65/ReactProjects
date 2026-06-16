import Header from './components/Header'
import MainContent from './components/MainContent'
import NavMenu from './components/NavMenu'
import {
  FluentProvider,
  webDarkTheme
} from "@fluentui/react-components";

import './App.css'

function App() {
  return (
    <FluentProvider theme={webDarkTheme} className="app-shell">
      <Header />
      <MainContent />
      <NavMenu />
      <aside>Aside</aside>
      <footer>Footer</footer>
    </FluentProvider>
  )
}

export default App
