function Home() {
  return (
    <>
      <header className="mb-20">
        <div className="mt-20 text-center">
          <h1 className="md:text-6xl text-4xl max-w-screen-lg m-auto text-center font-bold text-[#0F172A] tracking-tighter ">
            Literally jaksel language itu sangat modern, easy to learn.
          </h1>
          <p className="text-center max-w-screen-md mx-auto mt-4">
            Jaksel programming language is a new programming language, very
            modern, easy to learn, using Indonesia-slang language. No
            programming experience required.
          </p>

          <a
            className="bg-yellow-300 py-3 px-6 mt-4 rounded-md font-medium mx-auto block w-max"
            href="https://play-jaksel-language.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Playground
          </a>
        </div>

        <iframe
          src="https://stackblitz.com/edit/node-p8pgzv?embed=1&amp;file=index.jaksel"
          frameBorder="0"
          title="hello-world"
          className="md:aspect-video aspect-square w-full mt-8 rounded-xl"
        ></iframe>
      </header>

      <section className="section">
        <h3 className="md:text-5xl text-3xl font-semibold text-center tracking-tighter">
          Simplicity
        </h3>
        <div className="mt-5 grid md:grid-cols-2 gap-3">
          <article className="flex flex-col font-medium bg-blue-400 text-white p-5">
            <span className="block">PHP</span>
            <code>&lt;?php echo "Hello World" ?&gt;</code>
          </article>
          <article className="flex flex-col font-medium bg-red-400 text-white p-5">
            <span className="block">Java</span>
            <code>
              {`class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`}
            </code>
          </article>
          <article className="flex flex-col font-medium bg-yellow-400 text-black p-5">
            <span className="block">JavaScript</span>
            <code>console.log("Hello World")</code>
          </article>
          <article className="flex flex-col font-medium bg-yellow-300 text-black p-5">
            <span className="block">Jaksel Script</span>
            <code>spill "Hello World"</code>
          </article>
        </div>
      </section>

      <section className="section text-center ">
        <h2 className="md:text-5xl text-3xl font-semibold text-center tracking-tighter">
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
    </>
  );
}

export default Home;
