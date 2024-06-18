import './App.css'
import Header from './header';
import Navigation from './navigationBar';
import Menu from './menu';
import { useState,useEffect } from 'react';

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
    <div className="head">
    <Header/>
    <Navigation />
    </div>
    <main>
    {
     !isMobile&&(<Menu/>)
    }
    <div className="content">
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit vero eius aliquam consequuntur voluptas, voluptatem ad fuga veritatis hic vitae sint ab, nostrum libero aperiam impedit eveniet accusantium sed!
     Quae ea quaerat ab velit odio fugiat officia obcaecati voluptas quasi. Et fugit praesentium cumque nihil nemo ea voluptatum esse optio accusantium magnam voluptate soluta, nobis quasi recusandae repellendus voluptatem.
     Doloribus quos voluptatum dicta, repellat magnam amet quis ab. Animi consequuntur quisquam deserunt ipsam dicta saepe quo? Labore error quidem iste eligendi culpa architecto laudantium aut temporibus ad! Similique, odio!
     Dolorem enim molestiae aliquam ab! Magni laborum, id soluta expedita fuga, quos voluptatibus veritatis quisquam fugiat, repellendus iure consequatur voluptatum tempora nam minima tenetur cupiditate minus sunt distinctio ratione! Amet!
     Dolor aliquid vitae tempora praesentium, numquam nobis. Tempore eaque doloremque suscipit aperiam nostrum asperiores hic illo maiores sit, a nihil? Eveniet suscipit nesciunt maxime magnam mollitia vel necessitatibus. Perferendis, delectus.
     Aliquid facilis dolorum ipsa quam exercitationem quaerat esse, vero, nam, provident atque omnis voluptate. Ipsam iusto expedita esse harum nobis tempora maiores quae. Rerum quibusdam excepturi molestias! Sed, harum in.
     Voluptate mollitia accusamus assumenda qui nam ab voluptatibus tenetur, ipsam eaque similique dolore cumque. Quis corporis fugiat beatae illum itaque eum animi, facilis quasi officia nemo? Cupiditate molestiae at ipsam.
     Culpa maxime, doloribus id sed recusandae nemo itaque veniam numquam magni quas quaerat aliquid, consectetur cumque. Illo voluptate a dicta praesentium earum iste obcaecati quidem. Qui pariatur provident ipsam commodi?
     Quibusdam officiis voluptates eaque nostrum at tenetur praesentium ipsum deleniti cupiditate esse. Laudantium fuga animi harum quasi officia corporis voluptatem ipsum suscipit. Laudantium natus pariatur adipisci sed? Eum, illo tenetur.
     Incidunt iusto debitis laudantium minus provident, expedita, reprehenderit a cupiditate nobis suscipit quisquam rem iste perspiciatis aperiam voluptas atque sunt sed vel quia? Praesentium reprehenderit molestiae accusamus velit, minus neque?
    </div>
    </main>
    </>
  )
}

export default App
