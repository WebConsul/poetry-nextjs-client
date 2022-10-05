import type {ReactNode} from 'react'
import Head from "next/head";
import Header from "./header";
import Footer from "./footer"

export type LayoutType = { children: ReactNode }

export default function MainLayout({children}: LayoutType) {
    return (
        <>
            <Head>
                <title>Learn Poems</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            </Head>

            <Header/>

            <main className="container">
                <div className="row g-5 mb-4 mt-0">
                    <div className="col-lg-3">
                        LEFT CONTENT
                    </div>

                    <div className="col-lg-9 main-container">
                        {children}
                    </div>
                </div>

            </main>

            <Footer/>
        </>
    )
}