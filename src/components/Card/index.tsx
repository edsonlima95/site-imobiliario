import { Bed, CarSimple, Ruler, Shower } from "phosphor-react"

type CardProps = {
    title: string,
    cover: string,
    address: string,
    area: number,
    room: number,
    garage: number,
    bathRoom: number,
}

function Card() {

    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <a href="#">
                <img className="rounded-t-lg" src="/images/imovel.jpg" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">Apartamento</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 "><strong className="text-gray-700">Endereço:</strong> Vila União, N° 28, Praça Santo Antônio</p>
                <ul className="flex flex-wrap justify-between">
                    <li><span className="flex justify-center items-center text-gray-700"><Ruler size={24} className="text-red-500 mr-3" weight="fill" /> 200m²</span></li>
                    <li><span className="flex justify-center items-center text-gray-700"><Bed size={24} className="text-red-500 mr-3" weight="fill" /> 2</span></li>
                    <li><span className="flex justify-center items-center text-gray-700"><Shower size={24} className="text-red-500 mr-3" weight="fill" /> 2</span></li>
                    <li><span className="flex justify-center items-center text-gray-700"><CarSimple size={24} className="text-red-500 mr-3" weight="fill" /> 2</span></li>
                </ul>

                <a type="button" className="text-white bg-gradient-to-r from-red-400  to-red-700 rounded-lg w-full mt-5 py-3 text-center font-bold uppercase mr-5 mb-2">Quero alugar</a>
            </div>
        </div>
    )

}

export default Card