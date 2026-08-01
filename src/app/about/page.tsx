import React from "react";
import { Award, ShieldCheck, CheckCircle2, Factory, Globe2, Users, BookOpen } from "lucide-react";

export const metadata = {
  title: "About Us / Company Profile | ANGELS INSTRUMENTS",
  description: "ANGELS INSTRUMENTS is an NS-EN ISO 9001:2008 / ISO 9001:2008 Certified Company from KVQA Norway. Manufacturers & Exporters of Pulp, Paper, Board, Packaging, Textile and Pharma Lab Testing Instruments, based in Saharanpur, U.P., India.",
};

export default function About() {
  const highlights = [
    { title: "NS-EN ISO 9001:2008 Certified", desc: "Certified by KVQA, Norway — our quality assurance system fulfills NS-EN ISO 9001:2008 / ISO 9001:2008 requirements for manufacturing, testing, and calibration.", icon: Award },
    { title: "State-of-the-Art Production", desc: "Equipped with CNC machining, precision grinding, and calibration equipment in our Saharanpur factory. All products are dimension-verified before dispatch.", icon: Factory },
    { title: "Global Export Network", desc: "We regularly export testing instruments internationally, packaged in heavy-duty sea-worthy wooden cases.", icon: Globe2 },
    { title: "R&D Expert Team", desc: "Our team of specialist engineers and technocrats is actively involved in R&D to provide more user-friendly, reliable and industry-specific instruments.", icon: Users },
  ];

  const productPortfolio = [
    "Paper Testing Instruments",
    "Pulp Testing Instruments",
    "Packaging Testing Instruments",
    "Surface Coating Instruments",
    "Environmental Testing Instruments",
    "Textile Testing Instruments",
    "Pharmacy Lab Testing Instruments",
  ];

  const qualityPoints = [
    "Verification of raw metals and electrical components prior to production.",
    "Component-level testing of load cells, encoders, and pressure transducers.",
    "Rigorous calibration cycles using reference devices traceable to national standards.",
    "72-hour continuous burn-in tests for all electronic and microprocessor components.",
    "Physical property and dimension measurements verified analytically using data-driven methods.",
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400">About Our Company</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Corporate Profile & History</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A highly renowned name — ANGELS INSTRUMENTS is a reputed manufacturer of Pulp, Paper, Board, Packaging, Textile and Pharmacy Lab testing equipment.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* About Text + Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Our Corporate Profile</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>ANGELS INSTRUMENTS</strong> is an NS-EN ISO 9001-2008 / ISO 9001:2008 Certified Company from KVQA, Norway. We are a reputed manufacturer of Pulp, Paper, Board, Packaging, Textile and Pharmacy Lab testing equipment. We offer an exclusive range of Pulp, Paper, Board, Packaging, Textile and Pharmacy Lab testing equipment that is accepted and appreciated for their quality, precision and durability.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We ensure international standards of quality in our product range, packaging, and delivery. Our dedication to quality and innovation enables our clients to take benefit from our cutting-edge product range. Quality and Customer satisfaction are the two basic pillars of our company. We as manufacturers believe in creating a good-will rather than earning short-term profits, hence our products are never found to be below standard quality measures.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We also undertake fabrication jobs as per the requirements of our clients. Ever since inception, we have always achieved a good growth rate and success, which is a result of our dedication, pursuance and efficient service to trade and industry. Our strict adherence to superior quality and understanding of customer requirements has made it possible for us to achieve a position of repute in the industry.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We are a customer-oriented company and work in close coordination with our clients to provide efficient solutions to their testing needs for Pulp, Paper, Textile, Pharmacy, Board and Packaging industries.
              </p>

              {/* Mission */}
              <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl space-y-3">
                <h3 className="text-base font-bold text-blue-900">Our Mission</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>To ensure 100% customer satisfaction by achieving excellence in our products and services.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>To provide the highest quality testing equipment at industry leading prices, without any compromise of quality.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Stats Panel */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">Key Operations</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1"><p className="text-2xl font-black text-blue-900">15+</p><p className="text-2xs font-bold text-slate-500 uppercase">Years Experience</p></div>
                  <div className="space-y-1"><p className="text-2xl font-black text-blue-900">40+</p><p className="text-2xs font-bold text-slate-500 uppercase">Countries Exported</p></div>
                  <div className="space-y-1"><p className="text-2xl font-black text-blue-900">ISO</p><p className="text-2xs font-bold text-slate-500 uppercase">KVQA Certified</p></div>
                  <div className="space-y-1"><p className="text-2xl font-black text-blue-900">500+</p><p className="text-2xs font-bold text-slate-500 uppercase">Active Installations</p></div>
                </div>
                <div className="p-4 bg-blue-900 text-white rounded-xl text-xs space-y-1 text-center font-medium shadow-sm">
                  <p className="text-amber-400 font-bold uppercase tracking-wider">Quality Policy</p>
                  <p className="text-blue-100 leading-relaxed">&ldquo;To manufacture, calibrate, and supply test instruments that strictly fulfill international standards, ensuring repeatable accuracy and complete client satisfaction.&rdquo;</p>
                </div>
              </div>

              {/* Product Portfolio */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-4">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-900" /> Product Portfolio
                </h3>
                <p className="text-slate-500 text-xs">We are offering various kinds of testing instruments as follows:</p>
                <ul className="space-y-1.5">
                  {productPortfolio.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center"><Icon className="w-5 h-5" /></div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* R&D Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 space-y-5 relative overflow-hidden shadow-lg">
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-blue-950/50" />
              <div className="relative z-10 space-y-3">
                <span className="inline-block text-amber-400 text-2xs font-bold uppercase tracking-wider">R&D Focus</span>
                <h3 className="text-xl font-bold text-white">Research &amp; Development</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  We have a team of specialist engineers and technocrats who are actively involved in R&D for the development of new test methods and hence to provide more user-friendly, reliable and industry specific testing instruments. Our professionals not only have vast technical knowledge but also have experience in managing customer relationships.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Quality Assurance</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                With the help of our experienced quality checking team, we consistently strive towards meeting the diverse needs of our clients and offer test equipment as per international production norms. We carry out various tests to check the physical property and dimension measurements of our products.
              </p>
              <div className="space-y-2.5 pt-2">
                {qualityPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-100 px-3 py-2 rounded-lg mt-2 w-fit">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>ISO 9001:2008 — KVQA, Norway</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
