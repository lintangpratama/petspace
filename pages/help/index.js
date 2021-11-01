import Head from "next/head";
import Bar from "../../components/Bar";

export default function Template() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>PetSpace - Status Kucing Titipan</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="font-body">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="mx-5 my-10">
                  {/* Mulai ngoding di sini */} 
                    {/* Title */}
                    <div className="text-3xl font-semibold tracking-tight ">Bantuan</div>
                    {/* Description */}
                    <p className="tracking-tight text-md text-gray-500 mt-3">Kamu butuh bantuan? Lihatlah beberapa daftar pertanyaan berikut</p>
                    {/* Box  */}
                    <div className="group box w-100% bg-abu h-lg border-abu border-2 rounded-lg mt-8 hover:bg-blue">
                        <div className="content">
                            <p className="tracking-tight text-md text-form-600 my-5 mx-5 leading-3 group-hover:text-white">Tentang Pet Space</p>
                        </div>
                    </div>
                    {/* Box 2 */}
                    <div className="group box w-100% bg-abu h-lg border-abu border-2 rounded-lg mt-4 hover:bg-blue">
                        <div className="content">
                            <p className="tracking-tight text-md text-form-600 my-5 mx-5 leading-3 group-hover:text-white">Mengapa kami membangun PetSpace?</p>
                        </div>
                    </div>
                    {/* Box 3 */}
                    <div className="group box w-100% bg-abu h-lg border-abu border-2 rounded-lg mt-4 hover:bg-blue">
                        <div className="content">
                            <p className="tracking-tight text-md text-form-600 my-5 mx-5 leading-3 group-hover:text-white">Tentang Pet Space</p>
                        </div>
                    </div>
                    {/* Box 4 */}
                    <div className="group box w-100% bg-abu h-lg border-abu border-2 rounded-lg mt-4 hover:bg-blue">
                        <div className="content">
                            <p className="tracking-tight text-md text-form-600 my-5 mx-5 leading-3 group-hover:text-white">Produk & Layanan</p>
                        </div>
                    </div>
                    {/* Box 5 */}
                    <div className="group box w-100% bg-abu h-lg border-abu border-2 rounded-lg mt-4 hover:bg-blue">
                        <div className="content">
                            <p className="tracking-tight text-md text-form-600 my-5 mx-5 leading-3 group-hover:text-white">Prosedur penitipan hewan di Pet Space </p>
                        </div>
                    </div>
                    {/* Box 6 */}
                    <div className="group box w-100% bg-abu h-lg border-abu border-2 rounded-lg mt-4 hover:bg-blue">
                        <div className="content">
                            <p className="tracking-tight text-md text-form-600 my-5 mx-5 leading-3 group-hover:text-white">Butuh bantuan ?</p>
                        </div>
                    </div>
                    {/* Box 7 */}
                    <div className="group box w-100% bg-abu h-lg border-abu border-2 rounded-md mt-4 hover:bg-blue">
                        <div className="content">
                            <p className="tracking-tight text-md text-form-600 my-5 mx-5 leading-3 group-hover:text-white">Punya pertanyaan lain ?</p>
                        </div>
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