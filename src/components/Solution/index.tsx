import { Handshake, House, Money } from "phosphor-react"
import Title from "../Title"

function Service() {

    return (
        <section className="container mx-auto mt-24">
            <div className="flex justify-center">
                <Title title="Econtre a melhor solução" subTitle="para você" description="Todos os nossos serviços" />
            </div>

            <div className="flex justify-around">
                <div className="shadow-xl p-5 text-center w-3/12">
                    <House size={44} className="text-red-500 inline-block mb-3" />
                    <h3 className="text-gray-800 font-bold text-2xl mb-2">Anuncie seu imóvel</h3>
                    <p className="text-gray-600">Anuncie seu imóvel totalmente grátis</p>
                </div>
                <div className="shadow-xl p-5 text-center w-3/12">
                    <Money size={44} className="text-red-500 inline-block mb-3" />
                    <h3 className="text-gray-800 font-bold text-2xl mb-2">Financiamento</h3>
                    <p className="text-gray-600">Melhores taxas do mercado</p>
                </div>
                <div className="shadow-xl p-5 text-center w-3/12">
                    <Handshake size={44} className="text-red-500 inline-block mb-3" />
                    <h3 className="text-gray-800 font-bold text-2xl mb-2">Consórcio</h3>
                    <p className="text-gray-600">Maneira mais eficiente de comprar seu imóvel</p>
                </div>
            </div>
        </section>
    )

}

export default Service