import { GetServerSideProps } from "next"
import Card from "../../components/Card"
import Cta from "../../components/Cta"
import ContentLef from "../../components/Imobil/ContentLeft"
import ContentRight from "../../components/Imobil/ContentRight"
import Layout from "../Layout"

function Imovel() {

    return (
        <Layout>
            <section className="p-5">
                <div className="flex">
                    <ContentLef />
                    <ContentRight />
                </div>

            </section>
            {/* IMÓVEL */}
            <section className="p-5">
                <h4 className="text-gray-800 text-3xl my-8 font-bold">Talvez você também tenha interesse</h4>
                <div className="grid grid-cols-4 gap-3">

                    <Card
                        title="Apartamento"
                        cover="cover"
                        address="Vila União"
                        number={28}
                        neighborhood="Praça Santo Antônio"
                        area={200}
                        room={2}
                        bathRoom={2}
                        garage={2}
                    />

                </div>
            </section>
            
            {/* EMAIL */}
            <Cta />
        </Layout >
    )

}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const slug = ctx.params?.slug

    return {
        props: {}
    }

}

export default Imovel