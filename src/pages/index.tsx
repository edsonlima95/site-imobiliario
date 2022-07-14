import Filter from "../components/Filter"
import Layout from "./Layout"

function Home() {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-2">
          <div className="flex flex-col pl-20">
            <p className="uppercase font-bold mt-20 mb-5">Bem-Vindos <span className="text-red-500 font-bold">a Imóbil JS</span> </p>
            <h1 className="text-6xl font-bold text-gray-800  mb-5">A maior Imobiliária do Brasil</h1>
            <p className="text-gray-500 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quo possimus totam delectus molestias aspernatur dignissimos necessitatibus rerum quod quae.</p>
            
            <div className="flex mt-10">
              <a type="button" className="text-white bg-gradient-to-r from-green-400  to-green-700 rounded-lg px-10 py-4 text-center font-bold uppercase mr-5 mb-2">Quero comprar</a>
              <a type="button" className="text-white bg-gradient-to-r from-violet-400  to-violet-700 rounded-lg px-10 py-4 text-center font-bold uppercase mr-5 mb-2">Quero alugar</a>
            </div>
          </div>
          <div className="flex justify-center px-10 py-20">
            <img src="/images/bg.svg" alt="" className="w-[450px]" />
          </div>
        </div>

        <Filter/>
      </Layout>
    </>
  )
}

export default Home
