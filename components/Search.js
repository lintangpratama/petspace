export default function Search(props) {
  return (
    <div className="flex flex-col w-full mr-2 mt-3">
      <div className="w-full">
        <form action="/space" className={props.currentPage === 'home' ? 'bg-search-bg w-full px-4 py-3 rounded-md text-sm font-serif mt-7' : 'bg-search-bg w-full px-4 py-3.5 rounded-md text-sm font-serif mb-1'}>
          <input
            type="text"
            name="search"
            id="search"
            className={props.currentPage === 'home' ? "bg-search-bg focus:bg-search-bg focus:outline-none w-full" : 'bg-search-bg focus:outline-none w-full bg-blue-secondary'}
            placeholder="Mau titip hewan di kota mana?"
          ></input>
        </form>
      </div>
    </div>
  );
}
