import { MagnifyingGlass } from "phosphor-react"

function Cta() {

    return (

        <section className="bg-gray-200 mt-32 p-20">
            <div className="flex justify-around items-center">

                <div className="w-5/12">
                    <h3 className="text-5xl font-bold">Quer receber nossas<br /> <span className="text-red-600"> novidades? </span></h3>
                    <p className="text-gray-700 text-xl mt-3">Digite seu melhor e-mail e fique por <br /> dentro das novidades do mundo Imobiliário</p>
                </div>
                <div className="w-5/12">
                    <form className="flex justify-center items-center">
                        <input type="text" placeholder="Digite seu melhor e-mail" className="border-2 rounded-lg border-gray-400 w-full h-16" />
                        <div className="flex items-end">
                            <button className="flex justify-center items-center bg-red-600 text-white font-bold h-16 px-10 rounded ml-2"> <MagnifyingGlass size={32} weight="light" /> Buscar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )

}

export default Cta