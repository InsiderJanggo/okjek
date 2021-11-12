import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSession } from "next-auth/client";

export default function Layout({ children }) {
    const [session] = useSession()

    return(
        <div className="okjek" id="app">
            <Navbar session={session}/>
                {children}
            <Footer />
        </div>
    )
}