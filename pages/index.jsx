import Image from "next/image";
import { useRouter } from "next/router";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import logo from "../public/vtsd-logo.svg";
import elipse1 from "../public/elipse-1.svg";
import elipse2 from "../public/elipse-2.svg";
import elipse3 from "../public/elipse-3.svg";
import pagamentos from "../public/pagamentos.svg";
import iconeGarantia from "../public/icone-garantia.png";
import iconeZoom from "../public/icone-zoom.png";
import iconeCalendario from "../public/icone-calendario.svg";
import Depoimentos from "@/components/depoimentos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  // async function onSubmit(event) {
  //   event.preventDefault()

  //   const formData = new FormData(event.currentTarget)
  //   const response = await fetch('/api/lead', {
  //     method: 'POST',
  //     body: formData,
  //   })

  //   // Handle response if necessary

  //   window.open("https://pay.hotmart.com/T40151129E?off=vvq03ley&sck=conversion=%26utm_campaign=%26utm_content=%26utm_source=%26utm_medium=%26utm_term=%26pathpage=/pv0622&email=danielcvt@gmail.com&name=Daniel+Vogel&phonenumber=(55)2198892-4861&bid=1713935596628")
  //   // ...
  // }
  return (
    <main
      className={`flex flex-col items-center justify-between py-10 ${inter.className}`}
    >
      <section className="mx-auto flex max-w-[19.875rem] flex-col items-center lg:max-w-[53.25rem]">
        <Image width={105} height={51} src={logo}></Image>
        <h1 className="mb-[14.4px] mt-6 text-center text-[25px] font-extrabold leading-[29.17px] tracking-[-25] lg:text-[31.25px] ">
          Qualquer pessoa pode começar um negócio digital.
        </h1>
        <h2 className="font-regular mt-6 text-center text-[20.83px] leading-[29.17px] tracking-[-25] lg:text-[25px] lg:leading-[33.33px]">
          Entenda porque tanta gente comum está ganhando muito dinheiro com essa
          oportunidade de negócio.
        </h2>
        <p className="mt-7 text-center text-[16.67px] font-bold leading-[22.9px] tracking-[-25] lg:mt-5 lg:text-[18.75px]">
          Assista a aula de introdução gratuitamente e você vai aprender 3
          coisas:
        </p>
        <div className="mt-6 flex items-center gap-x-4 lg:mt-12">
          <Image src={elipse1}></Image>

          <p className="text-[15.67px] font-medium leading-[22.9px] tracking-[-25] lg:text-[16.75px]">
            Como criar um projeto protótipo e fazer a sua primeira venda em
            pouco tempo e gastando pouco dinheiro;
          </p>
        </div>
        <div className="mt-6 flex items-center gap-x-4 lg:mt-12">
          <Image src={elipse2}></Image>
          <p className="text-[15.67px] font-medium leading-[22.9px] tracking-[-25] lg:text-[16.75px]">
            Como criar um projeto protótipo e fazer a sua primeira venda em
            pouco tempo e gastando pouco dinheiro;
          </p>
        </div>
        <div className="mt-6 flex items-center gap-x-4 lg:mt-12">
          <Image src={elipse3}></Image>
          <p className="text-[15.67px] font-medium leading-[22.9px] tracking-[-25] lg:text-[16.75px]">
            Como criar um projeto protótipo e fazer a sua primeira venda em
            pouco tempo e gastando pouco dinheiro;
          </p>
        </div>
      </section>
      <section className="mt-8">
        <YouTubeEmbed videoid="EdrQPJZ77vY" width={350}></YouTubeEmbed>
      </section>
      <section className="mx-auto max-w-[19.875rem] lg:max-w-[53.25rem] ">
        <div className="mt-5 w-full text-center">
          {/* <a href="> */}

          <button
            class="w-full rounded-lg border-b-4 border-b-[#236C0F] bg-[#46B21E] py-3 text-[16px] font-extrabold uppercase text-white hover:border-b-[#44972d] hover:bg-[#236C0F] lg:py-5 lg:text-[22.6px]"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Quero entrar para o digital faturando alto
          </button>
          {/* </a> */}
          <div className="relative mx-auto mt-3 block h-[16px] w-[272px] lg:hidden lg:w-[529px]">
            <Image src={pagamentos} />
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div>
                <Image src={iconeCalendario}></Image>
              </div>
              <p className="text-[9.79px] font-bold lg:text-[20.6px]">
                1 ano de <br /> acesso
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <Image src={iconeZoom}></Image>
              </div>
              <p className="text-[9.79px] font-bold lg:text-[20.6px]">
                Suporte ao vivo <br /> no ZOOM
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <Image src={iconeGarantia}></Image>
              </div>
              <p className="text-[9.79px] font-bold lg:text-[20.6px]">
                Garantia de <br /> 15 dias
              </p>
            </div>
          </div>
        </div>
      </section>
      <Depoimentos />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box flex flex-col items-center">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Image height={51} src={logo}></Image>
          <p className="py-4 text-sm">
            Preencha o formulário e descubra como entrar para o digital
            faturando alto!
          </p>
          <form
            className="flex flex-col gap-2"
            action="/api/lead"
            method="post"
          >
            <label className="input input-bordered flex items-center gap-2">
              <input
                required
                type="text"
                name="name"
                className="grow"
                placeholder="Nome Completo"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                required
                type="email"
                name="email"
                className="grow"
                placeholder="Seu melhor e-mail"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                name="phone"
                placeholder="Seu WhatsApp"
              />
            </label>
            <input name="CTA" type="hidden" value="1" />
            <button className="btn btn-primary text-slate-50" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </dialog>
    </main>
  );
}
