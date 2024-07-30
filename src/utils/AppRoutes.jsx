import { Navigate } from "react-router-dom";
import TopBarComponent from "../components/TopBarComponent";
import CartComponent from "../components/CartComponent";
import ProductComponent from "../components/ProductComponent";

export default [
    {
        path: '/',
        element: <>
        <TopBarComponent />
        <ProductComponent/>
        </>
    },

]