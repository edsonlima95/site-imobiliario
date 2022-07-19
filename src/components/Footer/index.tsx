import Link from "next/link"
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react"




function Footer() {


    return (
        <footer className="bg-red-600 min-h-[200px]">
            <div className="flex p-5">
                <div className="w-4/12 text-center">
                    <h4 className="text-white font-bold text-3xl mb-3">Sobre</h4>
                    <p className="text-gray-300 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio architecto distinctio, eum odio facere quae, possimus eveniet maxime ipsam asperiores itaque non omnis, nam explicabo dicta placeat minus debitis! Temporibus?</p>
                </div>
                <div className="w-4/12 text-center">
                    <h4 className="text-white font-bold text-3xl mb-3">Links</h4>
                    <ul>
                        <li><Link href=""><a className="underline text-gray-300">Início</a></Link></li>
                        <li><Link href=""><a className="underline text-gray-300">Alugar</a></Link></li>
                        <li><Link href=""><a className="underline text-gray-300">Comprar</a></Link></li>
                        <li><Link href=""><a className="underline text-gray-300">Contado</a></Link></li>
                    </ul>
                </div>
                <div className="w-4/12 text-center">
                    <h4 className="text-white font-bold text-3xl mb-3">Sociais</h4>
                    <ul className="flex gap-2 justify-center">
                        <li><FacebookLogo size={34} className="text-gray-300"/></li>
                        <li><InstagramLogo size={34} className="text-gray-300"/></li>
                        <li><WhatsappLogo size={34} className="text-gray-300"/></li>
                    </ul>
                </div>
            </div>
            <div className="w-full bg-red-700 p-5 mt-7 text-center text-white">
                <p>Todos os direitos reservados</p>
            </div>
        </footer>
    )

}


export default Footer