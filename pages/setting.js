import Head from 'next/head'
import { useSession } from 'next-auth/client'

export default function SettingPage() {
    const [session] = useSession()

    if(!session) return <span>Not Allowed</span>

    return (
        <div>
            <Head>
                <title>Setting Profil {session.user.name} - Okjek</title>
            </Head>
        </div>
    )
}
