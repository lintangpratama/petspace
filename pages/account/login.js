import Head from "@/components/Head";
import Back from "@/components/Back";
import Link from "next/link";

// const App = () => {
//   const [values, setValues] = React.useState({
//     password: "",
//     showPassword: false,
//   });

//   const handleClickShowPassword = () => {
//     setValues({ ...values, showPassword: !values.showPassword });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handlePasswordChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

// };
// Gagalll
//
export default function Template() {
  return (
    <div className="flex flex-col">
      <Head />
      <body className="font-body">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="mx-5 my-10">
                {/* Logo Header */}
                <Back />
                {/* Welcome */}
                <div className="mt-10">
                  <h4 className="font-normal font-main text-gray-900 text-2xl">
                    Selamat Datang!
                  </h4>
                  {/* Description */}
                  <p
                    style={{ color: "rgba(124, 124, 128, 0.8)" }}
                    className="text-sm font-secondary text-gray-500"
                  >
                    Silakan login menggunakan akunmu atau membuat akun baru
                  </p>
                </div>
                {/* Form  */}
                <form method="POST" className="mt-10">
                  {/* Masukkan Email */}
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <a
                        type=""
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <img src="/email-icon.svg" className="my-6"></img>
                      </a>
                    </span>
                    <input
                      placeholder="Masukkan email anda"
                      type="search"
                      name="email"
                      class="py-2 text-sm text-form rounded-md pl-10  focus:outline-none focus:ring focus:border-blue-50 bg-abu h-md border-abu border-2"
                      autocomplete="off"
                      style={{ width: "100%", textIndent: "24px" }}
                    ></input>
                  </div>
                  {/* Masukkan Password */}
                  <div className="relative mt-5">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <a
                        type=""
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <img src="/password-icon.svg" className="my-6"></img>
                      </a>
                    </span>
                    <input
                      placeholder="Masukkan password anda"
                      type="password"
                      name="password"
                      class="py-2 text-sm text-form rounded-md pl-10  focus:outline-none focus:ring focus:border-blue-50 bg-abu h-md border-abu border-2"
                      autocomplete="off"
                      style={{ width: "100%", textIndent: "24px" }}
                    ></input>
                  </div>
                  
                  {/* Button Sign */}
                  <input
                    type="submit"
                    value="Login"
                    className="mt-10 px-4 py-3 bg-blue-main text-white font-medium w-full cursor-pointer border-2 border-blue-main rounded-lg ease-linear duration-150 hover:text-blue-main hover:border-2 hover:bg-white"
                  ></input>
                  {/*  */}
                  <div className="text-center mt-5 text-sm">
                    

                    {/*  */}
                    <Link href="/account/signup">
                    <p className="mt-5 text-sm" style={{ color: "#7C7C80" }}>
                      Belum punya akun?{" "}
                      <a>
                        <span
                          className="font-semibold text-md hover:underline"
                          style={{ color: "#429FF2" }}
                        >
                          Daftar di sini
                        </span>
                      </a>
                    </p>
                    </Link>
                  </div>
                </form>
                <div className="w-full h-96"></div>
                {/* show hide password gagalll  */}
                {/* <Input
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      /> */}
                {/*  */}
                {/* End Div */}
              </div>
            </div>
            {/* <Bar currentPage="account"/>
            <div className="w-full h-14"></div> */}
          </div>
        </div>
      </body>
    </div>
  );
}
