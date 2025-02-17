import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>SYnet - Secure Your .sy Domain</title>
        <meta name="description" content="Register & manage .sy domains with SYnet. Affordable pricing and easy management." />
      </Head>

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
      <section className="bg-white py-12">
        <h2 className="text-2xl text-center font-semibold text-gray-800">Our Pricing Plans</h2>
        <div className="flex flex-wrap justify-center mt-6">
          <div className="bg-gray-200 p-6 m-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Basic</h3>
            <p className="mt-2">Includes domain registration & DNS management.</p>
            <p className="text-xl font-semibold mt-4">$10/year</p>
          </div>
          <div className="bg-gray-200 p-6 m-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Premium</h3>
            <p className="mt-2">Priority support & advanced DNS settings.</p>
            <p className="text-xl font-semibold mt-4">$25/year</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© 2025 SYnet. All rights reserved.</p>
      </footer>
    </div>
  );
}
