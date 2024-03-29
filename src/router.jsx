import { createBrowserRouter, } from "react-router-dom";
import Home from "./Page/Home/Home";
import MainLayout from "./MainLayout";
import JoinUS from "./Page/Join-Us/JoinUS";
import Register from "./Page/Register/Register";
import MealsDetails from "./Page/Home/Meals/MealsDetails";
import AllMeals from "./Page/MealsPage/AllMeals";
import CheckOut from "./Page/Home/Member/CheckOut";
import Dashboard from "./Dashboard/Dashboard";
import AddMeal from "./Dashboard/Admin/AddMeal";
import AdminProfile from "./Dashboard/Admin/AdminProfile";
import UserProfile from "./Dashboard/User/UserProfile";
import ManageUsers from "./Dashboard/Admin/ManageUsers";
import AllMealsItem from "./Dashboard/Admin/AllMealsItem";
import ManageMeal from "./Dashboard/Admin/ManageMeal";
import UpcomingMeal from "./Page/UpcomingMeals/UpcomingMeal";
import RequestedMeals from "./Dashboard/User/RequestedMeals";
import MyReview from "./Dashboard/User/MyReview";
import UpcomeingMealsD from "./Dashboard/Admin/UpcomeingMealsD";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Join-US',
                element: <JoinUS></JoinUS>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/meals',
                element: <AllMeals></AllMeals>
            },
            {
                path: '/Upcoming-Meals',
                element: <UpcomingMeal></UpcomingMeal>
            },
            {
                path: '/mealsDetails/:id',
                element: <MealsDetails></MealsDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/mealItem/${params.id}`)
            },
            {
                path: '/checkout/:name',
                element: <CheckOut></CheckOut>,
                loader: ({params})=>fetch(`http://localhost:5000/memberShip/${params.name}`)
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // admin
            {
                path: 'AdminProfile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: 'Addmeal',
                element: <AddMeal></AddMeal>
            },
            {
                path: 'ManageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'ManageMeal/:id',
                element: <ManageMeal></ManageMeal>,
                loader: ({ params }) => fetch(`http://localhost:5000/mealItem/${params.id}`)
            },
            {
                path: 'Allmeals',
                element: <AllMealsItem></AllMealsItem>
            },
            {
                path: 'Upcomingmeals',
                element: <UpcomeingMealsD></UpcomeingMealsD>
            },
            
            // user
            {
                path: 'MyProfile',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'RequestedMeals',
                element: <RequestedMeals></RequestedMeals>
            },
            {
                path: 'myReview',
                element: <MyReview></MyReview>
            },
        ]
    }
]);