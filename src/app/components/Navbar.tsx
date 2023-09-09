export default function Navbar() {
  return (
    <>
      <div className="flex justify-between px-5 items-center flex-wrap py-5 text-xl shadow-xl">
        <img className="" src="./" alt="smartPark" />
        <div className="flex justify-between items-center">
          <input
            className="bg-gray-100 rounded-full px-5 py-2 shadow-md outline-none"
            type="search"
            placeholder="search for a place"
          />
          {/* <i
            className="fa-solid fa-magnifying-glass"
          ></i> */}
        </div>
        <div>
          {/* connect wallet with metamask */}
          <button className="bg-gray-100 rounded-full px-4 py-2 shadow-lg">
            Connect Wallet <i className="fa-regular fa-user"></i>
          </button>
        </div>
      </div>
    </>
  );
}
