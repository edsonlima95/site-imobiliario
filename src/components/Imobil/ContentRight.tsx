

function ContentRight(){

    return (
        <div className="w-4/12 px-5">
        <div className="shadow-lg p-5 rounded-lg border border-red-400">
            <h1 className="text-center mb-3 text-3xl font-bold text-gray-700">Falar com consultor</h1>
            <form>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-gray-700 font-bold my-2">Nome:</label>
                    <input type="text" className="h-12 border-gray-400 rounded-lg" placeholder="Informe seu nome" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-gray-700 font-bold my-2">Email:</label>
                    <input type="text" className="h-12 border-gray-400 rounded-lg" placeholder="Informe seu email" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-gray-700 font-bold my-2">WhatsApp:</label>
                    <input type="text" className="h-12 border-gray-400 rounded-lg" placeholder="Informe seu numero" />
                </div>
                <button type="button" className="text-white bg-gradient-to-r from-red-400  to-red-700 rounded-lg px-10 py-4 text-center font-bold uppercase mr-5 my-5 w-full">Solicitar contato</button>

            </form>
        </div>
    </div>
    )

}

export default ContentRight