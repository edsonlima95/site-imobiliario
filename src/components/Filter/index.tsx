import { MagnifyingGlass } from "phosphor-react";
import Title from "../Title";



function Filter() {

    return (
        <section className="flex flex-col items-center justify-center mt-32">
            
            
            <Title 
                title="Não encontrou um"
                subTitle="imóvel ainda?"
                description="Encontre pelo imóvel que mais tem a sua cara 
                e seja feliz você e sua familia de casa nova"/>

            <div className="shadow-lg rounded p-5 min-h-[100px] w-8/12">
                <form>
                    <div className="flex gap-3">

                        <div className="w-2/12">
                            <label htmlFor="" className="font-bold text-gray-700 mb-2 inline-block">Negócio</label>
                            <select className="w-full h-12 p-3 rounded border-gray-300 text-gray-600 border-2">
                                <option value="comprar">Comprar</option>
                                <option value="alugar">Alugar</option>
                            </select>
                        </div>

                        <div className=" w-2/12">
                            <label htmlFor="" className="font-bold text-gray-700 mb-2 inline-block">Tipo</label>
                            <select className="w-full h-12 p-3 rounded border-gray-300 text-gray-600 border-2">
                                <option value="comprar">Casa</option>
                                <option value="alugar">Apartamento</option>
                                <option value="alugar">Terreno</option>
                                <option value="alugar">Cobertura</option>
                                <option value="alugar">Outros</option>
                            </select>
                        </div>

                        <div className=" w-3/12">
                            <label htmlFor="" className="font-bold text-gray-700 mb-2 inline-block">Estado</label>
                            <select className="w-full h-12 p-3 rounded border-gray-300 text-gray-600 border-2">
                                <option value="comprar">Casa</option>
                                <option value="alugar">Apartamento</option>
                                <option value="alugar">Terreno</option>
                                <option value="alugar">Cobertura</option>
                                <option value="alugar">Outros</option>
                            </select>
                        </div>

                        <div className=" w-3/12">
                            <label htmlFor="" className="font-bold text-gray-700 mb-2 inline-block">Cidade</label>
                            <select className="w-full h-12 p-3 rounded border-gray-300 text-gray-600 border-2">
                                <option value="comprar">Casa</option>
                                <option value="alugar">Apartamento</option>
                                <option value="alugar">Terreno</option>
                                <option value="alugar">Cobertura</option>
                                <option value="alugar">Outros</option>
                            </select>
                        </div>
                        <div className="flex items-end">
                            <a className="flex justify-center items-center bg-red-600 text-white font-bold h-12 px-10 rounded mt-4"> <MagnifyingGlass size={32} weight="light" /> Buscar</a>
                        </div>
                    </div>

                </form>
            </div>
        </section>
    )

}

export default Filter;