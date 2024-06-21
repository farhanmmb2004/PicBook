// import './App.css'
import Header from './header';
import Navigation from './navigationBar';
import Menu from './menu';
import { MediaProvider} from './context/context';
import { useState,useEffect } from 'react';
import Content from './content';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
return (
    <>
    <MediaProvider>
    <div className="head">
    <Header />
    <Navigation />
    </div>
    <main>
    {
     !isMobile&&(<Menu/>)
    }
    <Content/>
    </main>
    </MediaProvider>
    </>
  )
}

export default App
