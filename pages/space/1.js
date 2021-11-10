import Head from "next/head";
import Link from "next/link";
import Back from "@/components/Back";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


SwiperCore.use([FreeMode, Pagination]);

export default function SpaceDetails() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>PetSpace - Cariin Tempat Penitipan Hewan Buat Kamu</title>
        <link rel="icon" href="/petspace.png" />
      </Head>
      <div className="font-body">
        <div className="h-full bg-gray-100">
          <div className="box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="relative">
                <Back page="space-details" />

                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  freeMode={false}
                  breakpoints={{
                    // when window width is >= 640px
                    350: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    380: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide className="relative" style={{ zIndex: "-1" }}>
                    <div className="flex flex-col">
                      <div
                        className="mt-7 mx-7"
                        style={{ position: "absolute" }}
                      ></div>
                      <img
                        src="/img.png"
                        className=""
                        style={{ height: "auto", width: "100%" }}
                      ></img>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <div className="flex flex-col">
                      <div
                        className="mt-7 mx-7"
                        style={{ position: "absolute" }}
                      ></div>
                      <img
                        src="/img.png"
                        className=""
                        style={{ height: "auto", width: "100%" }}
                      ></img>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              {/* Main konten */}
              {/* bg white */}
              <div
                className="bg-white rounded-t-2xl"
                style={{
                  height: "auto",
                  width: "100%",
                  borderRadius: "60px , 60px , 0px,0px",
                  position: "relative",
                  top: "-20px",
                  zIndex: "9",
                }}
              >
                <div className="mx-5 my-7">
                  <h4 className="text-3xl tracking-tight font-semibold text-blue-main">
                    Penitipan Hewan Cantika
                  </h4>
                  {/* Location */}
                  <div className="flex mt-5">
                    <img src="/location.svg"></img>
                    <p
                      className="mx-5 tracking-tight text-lg"
                      style={{
                        color: "rgba(124, 124, 128, 0.8)",
                        lineHeight: "25px",
                      }}
                    >
                      Semarang
                    </p>
                  </div>

                  {/* Logo Pabrik */}
                  <div className="mt-8">
                    {/* img */}
                    <div className="flex">
                      <img
                        src="/logo-pabrik.png"
                        className="w-16 h-16"
                      ></img>
                      {/*  */}
                      <div className="mt-2">
                        <p
                          className="mx-5 tracking-tight text-xl font-medium"
                          style={{ lineHeight: "25px" }}
                        >
                          Cantika Sinta
                        </p>
                        {/*  */}
                        <p
                          className="mx-5 tracking-tight text-md mt-1"
                          style={{ color: "rgba(124, 124, 128, 0.8)" }}
                        >
                          Pemilik Space
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Alamat */}
                  <div className="mt-8">
                    <p
                      className="tracking-tight text-xl font-medium text-gray-800"
                      style={{ lineHeight: "25px" }}
                    >
                      Alamat
                    </p>
                    <p
                      className="tracking-tight text-md mt-3"
                      style={{ color: "rgba(66, 62, 62, 0.7)" }}
                    >
                      Jl. Raya Nganjuk nomor 2, RT 13 RW 01, Kecamatan Ngaliyan,
                      Kota Semarang, Jawa Tengah.
                    </p>
                  </div>

                  {/* Fasilitas */}
                  <div className="mt-8">
                    <p
                      className="tracking-tight text-xl font-medium text-gray-800"
                      style={{ lineHeight: "25px" }}
                    >
                      Deskripsi
                    </p>
                    <p
                      className="tracking-tight text-md mt-3"
                      style={{ color: "rgba(66, 62, 62, 0.7)" }}
                    >
                      Fasilitas: Kandang, Makanan, Obat-obatan, Grooming, Mainan
                    </p>
                  </div>

                  {/* Info Tambahan */}
                  <div className="mt-8">
                    <p
                      className="tracking-tight text-xl font-medium text-gray-800"
                      style={{ lineHeight: "25px" }}
                    >
                      Menerima Penitipan
                    </p>
                    <p
                      className="tracking-tight text-md mt-3"
                      style={{ color: "rgba(66, 62, 62, 0.7)" }}
                    >
                      Anjing dan Kucing
                    </p>
                  </div>

                  {/* button */}
                  <div>
                    <Link href="request/1">
                      <div className="w-full bg-blue h-lg cursor-pointer text-white border-2 border-blue-main rounded-md mt-12 hover:bg-white hover:text-blue-main hover:border-2 hover:border-blue-main duration-100">
                        <div className="content">
                          <p className="tracking-tight  text-lg font-semibold  text-center leading-3" style={{lineHeight:"3"}}>
                            Request Space
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
