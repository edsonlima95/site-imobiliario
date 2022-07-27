import Card from "../../components/Card"
import Cta from "../../components/Cta"
import Title from "../../components/Title"
import Layout from "../Layout"

function Category() {

    return (
        <Layout>
            <div className="h-[400px] hero-category">
                <div className="absolute bg-black opacity-30 w-full h-[400px]"></div>
                <div className="flex justify-center items-center h-full">
                    <h1 className="text-white text-6xl font-bold z-10">Busca por: comprar</h1>
                </div>
            </div>
            <section className="mb-32">

                <div className="flex justify-center">
                    <Title title="Resultado da" subTitle=" pesquisa abaixo" description="Confora abaixo todos os imóveis disponíveis" />
                </div>
                <div className="flex gap-3 p-20">

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
                    /> <Card
                        title="Apartamento"
                        cover="cover"
                        address="Vila União"
                        number={28}
                        neighborhood="Praça Santo Antônio"
                        area={200}
                        room={2}
                        bathRoom={2}
                        garage={2}
                    /> <Card
                        title="Apartamento"
                        cover="cover"
                        address="Vila União"
                        number={28}
                        neighborhood="Praça Santo Antônio"
                        area={200}
                        room={2}
                        bathRoom={2}
                        garage={2}
                    /><Card
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

        </Layout>
    )

}

export default Category