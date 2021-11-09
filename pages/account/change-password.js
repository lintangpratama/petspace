import Head from "@/components/Head";
import Bar from "@/components/Bar";
import Back from "@/components/Back";

export default function Template() {
  return (
    <div className="flex flex-col">
      <Head />
      <body className="">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="mx-5 my-10">
                {/* Mulai ngoding di sini */}
                <Back />
                <h4 className="font-normal font-main mt-8 text-gray-900 text-2xl">
                  Ubah Password
                </h4>

                <div className="relative mt-10 h-screen">
                  <form action="/account/change-password" className="text-right">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-2 flex items-center pl-2">
                        <img
                          src="/password-icon.svg"
                          className="my-6 w-5"
                        ></img>
                      </span>
                      <input
                        placeholder="Masukkan password kamu"
                        type="password"
                        name="password"
                        className="py-2 text-sm text-form rounded-md pl-12 w-full focus:outline-none focus:ring focus:border-blue-50 bg-abu h-md border-abu border-2"
                        autoComplete="off"
                      ></input>
                    </div>
                    <div className="mt-3 relative">
                      <span className="absolute inset-y-0 left-2 flex items-center pl-2">
                        <img
                          src="/password-icon.svg"
                          className="my-6 w-5"
                        ></img>
                      </span>
                      <input
                        placeholder="Masukkan password baru kamu"
                        type="password"
                        name="password"
                        className="py-2 text-sm text-form rounded-md pl-12 w-full focus:outline-none focus:ring focus:border-blue-50 bg-abu h-md border-abu border-2"
                        autoComplete="off"
                      ></input>
                    </div>

                    <div className="relative mt-3">
                      <span className="absolute inset-y-0 left-2 flex items-center pl-2">
                        <img
                          src="/password-icon.svg"
                          className="my-6 w-5"
                        ></img>
                      </span>
                      <input
                        placeholder="Verifikasi password baru kamu"
                        type="password"
                        name="password"
                        className="py-2 text-sm text-form rounded-md pl-12 w-full focus:outline-none focus:ring focus:border-blue-50 bg-abu h-md border-abu border-2"
                        autoComplete="off"
                      ></input>
                    </div>

                    <input
                    type="submit"
                    value="Ubah Password"
                    className="mt-3 py-1.5 px-3 bg-blue-main text-white text-sm cursor-pointer border-2 border-blue-main rounded-lg ease-linear duration-150 hover:text-blue-main hover:border-2 hover:bg-white"
                  ></input>

                  </form>
                </div>
              </div>
            </div>

            <Bar />
          </div>
        </div>
      </body>
    </div>
  );
}
