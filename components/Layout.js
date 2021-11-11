import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Layout({ children }) {
    return(
        <div className="okjek" id="app">
            <Navbar />
                {children}
            <Footer />
        </div>
    )
}