import Head from 'next/head'
import Footer from 'components/Footer'


export default function PageLayout({children}) {
    return(
        <div>
            <Head>
                <title>Pot Pot Pottert</title>
                <meta name="description" content="Pot Pot Pottery Potteries by Leonardo Romano" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`page-wapper`}>
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}