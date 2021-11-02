export default function Search(props) {
  return (
    <div className="flex flex-col w-full mr-2">
      <div class="w-full">
        <form action="/space" className={props.currentPage === 'home' ? 'bg-search-bg w-full px-4 py-3 rounded-md text-sm font-serif mt-7' : 'bg-search-bg w-full px-3 py-2 rounded-md text-sm font-serif pt-2'}>
          <input
            type="text"
            name="search"
            id="search"
            className="bg-search-bg focus:outline-none w-full"
            placeholder="Mau titip hewan di kota mana?"
          ></input>
        </form>
      </div>
    </div>
  );
}
