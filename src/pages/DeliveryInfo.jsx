
// import React from 'react';

// export default function DeliveryInfo() {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const themePrimary = "#E16C5B";
//   const themeDark = "#3d1f1a"; 

//   return (
//     <div className="max-w-[1200px] mx-auto px-5 py-10 lg:pt-5">
//       {/* Header Section */}
//       <header className="text-center mb-16">
//         <h1 className="text-5xl font-extrabold mb-4" style={{ color: themeDark }}>
//           Delivery Information
//         </h1>
//         <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: themePrimary }}>
//           Fast, Reliable & Secure Shipping to your doorstep
//         </p>
//       </header>

//       <div className="flex flex-col lg:flex-row gap-16 relative">
//         {/* Main Content Area */}
//         <main className="flex-[2]">
//           <section className="mb-12">
//             <p className="text-lg leading-relaxed mb-6" style={{ color: "#5a4a47" }}>
//               We are committed to delivering your orders as quickly and efficiently as possible. Our logistics network ensures that your products reach you in perfect condition, no matter where you are.
//             </p>
//           </section>

//           {/* Section 1 */}
//           <div className="mb-12 scroll-mt-24" id="methods">
//             <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
//                 style={{ color: themeDark, borderBottomColor: themePrimary }}>
//               1. Shipping Methods & Timelines
//             </h2>
//             <div className="space-y-4">
//               <div className="p-4 rounded-lg border-l-4 bg-gray-50" style={{ borderLeftColor: themePrimary }}>
//                 <p className="font-bold text-lg" style={{ color: themeDark }}>Standard Delivery</p>
//                 <p style={{ color: "#5a4a47" }}>Estimated 3-7 business days. Free on orders above ₹999.</p>
//               </div>
//               <div className="p-4 rounded-lg border-l-4 bg-gray-50" style={{ borderLeftColor: themePrimary }}>
//                 <p className="font-bold text-lg" style={{ color: themeDark }}>Express Delivery</p>
//                 <p style={{ color: "#5a4a47" }}>Estimated 1-3 business days. Priority processing and handling.</p>
//               </div>
//               <div className="p-4 rounded-lg border-l-4 bg-gray-50" style={{ borderLeftColor: themePrimary }}>
//                 <p className="font-bold text-lg" style={{ color: themeDark }}>International Shipping</p>
//                 <p style={{ color: "#5a4a47" }}>Estimated 7-14 business days depending on customs and location.</p>
//               </div>
//             </div>
//           </div>

//           {/* Section 2 */}
//           <div className="mb-12 scroll-mt-24" id="tracking">
//             <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
//                 style={{ color: themeDark, borderBottomColor: themePrimary }}>
//               2. Real-Time Tracking
//             </h2>
//             <p className="mb-4 leading-relaxed" style={{ color: "#5a4a47" }}>
//               Stay updated with every step of your package. Once your order leaves our warehouse, we send you a tracking link via <strong>Email & SMS</strong>. You can monitor your package directly on our website or through our courier partner's portal.
//             </p>
//           </div>

//           {/* Section 3 */}
//           <div className="mb-12 scroll-mt-24" id="packaging">
//             <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
//                 style={{ color: themeDark, borderBottomColor: themePrimary }}>
//               3. Packaging & Handling
//             </h2>
//             <p className="leading-relaxed" style={{ color: "#5a4a47" }}>
//               Every item is carefully checked for quality before being packed. We use eco-friendly and durable packaging materials to ensure your items are protected from weather and handling during transit.
//             </p>
//           </div>

//           {/* Section 4 */}
//           <div className="mb-12 scroll-mt-24" id="issues">
//             <h2 className="text-2xl font-bold mb-4 inline-block border-b-4 pb-1" 
//                 style={{ color: themeDark, borderBottomColor: themePrimary }}>
//               4. Delivery Issues & Support
//             </h2>
//             <p className="mb-4" style={{ color: "#5a4a47" }}>Facing a problem? Don't worry, we've got you covered:</p>
//             <ul className="list-disc ml-6 space-y-3" style={{ color: "#5a4a47" }}>
//               <li><strong>Delayed Delivery:</strong> If your order exceeds the timeline, contact us immediately.</li>
//               <li><strong>Damaged on Arrival:</strong> Please take a photo and reach out within 24 hours of delivery.</li>
//               <li><strong>Address Changes:</strong> Address changes are only possible before the order is dispatched.</li>
//             </ul>
//           </div>
//         </main>

//         {/* Sidebar Navigation */}
//         <aside className="hidden lg:block flex-1">
//           <div className="sticky top-24 border-l-2 border-gray-100 pl-8">
//             <h3 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: themeDark }}>
//               Delivery Guide
//             </h3>
//             <ul className="space-y-4">
//               {[
//                 { name: 'Shipping Methods', id: 'methods' },
//                 { name: 'Tracking Order', id: 'tracking' },
//                 { name: 'Packaging Info', id: 'packaging' },
//                 { name: 'Support & Issues', id: 'issues' }
//               ].map((item, index) => (
//                 <li key={item.id} 
//                     onClick={() => scrollToSection(item.id)}
//                     className="cursor-pointer text-sm transition-all duration-300 hover:translate-x-1"
//                     style={{ color: "#7a6a67" }}>
//                   <span className="mr-2 font-bold" style={{ color: themePrimary }}>0{index + 1}.</span> {item.name}
//                 </li>
//               ))}
//             </ul>
//             <button 
//               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//               className="mt-10 text-xs font-bold transition-colors hover:underline"
//               style={{ color: themePrimary }}>
//               BACK TO TOP ↑
//             </button>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

import React from 'react';

export default function DeliveryInfo() {
  const themePrimary = "#E16C5B";
  const themeDark = "#3d1f1a"; 

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <header className="text-center" style={{ marginBottom: '80px' }}>
        <h1 className="text-3xl md:text-5xl font-extrabold" style={{ color: themeDark }}>Delivery Info</h1>
      </header>

      <div style={{ marginBottom: '70px' }}>
        <h2 className="text-2xl md:text-3xl font-bold border-b-4 pb-2" 
            style={{ color: themeDark, borderBottomColor: themePrimary, marginBottom: '40px', display: 'inline-block' }}>
          1. Shipping Timelines
        </h2>
        <div style={{ marginTop: '20px' }} className="space-y-10">
          <div className="p-8 border rounded-xl shadow-sm" style={{ marginBottom: '30px' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: themeDark }}>Standard Shipping</h3>
            <p className="text-base md:text-lg leading-[2]" style={{ color: "#5a4a47" }}>
              Takes 3-7 business days. We provide tracking updates via SMS and Email once the order is dispatched.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}