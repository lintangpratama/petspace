import Head from "@/components/Head";

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
                <div className="font-normal font-main text-gray-900 text-2xl">
                  Isi Data Hewan
                </div>
                <p className="text-sm font-secondary text-gray-500 mt-3 w-11/12">
                  Data hewan digunakan untuk memvalidasi proses penitipan
                </p>

              </div>
            </div>

            <div className="w-full h-14"></div>
          </div>
        </div>
      </body>
    </div>
  );
}
