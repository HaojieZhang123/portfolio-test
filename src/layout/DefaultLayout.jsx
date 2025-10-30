import { Outlet } from "react-router-dom"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

const DefaultLayout = () => {
    return (
        <>
            <div>
                <header>
                    <Header />
                </header>
                <Outlet />
                {/* <footer>
                    <Footer />
                </footer> */}
            </div>
        </>
    )
}

export default DefaultLayout