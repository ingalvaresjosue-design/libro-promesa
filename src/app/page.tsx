export default function Home() {
  const audios = [
    "Vista por Dios",
    "Cuando el rechazo no define tu identidad",
    "Dios escucha tu voz",
    "Del desierto al propósito",
    "Dios renombra tu historia",
    "La promesa que transforma",
    "Yo soy una promesa",
  ];

  return (
    <main className="bg-[#F7F1EA] text-[#4A3426] min-h-screen">

      <section className="relative overflow-hidden bg-[#F6EFE6] min-h-screen flex items-center">

  <div className="absolute inset-0 opacity-20">
    <img
      src="/images/principal2.png"
      alt="Fondo"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

    <div>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-[1px] bg-[#C9A063]" />

        <p className="uppercase tracking-[0.25em] text-sm text-[#A77C3B]">
          No soy un error, yo soy una promesa
        </p>
      </div>

      <h1 className="font-serif text-[#1E3557] text-5xl md:text-7xl leading-[0.95]">
        Una historia
        <br />
        de Agar.
      </h1>

      <h2 className="font-serif text-[#B8893D] text-5xl md:text-7xl leading-[0.95] mt-4">
        Y del Dios
        <br />
        que me ve.
      </h2>

      <div className="flex items-center gap-4 my-10">
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

      <button className="mt-10 bg-[#B8893D] hover:bg-[#9D7434] transition-all text-white px-8 py-5 rounded-xl text-lg tracking-wide shadow-lg">
        ESCUCHA LOS 7 AUDIOS
      </button>

    </div>

    <div className="relative flex justify-center">

      <div className="absolute bottom-0 w-[90%] h-20 bg-black/10 blur-3xl rounded-full" />

      <img
        src="/images/portada_libro.jpeg"
        alt="Libro"
        className="relative z-10 w-[85%] max-w-lg object-contain drop-shadow-2xl"
      />

    </div>

  </div>

</section>

      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[#C9A063] mb-4">
          Sobre el libro
        </p>

        <h2 className="text-4xl lg:text-5xl font-serif text-[#1E3557] leading-tight">
          Una historia que Dios convirtió en propósito
        </h2>

        <p className="mt-8 text-lg leading-relaxed max-w-3xl mx-auto">
          Agar fue una mujer vista, rechazada y usada,
          pero en medio de su dolor Dios la encontró.
        </p>

      </section>

      <section className="bg-[#F3E9DE] py-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-[#C9A063] mb-4">
            Los 7 audios
          </p>

          <h2 className="text-4xl lg:text-5xl font-serif text-[#1E3557]">
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

        <p className="text-4xl lg:text-6xl font-serif italic text-[#4A3426]">
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