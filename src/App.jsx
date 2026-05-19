import './App.css'

export default function App() {
  return <>
   <Header />
   </>
}

function Header(){
  return (
    <header>
      <nav className="header">
        <img src="/src/assets/globe.png" alt="globe" />
        <span>my travel journal</span>
      </nav>
    </header>
  );
}
