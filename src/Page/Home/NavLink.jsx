import { NavLink } from "react-router-dom";

export const navLink = <>
    <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
            [
                isPending ? "pending" : "",
                isActive ? "text-yellow-500 underline" : "",
                isTransitioning ? "transitioning" : "",
            ].join(" ")
        }
    >
        Home
    </NavLink>
    <NavLink
        to="/menu"
        className={({ isActive, isPending, isTransitioning }) =>
            [
                isPending ? "pending" : "",
                isActive ? "text-yellow-500 underline" : "",
                isTransitioning ? "transitioning" : "",
            ].join(" ")
        }
    >
        Meals
    </NavLink>
    <NavLink
        to="/order/salad"
        className={({ isActive, isPending, isTransitioning }) =>
            [
                isPending ? "pending" : "",
                isActive ? "text-yellow-500 underline" : "",
                isTransitioning ? "transitioning" : "",
            ].join(" ")
        }
    >
       Join US
    </NavLink>

</>