import Card from "../components/Card"
import Cta from "../components/Cta"
import Filter from "../components/Filter"
import Hero from "../components/Hero"
import Service from "../components/Solution"
import Title from "../components/Title"
import Layout from "./Layout"

function Home() {

  
  return (
    <>
      <Layout>

        {/* HERO */}
        <Hero/>

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

        {/* SERVIÇOS */}
        <Service />

        {/* IMÓVEL */}
        <section className="p-5 mt-24">

          <div className="flex justify-center">
            <Title title="Novos imóveis todos" subTitle="os dias" description="Confora abaixo todos os imóveis disponíveis" />
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

        {/* CATEGORIA */}
        <section className="container mx-auto mt-32">
          <div className="flex justify-center">
            <Title title="Todas as" subTitle="categorias" description="Escolha o que mais se ecaixa no seu perfil" />
          </div>
          <div className="flex justify-around">
            <div className="w-3/12 group hover:scale-105 duration-500 relative">
              <div className="absolute bottom-0 opacity-25 duration-700 group-hover:opacity-50 group-hover:flex group-hover:w-full group-hover:h-full group-hover:bg-black group-hover:rounded"></div>
              <img src="/images/casa.jpg" alt="" className="rounded" />
              <a className="hidden group-hover:flex duration-1000 text-white text-2xl absolute bottom-3 left-3 font-bold">Casa</a>
            </div>
            <div className="w-3/12 group hover:scale-105 duration-500 relative">
              <div className="absolute bottom-0 opacity-25 duration-700 group-hover:opacity-50 group-hover:flex group-hover:w-full group-hover:h-full group-hover:bg-black group-hover:rounded"></div>
              <img src="/images/apartamento.jpg" alt="" className="rounded" />
              <a className="hidden group-hover:flex duration-1000 text-white text-2xl absolute bottom-3 left-3 font-bold">Apartamento</a>
            </div>
            <div className="w-3/12 group hover:scale-105 duration-500 relative">
              <div className="absolute bottom-0 opacity-25 duration-700 group-hover:opacity-50 group-hover:flex group-hover:w-full group-hover:h-full group-hover:bg-black group-hover:rounded"></div>
              <img src="/images/condominio.jpg" alt="" className="rounded" />
              <a className="hidden group-hover:flex duration-1000 text-white text-2xl absolute bottom-3 left-3 font-bold">Condominio</a>
            </div>
          </div>
        </section>

        {/* EMAIL */}
        <Cta />

      </Layout>
    </>
  )
}

export default Home
