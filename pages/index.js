import KartuToko from '@/components/KartuToko'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function Home({ toko }) {
  return (
    <div>
      <Head>
        <title>Okjek - Home</title>
      </Head>
      <Layout>
        {toko.map((data) => (
          <KartuToko toko={data} key={data.id} />
        ))}
      </Layout>
    </div>
  )
}

/**
* @param {import('next').GetServerSidePropsContext} context
* @returns
*/
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.BASE_URL}/api/toko`)
    const toko = await res.json()

    return {
        props: {
           toko
        }
    }
}