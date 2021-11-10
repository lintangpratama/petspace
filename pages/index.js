import Link from "next/link";
import Head from "@/components/Head";
import Bar from "@/components/Bar";
import Search from "@/components/Search";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([FreeMode, Pagination]);

export default function Account() {
  const user = null;

  return (
    <div className="flex flex-col">
      <Head />

      <div className="">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col h-full">
              <div className="mx-5 my-10">
                <div className="flex flex-row">
                  <img src="/new-logo.png" className="w-14 rounded"></img>
                </div>
                <div className="mt-10">
                  <h1 className="font-normal font-main text-gray-900 text-2xl">
                    {user ? `Selamat datang, ${user}` : "Selamat datang, Guest"}
                  </h1>
                  <p className="text-sm mt-3 font-secondary text-gray-500 leading-6">
                    Temukan penitipan hewan yang cocok untuk hewan kesayanganmu.
                  </p>
                </div>

                {/*Input search*/}
                <Search currentPage="home" />

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
                      <img src="/status-card/cat.png" className="w-1/3" loading="lazy"></img>
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
                      <img src="/status-card/dog.png" className="w-1/3" loading="lazy"></img>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="flex flex-row mt-9 justify-between">
                  <div className="flex flex-col">
                    <h1 className="font-semibold font-secondary text-blue-main text-base">
                      Space di Semarang
                    </h1>
                    <p className="text-xs font-secondary mt-1 text-gray-500">
                      Penitipan terdekat di Semarang
                    </p>
                  </div>
                  <Link href={`space?search=Semarang`}>
                  <div className="flex font-secondary mt-6 text-sm font-normal underline cursor-pointer text-blue-main">
                    View All
                  </div>
                  </Link>
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
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2 cursor-pointer">
                    <Link href="space/1">
                      <div className="flex flex-col">
                        <img
                          src="/img.png"
                          className="rounded-t-xl h-1/3"
                          loading="lazy"
                        ></img>
                        <div className="flex flex-col text-left mx-2 my-3 h-2/3">
                          <h3 className="text-blue-main font-medium text-base">
                            Penitipan Hewan Cantika
                          </h3>
                          <h4 className="text-yellow-pet font-medium text-sm">
                            Rp28.000/hari
                          </h4>
                          <p className="text-xs font-light text-gray-500 mt-1">
                            Kota Semarang
                          </p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2 cursor-pointer">
                    <Link href="space/1">
                      <div className="flex flex-col">
                        <img
                          src="/img.png"
                          className="rounded-t-xl h-1/3"
                          loading="lazy"
                        ></img>
                        <div className="flex flex-col text-left mx-2 my-3 h-2/3">
                          <h3 className="text-blue-main font-medium text-base">
                            Penitipan Hewan Cantika
                          </h3>
                          <h4 className="text-yellow-pet font-medium text-sm">
                            Rp28.000/hari
                          </h4>
                          <p className="text-xs font-light text-gray-500 mt-1">
                            Kota Semarang
                          </p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2 cursor-pointer">
                    <Link href="space/1">
                      <div className="flex flex-col">
                        <img
                          src="/img.png"
                          className="rounded-t-xl h-1/3"
                          loading="lazy"
                        ></img>
                        <div className="flex flex-col text-left mx-2 my-3 h-2/3">
                          <h3 className="text-blue-main font-medium text-base">
                            Penitipan Hewan Cantika
                          </h3>
                          <h4 className="text-yellow-pet font-medium text-sm">
                            Rp28.000/hari
                          </h4>
                          <p className="text-xs font-light text-gray-500 mt-1">
                            Kota Semarang
                          </p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2 cursor-pointer">
                    <Link href="space/1">
                      <div className="flex flex-col">
                        <img
                          src="/img.png"
                          className="rounded-t-xl h-1/3"
                          loading="lazy"
                        ></img>
                        <div className="flex flex-col text-left mx-2 my-3 h-2/3">
                          <h3 className="text-blue-main font-medium text-base">
                            Penitipan Hewan Cantika
                          </h3>
                          <h4 className="text-yellow-pet font-medium text-sm">
                            Rp28.000/hari
                          </h4>
                          <p className="text-xs font-light text-gray-500 mt-1">
                            Kota Semarang
                          </p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>{" "}
                </Swiper>

                <div className="flex flex-row justify-between mt-9">
                  <div className="flex flex-col">
                    <h1 className="font-semibold font-secondary text-blue-main text-base">
                      Space di Jakarta
                    </h1>
                    <p className="text-xs font-secondary mt-1 text-gray-500">
                      Penitipan terdekat di Jakarta
                    </p>
                  </div>
                  <Link href={`space?search=Jakarta`}>
                  <div className="flex font-secondary mt-6 text-sm font-normal underline cursor-pointer text-blue-main">
                    View All
                  </div>
                  </Link>
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
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2 cursor-pointer">
                    <Link href="space/1">
                      <div className="flex flex-col">
                        <img
                          src="/img.png"
                          className="rounded-t-xl h-1/3"
                          loading="lazy"
                        ></img>
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
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2 cursor-pointer">
                    <Link href="space/1">
                      <div className="flex flex-col">
                        <img
                          src="/img.png"
                          className="rounded-t-xl h-1/3"
                          loading="lazy"
                        ></img>
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
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2 cursor-pointer">
                    <Link href="space/1">
                      <div className="flex flex-col">
                        <img
                          src="/img.png"
                          className="rounded-t-xl h-1/3"
                          loading="lazy"
                        ></img>
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
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-white shadow-md rounded-xl h-full border-2 cursor-pointer">
                    <Link href="space/1">
                      <div className="flex flex-col">
                        <img
                          src="/img.png"
                          className="rounded-t-xl h-1/3"
                          loading="lazy"
                        ></img>
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
                    </Link>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <Bar currentPage="home" />
            <div className="w-full h-14"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
