import { Bathtub, Bed, Car, Ruler, Shower } from "phosphor-react"


function ContentLef() {

    return (
        <div className="w-8/12">
            <img src="/images/casa.jpg" alt="" className="rounded w-full"/>
            <div className="container mx-auto">
                <div>
                    <h2 className="text-gray-800 font-bold text-3xl my-5">Apartamento próximo ao mar</h2>
                    <p className="text-lg my-5">Varzea Alegre - CE</p>
                    <p className="font-light text-lg my-5">Vila União 28, Praça Santo Antônio</p>
                </div>
                <div className="my-5">
                    <h4 className="text-gray-800 text-3xl my-8 font-bold w-full">Descrição</h4>

                    <p className="text-gray-600 leading-relaxed text-xl ">

                        Apartamento com ótima localização próxima ao metrô Santana e do Comércio em geral. Construção com mais de uma casa no mesmo quintal, luz e água independentes. Residência possui dois dormitórios com piso frio, sala ampla, cozinha com gabinete, banheiro com box, pintura completa, área de serviço e quintal nos fundos. Não perca tempo! Agende uma visita com um de nossos corretores!
                    </p>
                </div>
                <div className="flex flex-wrap w-8/12">
                    <h4 className="text-gray-800 text-3xl my-8 font-bold w-full">Caracteristicas</h4>

                    <div className="flex flex-col  p-2 mt-3 w-3/12">
                        <span className="text-gray-700 font-bold text-lg">Área</span>
                        <span className="flex  text-gray-700"><Ruler size={24} className="text-red-600 mr-3" weight="fill" /> {200}m²</span>
                    </div>
                    <div className="flex flex-col  p-2 mt-3 w-3/12">
                        <span className="text-gray-700 font-bold text-lg">Garagem</span>
                        <span className="flex text-gray-700"><Car size={24} className="text-red-500 mr-3" weight="fill" /> {200}m²</span>
                    </div>
                    <div className="flex flex-col  p-2 mt-3 w-3/12">
                        <span className="text-gray-700 font-bold text-lg">Dormitórios</span>
                        <span className="flex text-gray-700"><Bed size={24} className="text-red-500 mr-3" weight="fill" /> {200}m²</span>
                    </div>

                    <div className="flex flex-col  p-2 mt-3 w-3/12">
                        <span className="text-gray-700 font-bold text-lg">Banheiros</span>
                        <span className="flex text-gray-700"><Shower size={24} className="text-red-500 mr-3" weight="fill" /> {200}m²</span>
                    </div>

                    <div className="flex flex-col  p-2 mt-3 w-3/12">
                        <span className="text-gray-700 font-bold text-lg">Suites</span>
                        <span className="flex text-gray-700"><Bathtub size={24} className="text-red-500 mr-3" weight="fill" /> {200}m²</span>
                    </div>

                    <div className="w-full mt-3">
                        <h4 className="text-gray-800 text-3xl my-8 font-bold w-full">Atributos do imóvel</h4>
                        <ul className="flex flex-wrap gap-2 text-green-700 text-xl">
                            <li>Pscina,</li>
                            <li>Churrasqueira,</li>
                            <li>Bica,</li>
                            <li>Academia,</li>
                            <li>Armario embutido,</li>
                            <li>Cozinha mobilhada,</li>
                            <li>Quintal,</li>
                            <li>Cozinha americana,</li>
                            <li>Jardim,</li>
                            <li>Deck</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default ContentLef