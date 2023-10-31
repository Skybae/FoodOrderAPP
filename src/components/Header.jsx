import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";

export default function Header() {
    const cartCtx = useContext(CartContext);
    const totalCardItems = cartCtx.items.reduce((totalNumberOfItems, item)=>{
        return totalNumberOfItems + item.quantity;
    }, 0);
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant" />
                <h1>Food Order APP</h1>
            </div>
            <nav>
                <Button textOnly>Cart({totalCardItems})</Button>
            </nav>
        </header>
    )
}