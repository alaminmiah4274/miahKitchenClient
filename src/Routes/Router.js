import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Menu from "../components/Menu/Menu";
import MeatItems from "../FoodsItems/MeatItems/MeatItems";
import RiceItems from "../FoodsItems/RiceItems/RiceItems";
import FishItems from "../FoodsItems/FishItems/FishItems";
import PithaItems from "../FoodsItems/PithaItems/PithaItems";
import VortaItems from "../FoodsItems/VortaItems/VortaItems";
import DalAndVaji from "../FoodsItems/DalAndVaji/DalAndVaji";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/meat',
                element: <MeatItems></MeatItems>
            },
            {
                path: '/rice',
                element: <RiceItems></RiceItems>
            },
            {
                path: '/fish',
                element: <FishItems></FishItems>
            },
            {
                path: '/pitha',
                element: <PithaItems></PithaItems>
            },
            {
                path: '/vorta',
                element: <VortaItems></VortaItems>
            },
            {
                path: '/dal',
                element: <DalAndVaji></DalAndVaji>
            }
        ]
    }
]);