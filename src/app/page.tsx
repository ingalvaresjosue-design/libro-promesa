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

      <section className="min-h-screen flex items-center bg-gradient-to-b from-[#F5E6D4] to-[#F7F1EA]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#C9A063] mb-4">
              Presentación oficial
            </p>

            <h1 className="text-5xl lg:text-7xl leading-none font-serif text-[#1E3557]">
              No soy
              <br />
              un error,
            </h1>

            <p className="text-3xl italic mt-4 text-[#C08A7D]">
              yo soy una promesa.
            </p>

            <p className="mt-8 text-lg leading-relaxed max-w-xl">
              Una historia inspirada en Agar sobre identidad,
              propósito y la voz de Dios sobre nuestra vida.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <button className="bg-[#1E3557] text-white px-7 py-3 rounded-full">
                Escuchar audios
              </button>

              <button className="border border-[#C9A063] px-7 py-3 rounded-full">
                Comprar libro
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-[2rem] shadow-2xl p-6 max-w-sm">

              <div className="aspect-[3/4] rounded-[1.5rem] border border-[#E6E0D8] flex flex-col items-center justify-center text-center p-8">

                <h2 className="text-3xl font-serif text-[#1E3557] leading-tight">
                  No soy un error,
                  <br />
                  yo soy una promesa
                </h2>

                <div className="w-24 h-24 rounded-full border border-[#C08A7D] mt-8"></div>

                <p className="mt-8 uppercase tracking-[0.2em] text-sm text-[#777]">
                  Patricia Catalán
                </p>

              </div>
            </div>
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