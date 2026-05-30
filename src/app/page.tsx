export default function Home() {
  const audios = [
    "Veo tu aflicción",
    "Te haré descendencia",
    "Multiplicaré tu descendencia",
    "Él te ve",
    "Tú eres importante",
    "Escuhaste mi voz",
    "Tú eres una promesa",
  ];

  return (
    <main className="bg-[#F7F1EA] text-[#4A3426] min-h-screen">

      <section className="relative overflow-hidden bg-[#F6EFE6] pt-8 pb-12">

  <div className="absolute inset-0 opacity-20">
    <img
      src="/images/FONDO_PRINCIPAL.jpeg"
      alt="Fondo"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

    <div>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-[1px] bg-[#C9A063]" />

        <p className="uppercase tracking-[0.25em] text-sm text-[#A77C3B]">
          No soy un error, yo soy una promesa
        </p>
      </div>

      <h1 className="cormorant text-[#1E3557] text-5xl md:text-7xl leading-[0.95]">
  Una historia de Agar
</h1>

      <h2 className="cormorant text-[#B8893D] text-5xl md:text-7xl leading-[0.95] mt-4">
        Y del Dios
        <br />
        que me ve.
      </h2>

      <div className="flex items-center gap-4 my-6">
        <div className="w-20 h-[1px] bg-[#C9A063]" />
        <div className="w-3 h-3 rounded-full bg-[#C9A063]" />
        <div className="w-20 h-[1px] bg-[#C9A063]" />
      </div>

      <p className="text-[#2E2E2E] text-lg leading-9 max-w-xl">
        Basado en una historia bíblica.
        <br />
        7 audios que te acompañarán
        <br />
        a ver tu vida con los ojos del alma.
      </p>

      <a
  href="#audios"
  className="inline-block mt-10 bg-[#B8893D] hover:bg-[#9D7434] transition-all text-white px-8 py-5 rounded-xl text-lg tracking-wide shadow-lg"
>
  ESCUCHA LOS 7 AUDIOS
</a>

    </div>

    <div className="relative flex justify-center">

      <div className="absolute bottom-0 w-[90%] h-20 bg-black/10 blur-3xl rounded-full" />

      <img
  src="/images/Libro_portada3.png"
  alt="Libro"
  className="relative z-10 w-[65%] lg:w-[75%] max-w-3xl object-contain drop-shadow-2xl"
/>

    </div>

  </div>

</section>

      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[#C9A063] mb-4">
          Sobre el libro
        </p>

        <h2 className="cormorant text-4xl lg:text-5xl text-[#1E3557] leading-tight">
  Una historia que Dios convirtió en propósito
</h2>

        <p className="mt-8 text-lg leading-relaxed max-w-3xl mx-auto">
          Agar fue una mujer vista, rechazada y usada,
          pero en medio de su dolor Dios la encontró.
        </p>

      </section>

<section className="bg-[#F7F1EA] py-24 px-6">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">

    <div className="order-2 lg:order-1">

      <p className="uppercase tracking-[0.25em] text-sm text-[#C9A063] mb-6">
        Autora
      </p>

      <h1 className="cormorant text-[#1E3557] text-5xl md:text-7xl leading-[0.95]">
  Patricia
  <br />
  Catalán
</h1>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-[1px] bg-[#C9A063]" />
        <div className="w-3 h-3 rounded-full bg-[#C9A063]" />
        <div className="w-20 h-[1px] bg-[#C9A063]" />
      </div>

      <p className="text-xl leading-relaxed max-w-xl">
        Escritora, comunicadora y mujer apasionada por llevar{" "}
        <span className="text-[#B8893D]">
          esperanza a través de historias
        </span>{" "}
        que nacen del corazón de Dios.
      </p>

      <button className="mt-10 border border-[#B8893D] text-[#B8893D] px-8 py-4 rounded-xl hover:bg-[#B8893D] hover:text-white transition-all">
        CONOCE MÁS SOBRE MÍ
      </button>

    </div>

    <div className="order-1 lg:order-2">

      <img
        src="/images/Patricia_photo2.png"
        alt="Patricia Catalán"
        className="w-full rounded-[2rem] shadow-2xl"
      />

    </div>

  </div>

</section>



      <section
  id="audios"
  className="bg-[#F3E9DE] py-24 px-6"
>

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-[#C9A063] mb-4">
            Los 7 audios
          </p>

          <h2 className="cormorant text-4xl lg:text-5xl text-[#1E3557]">
  Escucha los capítulos del libro
</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {audios.map((audio, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-8 shadow-md"
              >

                <div className="w-14 h-14 mx-auto rounded-full bg-[#C9A063] flex items-center justify-center text-white text-xl">
                  ♪
                </div>

                <p className="mt-6 uppercase text-xs tracking-[0.2em] text-[#A88C69]">
                  Día {index + 1}
                </p>

                <h3 className="mt-3 text-2xl font-serif text-[#1E3557] min-h-[90px]">
                  {audio}
                </h3>

                <button className="mt-6 bg-[#1E3557] text-white px-5 py-2 rounded-full">
                  Reproducir
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="py-24 px-6 text-center">

        <p className="cormorant text-4xl lg:text-6xl italic text-[#4A3426]">
  “Tú eres el Dios que me ve.”
</p>

        <p className="mt-6 uppercase tracking-[0.3em] text-[#C9A063]">
          Génesis 16:13
        </p>

      </section>

      <footer className="bg-[#1E3557] text-white py-10 text-center">

        <p>
          © 2026 · No soy un error, yo soy una promesa
        </p>

      </footer>

    </main>
  );
}