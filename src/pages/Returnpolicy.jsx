import React from 'react';

export default function ReturnPolicy() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const themePrimary = "#E16C5B";
  const themeDark = "#3d1f1a"; 

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-10 lg:pt-5">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4" style={{ color: themeDark }}>
          Return & Refund Policy
        </h1>
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: themePrimary }}>
          Easy 7-Day Returns for a Worry-Free Shopping Experience
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-16 relative">
        {/* Main Content Area */}
        <main className="flex-[2]">
          <section className="mb-12">
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#5a4a47" }}>
              At our store, we want you to be 100% satisfied with your purchase. If for any reason you're not happy, our return process is designed to be as simple and transparent as possible.
            </p>
          </section>

          {/* Section 1 */}
          <div className="mb-12 scroll-mt-24" id="eligibility">
            <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
                style={{ color: themeDark, borderBottomColor: themePrimary }}>
              1. Eligibility for Returns
            </h2>
            <p className="mb-4" style={{ color: "#5a4a47" }}>Most items can be returned within <strong>7 days</strong> of delivery, provided they meet these conditions:</p>
            <ul className="list-disc ml-6 space-y-3" style={{ color: "#5a4a47" }}>
              <li>The product must be unused, unwashed, and in its original condition.</li>
              <li>All original tags, packaging, and accessories must be intact.</li>
              <li>Innerwear, face masks, and gift cards are <strong>non-returnable</strong> due to hygiene and safety reasons.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-12 scroll-mt-24" id="process">
            <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
                style={{ color: themeDark, borderBottomColor: themePrimary }}>
              2. Return Process
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-lg border bg-white shadow-sm flex gap-4">
                <span className="text-2xl font-bold" style={{ color: themePrimary }}></span>
                <p style={{ color: "#5a4a47" }}>1. Log in to your account and go to 'My Orders' to request a return or contact our support team.</p>
              </div>
              <div className="p-5 rounded-lg border bg-white shadow-sm flex gap-4">
                <span className="text-2xl font-bold" style={{ color: themePrimary }}></span>
                <p style={{ color: "#5a4a47" }}>2.Once approved, we will arrange a free reverse pickup from your delivery address.</p>
              </div>
              <div className="p-5 rounded-lg border bg-white shadow-sm flex gap-4">
                <span className="text-2xl font-bold" style={{ color: themePrimary }}></span>
                <p style={{ color: "#5a4a47" }}>3. Place the item in its original packaging and hand it over to our courier partner.</p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12 scroll-mt-24" id="refunds">
            <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
                style={{ color: themeDark, borderBottomColor: themePrimary }}>
              3. Refund Timelines
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "#5a4a47" }}>
              After we receive your returned item, it goes through a quality check. Once approved, the refund is initiated:
            </p>
            <ul className="list-disc ml-6 space-y-3" style={{ color: "#5a4a47" }}>
              <li><strong>Prepaid Orders:</strong> Refund will be credited back to your original payment method within 5-7 business days.</li>
              <li><strong>COD Orders:</strong> Refund will be sent via bank transfer or store credit as per your preference.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-12 scroll-mt-24" id="exchanges">
            <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
                style={{ color: themeDark, borderBottomColor: themePrimary }}>
              4. Exchange Policy
            </h2>
            <p className="leading-relaxed" style={{ color: "#5a4a47" }}>
              Want a different size or color? We offer one-time free exchanges for size issues. Just select the 'Exchange' option during the return request. The replacement will be dispatched after the original item is picked up.
            </p>
          </div>
        </main>

        {/* Sidebar Navigation */}
        <aside className="hidden lg:block flex-1">
          <div className="sticky top-24 border-l-2 border-gray-100 pl-8">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: themeDark }}>
              Returns Guide
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Eligibility', id: 'eligibility' },
                { name: 'Step-by-Step Process', id: 'process' },
                { name: 'Refund Details', id: 'refunds' },
                { name: 'Exchanges', id: 'exchanges' }
              ].map((item, index) => (
                <li key={item.id} 
                    onClick={() => scrollToSection(item.id)}
                    className="cursor-pointer text-sm transition-all duration-300 hover:translate-x-1"
                    style={{ color: "#7a6a67" }}>
                  <span className="mr-2 font-bold" style={{ color: themePrimary }}>0{index + 1}.</span> {item.name}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-10 text-xs font-bold transition-colors hover:underline"
              style={{ color: themePrimary }}>
              BACK TO TOP ↑
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}