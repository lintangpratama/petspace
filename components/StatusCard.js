import Link from "next/link";
import Head from "@/components/Head";

export default function StatusCard(props) {
  if (props.pet === "blank") {
    return (
      <div className="flex flex-col justify-center rounded-xl items-center text-center px-4 py-7 mt-10 md:py-10">
        <img
          src="/status-card/dog-sleep.png"
          className="w-40 md:w-52"
          loading="lazy"
        ></img>
        <div className="flex flex-col w-11/12 justify-between mt-2">
          <h2 className="text-black text-2xl font-semibold text-center">
            Ups!
          </h2>
          <div className="text-medium text-center font-serif text-black w-full mb-4">
            <p>Data space masih kosong</p>
          </div>

          <Link href="/space">
            <button className="py-2.5 w-36 text-white text-xs bg-blue-main rounded-lg mt-8 md:text-sm mx-auto">
              <a>Browse Space</a>
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col bg-card-status bg-auto justify-center rounded-xl items-center text-center px-4 py-7 mt-10 md:py-10">
        <Head />
        <img
          src={
            props.pet === "cat"
              ? "/status-card/cat-status.png"
              : "/status-card/dog-status.png"
          }
          className="w-40 md:w-52"
          loading="lazy"
        ></img>
        <div className="flex flex-col w-11/12 justify-between">
          <h2
            className="text-white font-semibold md:text-base text-center"
            style={{ fontSize: "25px" }}
          >
            {props.petName}
          </h2>
          <div className="text-base text-center font-serif text-white w-full my-6">
            <p>{props.personName}</p>
            <p>{`${props.dateIn} — ${props.dateOut}`}</p>
            <p>{`Status: ${props.status}`}</p>
          </div>

          {props.user === "user" ? (
            <button
              className="py-2.5 w-36 text-white font-medium bg-yellow-pet rounded-xl mt-3 md:text-sm mx-auto"
              style={{ fontSize: "15px", width: "180px" }}
            >
              <a
                href={`https://api.whatsapp.com/send?phone=6285591639594&text=Test`}
              >
                Chat via WhatsApp
              </a>
            </button>
          ) : (
            <div className="flex flex-row">
              <button
                className="py-2.5 w-36 mr-3 text-white font-medium bg-red-500 rounded-xl mt-3 md:text-sm mx-auto hover:bg-red-700 duration-200"
                style={{ fontSize: "15px", width: "180px" }}
              >
                <a
                  href={`https://api.whatsapp.com/send?phone=6285591639594&text=Test`}
                >
                  Decline
                </a>
              </button>

              <button
                className="py-2.5 w-36 text-white font-medium bg-yellow-pet rounded-xl hover:bg-yellow-pet-hover duration-200 mt-3 md:text-sm mx-auto"
                style={{ fontSize: "15px", width: "180px" }}
              >
                <a
                  href={`https://api.whatsapp.com/send?phone=6285591639594&text=Test`}
                >
                  Accept
                </a>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
