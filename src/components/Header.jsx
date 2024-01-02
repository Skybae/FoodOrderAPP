import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext"
import { useContext } from "react";

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const totalCardItems = cartCtx.items.reduce((totalNumberOfItems, item)=>{
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart(){
        userProgressCtx.showCart('open');
    }
    return (
        <header id="main-header">
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