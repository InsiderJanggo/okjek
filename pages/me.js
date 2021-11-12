import { useSession } from "next-auth/client";
import Head from 'next/head'

export default function MePage() {
    const [session] = useSession()

    if(!session) return <span>Not Allowed</span>

    return (
        <div>
            <Head>
                <title>Profil {session.user.name} - Okjek</title>
            </Head>
            
        </div>
    )
}
