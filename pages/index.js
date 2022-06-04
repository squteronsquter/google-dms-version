import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google V3</title>
        <meta
          name="description"
          content="Google clone created with Next.js and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-12 p-4">
        <h1 className="text-3xl font-bold text-center text-gray-700">Google</h1>
      </main>

      <footer className="text-center pt-8">
        <a
          className="text-small font-thin  text-gray-700"
          href="https://insidedms.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inside DMS
        </a>
      </footer>
    </div>
  );
}
