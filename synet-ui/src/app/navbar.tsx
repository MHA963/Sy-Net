import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo on the left */}
        <div className="flex items-center space-x-4">
          <Image src="/nobg.png" alt="SYnet Logo" width={120} height={100} />
          
        </div>

        {/* Navigation Links on the right */}
        <div className="space-x-20">
          <Link href="#domains" className="hover:text-gray-300">Domains</Link>
          <Link href="#websites" className="hover:text-gray-300">Websites</Link>
          <Link href="#prices" className="hover:text-gray-300">Prices</Link>
          <Link href="#contact" className="hover:text-gray-300">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
