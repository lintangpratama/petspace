import { useRouter } from "next/router";

export default function Back(props) {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        className={props.page === 'space-details' ? "fixed z-20 top-4 ml-4 flex justify-center items-center bg-white p-2 rounded-xl hover:bg-blue-secondary-hover" : "flex justify-center items-center bg-gray-100 p-2 rounded-xl bg-blue-secondary hover:bg-blue-secondary-hover"}
      >
        <svg
          width="23"
          height="19"
          viewBox="0 0 23 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.9382 0.556991C10.5788 0.20035 10.0913 0 9.58309 0C9.07485 0 8.58742 0.20035 8.22799 0.556991L0.561184 8.1665C0.201859 8.52325 0 9.00704 0 9.51149C0 10.0159 0.201859 10.4997 0.561184 10.8565L8.22799 18.466C8.58948 18.8125 9.07364 19.0043 9.5762 18.9999C10.0787 18.9956 10.5595 18.7955 10.9149 18.4428C11.2702 18.0901 11.4718 17.6129 11.4762 17.1142C11.4805 16.6154 11.2873 16.1348 10.9382 15.776L6.54321 11.4139H21.0833C21.5916 11.4139 22.0792 11.2134 22.4386 10.8567C22.7981 10.4999 23 10.016 23 9.51149C23 9.00694 22.7981 8.52307 22.4386 8.1663C22.0792 7.80954 21.5916 7.60911 21.0833 7.60911H6.54321L10.9382 3.24695C11.2975 2.8902 11.4994 2.40641 11.4994 1.90197C11.4994 1.39753 11.2975 0.913739 10.9382 0.556991Z"
            fill="#429FF2"
            fill-opacity={[props.page === 'space-details' ? "" : "0.8"]}
          />
        </svg>
      </button>
    </div>
  );
}
