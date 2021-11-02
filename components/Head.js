import Head from "next/head";

export default function Template() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>PetSpace - Cariin Tempat Penitipan Hewan Buat Kamu</title>
        <link rel="icon" href="/petspace.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
    </div>
  );
}
