import Head from "next/head";
import Navbar from "./navbar"; // Import Navbar

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>SyNet - Secure Your .sy Domain</title>
        <meta name="description" content="Register and manage .sy domains with SYnet. Affordable pricing and easy management." />
      </Head>

      {/* Navbar */}
      <Navbar /> {/* Add Navbar here */}

      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Secure Your .sy Domain Today!</h1>
        <p className="text-lg mt-2">Reliable and affordable domain registration & DNS management.</p>
      </header>

      {/* Domain Search */}
      <section className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Find Your Perfect Domain</h2>
        <div className="flex">
          <input type="text" placeholder="Enter domain name" className="flex-grow p-2 border rounded-l-md" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">Search</button>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section className="bg-gradient-to-b from-blue-600 to-black py-12">
  <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">Our Pricing Plans</h2>

  <div className="overflow-x-auto mx-auto max-w-7xl">
    <table className="min-w-full table-auto bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-md">
      <thead>
        <tr className="text-left bg-blue-600 text-white">
          <th className="px-6 py-3">Plan</th>
          <th className="px-6 py-3">Price (First Year)</th>
          <th className="px-6 py-3">Price (Per Month)</th>
          <th className="px-6 py-3">Web Space</th>
          <th className="px-6 py-3">MySQL Space</th>
          <th className="px-6 py-3">Bandwidth</th>
          <th className="px-6 py-3">Email Accounts</th>
          <th className="px-6 py-3">CPU Cores</th>
          <th className="px-6 py-3">Memory</th>
          <th className="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Basic Plan */}
        <tr className="border-b border-gray-300">
          <td className="px-6 py-4 font-bold">Basic</td>
          <td className="px-6 py-4">4,95 kr./md</td>
          <td className="px-6 py-4 text-xl font-semibold">65,62 kr./md</td>
          <td className="px-6 py-4">10 GB</td>
          <td className="px-6 py-4">Ubegrænset</td>
          <td className="px-6 py-4">Ubegrænset</td>
          <td className="px-6 py-4">Ubegrænset</td>
          <td className="px-6 py-4">1</td>
          <td className="px-6 py-4">512 MB</td>
          <td className="px-6 py-4 text-center">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">Buy</button>
          </td>
        </tr>
        {/* Ultimate Plan */}
        <tr className="border-b border-gray-300">
          <td className="px-6 py-4 font-bold">Ultimate</td>
          <td className="px-6 py-4">4,95 kr./md</td>
          <td className="px-6 py-4 text-xl font-semibold">112,50 kr./md</td>
          <td className="px-6 py-4">100 GB</td>
          <td className="px-6 py-4">Ubegrænset</td>
          <td className="px-6 py-4">Ubegrænset</td>
          <td className="px-6 py-4">Ubegrænset</td>
          <td className="px-6 py-4">3</td>
          <td className="px-6 py-4">1536 MB</td>
          <td className="px-6 py-4 text-center">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">Buy</button>
          </td>
        </tr>
        {/* Only Domains Plan */}
        <tr className="border-b border-gray-300">
          <td className="px-6 py-4 font-bold">Only Domains</td>
          <td className="px-6 py-4">0 kr./md</td>
          <td className="px-6 py-4 text-xl font-semibold">300 kr./md</td>
          <td className="px-6 py-4">-</td>
          <td className="px-6 py-4">-</td>
          <td className="px-6 py-4">-</td>
          <td className="px-6 py-4">-</td>
          <td className="px-6 py-4">-</td>
          <td className="px-6 py-4">-</td>
          <td className="px-6 py-4 text-center">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">Buy</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

      {/* Contact Us */}
      <section className="bg-gray-800 text-white py-12">
        <h2 className="text-2xl text-center font-semibold text-gray-200 mb-6">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center">Have a question or need help? Contact us and we'll get back to you as soon as possible.</p>
          <form className="mt-6">
            <input type="text" placeholder="Name" className="w-full p-2 rounded-md bg-gray-900 text-white" />
            <input type="email" placeholder="Email" className="w-full p-2 mt-4 rounded-md bg-gray-900 text-white" />
            <textarea placeholder="Message" className="w-full p-2 mt-4 rounded-md bg-gray-900 text-white"></textarea>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© 2025 SYnet. All rights reserved.</p>
      </footer>
    </div>
  );
}
