import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export default function Cat() {
  const router = useRouter();
  const name = 'Lintang';

  return (
    <div className="flex flex-col">
      <Head>
        <title>PetSpace - Status Kucing Titipan</title>
        <link rel="icon" href="/petspace.png" />
      </Head>
      <body className="">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="mx-5 my-10">
                <button
                  onClick={() => router.back()}
                  className="flex justify-center items-center bg-gray-100 p-2 rounded-xl bg-blue-secondary"
                >
                  <svg
                    width="23"
                    height="19"
                    viewBox="0 0 23 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.9382 0.556991C10.5788 0.20035 10.0913 0 9.58309 0C9.07485 0 8.58742 0.20035 8.22799 0.556991L0.561184 8.1665C0.201859 8.52325 0 9.00704 0 9.51149C0 10.0159 0.201859 10.4997 0.561184 10.8565L8.22799 18.466C8.58948 18.8125 9.07364 19.0043 9.5762 18.9999C10.0787 18.9956 10.5595 18.7955 10.9149 18.4428C11.2702 18.0901 11.4718 17.6129 11.4762 17.1142C11.4805 16.6154 11.2873 16.1348 10.9382 15.776L6.54321 11.4139H21.0833C21.5916 11.4139 22.0792 11.2134 22.4386 10.8567C22.7981 10.4999 23 10.016 23 9.51149C23 9.00694 22.7981 8.52307 22.4386 8.1663C22.0792 7.80954 21.5916 7.60911 21.0833 7.60911H6.54321L10.9382 3.24695C11.2975 2.8902 11.4994 2.40641 11.4994 1.90197C11.4994 1.39753 11.2975 0.913739 10.9382 0.556991Z"
                      fill="#429FF2"
                      fill-opacity="0.8"
                    />
                  </svg>
                </button>

                <div className="mt-10">
                  <h1 className="font-normal text-blue-main font-sans text-2xl">
                    Space Status
                  </h1>
                  <p className="text-sm font-serif text-gray-500">
                    Kamu bisa melihat status penitipan hewanmu di sini
                  </p>
                </div>

                <div className="flex flex-col bg-card-status bg-auto justify-center rounded-xl items-center text-center px-4 py-7 mt-10 md:py-10">
                  <img
                    src="/status-card/dog-status.png"
                    className="w-40 md:w-52"
                  ></img>
                  <div className="flex flex-col w-9/12 justify-between">
                    <h2 className="text-white text-4xl font-semibold md:text-base text-center">
                      Doggy
                    </h2>
                    <div className="text-sm text-center font-serif text-white w-full my-4">
                      <p>Pemilik Space: Abdur Rofi</p>
                      <p>Tanggal Masuk: 31 Oktober 2021</p>
                      <p>Tanggal Keluar: 6 November 2021</p>
                      <p>Status: Accepted</p>
                    </div>

                    <button className="py-1.5 w-36 text-white text-xs bg-yellow-pet rounded-xl mt-3 md:text-sm mx-auto" disabled>
                      <a href={`https://api.whatsapp.com/send?phone=6285591639594&text=Test${name}`}>Chat via WhatsApp</a>
                    </button>
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
