import Link from "next/link";
import Head from "@/components/Head";
import Back from "@/components/Back";

export default function SignUp() {
  return (
    <div className="flex flex-col">
      <Head />
      <body className="font-body">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="mx-5 my-10">
                <Back />
                {/* Welcome */}
                <div className="mt-10">
                  <h1 className="font-normal font-main text-gray-900 text-2xl">
                    Registrasi Akun
                  </h1>
                  {/* Description */}
                  <p
                    style={{ color: "rgba(124, 124, 128, 0.8)" }}
                    className="text-sm font-secondary text-gray-500"
                  >
                    Isi dan verifikasi identitasmu untuk membuat akun
                  </p>
                </div>
                {/* Form  */}
                <form method="GET" className="mt-10">
                  {/* Masukkan Email */}
                  <div className="relative mt-5">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <a
                        type=""
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <img src="/email-icon.svg" className="my-6"></img>
                      </a>
                    </span>
                    <input
                      placeholder="Masukkan email anda"
                      type="email"
                      name="email"
                      className="py-2 text-sm bg-background border-blue-secondary bg-opacity-40 text-form rounded-md pl-10  focus:outline-none focus:ring focus:border-blue-50 bg-abu h-md border-abu border-2"
                      autoComplete="off"
                      style={{
                        width: "100%",
                        textIndent: "24px",
                        height: "47px",
                      }}
                    ></input>
                  </div>
                  {/* Masukkan password */}
                  <div className="relative mt-5">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <a
                        type=""
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <img src="/password-icon.svg" className="my-6"></img>
                      </a>
                    </span>
                    <input
                      placeholder="Masukkan password anda"
                      type="password"
                      name="q"
                      className="py-2 text-sm bg-background border-blue-secondary bg-opacity-40 text-form rounded-md pl-10  focus:outline-none focus:ring focus:border-blue-50 bg-abu h-md border-abu border-2"
                      autoComplete="off"
                      style={{
                        width: "100%",
                        textIndent: "24px",
                        height: "47px",
                      }}
                    ></input>
                  </div>

                  {/* Masukkan Nik */}
                  <div className="relative mt-5">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <a
                        type=""
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <img
                          src="/nik.svg"
                          className="my-6"
                          style={{ width: "1.7em" }}
                        ></img>
                      </a>
                    </span>
                    <input
                      placeholder="Masukkan No NIK anda"
                      type=""
                      name="q"
                      className="py-2 text-sm bg-background border-blue-secondary bg-opacity-40 text-form rounded-md pl-10  focus:outline-none focus:ring focus:border-blue-50 bg-abu h-md border-abu border-2"
                      autoComplete="off"
                      style={{
                        width: "100%",
                        textIndent: "24px",
                        height: "47px",
                      }}
                    ></input>
                  </div>

                  {/* Masukkan tanggal lahir */}
                  <div className="relative mt-5">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <a
                        type=""
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <img
                          src="/calendar.svg"
                          className="my-6"
                          style={{}}
                        ></img>
                      </a>
                    </span>
                    <input
                      type="date"
                      placeholder="Masukkan Tanggal Lahir anda"
                      id="date"
                      name="q"
                      className="py-2 text-sm bg-background text-search-font border-blue-secondary bg-opacity-40 text-form rounded-md pl-4 pr-3 focus:outline-none focus:ring focus:border-blue-50 bg-abu h-md border-abu border-2 "
                      autoComplete="off"
                      style={{
                        width: "100%",
                        textIndent: "24px",
                        height: "47px",
                      }}
                    ></input>
                  </div>

                  {/* Masukkan Alamat */}
                  <div className="relative mt-5">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <a
                        type=""
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <img
                          src="/address.svg"
                          className="my-6"
                          style={{ width: "1.7em" }}
                        ></img>
                      </a>
                    </span>
                    <input
                      placeholder="Masukkan alamat anda (sesuai dengan KTP)"
                      type="text"
                      name="address"
                      className="py-2 text-sm text-form bg-background border-blue-secondary bg-opacity-40 rounded-md pl-10  focus:outline-none focus:ring focus:border-blue-50 bg-abu h-md border-abu border-2"
                      autoComplete="off"
                      style={{
                        width: "100%",
                        textIndent: "24px",
                        height: "47px",
                      }}
                    ></input>
                  </div>

                  <div className="relative mt-5">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <a
                        type=""
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <img
                          src="/username.svg"
                          className="mx-1"
                          style={{ width: "1.2em" }}
                        ></img>
                      </a>
                    </span>

                    <select
                      id="role"
                      name="role"
                      className="select select-bordered w-full font-normal border-blue-secondary border-2 py-2 text-sm text-form bg-background bg-opacity-40 rounded-md pl-16 text-search-font focus:outline-none focus:ring focus:border-blue-50 bg-abu h-md border-abu "
                      required
                    >
                      <option value="" disabled="disabled" selected="selected">
                        Daftar Sebagai
                      </option>
                      <option value="male">Penitip</option>
                      <option value="female">Tempat Penitipan</option>
                    </select>
                  </div>

                  {/* Upload foto wajah */}
                  <label className="w-full mt-5 flex flex-col items-center bg-background  bg-opacity-40 px-4 py-6 rounded-md tracking-wide border border-blue-secondary cursor-pointer hover:bg-blue-main hover:text-white  ease-linear transition-all duration-150">
                    <i className="fas fa-camera fa-2x"></i>
                    <span className="mt-1 text-xs leading-normal">
                      Foto Wajah
                    </span>
                    <input
                      type="file"
                      id="petImg"
                      name="petImg"
                      accept="image/png, image/gif, image/jpeg"
                      className="hidden "
                      required
                    />
                  </label>

                  {/* Upload foto ktp */}
                  <label className="w-full mt-5 flex flex-col items-center bg-background bg-opacity-40 px-4 py-6 rounded-md tracking-wide border border-blue-secondary cursor-pointer hover:bg-blue-main hover:text-white  ease-linear transition-all duration-150">
                    <i className="fas fa-camera fa-2x"></i>
                    <span className="mt-1 text-xs leading-normal">
                      Foto KTP
                    </span>
                    <input
                      type="file"
                      id="petImg"
                      name="petImg"
                      accept="image/png, image/gif, image/jpeg"
                      className="hidden"
                      required
                    />
                  </label>

                  {/* Button Sign */}
                  <input
                    type="submit"
                    value="Registrasi"
                    className="mt-10 px-4 py-3 bg-blue-main text-white font-medium w-full cursor-pointer border-2 border-blue-main rounded-lg ease-linear duration-150 hover:text-blue-main hover:border-2 hover:bg-white"
                  ></input>

                  <div className="text-center mt-5 text-sm">
                    {/*  */}
                    <Link href="/account/login">
                      <p className="mt-5 text-sm" style={{ color: "#7C7C80" }}>
                        Sudah punya akun?{" "}
                        <a href="#">
                          <span
                            className="font-semibold text-md hover:underline"
                            style={{ color: "#429FF2" }}
                          >
                            Login
                          </span>
                        </a>
                      </p>
                    </Link>
                  </div>
                </form>
                <div className="w-full h-24"></div>
                {/* End Div */}
              </div>
            </div>
            {/* <Bar currentPage="account"/>
            <div className="w-full h-14"></div> */}
          </div>
        </div>
      </body>
    </div>
  );
}
