import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <div className="has-text-link">
            <Link to="/cart" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                {totalQuantity}
            </Link>
        </div>
    );
};

export default CartWidget; 