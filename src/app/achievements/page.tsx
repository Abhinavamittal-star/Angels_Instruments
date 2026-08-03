import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, CheckCircle2, Globe2, BookOpen, Star, Building } from "lucide-react";

export const metadata = {
  title: "Achievements & ISO 9001:2008 Certifications | ANGELS INSTRUMENTS",
  description: "Review our corporate achievements including certificates from CPPRI and IIT Roorkee, ISO 9001:2008 certification from KVQA Norway, and standards compliance for lab testing instruments.",
};

export default function AchievementsPage() {
  const credentials = [
    { title: "NS-EN ISO 9001:2008 Certified", desc: "Certified by KVQA, Norway. Our quality system fulfills NS-EN ISO 9001-2008/ISO 9001:2008 requirements for manufacturing, calibration, assembly, and post-sales support.", icon: Award },
    { title: "Central Pulp & Paper Research Institute", desc: "Our Paper & Pulp Lab Testing Instruments supplied, installed & calibrated at CPPRI, Saharanpur (U.P.) India are working satisfactorily.", icon: Building },
    { title: "IIT Roorkee – Department of Paper Technology", desc: "Our Pulp Lab Testing Instruments supplied at IIT Roorkee (Saharanpur Campus) are certified and working satisfactorily per their assessment.", icon: BookOpen },
    { title: "High Domestic Market Recognition", desc: "Strong recognition in the domestic market with focus on quality compliance of paper testing equipment, headed by a qualified team of professionals.", icon: Star },
  ];

  const certificates = [
    { src: "/certificates/cppri.png", title: "Central Pulp & Paper Research Institute (CPPRI)", org: "Paper Making Lab · Saharanpur, U.P." },
    { src: "/certificates/iit-roorkee.png", title: "Indian Institute of Technology Roorkee", org: "Department of Paper Technology" },
    { src: "/certificates/nth-kolkata.png", title: "National Test House (ER), Kolkata", org: "Smoothness & Porosity Tester" },
    { src: "/certificates/nth-mumbai.png", title: "National Test House (WR), Mumbai", org: "Smoothness & Porosity Tester" },
    { src: "/certificates/nth-chennai.png", title: "National Test House (SR), Chennai", org: "Smoothness & Porosity Tester" },
    { src: "/certificates/nth-jaipur.png", title: "National Test House (NWR), Jaipur", org: "Smoothness & Porosity Tester" },
    { src: "/certificates/rajasthan-barytes.png", title: "Rajasthan Barytes Limited, Udaipur", org: "Abrasion Tester Performance Report" },
  ];

  const standardsMatrix = [
    { standard: "TAPPI T-403 / T-804", application: "Bursting Strength & Box Compression", status: "Fully Compliant" },
    { standard: "ISO 2758 / 535 / 5267", application: "Paper Burst, Cobb Absorption, Pulp Freeness", status: "Fully Compliant" },
    { standard: "ASTM D3786 / D642", application: "Diaphragm Burst & Carton Stacking Test", status: "Fully Compliant" },
    { standard: "SCAN P-11 / C-21 / C-25", application: "Elmendorf Tear, Canadian Freeness, Valley Refining", status: "Fully Compliant" },
    { standard: "DIN 53142 / 50021", application: "Puncture Resistance & Salt Spray Corrosion", status: "Fully Compliant" },
    { standard: "USP Chapter <711> / <701>", application: "Pharma Dissolution and Disintegration", status: "Fully Compliant" },
  ];

  return (
    <div className="w-full bg-white flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400">Corporate Credentials</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Quality Certifications & Achievements</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Trusted by leading research institutions like CPPRI and IIT Roorkee. ISO 9001:2008 certified by KVQA, Norway.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, idx) => {
              const Icon = cred.icon;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4 hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0"><Icon className="w-5 h-5" /></div>
                    <h3 className="text-base font-bold text-slate-900">{cred.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{cred.desc}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-blue-900 font-bold mt-4">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span>Verified</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certificate Highlights */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-blue-900">Client Recognition</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Certificates from Esteemed Institutions</h2>
              <p className="text-slate-500 text-xs sm:text-sm">Our instruments are installed and certified working satisfactorily at India's premier research laboratories.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <figure
                  key={cert.src}
                  className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-amber-200 transition-all flex flex-col"
                >
                  <div className="relative w-full aspect-[3/4] bg-slate-50 overflow-hidden">
                    <Image
                      src={cert.src || "/placeholder.svg"}
                      alt={`Installation and performance certificate from ${cert.title}`}
                      fill
                      className="object-contain group-hover:scale-[1.03] transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="p-4 border-t border-slate-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-600">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span className="text-4xs font-black uppercase tracking-wider text-slate-400">Verified Certificate</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug text-pretty">{cert.title}</h3>
                    <p className="text-2xs text-slate-500 font-semibold">{cert.org}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* ISO Certification Highlight */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-15" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Award className="w-5 h-5 shrink-0" />
                  <span>Quality Assurance Standard</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">NS-EN ISO 9001:2008 Quality Framework</h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Certified by <strong className="text-amber-400">KVQA, Norway</strong> — our operation manuals demand complete traceability of metals, electronic parts, and calibration devices. We maintain a log sheet for every machine assembled, indexing load tests, calibration certificates, and inspection clearances.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-slate-300 text-xs font-semibold">
                  {["Traceable Calibration Standards", "Raw Material Quality Control", "Documentation Traceability", "72-Hour Stress Inspections", "Physical Dimension Verification", "Analytical Data Methods (Charo Metrics)"].map((pt) => (
                    <div key={pt} className="flex gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-52 h-52 bg-slate-800 border-2 border-slate-700 rounded-2xl flex flex-col justify-center items-center text-center p-6 space-y-2 relative shadow-inner">
                  <Award className="w-14 h-14 text-amber-400" />
                  <div>
                    <p className="font-black text-white leading-none text-sm">NS-EN ISO 9001:2008</p>
                    <p className="text-3xs text-slate-400 uppercase tracking-widest mt-1">KVQA Certified – Norway</p>
                  </div>
                  <p className="text-4xs font-bold text-slate-500 uppercase tracking-wider">ANGELS INSTRUMENTS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Standards Compliance Table */}
          <div className="space-y-5">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Global Testing Standards Compliance Matrix</h2>
              <p className="text-slate-500 text-xs sm:text-sm">Lab results from our instruments align with requirements established by these international bodies.</p>
            </div>
            <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 uppercase text-4xs tracking-wider border-b border-slate-100">
                    <th className="px-4 py-3 font-extrabold w-1/3">International Standards</th>
                    <th className="px-4 py-3 font-extrabold w-1/2">Application & Instrument Lines</th>
                    <th className="px-4 py-3 font-extrabold w-1/6 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {standardsMatrix.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-3 font-bold text-slate-800">{item.standard}</td>
                      <td className="px-4 py-3 text-slate-600 font-semibold">{item.application}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="inline-block bg-green-50 text-green-700 text-4xs font-black uppercase tracking-wider px-2 py-0.5 rounded border border-green-100">{item.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
