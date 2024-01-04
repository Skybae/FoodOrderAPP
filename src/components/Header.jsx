import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext"
import { useContext, useState } from "react";


export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const totalCardItems = cartCtx.items.reduce((totalNumberOfItems, item)=>{
        return totalNumberOfItems + item.quantity;
    }, 0);
    // const [isSidebarOpen, setSidebarOpen]= useState(false);

    function handleShowCart(){
        userProgressCtx.showCart('open');
    }
    // const toggleSidebar = () =>{
    //     setSidebarOpen(!isSidebarOpen);
    //   };
    return (
        <header id="main-header">
              {/* <Sidebar isOpen={isSidebarOpen}/> */}
            {/* <Button onClick={toggleSidebar} className='menuIcon'><MenuIcon/></Button> */}
          
            <div id="title">
                <img src={logoImg} alt="A restaurant" />
                <h1>Skybae's Restaurant</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart({totalCardItems})</Button>
            </nav>
        </header>
    )
}