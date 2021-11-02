import Head from "@/components/Head";

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

export default function Template() {
  const minDate = new Date().toISOString().split("T")[0]; // example 2021-11-2

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

                <form action="/space/request/1" className="mt-8 font-secondary">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Nama Hewan"
                    className="px-4 py-2 mt-2 placeholder-gray-800 w-full border-opacity-100 border-2 rounded-lg border-blue-secondary"
                    required
                  />
                  <select
                    id="petType"
                    name="petType"
                    className="select select-bordered w-full text-base font-normal border-blue-secondary border-2 mt-3 "
                    required
                  >
                    <option value="" disabled="disabled" selected="selected">
                      Jenis Hewan
                    </option>
                    <option value="anjing">Anjing</option>
                    <option value="kucing">Kucing</option>
                  </select>
                  <div class="form-control mt-3">
                    <label class="input-group input-group-md">
                      <input
                        type="text"
                        placeholder="Umur Hewan"
                        class="input input-bordered input-md text-search-font border-blue-secondary border-2 w-full"
                        required
                      />
                      <span className="bg-blue-secondary">tahun</span>
                    </label>
                  </div>
                  <input
                    id="dateIn"
                    name="dateIn"
                    type="date"
                    value={minDate}
                    min={minDate}
                    placeholder="Tanggal Mulai Penitipan"
                    className="px-4 py-2 mt-2 placeholder-gray-800 w-full border-opacity-100 border-2 rounded-lg border-blue-secondary"
                    required
                  />
                  <input
                    id="dateOut"
                    name="dateOut"
                    type="date"
                    placeholder="Tanggal Mulai Penitipan"
                    className="px-4 py-2 mt-2 placeholder-gray-800 w-full border-opacity-100 border-2 rounded-lg border-blue-secondary"
                    required
                  />

                  <input type="submit" className="mt-5"></input>
                </form>
              </div>
            </div>

            <div className="w-full h-14"></div>
          </div>
        </div>
      </body>
    </div>
  );
}
