import React from "react"
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
            <footer>

            </footer>
        </>

    )

}

export default Layout