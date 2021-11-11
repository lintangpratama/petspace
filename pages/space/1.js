import Head from "next/head";
import Link from "next/link";
import Back from "@/components/Back";
import Search from "@/components/Search";
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
                <div className="flex bg-white fixed z-30 rounded-b-box max-w-md w-full px-5 pb-2 drop-shadow-bottom shadow-md">
                  <Back page="space-details"/>
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
                      <img src="/logo-pabrik.png" className="w-16 h-16"></img>
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
                          <p
                            className="tracking-tight  text-lg font-semibold  text-center leading-3"
                            style={{ lineHeight: "3" }}
                          >
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
