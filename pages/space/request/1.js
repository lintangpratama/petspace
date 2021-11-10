import Head from "@/components/Head";
import Back from "@/components/Back";


String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};

export default function Template() {
  const dateNow = new Date(); //example "2021-11-02T02:59:16.644Z"
  const minDate = dateNow.toISOString().split("T")[0]; // "2021-11-02"
  dateNow.setDate(dateNow.getDate() + 1); // "2021-11-03T02:59:16.644Z"
  const maxDate = dateNow.toISOString().split("T")[0]; // "2021-11-03"

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

                <div className="font-normal font-main text-gray-900 text-2xl mt-8">
                  Isi Data Hewan
                </div>
                <p className="text-sm font-secondary text-gray-500 mt-3 w-11/12">
                  Data hewan digunakan untuk memvalidasi proses penitipan
                </p>

                <form
                  action="/space/request/1"
                  id="petForm"
                  className="mt-8 font-secondary text-sm text-search-font"
                >
                  <input
                    id="petName"
                    name="petName"
                    type="text"
                    autoComplete="name"
                    placeholder="Nama Hewan"
                    className="px-4 py-3 mt-3 w-full border-opacity-100 border-2 rounded-lg border-blue-secondary"
                    required
                  />
                  <select
                    id="petType"
                    name="petType"
                    className="select select-bordered w-full font-normal border-blue-secondary border-2 mt-3 "
                    required
                  >
                    <option value="" disabled="disabled" selected="selected">
                      Jenis Hewan
                    </option>
                    <option value="anjing">Anjing</option>
                    <option value="kucing">Kucing</option>
                  </select>

                  <select
                    id="petSex"
                    name="petSex"
                    className="select select-bordered w-full font-normal  border-blue-secondary border-2 mt-3 "
                    required
                  >
                    <option value="" disabled="disabled" selected="selected">
                      Jenis Kelamin Hewan
                    </option>
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                  <div className="form-control mt-3">
                    <label className="input-group input-group-md">
                      <input
                        type="text"
                        placeholder="Umur Hewan"
                        className="input input-bordered input-md text-search-font border-blue-secondary border-2 w-full"
                        required
                      />
                      <span className="bg-blue-secondary">tahun</span>
                    </label>
                  </div>
                  <input
                    id="dateIn"
                    name="dateIn"
                    type="date"
                    min={minDate}
                    placeholder="Tanggal Mulai Penitipan"
                    className="relative px-4 py-3 mt-3 placeholder-gray-800 w-full border-opacity-100 border-2 rounded-lg border-blue-secondary"
                    required
                  />
                  <input
                    id="dateOut"
                    name="dateOut"
                    type="date"
                    min={maxDate}
                    placeholder="Tanggal Mulai Penitipan"
                    className="relative px-4 py-3 mt-3 placeholder-gray-800 w-full border-opacity-100 border-2 rounded-lg border-blue-secondary"
                    required
                  />

                  <label className="w-full mt-3 flex flex-col items-center px-4 py-6 bg-white rounded-md tracking-wide border border-blue-secondary cursor-pointer hover:bg-blue-main hover:text-white  ease-linear transition-all duration-150">
                    <i className="fas fa-camera fa-2x"></i>
                    <span className="mt-1 text-xs leading-normal">
                      Upload Foto Hewan
                    </span>
                    <input
                      type="file"
                      id="petImg"
                      name="petImg"
                      className="hidden"
                      required
                    />
                  </label>

                  <textarea
                    name="morePetInfo"
                    form="petForm"
                    placeholder="Informasi Tambahan"
                    className="px-4 py-3 mt-3  w-full text border-opacity-100 border-2 rounded-lg border-blue-secondary"
                  ></textarea>

                  <div className="flex mt-10">
                    <img src="/infoIcon.svg" alt="" className="mr-3"></img>
                    <p>
                      Periksa kembali data hewan kamu terisi dengan benar
                      sebelum lanjut
                    </p>
                  </div>

                  <input
                    type="submit"
                    value="Verifikasi"
                    className="mt-4 px-4 py-4 bg-blue-main text-white font-medium w-full cursor-pointer border-2 border-blue-main rounded-lg "
                  ></input>

                  <button className="mt-3 px-4 py-4 bg-white text-blue-main font-medium w-full border-2 border-blue-main rounded-lg ">
                    Batal
                  </button>
                </form>
              </div>
            </div>

            <div className="w-full h-16"></div>
          </div>
        </div>
      </body>
    </div>
  );
}