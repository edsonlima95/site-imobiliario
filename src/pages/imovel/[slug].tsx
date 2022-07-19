import { GetServerSideProps } from "next"
import Layout from "../Layout"

function Imovel() {

    return (
        <Layout>
            <section className="p-5">
                <div className="flex">
                    <div className="w-7/12">
                        <img src="/images/casa.jpg" alt="" className="rounded"/>
                    </div>
                    <div className="w-5/12"></div>
                </div>
            </section>
        </Layout>
    )

}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const slug = ctx.params?.slug

    return {
        props: {}
    }

}

export default Imovel