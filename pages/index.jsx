import Image from "next/image";
import { YouTubeEmbed } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import logo from "../public/vtsd-logo.svg"
import elipse1 from "../public/elipse-1.svg"
import elipse2 from "../public/elipse-2.svg"
import elipse3 from "../public/elipse-3.svg"
import pagamentos from "../public/pagamentos.svg"
import iconeGarantia from "../public/icone-garantia.png"
import iconeZoom from "../public/icone-zoom.png"
import iconeCalendario from "../public/icone-calendario.svg"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex py-10 flex-col items-center justify-between ${inter.className}`}
    >
      <section className="mx-auto flex flex-col items-center max-w-[19.875rem] lg:max-w-[53.25rem]">

          <Image width={105} height={51} src={logo}></Image>
          <h1 className="font-extrabold text-[25px] lg:text-[31.25px] text-center mt-6 leading-[29.17px] tracking-[-25] mb-[14.4px] ">Qualquer pessoa pode começar um negócio digital.</h1>    
          <h2 className="font-regular text-[20.83px] lg:text-[25px] text-center tracking-[-25] leading-[29.17px] lg:leading-[33.33px] mt-6">Entenda porque tanta gente comum está ganhando muito dinheiro com essa oportunidade de negócio.</h2>
          <p className="mt-7 lg:mt-5 font-bold text-[16.67px] lg:text-[18.75px] leading-[22.9px] tracking-[-25] text-center">Assista a aula de introdução gratuitamente e você vai aprender 3 coisas:</p>
          <div className="flex items-center gap-x-4 mt-6 lg:mt-12">
            
  
            <Image src={elipse1}></Image>
            
            <p className="font-medium text-[15.67px] lg:text-[16.75px] leading-[22.9px] tracking-[-25]">
            Como criar um projeto protótipo e fazer a sua primeira venda em pouco tempo e gastando pouco dinheiro;
            </p>
          </div>
          <div className="flex items-center gap-x-4 mt-6 lg:mt-12">
            <Image src={elipse2}></Image>
            <p className="font-medium text-[15.67px] lg:text-[16.75px] leading-[22.9px] tracking-[-25]">
            Como criar um projeto protótipo e fazer a sua primeira venda em pouco tempo e gastando pouco dinheiro;
            </p>
          </div>
          <div className="flex items-center gap-x-4 mt-6 lg:mt-12">
            <Image src={elipse3}></Image>
            <p className="font-medium text-[15.67px] lg:text-[16.75px] leading-[22.9px] tracking-[-25]">
            Como criar um projeto protótipo e fazer a sua primeira venda em pouco tempo e gastando pouco dinheiro;
            </p>
          </div>
          
      </section>
      <section className="mt-8">

      <YouTubeEmbed  videoid="EdrQPJZ77vY" width={350}></YouTubeEmbed>
      </section>
      <section className="mx-auto max-w-[19.875rem] lg:max-w-[53.25rem] ">
        <div className="mt-5 w-full text-center">
          <a href="https://pay.hotmart.com/T40151129E?off=vvq03ley&sck=conversion=%26utm_campaign=%26utm_content=%26utm_source=%26utm_medium=%26utm_term=%26pathpage=/pv0622&email=danielcvt@gmail.com&name=Daniel+Vogel&phonenumber=(55)2198892-4861&bid=1713935596628">

          <button class="w-full rounded-lg border-b-4 border-b-[#236C0F] bg-[#46B21E] py-3 text-[16px] font-extrabold uppercase text-white hover:border-b-[#44972d] hover:bg-[#236C0F] lg:py-5 lg:text-[22.6px]">Quero entrar para o digital faturando alto</button>
          </a>
          <div className="relative mx-auto mt-3 block h-[16px] w-[272px] lg:hidden lg:w-[529px]">

            <Image src={pagamentos}/>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div>
                <Image src={iconeCalendario}></Image>
              </div>
              <p className="text-[9.79px] font-bold lg:text-[20.6px]">1 ano de <br /> acesso</p>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <Image src={iconeZoom}></Image>
              </div>
              <p className="text-[9.79px] font-bold lg:text-[20.6px]">Suporte ao vivo <br /> no ZOOM</p>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <Image src={iconeGarantia}></Image>
              </div>
              <p className="text-[9.79px] font-bold lg:text-[20.6px]">Garantia de <br /> 15 dias</p>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
}
