import Head from "@/components/Head";
import BarPetCare from "@/components/BarPetCare";

export default function Help() {
  return (
    <div className="flex flex-col">
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="font-body">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="mx-5 my-10 h-screen">
                {/* Mulai ngoding di sini */}
                {/* Title */}
                <div className="font-normal font-main text-gray-900 text-2xl">
                  Bantuan
                </div>

                <p className="text-sm font-secondary text-gray-500 mt-3">
                  Kamu butuh bantuan? Lihatlah beberapa daftar pertanyaan
                  berikut
                </p>

                <div className="pt-7"></div>
                <div className="collapse border-2 rounded-box border-blue-secondary collapse-arrow font-secondary w-full mt-4 py-0 text-gray-500">
                  <input type="checkbox" className="" />
                  <div className="collapse-title">Apa itu PetSpace?</div>
                  <div className="collapse-content ">
                    <p className="text-sm">
                      PetSpace adalah aplikasi pihak ketiga yang akan membantumu
                      menemukan tempat penitipan hewan yang terbaik untukmu dan
                      hewan kesayanganmu.
                    </p>
                  </div>
                </div>
                <div className="collapse border-2 rounded-box border-blue-secondary collapse-arrow font-secondary w-full mt-4 text-gray-500">
                  <input type="checkbox" />
                  <div className="collapse-title text-md">
                    Mengapa kami membangun PetSpace?
                  </div>
                  <div
                    className="collapse-content"
                    style={{ backgroundColor: "white !important" }}
                  >
                    <p className="text-sm">
                      Kami memahami bahwa hewanmu merupakan hal yang sangat
                      berharga bagimu. Kami membangun PetSpace dengan tujuan
                      untuk membantumu untuk mencari tempat penitipan hewan yang
                      aman dan nyaman saat kamu sedang tidak memiliki waktu
                      untuk menjaga hewanmu. Harapan kami, PetSpace bisa
                      memudahkanmu mencari tempat penitipan hewan dengan
                      fasilitas yang kamu inginkan.
                    </p>
                  </div>
                </div>
                <div className="collapse border-2 rounded-box border-blue-secondary collapse-arrow font-secondary w-full mt-4 text-gray-500">
                  <input type="checkbox" />
                  <div className="collapse-title text-md">Produk & Layanan</div>
                  <div className="collapse-content ">
                    <p className="text-sm">
                      Produk dari PetSpace berupa aplikasi yang berbasis website
                      yang dapat diakses selama 24 jam setiap hari. PetSpace
                      selalu siap untuk membantumu mencarikan tempat penitipan
                      hewan yang terbaik untukmu dan hewan kesayanganmu.
                    </p>
                  </div>
                </div>
                <div className="collapse border-2 rounded-box border-blue-secondary collapse-arrow font-secondary w-full mt-4 text-gray-500">
                  <input type="checkbox" />
                  <div className="collapse-title text-md">
                    Bagaimana prosedur penitipan hewan di PetSpace?
                  </div>
                  <div className="collapse-content ">
                    <p className="text-sm">
                      Login terlebih dahulu ke akun PetSpace-mu → Cari Space
                      pada menu bar &quot;Space&quot; → Pilih Space favoritmu →
                      Klik &quot;Request Space&quot; → Isi data hewanmu → Tunggu
                      konfirmasi dari pihak pihak Space → Jika request-mu
                      diterima oleh pihak Space, kamu dapat langsung
                      berkomunikasi dengan pihak Space melalui WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="max-w-md w-full fixed align-end bottom-24">
                  <a href="https://api.whatsapp.com/send?phone=6285892942057&text=Halo, Admin Ganteng!%20Saya%20ingin%20bertanya%20seputar%20PetSpace%20dong">
                  <button className="mr-10 w-14 h-14 bg-whatsapp hover:bg-whatsapp-hover ease-linear duration-200 rounded-full">
                    <span>
                      <i className="fab fa-whatsapp text-white text-4xl"></i>
                    </span>
                  </button>
                  </a>
                </div>
                <div className="w-full h-64"></div>
              </div>
            </div>

            <BarPetCare currentPage="help" />
          </div>
        </div>
      </div>
    </div>
  );
}
