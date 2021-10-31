import Link from "next/link";

export default function Bar(props) {
  console.log(props.currentPage);
  return (
    <div className="flex bg-white fixed bottom-0 h-14 justify-center z-30 max-w-md w-full">
      <Link href="/">
        <button className="px-3  py-2 w-1/4 max-w-bar min-w-bar cursor-pointer">
          <a>
            <span className="inline-flex flex-col w-full justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.293 10.707L11.293 3.70697C11.6835 3.31659 12.3165 3.31659 12.707 3.70697L19.707 10.707C19.8945 10.8945 20 11.1488 20 11.414V21C20 21.5523 19.5523 22 19 22H14V15H10V22H5C4.44772 22 4 21.5523 4 21V11.414C4 11.1488 4.10545 10.8945 4.293 10.707Z"
                  fill={props.currentPage === "home" ? "#429FF2" : "#B9BCBE"}
                />
              </svg>
              <span
                className={
                  props.currentPage === "home"
                    ? "font-sans font-light text-xs text-blue-main"
                    : "font-sans font-light text-xs text-bar"
                }
              >
                Home
              </span>
            </span>
          </a>
        </button>
      </Link>

      <Link href="/space">
        <button className="px-3 py-2 w-1/4 max-w-bar min-w-bar cursor-pointer">
          <a>
            <span className="inline-flex flex-col w-full justify-center items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99984 19.3334C4.84518 19.3334 0.666504 15.1547 0.666504 10C0.666504 4.84536 4.84518 0.666687 9.99984 0.666687C15.1545 0.666687 19.3332 4.84536 19.3332 10C19.3273 15.1522 15.1521 19.3275 9.99984 19.3334ZM9.99984 3.33335C6.31794 3.33335 3.33317 6.31812 3.33317 10C3.33317 13.6819 6.31794 16.6667 9.99984 16.6667C13.6817 16.6667 16.6665 13.6819 16.6665 10C16.6665 6.31812 13.6817 3.33335 9.99984 3.33335ZM9.99984 14C7.7907 14 5.99984 12.2092 5.99984 10C5.99984 7.79088 7.7907 6.00002 9.99984 6.00002C12.209 6.00002 13.9998 7.79088 13.9998 10C13.9998 11.0609 13.5784 12.0783 12.8283 12.8284C12.0781 13.5786 11.0607 14 9.99984 14Z"
                  fill={props.currentPage === "space" ? "#429FF2" : "#B9BCBE"}
                />
              </svg>

              <span
                className={
                  props.currentPage === "space"
                    ? "font-sans font-light text-xs text-blue-main"
                    : "font-sans font-light text-xs text-bar"
                }
              >
                Space
              </span>
            </span>
          </a>
        </button>
      </Link>

      <Link href="/help">
        <button className="px-3 py-2 w-1/4 max-w-bar min-w-bar cursor-pointer">
          <a>
            <span className="inline-flex flex-col w-full justify-center items-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0002 20.1666C5.93755 20.1666 1.8335 16.0626 1.8335 11C1.8335 5.93737 5.93755 1.83331 11.0002 1.83331C16.0628 1.83331 20.1668 5.93737 20.1668 11C20.1613 16.0603 16.0605 20.1611 11.0002 20.1666ZM10.0835 15.5833V17.4166H11.9168V15.5833H10.0835ZM11.0002 6.41665C12.0127 6.41665 12.8335 7.23746 12.8335 8.24998C12.8367 8.73648 12.6414 9.20326 12.2927 9.54248L11.156 10.6975C10.4698 11.3866 10.0842 12.3192 10.0835 13.2916V13.75H11.9168C11.8456 12.7646 12.243 11.8032 12.9893 11.1558L13.8143 10.3125C14.3626 9.76644 14.6695 9.02375 14.6668 8.24998C14.6668 6.22494 13.0252 4.58331 11.0002 4.58331C8.97512 4.58331 7.3335 6.22494 7.3335 8.24998H9.16683C9.16683 7.23746 9.98764 6.41665 11.0002 6.41665Z"
                  fill={props.currentPage === "help" ? "#429FF2" : "#B9BCBE"}
                />
              </svg>
              <span
                className={
                  props.currentPage === "help"
                    ? "font-sans font-light text-xs text-blue-main"
                    : "font-sans font-light text-xs text-bar"
                }
              >
                Help
              </span>
            </span>
          </a>
        </button>
      </Link>

      <Link href="/account">
        <button className="px-3 py-2 w-1/4 max-w-bar min-w-bar cursor-pointer">
          <a>
            <span className="inline-flex flex-col w-full justify-center items-center">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.7085 7.66667C6.7085 5.0203 8.8538 2.875 11.5002 2.875C14.1465 2.875 16.2918 5.0203 16.2918 7.66667C16.2918 10.313 14.1465 12.4583 11.5002 12.4583C8.8538 12.4583 6.7085 10.313 6.7085 7.66667ZM11.5002 10.5417C13.088 10.5417 14.3752 9.25449 14.3752 7.66667C14.3752 6.07885 13.088 4.79167 11.5002 4.79167C9.91234 4.79167 8.62516 6.07885 8.62516 7.66667C8.62516 9.25449 9.91234 10.5417 11.5002 10.5417Z"
                  fill={props.currentPage === "account" ? "#429FF2" : "#B9BCBE"}
                />
                <path
                  d="M6.07901 15.6622C4.64123 17.1 3.8335 19.05 3.8335 21.0833H5.75016C5.75016 19.5583 6.35596 18.0958 7.4343 17.0175C8.51263 15.9391 9.97517 15.3333 11.5002 15.3333C13.0252 15.3333 14.4877 15.9391 15.566 17.0175C16.6444 18.0958 17.2502 19.5583 17.2502 21.0833H19.1668C19.1668 19.05 18.3591 17.1 16.9213 15.6622C15.4835 14.2244 13.5335 13.4167 11.5002 13.4167C9.46684 13.4167 7.51679 14.2244 6.07901 15.6622Z"
                  fill={props.currentPage === "account" ? "#429FF2" : "#B9BCBE"}
                />
              </svg>
              <span
                className={
                  props.currentPage === "account"
                    ? "font-sans font-light text-xs text-blue-main"
                    : "font-sans font-light text-xs text-bar"
                }
              >
                Account
              </span>
            </span>
          </a>
        </button>
      </Link>
    </div>
  );
}
