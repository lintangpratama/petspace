import Link from "next/link";
import Head from "@/components/Head";
import Bar from "../../components/Bar";


export default function Template() {
  return (
    <div className="flex flex-col">
      <Head />

      <body className="font-body">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="mx-5 my-10">
                {/* title */}
                <div className="font-normal font-main text-gray-900 text-2xl">
                  Akun
                </div>
                {/* Content */}
                <div className="my-7" style={{ display: "flex" }}>
                  <img src="/petspace.png" className="w-28"></img>
                  {/* Name and Email  */}
                  <div className="content my-7 mx-5">
                    <h3 className="text-xl font-semibold tracking-tight">
                      Eko Situbandar
                    </h3>
                    <email
                      className="tracking-tight disable underline"
                      style={{ color: "rgba(124, 124, 128, 0.8)" }}
                    >
                      ekositubandar12345@gmail.com
                    </email>
                  </div>
                </div>

                {/* Akun Setting */}
                <div className="setting-box mt-5">
                  <h4 className="text-lg tracking-tight font-medium">Akun</h4>
                  <div className="mt-2">
                    <hr />
                  </div>
                  {/* Button Icon Setting */}
                  <Link href="/account/change-password">
                    <div className="mt-3 cursor-pointer" style={{ display: "flex" }}>
                      <img src="/setting.svg"></img>
                      <p
                        className="mx-5"
                        style={{ color: "rgba(124, 124, 128, 0.8)" }}
                      >
                        Ubah Password
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Setting khusus penitipan */}
                <div className="setting-box mt-5">
                  <h4 className="text-lg tracking-tight font-medium">Space</h4>
                  <div className="mt-2">
                    <hr />
                  </div>
                  {/* Button Input Space */}
                  <Link href="/account/input-space">
                    <div className="mt-3 cursor-pointer" style={{ display: "flex" }}>
                      <img src="/setting.svg"></img>
                      <p
                        className="mx-5"
                        style={{ color: "rgba(124, 124, 128, 0.8)" }}
                      >
                        Masukkan Data Tempat Penitipan
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Kontak Kami */}
                <div className="setting-box mt-5">
                  <h4 className="text-lg tracking-tight font-medium">
                    Kontak Kami
                  </h4>
                  <div className="mt-2">
                    <hr />
                  </div>
                  {/* Button Icon Kontak Kami */}
                  <a href="#">
                    <div className="mt-3" style={{ display: "flex" }}>
                      <img src="/info.svg"></img>
                      <p
                        className="mx-5"
                        style={{ color: "rgba(124, 124, 128, 0.8)" }}
                      >
                        Syarat dan Ketentuan
                      </p>
                    </div>
                  </a>
                  {/* Privacy policy */}
                  <a href="#">
                    <div className="mt-3" style={{ display: "flex" }}>
                      <img src="/privacy.svg"></img>
                      <p
                        className="mx-5 mt-1"
                        style={{ color: "rgba(124, 124, 128, 0.8)" }}
                      >
                        Privacy Policy
                      </p>
                    </div>
                  </a>
                </div>
                {/* Log out */}
                <a href="/login">
                  <div className=" w-100% bg-transparent h-lg border-abu border-2 rounded-md mt-8 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white">
                    <div className="content">
                      <p
                        className="tracking-tight text-blue text-lg font-semibold  text-center leading-3 group-hover:text-white"
                        style={{ lineHeight: "2.6" }}
                      >
                        Log Out
                      </p>
                    </div>
                  </div>
                </a>
                {/* Version */}
                <div className="text-right mt-2">
                  <p>PetSpace v.1.0</p>
                </div>
              </div>
            </div>

            <Bar currentPage="account" />
            <div className="w-full h-64"></div>
          </div>
        </div>
      </body>
    </div>
  );
}
