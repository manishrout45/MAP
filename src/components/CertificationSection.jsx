import React from "react";

const certificates = [
  { id: 1, title: "Certificate 1", image: "/assets/certificates/cert1.png" },
  { id: 2, title: "Certificate 2", image: "/assets/certificates/cert2.png" },
  { id: 3, title: "Certificate 3", image: "/assets/certificates/cert3.png" },
  { id: 4, title: "Certificate 4", image: "/assets/certificates/cert4.png" },
  { id: 5, title: "Certificate 5", image: "/assets/certificates/cert5.png" },
];

const licenseCards = [
  { id: 1, image: "/assets/certificates/license1.png" },
  { id: 2, image: "/assets/certificates/license2.png" },
  { id: 3, image: "/assets/certificates/license3.png" },
];

export default function CertificationSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Circular Certificates */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center mb-16">
          {certificates.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-blue-800 flex items-center justify-center hover:scale-105 duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium text-gray-800 text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Rectangular License / Accreditation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {licenseCards.map((item) => (
            <div
              key={item.id}
              className="w-[220px] h-[130px] md:w-[260px] md:h-[140px] bg-orange-500 rounded-md overflow-hidden shadow-xl hover:scale-105 duration-300 flex items-center justify-center"
            >
              <img
                src={item.image}
                alt="License"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}