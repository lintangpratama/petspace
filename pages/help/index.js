import Head from "@/components/Head";
import Bar from "@/components/Bar";

export default function Template() {
  return (
    <div className="flex flex-col">
      <Head />
      <body className="font-body">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="mx-5 my-10">
                {/* Mulai ngoding di sini */}
                {/* Title */}
                <div className="font-normal font-main text-gray-900 text-2xl">
                  Bantuan
                </div>
                
                <p className="text-sm font-secondary text-gray-500 mt-3">
                  Kamu butuh bantuan? Lihatlah beberapa daftar pertanyaan
                  berikut
                </p>
                {/*
                <button className="group box w-full text-left bg-gray-background h-lg border-abu border-2 rounded-lg mt-8 hover:bg-blue">
                  <div className="content">
                    <p className="tracking-tight text-md text-form-600 my-5 mx-5 leading-3 group-hover:text-white">
                      Tentang Pet Space
                    </p>
                  </div>
                </button>
       
                <button className="group box w-full text-left bg-gray-background h-lg border-abu border-2 rounded-lg mt-4 hover:bg-blue">
                  <div className="content">
                    <p className="tracking-tight text-md text-form-600 my-5 mx-5 leading-3 group-hover:text-white">
                      Mengapa kami membangun PetSpace?
                    </p>
                  </div>
                </button>
     
                <button className="group box w-full text-left bg-gray-background h-lg border-abu border-2 rounded-lg mt-4 hover:bg-blue">
                  <div className="content">
                    <p className="tracking-tight text-md text-form-600 my-5 mx-5 leading-3 group-hover:text-white">
                      Tentang PetSpace
                    </p>
                  </div>
                </button>
       
                <button className="group box w-full text-left bg-gray-background h-lg border-abu border-2 rounded-lg mt-4 hover:bg-blue">
                  <div className="content">
                    <p className="tracking-tight text-md text-form-600 my-5 mx-5 leading-3 group-hover:text-white">
                      Produk & Layanan
                    </p>
                  </div>
                </button>
   
                <button className="group box w-full text-left bg-gray-background h-lg border-abu border-2 rounded-lg mt-4 hover:bg-blue">
                  <div className="content">
                    <p className="tracking-tight text-md text-form-600 my-5 mx-5 leading-3 group-hover:text-white">
                      Prosedur penitipan hewan di PetSpace
                    </p>
                  </div>
                </button> */}
                <div className="collapse border rounded-box border-base-300 collapse-arrow w-full mt-4">
                  <input type="checkbox" />
                  <div className="collapse-title font-medium">
                    Apa itu PetSpace?
                  </div>
                  <div className="collapse-content ">
                    <p>
                      lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="collapse border rounded-box border-base-300 collapse-arrow w-full mt-4">
                  <input type="checkbox" />
                  <div className="collapse-title font-medium">
                    Mengapa kami membangun PetSpace?
                  </div>
                  <div className="collapse-content ">
                    <p>
                      Kami memahami bahwa hewanmu merupakan hal yang sangat
                      berharga bagimu. Kami membangun PetSpace dengan tujuan
                      untuk membantumu untuk mencari tempat penitipan hewan yang
                      aman dan nyaman saat kamu sedang tidak memiliki waktu untuk
                      menjaga hewanmu. Harapan kami, PetSpace bisa memudahkanmu
                      mencari tempat penitipan hewan dengan fasilitas yang kamu
                      inginkan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-96"></div>
            <Bar currentPage="help" />
          </div>
        </div>
      </body>
    </div>
  );
}
