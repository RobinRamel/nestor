import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex bg-[#fffaf6] px-2 sm:px-4 py-2.5 fixed h-[7vh] w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link href="/">
                <span className="self-center text-xl font-semibold whitespace-nowrap">Nestor</span>
            </Link>
        </div>
    </nav>
  );
}

export default Navbar;
