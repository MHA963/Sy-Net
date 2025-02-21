import Head from "next/head";
import Navbar from "./navbar"; // Import Navbar

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>SyNet - تأمين اسم النطاق .sy</title>
        <meta name="description" content="سجل وادارة نطاقات .sy مع SYnet. تسعير معقول وإدارة سهلة." />
        <link rel="icon" href="/sy.ico" />

      </Head>

      {/* Navbar */}
      <Navbar /> {/* Add Navbar here */}

      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">أمن نطاقك .sy اليوم!</h1>
        <p className="text-lg mt-2">تسجيل نطاقات موثوق ومعقول الأسعار & إدارة DNS.</p>
      </header>

      {/* Domain Search */}
      <section className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">ابحث عن النطاق المثالي لك</h2>
        <div className="flex">
          <input type="text" placeholder="أدخل اسم النطاق" className="flex-grow p-2 border rounded-l-md" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">ابحث</button>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section className="bg-gradient-to-b from-blue-600 to-black py-12">
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">خطط التسعير لدينا</h2>

        <div className="overflow-x-auto mx-auto max-w-7xl">
          <table className="min-w-full table-auto bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-md">
            <thead>
              <tr className="text-left bg-blue-600 text-white">
                <th className="px-6 py-3">الخطة</th>
                <th className="px-6 py-3">السعر (السنة الأولى)</th>
                <th className="px-6 py-3">السعر (شهريًا)</th>
                <th className="px-6 py-3">مساحة الويب</th>
                <th className="px-6 py-3">مساحة MySQL</th>
                <th className="px-6 py-3">العرض الترددي</th>
                <th className="px-6 py-3">حسابات البريد الإلكتروني</th>
                <th className="px-6 py-3">أنوية المعالج</th>
                <th className="px-6 py-3">الذاكرة</th>
                <th className="px-6 py-3">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {/* Basic Plan */}
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 font-bold">أساسي</td>
                <td className="px-6 py-4">$0.68 /شهريًا</td>
                <td className="px-6 py-4 text-xl font-semibold">$7.88 /شهريًا</td>
                <td className="px-6 py-4">10 GB</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">512 MB</td>
                <td className="px-6 py-4 text-center">
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">اشترِ الآن</button>
                </td>
              </tr>
              {/* Ultimate Plan */}
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 font-bold">نهائي</td>
                <td className="px-6 py-4">$0.68 /شهريًا</td>
                <td className="px-6 py-4 text-xl font-semibold">$15.35 /شهريًا</td>
                <td className="px-6 py-4">100 GB</td>
                <td className="px-6 py-4">غير محدود</td>
                <td className="px-6 py-4">غير محدود</td>
                <td className="px-6 py-4">غير محدود</td>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">1536 MB</td>
                <td className="px-6 py-4 text-center">
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">اشترِ الآن</button>
                </td>
              </tr>
              {/* Only Domains Plan */}
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 font-bold">النطاقات فقط</td>
                <td className="px-6 py-4">$0.00 /شهريًا</td>
                <td className="px-6 py-4 text-xl font-semibold">$40.00 /شهريًا</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4 text-center">
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">اشترِ الآن</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-gray-800 text-white py-12">
        <h2 className="text-2xl text-center font-semibold text-gray-200 mb-6">اتصل بنا</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center">هل لديك سؤال أو تحتاج إلى مساعدة؟ اتصل بنا وسنرد عليك في أقرب وقت ممكن.</p>
          <form className="mt-6">
            <input type="text" placeholder="الاسم" className="w-full p-2 rounded-md bg-gray-900 text-white" />
            <input type="email" placeholder="البريد الإلكتروني" className="w-full p-2 mt-4 rounded-md bg-gray-900 text-white" />
            <textarea placeholder="الرسالة" className="w-full p-2 mt-4 rounded-md bg-gray-900 text-white"></textarea>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4">إرسال</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© 2025 SYnet. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
