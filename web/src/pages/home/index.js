function Home() {
  return (
    <>
      <header className="mb-20">
        <div className="mt-20">
          <h1 className="text-6xl max-w-screen-lg m-auto text-center font-bold text-[#0F172A] tracking-tighter ">
            Literally jaksel language itu sangat modern, easy to learn.
          </h1>
          <p className="text-center max-w-screen-md mx-auto mt-4">
            Jaksel programming language is a new programming language, very
            modern, easy to learn, using Indonesia-slang language. No
            programming experience required.
          </p>
        </div>

        <iframe
          src="https://stackblitz.com/edit/node-p8pgzv?embed=1&amp;file=index.jaksel"
          frameBorder="0"
          title="hello-world"
          className="aspect-video w-full mt-8 rounded-xl"
        ></iframe>
      </header>

      <section className="section text-center ">
        <h2 className="text-5xl font-semibold text-center tracking-tighter">
          Jaksel language is the future
        </h2>
        <p className="mt-5 max-w-screen-md mx-auto">
          So about jaksel language literally that is for the future, which is
          orang jaksel can learn so easy, like I told you diatas{" "}
          <span className="font-bold italic ">
            "No programming experience required" {"  "}
          </span>
          thats it sih..
        </p>
      </section>

      <section className="section"></section>

      <section className="section ">
        <h3 className="text-5xl font-semibold text-center tracking-tighter">
          Why jaksel language is created ?
        </h3>
        <p className="mt-5 max-w-screen-md mx-auto text-center flex flex-col">
          <span className="text-lg">&quot;Gabut&quot;</span>
          <span className="text-sm">- Rio Chandra</span>
        </p>
      </section>
    </>
  );
}

export default Home;
