import Head from "next/head";
import Link from "next/link";
import Bar from "../components/Bar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([FreeMode, Pagination]);

export default function Home() {
  const user = null;

  return (
    <div className="flex flex-col">
      <Head>
        <title>PetSpace - Cariin Tempat Penitipan Hewan Buat Kamu</title>
        <link rel="icon" href="/petspace.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <body className="">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col h-screen">
              <div className="mx-5 my-10">
                <div className="flex flex-row">
                  <img src="/petspace.png" className="w-14 rounded"></img>
                </div>
                <div className="mt-10">
                  <h1 className="font-normal font-main text-gray-900 text-2xl">
                    {user ? `Selamat datang, ${user}` : "Selamat datang, Guest"}
                  </h1>
                  <p className="text-sm font-secondary text-gray-500">
                    lorem ipsum dolor sit amet
                  </p>
                </div>

                <div class="mt-7">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    class="bg-search-bg bg-blue-secondary w-full px-4 py-3 rounded-md text-sm font-serif focus:outline-none"
                    placeholder="Mau titip hewan di kota mana?"
                  ></input>
                </div>

                <Swiper
                  slidesPerView={1.15}
                  spaceBetween={20}
                  freeMode={true}
                  className="mySwiper mt-9"
                >
                  <SwiperSlide className="text-center bg-card-status bg-cover rounded-xl">
                    <div className="flex px-4 py-7 md:py-10">
                      <div className="flex flex-col w-2/3 text-left justify-between">
                        <h2 className="text-white font-secondary text-xs md:text-base">
                          Hai! Yuk lihat status penitipan kucingmu
                        </h2>
                        <Link href="/status/cat">
                          <button className="py-1.5 w-20 font-secondary text-white text-xs bg-yellow-pet rounded-xl mt-3 md:text-sm">
                            <a>Check</a>
                          </button>
                        </Link>
                      </div>
                      <img src="/status-card/cat.png" className="w-1/3"></img>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-card-status bg-cover rounded-xl">
                    <div className="flex px-4 py-7 md:py-10">
                      <div className="flex flex-col w-2/3 text-left justify-between">
                        <h2 className="text-white font-secondary text-xs md:text-base">
                          Hai! Yuk lihat status penitipan anjingmu
                        </h2>
                        <Link href="/status/dog">
                          <button className="py-1.5 w-20 font-secondary text-white text-xs bg-yellow-pet rounded-xl mt-3 md:text-sm">
                            <a>Check</a>
                          </button>
                        </Link>
                      </div>
                      <img src="/status-card/dog.png" className="w-1/3"></img>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="mt-9">
                  <h1 className="font-semibold font-secondary text-blue-main text-base">
                    Space di Semarang
                  </h1>
                  <p className="text-xs font-secondary text-gray-500">
                    lorem ipsum dolor sit amet
                  </p>
                </div>

                <Swiper
                  slidesPerView={1.3}
                  spaceBetween={20}
                  freeMode={true}
                  breakpoints={{
                    // when window width is >= 640px
                    350: {
                      slidesPerView: 1.5,
                      spaceBetween: 20,
                    },
                    380: {
                      slidesPerView: 1.8,
                      spaceBetween: 20,
                    },
                  }}
                  className="mySwiper mt-3"
                >
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2">
                    <div className="flex flex-col">
                      <img src="/img.png" className="rounded-t-xl h-1/3"></img>
                      <div className="flex flex-col text-left mx-2 my-3 h-2/3">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2">
                    <div className="flex flex-col">
                      <img src="/img.png" className="rounded-t-xl h-1/3"></img>
                      <div className="flex flex-col text-left mx-2 my-3 h-2/3">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2">
                    <div className="flex flex-col">
                      <img src="/img.png" className="rounded-t-xl h-1/3"></img>
                      <div className="flex flex-col text-left mx-2 my-3 h-2/3">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2">
                    <div className="flex flex-col">
                      <img src="/img.png" className="rounded-t-xl h-1/3"></img>
                      <div className="flex flex-col text-left mx-2 my-3 h-2/3">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="mt-10">
                  <h1 className="font-normal text-blue-main font-sans text-base">
                    Space Terbaik Bulan Ini
                  </h1>
                  <p className="text-xs font-serif text-gray-500">
                    lorem ipsum dolor sit amet
                  </p>
                </div>

                <Swiper
                  slidesPerView={1.3}
                  spaceBetween={20}
                  freeMode={true}
                  breakpoints={{
                    // when window width is >= 640px
                    350: {
                      slidesPerView: 1.5,
                      spaceBetween: 20,
                    },
                    380: {
                      slidesPerView: 1.8,
                      spaceBetween: 20,
                    },
                  }}
                  className="mySwiper mt-3"
                >
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2">
                    <div className="flex flex-col">
                      <img src="/img.png" className="rounded-t-xl h-1/3"></img>
                      <div className="flex flex-col text-left mx-2 my-3 h-2/3">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2">
                    <div className="flex flex-col">
                      <img src="/img.png" className="rounded-t-xl h-1/3"></img>
                      <div className="flex flex-col text-left mx-2 my-3 h-2/3">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2">
                    <div className="flex flex-col">
                      <img src="/img.png" className="rounded-t-xl h-1/3"></img>
                      <div className="flex flex-col text-left mx-2 my-3 h-2/3">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2">
                    <div className="flex flex-col">
                      <img src="/img.png" className="rounded-t-xl h-1/3"></img>
                      <div className="flex flex-col text-left mx-2 my-3 h-2/3">
                        <h3 className="text-blue-main font-medium text-base">
                          Abdur Rofi Maulidin
                        </h3>
                        <h4 className="text-yellow-pet font-medium text-sm">
                          Rp28.000/hari
                        </h4>
                        <p className="text-xs font-light text-gray-500 mt-1">
                          Kota Semarang
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <Bar currentPage="home" />
            <div className="w-full h-14"></div>
          </div>
        </div>
      </body>
    </div>
  );
}
