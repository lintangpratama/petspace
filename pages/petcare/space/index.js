import Head from "@/components/Head";
import BarPetCare from "@/components/BarPetCare";
import Link from "next/link";
import StatusCard from "@/components/StatusCard";

export default function SpacePetCare() {
  const response = {
    success: true,
    message: "Data berhasil didapatkan",
    data: [
      {
        id_transaksi: 3,
        nama_hewan: "Doggy",
        nama_penitip: "Ivan",
        jenis_hewan: "Anjing",
        status_penitipan: "Pending",
      },
      {
        id_transaksi: 4,
        nama_hewan: "Pussy",
        nama_penitip: "Lintang",
        jenis_hewan: "Kucing",
        status_penitipan: "Success",
      },
      {
        id_transaksi: 5,
        nama_hewan: "Puskesmas",
        nama_penitip: "Wahyu",
        jenis_hewan: "Kucing",
        status_penitipan: "Pending",
      },
      {
        id_transaksi: 6,
        nama_hewan: "Droppy",
        nama_penitip: "Rofi",
        jenis_hewan: "Anjing",
        status_penitipan: "Pending",
      },
    ],
  };


  return (
    <div className="flex flex-col">
      <Head />

      <div className="h-full bg-gray-100">
        <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="mx-5 my-10">
                {/* Mulai ngoding di sini */}

                <div className="font-normal font-main text-gray-900 text-2xl">
                  Pet Request
                </div>

                <p className="text-sm font-secondary text-gray-500 mt-3">
                  Yuk lihat daftar hewan yang ingin dititipkan di tempatmu
                </p>

                {response.data.length === 0 ? (
                  <div>
                    <StatusCard pet="blank" />
                    <div className="w-full h-52"></div>
                  </div>
                ) : (
                  <div></div>
                )}

                {response.data.map((status) => {
                  if (status.jenis_hewan === "Anjing") {
                    return (
                      <StatusCard
                        key={status.id_transaksi}
                        pet="dog"
                        petName={status.nama_hewan}
                        personName={status.nama_penitip}
                        dateIn="12 November 2021"
                        dateOut="16 November 2021"
                        status={status.status_penitipan}
                      />
                    );
                  } else if (status.jenis_hewan === "Kucing") {
                    return (
                      <StatusCard
                        key={status.id_transaksi}
                        pet="cat"
                        petName={status.nama_hewan}
                        personName={status.nama_penitip}
                        dateIn="12 November 2021"
                        dateOut="16 November 2021"
                        status={status.status_penitipan}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <BarPetCare currentPage="space" />
          <div className="w-full h-24"></div>
        </div>
      </div>
    </div>
  );
}
