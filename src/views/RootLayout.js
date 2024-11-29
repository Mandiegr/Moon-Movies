import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/header";

export function RootLayout() {

    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}