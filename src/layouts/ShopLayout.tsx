import { Outlet } from "react-router-dom"
import {Header} from "../components/Header/Header"

export function ShopLayout () {
  return <div className="ShopLayout">
    <Header/>
    <Outlet />
  </div>
}