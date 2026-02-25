import { Outlet } from "react-router-dom"
import {Header} from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

export function ShopLayout () {
  return <div className="ShopLayout">
    <Header/>
    <Outlet />
    <Footer/>
  </div>
}