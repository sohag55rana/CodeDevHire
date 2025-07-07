import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Root = () => {
  return (
    <div>
       <div className="container mx-auto p-4">
        {/* navbar */}
       <Navbar></Navbar>

        <div className="min-h-[calc(100vh-306px)] py-10">
          {/* outlet */}
        <Outlet></Outlet>
        </div>

       </div>
        {/* footer */}
        <Footer></Footer>
    </div>
  )
}

export default Root
