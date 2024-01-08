
import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components";


export function AppRootLayout() {
    return (
        <div>
        <NavigationBar />
        <Outlet />
        </div>
    )
}