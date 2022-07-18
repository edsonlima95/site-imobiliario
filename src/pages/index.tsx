import Card from "../components/Card"
import Filter from "../components/Filter"
import Title from "../components/Title"
import Layout from "./Layout"

function Home() {
  return (
    <>
      <Layout>
        {/* HERO */}
        <div className="grid grid-cols-2 mt-32">
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
        {/* FILTRO*/}
        <Filter />

        {/* SOBRE*/}
        <section className="mt-32">
          <div className="grid grid-cols-2">
            <div className="p-10">
              <h3 className="text-6xl font-bold">Conheça mais <br /> <span className="text-red-600"> sobre nós </span></h3>
              <p className="text-gray-800 text-lg mt-5 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci pariatur accusamus commodi vero cumque sint labore fugiat, amet at. Cupiditate, officiis molestias. Maiores assumenda magni dolores architecto blanditiis illum sit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus minus enim quidem neque? Necessitatibus ab, ipsa optio accusamus labore officiis deleniti saepe aut est, officia facere eum nobis, molestiae alias.
              </p>
            </div>
            <div className="p-10">
              <img src="/images/office.jpg" alt="" className="rounded-lg" />
            </div>
          </div>
        </section>

        {/* IMÓVEL */}
        <section className="p-5">

          <div className="flex justify-center">
            <Title title="Novos imóveis todos" subTitle="os dias" description="Confora abaixo todos os imóveis disponívei" />
          </div>

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

            <Card
              title="Casa"
              cover="cover"
              address="Vila União"
              number={28}
              neighborhood="Praça Santo Antônio"
              area={200}
              room={2}
              bathRoom={2}
              garage={2}
            />
            <Card
              title="Sobrado"
              cover="cover"
              address="Vila União"
              number={28}
              neighborhood="Praça Santo Antônio"
              area={200}
              room={2}
              bathRoom={2}
              garage={2}
            />
            <Card
              title="Cobertura"
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
      </Layout>
    </>
  )
}

export default Home
