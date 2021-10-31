import Head from "next/head";
import Bar from "../../components/Bar";

export default function Template() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>PetSpace - Cariin Tempat Penitipan Hewan Buat Kamu</title>
        <link rel="icon" href="/petspace.png" />
      </Head>
      <body className="">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="mx-5 my-10">
                  {/* Mulai ngoding di sini */}
              </div>
            </div>

            <Bar currentPage="account"/>
            <div className="w-full h-14"></div>
          </div>
        </div>
      </body>
    </div>
  );
}
