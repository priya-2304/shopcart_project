// export default function PrivacyPolicy() {
//   return (
//     <div className="page-container bg-white mx-auto my-20 p-8 rounded-lg shadow-lg max-w-4xl">
//       {/* Main Heading */}
//       <h1 className="text-4xl font-bold mb-6 text-[#001f3f]">Privacy Policy</h1>

//       {/* Introduction */}
//       <p className="text-gray-700 mb-6 text-lg">
//         We value your trust and are committed to protecting your personal information. This page explains what data we collect and how we use it to provide a secure shopping experience.
//       </p>

//       {/* Section 1 */}
//       <h2 className="text-2xl font-semibold mb-3 text-[#00bfa5]">1. Data We Collect</h2>
//       <ul className="list-disc list-inside mb-6 text-gray-700">
//         <li><strong>Account Info:</strong> Name, email, phone number, and shipping/billing addresses.</li>
//         <li><strong>Payment Details:</strong> Card information processed securely through payment partners.</li>
//         <li><strong>Browsing Data:</strong> Products viewed, pages visited, and interaction with our site.</li>
//       </ul>

//       {/* Section 2 */}
//       <h2 className="text-2xl font-semibold mb-3 text-[#00bfa5]">2. How We Use Your Data</h2>
//       <ul className="list-disc list-inside mb-6 text-gray-700">
//         <li>To process and deliver your orders efficiently.</li>
//         <li>To provide personalized offers, notifications, and updates.</li>
//         <li>To improve website performance and customer experience.</li>
//         <li>To maintain secure transactions and prevent fraud.</li>
//       </ul>

//       {/* Section 3 */}
//       <h2 className="text-2xl font-semibold mb-3 text-[#00bfa5]">3. Sharing Information</h2>
//       <p className="text-gray-700 mb-6">
//         We never sell your information. Data is shared only with verified partners for order delivery, payment processing, or as required by law.
//       </p>

//       {/* Section 4 */}
//       <h2 className="text-2xl font-semibold mb-3 text-[#00bfa5]">4. Security Practices</h2>
//       <p className="text-gray-700 mb-6">
//         We implement SSL encryption, secure servers, and other measures to safeguard your information. Please note that no system is completely foolproof.
//       </p>

//       {/* Section 5 */}
//       <h2 className="text-2xl font-semibold mb-3 text-[#00bfa5]">5. Contact Us</h2>
//       <p className="text-gray-700 mb-6">
//         For any questions regarding your data or our policies, reach out to our support team:
//       </p>
//       <p className="text-gray-700">
//         Email: support@shopcart.com <br />
//         Phone: +91 98765 43210
//       </p>

//       {/* Footer Note */}
//       <p className="mt-8 text-gray-500 text-sm">
//         © 2025 YourStore. All rights reserved.
//       </p>
//     </div>
//   );
// }


import React from 'react';

export default function PrivacyPolicy() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const themePrimary = "#E16C5B";
  const themeDark = "#3d1f1a"; // Professional Dark Brown (Matches #E16C5B)

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-10 lg:pt-5">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4" style={{ color: themeDark }}>
          Privacy Policy
        </h1>
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: themePrimary }}>
          Last Updated: December 21, 2025
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-16 relative">
        {/* Main Content Area */}
        <main className="flex-[2]">
          <section className="mb-12">
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#5a4a47" }}>
              Welcome to our Privacy Policy page. Your privacy is critically important to us. This document outlines the types of personal information that is received and collected and how it is used. We build our services with a strong foundation of security and transparency to ensure your shopping experience is safe.
            </p>
          </section>

          {/* Section 1 */}
          <div className="mb-12 scroll-mt-24" id="collection">
            <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
                style={{ color: themeDark, borderBottomColor: themePrimary }}>
              1. Information Collection
            </h2>
            <p className="mb-4" style={{ color: "#5a4a47" }}>We collect information to provide better services to all our users. This includes:</p>
            <ul className="list-disc ml-6 space-y-3" style={{ color: "#5a4a47" }}>
              <li><strong style={{ color: themeDark }}>Account Details:</strong> Name, shipping address, billing address, and email address.</li>
              <li><strong style={{ color: themeDark }}>Payment Data:</strong> Credit card numbers or UPI IDs (processed securely via encrypted gateways).</li>
              <li><strong style={{ color: themeDark }}>Technical Data:</strong> IP address, browser type, and device info used to access our store.</li>
              <li><strong style={{ color: themeDark }}>Log Files:</strong> Information about your interactions with our website.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-12 scroll-mt-24" id="usage">
            <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
                style={{ color: themeDark, borderBottomColor: themePrimary }}>
              2. How We Use Data
            </h2>
            <p className="mb-4" style={{ color: "#5a4a47" }}>Your data helps us serve you better. Specifically, we use it for:</p>
            <ul className="list-disc ml-6 space-y-3" style={{ color: "#5a4a47" }}>
              <li>Processing transactions and sending order updates.</li>
              <li>Improving our website performance and product inventory.</li>
              <li>Personalizing your shopping experience with relevant offers.</li>
              <li>Detecting and preventing fraudulent activities.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-12 scroll-mt-24" id="security">
            <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
                style={{ color: themeDark, borderBottomColor: themePrimary }}>
              3. Data Security & Protection
            </h2>
            <p className="leading-relaxed" style={{ color: "#5a4a47" }}>
              We implement a variety of security measures including SSL (Secure Socket Layer) encryption. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-12 scroll-mt-24" id="rights">
            <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
                style={{ color: themeDark, borderBottomColor: themePrimary }}>
              4. Your Rights
            </h2>
            <p className="mb-4" style={{ color: "#5a4a47" }}>You have full control over your data, including the right to:</p>
            <ul className="list-disc ml-6 space-y-3" style={{ color: "#5a4a47" }}>
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of any inaccurate information.</li>
              <li>Request deletion of your account and personal data.</li>
              <li>Opt-out of marketing emails at any time.</li>
            </ul>
          </div>
        </main>

        {/* Sidebar Navigation */}
        <aside className="hidden lg:block flex-1">
          <div className="sticky top-24 border-l-2 border-gray-100 pl-8">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: themeDark }}>
              Table of Contents
            </h3>
            <ul className="space-y-4">
              {['Collection', 'Usage', 'Security', 'Rights'].map((item, index) => (
                <li key={item} 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="cursor-pointer text-sm transition-all duration-300 hover:translate-x-1"
                    style={{ color: "#7a6a67" }}>
                  <span className="mr-2 font-bold" style={{ color: themePrimary }}>0{index + 1}.</span> {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-10 text-xs font-bold transition-colors"
              style={{ color: themePrimary }}>
              BACK TO TOP ↑
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}