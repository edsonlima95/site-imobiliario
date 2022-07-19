import React from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

type LayoutProps = { children: React.ReactNode }

function Layout({ children }: LayoutProps) {

    return (

        <>
            <header>
               <Menu/>
            </header>
            <main>
                {children}
            </main>
            
            <Footer/>
        </>

    )

}

export default Layout