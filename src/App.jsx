import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Checkout from "./components/Checkout";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import MenuIcon from '@mui/icons-material/Menu';

import Button from "./components/UI/Button";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    // setSidebarOpen(true);
  };

  return (
    <>
   
      <div className={`header-button ${isSidebarOpen ? 'shifted' : ''}`}>
        <Button onClick={toggleSidebar} className="menuIcon"><MenuIcon /></Button>
        
        {/* <Header /> */}
      </div>
      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
       {isSidebarOpen && <Sidebar/>} 
        <UserProgressContextProvider>
          <CartContextProvider>
          <Routes>
      <Route path="/" element={<Header/>}/>
    </Routes>
            <Meals />
            <Cart />
            <Checkout />
          </CartContextProvider>
        </UserProgressContextProvider>

      </div>
    </>
  );
}

export default App;
