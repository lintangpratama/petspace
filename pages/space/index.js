import Link from "next/link";
import Head from "@/components/Head";
import Bar from "@/components/Bar";
import Search from "@/components/Search";

export default function Space() {
  return (
    <div className="flex flex-col">
      <Head />

      <div className="">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="flex flex-col">
                {/* Mulai ngoding di sini */}
                <div className="flex bg-white fixed z-30 max-w-md w-full px-5 pb-2 drop-shadow-bottom shadow-md rounded-b-box">
                  <Search currentPage="space" />
                  <div className="flex">
                    <div className="dropdown dropdown-end bg-white border-0">
                      <div
                        tabIndex="0"
                        className="btn bg-white border-0 hover:bg-search-bg focus:bg-blue-secondary mt-3"
                      >
                        <svg
                          width="19"
                          height="20"
                          viewBox="0 0 19 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.8869 18.0341C11.2116 17.8735 11.4167 17.5453 11.4167 17.1862V12.0874C11.4167 11.836 11.5176 11.5949 11.6974 11.4171L17.5634 5.61468C17.9228 5.25921 18.125 4.77671 18.125 4.27335V1.82294C18.125 1.29873 17.6966 0.875 17.1667 0.875H1.83333C1.30338 0.875 0.875 1.29873 0.875 1.82294V4.27335C0.875 4.77671 1.07721 5.25921 1.43658 5.61468L7.30264 11.4171C7.48237 11.5949 7.58333 11.836 7.58333 12.0874V18.1342C7.58333 18.8389 8.33305 19.2972 8.97025 18.982L10.8869 18.0341Z"
                            fill="#429FF2"
                          />
                        </svg>
                      </div>
                      <ul
                        tabIndex="0"
                        className="shadow menu dropdown-content bg-base-100 rounded-box w-52"
                      >
                        <li className="font-secondary text-sm">
                          <Link href="/space?pet=anjing">Anjing</Link>
                        </li>
                        <li className="font-secondary text-sm">
                          <Link href="/space?pet=kucing">Kucing</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown dropdown-end mt-1 bg-white">
                      <button className="mx-2 mt-1 dropdown-content bg-white border-0">
                        <svg
                          width="19"
                          height="20"
                          viewBox="0 0 19 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.8869 18.0341C11.2116 17.8735 11.4167 17.5453 11.4167 17.1862V12.0874C11.4167 11.836 11.5176 11.5949 11.6974 11.4171L17.5634 5.61468C17.9228 5.25921 18.125 4.77671 18.125 4.27335V1.82294C18.125 1.29873 17.6966 0.875 17.1667 0.875H1.83333C1.30338 0.875 0.875 1.29873 0.875 1.82294V4.27335C0.875 4.77671 1.07721 5.25921 1.43658 5.61468L7.30264 11.4171C7.48237 11.5949 7.58333 11.836 7.58333 12.0874V18.1342C7.58333 18.8389 8.33305 19.2972 8.97025 18.982L10.8869 18.0341Z"
                            fill="#429FF2"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-20 mx-5">
                  <Link href="space/1">
                    <div className="flex mt-5 shadow-md rounded-lg cursor-pointer">
                      <img src="/img.png" className="w-1/3 rounded-l-lg" loading="lazy"></img>
                      <div className="flex flex-col text-left mx-6 my-3 w-2/3 mt-5">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm mt-1">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link href="space/1">
                    <div className="flex mt-5 shadow-md rounded-lg cursor-pointer">
                      <img src="/img.png" className="w-1/3 rounded-l-lg" loading="lazy"></img>
                      <div className="flex flex-col text-left mx-6 my-3 w-2/3 mt-5">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm mt-1">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link href="space/1">
                    <div className="flex mt-5 shadow-md rounded-lg cursor-pointer">
                      <img src="/img.png" className="w-1/3 rounded-l-lg" loading="lazy"></img>
                      <div className="flex flex-col text-left mx-6 my-3 w-2/3 mt-5">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm mt-1">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link href="space/1">
                    <div className="flex mt-5 shadow-md rounded-lg cursor-pointer">
                      <img src="/img.png" className="w-1/3 rounded-l-lg" loading="lazy"></img>
                      <div className="flex flex-col text-left mx-6 my-3 w-2/3 mt-5">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm mt-1">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link href="space/1">
                    <div className="flex mt-5 shadow-md rounded-lg cursor-pointer">
                      <img src="/img.png" className="w-1/3 rounded-l-lg" loading="lazy"></img>
                      <div className="flex flex-col text-left mx-6 my-3 w-2/3 mt-5">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm mt-1">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link href="space/1">
                    <div className="flex mt-5 shadow-md rounded-lg cursor-pointer">
                      <img src="/img.png" className="w-1/3 rounded-l-lg" loading="lazy"></img>
                      <div className="flex flex-col text-left mx-6 my-3 w-2/3 mt-5">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm mt-1">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Bar currentPage="space" />
            <div className="w-full h-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
