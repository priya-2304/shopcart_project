// export default function Terms() {
//   return (
//     <div className="min-h-screen p-6 bg-gray-50">
//       <h1 className="text-3xl font-bold mb-4 text-gray-800">Terms & Conditions</h1>
//       <p className="mb-4 text-gray-700">
//         Welcome to our store! By accessing or using our website, you agree to be bound by these Terms & Conditions. 
//       </p>
//       <h2 className="text-xl font-semibold mb-2">Usage of Site</h2>
//       <p className="mb-4 text-gray-700">
//         You must follow all rules and regulations while using our website. Unauthorized use may give rise to a claim for damages.
//       </p>
//       <h2 className="text-xl font-semibold mb-2">Orders & Payments</h2>
//       <p className="mb-4 text-gray-700">
//         All orders are subject to acceptance. Prices and availability are subject to change without notice. Payment must be completed as per the selected method.
//       </p>
//       <h2 className="text-xl font-semibold mb-2">Liability</h2>
//       <p className="mb-4 text-gray-700">
//         Our store is not responsible for any direct or indirect damages arising from the use of our website or products.
//       </p>
//     </div>
//   );
// }


import React from 'react';

export default function Terms() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const themePrimary = "#E16C5B";
  const themeDark = "#3d1f1a"; // Professional Dark Brown

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-10 lg:pt-5">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4" style={{ color: themeDark }}>
          Terms & Conditions
        </h1>
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: themePrimary }}>
          Please read these terms carefully before using our services
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-16 relative">
        {/* Main Content Area */}
        <main className="flex-[2]">
          <section className="mb-12">
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#5a4a47" }}>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          {/* Section 1 */}
          <div className="mb-12 scroll-mt-24" id="usage">
            <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
                style={{ color: themeDark, borderBottomColor: themePrimary }}>
              1. Usage of Site
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#5a4a47" }}>
              The content of the pages of this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense. You agree not to use the site for any unlawful purpose.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12 scroll-mt-24" id="orders">
            <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
                style={{ color: themeDark, borderBottomColor: themePrimary }}>
              2. Orders & Payments
            </h2>
            <p className="mb-4" style={{ color: "#5a4a47" }}>When you place an order, you agree that:</p>
            <ul className="list-disc ml-6 space-y-3" style={{ color: "#5a4a47" }}>
              <li>All details you provide to us are true and accurate.</li>
              <li>You are an authorized user of the credit or debit card used to place your order.</li>
              <li>Sufficient funds are available to cover the cost of the goods.</li>
              <li>All prices are subject to change without prior notice.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-12 scroll-mt-24" id="shipping">
            <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
                style={{ color: themeDark, borderBottomColor: themePrimary }}>
              3. Shipping & Delivery
            </h2>
            <p className="leading-relaxed" style={{ color: "#5a4a47" }}>
              Delivery times may vary according to availability and any guarantees or representations made as to delivery times are subject to any delays resulting from postal delays or force majeure for which we will not be responsible.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-12 scroll-mt-24" id="liability">
            <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
                style={{ color: themeDark, borderBottomColor: themePrimary }}>
              4. Liability & Warranty
            </h2>
            <p className="mb-4" style={{ color: "#5a4a47" }}>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues. Our total liability shall not exceed the amount paid by you for the specific product.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-12 scroll-mt-24" id="governance">
            <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
                style={{ color: themeDark, borderBottomColor: themePrimary }}>
              5. Governing Law
            </h2>
            <p className="leading-relaxed" style={{ color: "#5a4a47" }}>
              These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts in New Delhi.
            </p>
          </div>
        </main>

        {/* Sidebar Navigation */}
        <aside className="hidden lg:block flex-1">
          <div className="sticky top-24 border-l-2 border-gray-100 pl-8">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: themeDark }}>
              Terms Index
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Site Usage', id: 'usage' },
                { name: 'Orders', id: 'orders' },
                { name: 'Shipping', id: 'shipping' },
                { name: 'Liability', id: 'liability' },
                { name: 'Governing Law', id: 'governance' }
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