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
        to="/meals"
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
        to="/Upcoming-Meals"
        className={({ isActive, isPending, isTransitioning }) =>
            [
                isPending ? "pending" : "",
                isActive ? "text-yellow-500 underline" : "",
                isTransitioning ? "transitioning" : "",
            ].join(" ")
        }
    >
        Upcoming Meals
    </NavLink>
    <NavLink
        to="/Join-US"
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