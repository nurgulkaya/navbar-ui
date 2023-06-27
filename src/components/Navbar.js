import Anasayfa from './pages/Anasayfa'
import Hizmetlerimiz from './pages/Hizmetlerimiz'
import Hakkimizda from './pages/Hakkimizda'
import Iletisim from './pages/Iletisim'
import Kayit from './pages/Kayit'
import Giris from './pages/Giris'
import {navItem} from './NavbarItem'
import { Routes, Route } from "react-router-dom"
import { Link } from 'react-router-dom'

function Navbar () {

 return (
  <div>
    <div className="shadow-md px-6 py-6">
     <nav className="flex justify-between items-center">
      <div>
        <p className="font-mono font-bold text-xl">Logo</p>
      </div>
      <div className="space-x-10">
        {navItem.map((item) => (
              <Link
                to={item.link}
                className="hover:border-b-2 border-indigo-300"
                key={item.link}
              >
                {item.text}
              </Link>
            ))}
      </div>
      <div className="space-x-2">
        <Link to="/giris">
          <button className="text-black hover:bg-indigo-700 hover:text-white py-1 px-3 rounded">
             Giriş Yap
          </button>
        </Link>
        <Link to="/kayit">
          <button className="text-white bg-indigo-700 hover:bg-indigo-800 py-1 px-3 rounded">
            Kayıt Ol
          </button>
        </Link>
      </div>
     </nav>
    </div>
    <Routes> 
      <Route path="/" element={<Anasayfa />}></Route>
      <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />}></Route>
      <Route path="/hakkimizda" element={<Hakkimizda />}></Route>
      <Route path="/iletisim" element={<Iletisim />}></Route>
      <Route path="/kayit" element={<Kayit/>}></Route>
      <Route path="/giris" element={<Giris />}></Route>
    </Routes>
</div>
 );
};

export default Navbar;
