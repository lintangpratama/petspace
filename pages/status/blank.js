import { useRouter } from "next/router";
import Back from '../../components/Back';
import Head from "next/head";
import Link from "next/link";

export default function Cat() {
  const router = useRouter();
  const name = 'Lintang';

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

      <body className="">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col h-screen">
              <div className="mx-5 my-10">
              <Back />

                <div className="mt-10">
                  <h1 className="font-semibold font-main text-gray-900 text-2xl">
                    Space Status
                  </h1>
                  <p className="text-sm font-serif text-gray-500">
                    Kamu bisa melihat status penitipan hewanmu di sini
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-xl items-center text-center px-4 py-7 mt-10 md:py-10">
                  <img
                    src="/status-card/dog-sleep.png"
                    className="w-40 md:w-52"
                  ></img>
                  <div className="flex flex-col w-9/12 justify-between mt-2">
                    <h2 className="text-black text-2xl font-semibold text-center">
                      Ups!
                    </h2>
                    <div className="text-medium text-center font-serif text-black w-full mb-4">
                      <p>Data space masih kosong</p>
                    </div>

                    <Link href="/space">
                        <button className="py-2.5 w-36 text-white text-xs bg-blue-main rounded-lg mt-12 md:text-sm mx-auto">
                            <a>Browse Space</a>
                        </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
