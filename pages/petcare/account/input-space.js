import Head from "@/components/Head";
import Bar from "@/components/Bar";
import Back from "@/components/Back";

export default function InputSpace() {
  return (
    <div className="flex flex-col">
      <Head />
      <div className="">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="mx-5 my-10">
                {/* Mulai ngoding di sini */}
                <Back />

                <div className="font-normal font-main text-gray-900 text-2xl mt-8">
                  Isi Data Space
                </div>
                <p className="text-sm font-secondary text-gray-500 mt-3 w-11/12">
                  Data Space akan ditampilkan kepada pencari tempat penitipan
                </p>

                <form
                  action="/space/account/input-space"
                  id="spaceForm"
                  className="mt-8 font-secondary text-sm text-search-font"
                >
                  <input
                    id="spaceName"
                    name="spaceName"
                    type="text"
                    autoComplete="name"
                    placeholder="Nama Space"
                    className="px-4 py-3 mt-3 w-full border-opacity-100 border-2 rounded-lg border-blue-secondary"
                    required
                  />

                  <input
                    id="spaceRegion"
                    name="spaceRegion"
                    type="text"
                    autoComplete="address"
                    placeholder="Kota"
                    className="px-4 py-3 mt-3 w-full border-opacity-100 border-2 rounded-lg border-blue-secondary"
                    required
                  />

                  <textarea
                    name="spaceAddress"
                    form="spaceForm"
                    placeholder="Alamat Lengkap Space"
                    className="px-4 py-3 mt-3 h-36 w-full text border-opacity-100 border-2 rounded-lg border-blue-secondary"
                  ></textarea>

                  <textarea
                    name="spaceFacility"
                    form="spaceForm"
                    placeholder="Fasilitas Space"
                    className="px-4 py-3 mt-3 h-36 w-full text border-opacity-100 border-2 rounded-lg border-blue-secondary"
                  ></textarea>

                  <label className="w-full mt-3 flex flex-col items-center px-4 py-6 border-2 bg-white rounded-md tracking-wide border-blue-secondary cursor-pointer hover:bg-blue-main hover:text-white  ease-linear transition-all duration-150">
                    <i className="fas fa-camera fa-2x"></i>
                    <span className="mt-1 text-xs leading-normal">
                      Upload Foto Space 1
                    </span>
                    <input
                      type="file"
                      id="spaceImg1"
                      name="spaceImg1"
                      accept="image/png, image/gif, image/jpeg"
                      className="hidden"
                      required
                    />
                  </label>

                  <label className="w-full mt-3 flex flex-col items-center px-4 py-6 border-2 bg-white rounded-md tracking-wide border-blue-secondary cursor-pointer hover:bg-blue-main hover:text-white  ease-linear transition-all duration-150">
                    <i className="fas fa-camera fa-2x"></i>
                    <span className="mt-1 text-xs leading-normal">
                      Upload Foto Space 2
                    </span>
                    <input
                      type="file"
                      id="spaceImg2"
                      name="spaceImg2"
                      accept="image/png, image/gif, image/jpeg"
                      className="hidden"
                      required
                    />
                  </label>

                  <label className="w-full mt-3 flex flex-col items-center px-4 py-6 border-2 bg-white rounded-md tracking-wide border-blue-secondary cursor-pointer hover:bg-blue-main hover:text-white  ease-linear transition-all duration-150">
                    <i className="fas fa-camera fa-2x"></i>
                    <span className="mt-1 text-xs leading-normal">
                      Upload Foto Space 3
                    </span>
                    <input
                      type="file"
                      id="spaceImg3"
                      name="spaceImg3"
                      accept="image/png, image/gif, image/jpeg"
                      className="hidden"
                      required
                    />
                  </label>

                  <textarea
                    name="moreSPaceInfo"
                    form="petForm"
                    placeholder="Informasi Tambahan"
                    className="px-4 py-3 mt-3 w-full text border-opacity-100 border-2 rounded-lg border-blue-secondary"
                  ></textarea>

                  <div className="flex mt-10">
                    <img src="/infoIcon.svg" className="mr-3"></img>
                    <p>
                      Periksa kembali data Space kamu terisi dengan benar
                      sebelum lanjut
                    </p>
                  </div>

                  <input
                    type="submit"
                    value="Buat Space"
                    className="mt-4 px-4 py-4 bg-blue-main text-white font-medium w-full cursor-pointer border-2 border-blue-main rounded-lg ease-linear duration-150 hover:text-blue-main hover:border-2 hover:bg-white"
                  ></input>

                  <button
                    onClick={() => router.back()}
                    className="mt-3 px-4 py-4 bg-white text-blue-main font-medium w-full border-2 border-blue-main rounded-lg ease-linear duration-150 hover:text-white hover:border-2 hover:bg-blue-main"
                  >
                    Batal
                  </button>
                </form>
              </div>
            </div>

            <Bar />
            <div className="w-full h-14"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
