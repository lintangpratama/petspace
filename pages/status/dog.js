import { useRouter } from "next/router";
import Head from "next/head";
import Back from '@/components/Back';
import StatusCard from "@/components/StatusCard";


export default function Cat() {
  const router = useRouter();
  const name = 'Lintang';

  return (
    <div className="flex flex-col">
      <Head>
        <title>PetSpace - Cariin Tempat Penitipan Hewan Buat Kamu</title>
        <link rel="icon" href="/petspace.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      
      <div className="">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col h-full">
              <div className="mx-5 my-10">
              <Back />

                <div className="mt-10">
                  <h1 className="font-normal text-blue-main font-sans text-2xl">
                    Space Status
                  </h1>
                  <p className="text-sm font-serif text-gray-500">
                    Kamu bisa melihat status penitipan hewanmu di sini
                  </p>
                </div>

                <StatusCard user="user" pet="dog" petName="Doggy" personName="Lintang Pratama" dateIn="12 November 2021" dateOut="16 November 2021" status="pending" />
                <div className="h-24 w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
