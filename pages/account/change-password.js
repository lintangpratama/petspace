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
                <h4 className="font-normal mt-8 font-main text-gray-900 text-2xl">
                  Ubah Password
                </h4>

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
                    name="password"
                    class="py-2 text-sm text-form rounded-md pl-10  focus:outline-none focus:ring focus:border-blue-50 bg-abu h-md border-abu border-2"
                    autocomplete="off"
                    style={{ width: "100%", textIndent: "24px" }}
                  ></input>
                   <i className="fas fa-eye right-0 inset-y-0"></i>
                </div>
              </div>
            </div>

            <Bar />
            <div className="w-full h-14"></div>
          </div>
        </div>
      </body>
    </div>
  );
}
