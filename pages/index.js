import Head from "next/head";
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="mx-5 my-10">
                <div className="flex flex-row">
                  <img src="/petspace.png" className="w-14 rounded"></img>
                </div>
                <div className="mt-10">
                  <h1 className="font-normal text-cyan-main font-sans text-2xl">
                    {user ? `Selamat datang, ${user}` : "Selamat datang, Guest"}
                  </h1>
                  <p className="text-sm font-serif text-gray-500">
                    lorem ipsum dolor sit amet
                  </p>
                </div>

                <div class="mt-7">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    class="bg-search-bg text-search-font w-full px-4 py-3 rounded-md text-sm font-serif focus:outline-none"
                    placeholder="Mau titip hewan di kota mana?"
                  ></input>
                </div>

                <Swiper
                  slidesPerView={1.1}
                  spaceBetween={20}
                  freeMode={true}
                  className="mySwiper mt-9"
                >
                  <SwiperSlide className="py-24 text-center bg-gray-100 rounded-xl">
                    Slide 1
                  </SwiperSlide>
                  <SwiperSlide className="py-24 text-center bg-gray-100 rounded">
                    Slide 2
                  </SwiperSlide>
                </Swiper>

                <div className="mt-9">
                  <h1 className="font-normal text-cyan-secondary font-sans text-base">
                    Space di Semarang
                  </h1>
                  <p className="text-xs font-serif text-gray-500">
                    lorem ipsum dolor sit amet
                  </p>
                </div>
                <Swiper
                  slidesPerView={1.6}
                  spaceBetween={20}
                  freeMode={true}
                  className="mySwiper mt-3"
                >
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 1
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 2
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 3
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 4
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 5
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 6
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 7
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 8
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 9
                  </SwiperSlide>
                </Swiper>

                <div className="mt-9">
                  <h1 className="font-normal text-cyan-secondary font-sans text-base">
                    Space Terbaik Bulan Ini
                  </h1>
                  <p className="text-xs font-serif text-gray-500">
                    lorem ipsum dolor sit amet
                  </p>
                </div>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={15}
                  freeMode={true}
                  className="mySwiper mt-3"
                >
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 1
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 2
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 3
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 4
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 5
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 6
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 7
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 8
                  </SwiperSlide>
                  <SwiperSlide className="py-28 text-center bg-gray-300 rounded">
                    Slide 9
                  </SwiperSlide>
                </Swiper>
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
