import KartuMakanan from '@/components/KartuMakanan'
import Layout from '@/components/Layout'
import Head from 'next/head'
import {
  Box,
  Container,
  Heading,
  Flex,
  Image,
  Text
} from '@chakra-ui/react'

export default function TokoPage({ toko }) {
  return (
    <div>
      <Head>
        <title>{toko.name} - Okjek</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${toko.name} Di Okjek`} />
        <meta name="twitter:image" content={toko.image}/>
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta name="title" content={`${toko.name} Di Okjek`} />
        <meta name="image" content={toko.image} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div id="description">
            <Box pt="18" pb="42">
                <Container>
                      <Flex>
                           <Heading>
                            <Box p="4">
                                <Image src={toko.image} alt={toko.name} />       
                              </Box>  
                            </Heading>          
                      </Flex>
                      <Text fontSize="2xl" fontWeight="bold">
                        {toko.name}
                      </Text>
                      {toko.partner && (
                        <Flex>
                            <Image src="/badge-partner.png" alt="partner badge" width="auto" height="24px"/>
                        </Flex>
                      )}
                      <Text fontSize="md" fontWeight="semibold">
                          Alamat: {toko.address}
                      </Text>
                </Container>
            </Box>
        </div>
        {toko.makanan.map((data) => (
          <KartuMakanan makanan={data} key={data.id} />
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
    const res = await fetch(`${process.env.BASE_URL}/api/toko/${context.params.id}`)
    const toko = await res.json()

    return {
        props: {
           toko
        }
    }
}