import React from "react";
import { Users, Building2, FlaskConical, Factory, GraduationCap, Landmark, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Clientele / Reputed Clients | ANGELS INSTRUMENTS",
  description:
    "ANGELS INSTRUMENTS is trusted by reputed clients across India including National Test House, CPPRI, NIRJAFT, IIT Roorkee, ITC, L&T, BILT, Cadila, Marico, Reliance Industries, TNPL, Indian Institute of Packaging and many more paper mills, research institutes and pharmaceutical companies.",
};

export default function ClientelePage() {
  // Full client list as shown on the original Clientele / Reputed Clients page
  const clients: { name: string; location: string; type: keyof typeof typeMeta }[] = [
    { name: "Vikas College of Engineering & Technology", location: "Vijaywada, A.P.", type: "education" },
    { name: "Maghan Paper Mills (P) Ltd.", location: "Saharanpur, Punjab", type: "mill" },
    { name: "Larsen & Toubro (L&T)", location: "Surat, Gujarat", type: "industry" },
    { name: "ITC Limited", location: "India", type: "industry" },
    { name: "Indian Institute of Packaging (I.I.P.)", location: "Mumbai", type: "govt" },
    { name: "Cadila Pharmaceuticals Limited", location: "Gujarat", type: "pharma" },
    { name: "Forest Research Institute (F.R.I.)", location: "Dehradun, Uttarakhand", type: "research" },
    { name: "Govt. of India Stationery Office, Ministry of Urban Development", location: "Kolkata", type: "govt" },
    { name: "National Test House, Ministry of Consumer Affairs, Govt. of India", location: "Kolkata", type: "govt" },
    { name: "National Test House, Ministry of Consumer Affairs, Govt. of India", location: "Mumbai", type: "govt" },
    { name: "National Test House, Ministry of Consumer Affairs, Govt. of India", location: "Jaipur", type: "govt" },
    { name: "National Test House, Ministry of Consumer Affairs, Govt. of India", location: "Chennai", type: "govt" },
    { name: "Tamil Nadu Newsprint & Paper Limited (TNPL)", location: "A Govt. of Tamil Nadu Enterprise", type: "mill" },
    { name: "National Institute of Research on Jute & Allied Fibre Technology (NIRJAFT)", location: "Kolkata", type: "research" },
    { name: "Central Pulp & Paper Research Institute (CPPRI), Ministry of Commerce & Industry", location: "Saharanpur, U.P.", type: "research" },
    { name: "Star Paper Mills Ltd.", location: "Saharanpur, U.P.", type: "mill" },
    { name: "Century Paper Mills", location: "India", type: "mill" },
    { name: "Sri Venkata Posavi Engineering Works", location: "Hyderabad", type: "industry" },
    { name: "Multani Pharmaceuticals Ltd.", location: "Bhagwanpur – Roorkee, Uttarakhand", type: "pharma" },
    { name: "Galpha Laboratories Ltd.", location: "Baddi, H.P.", type: "pharma" },
    { name: "Marico Ltd. (B-2, SIDCUL)", location: "Selaqui, Dehradun, Uttarakhand", type: "industry" },
    { name: "Marico Ltd.", location: "Paonta Sahib, H.P.", type: "industry" },
    { name: "Rusi Pharma Pvt Ltd.", location: "Roorkee, Uttarakhand", type: "pharma" },
    { name: "Cheema Printpac Limited", location: "Mohali, Punjab", type: "industry" },
    { name: "Sameera Papers Private Limited", location: "Andhra Pradesh", type: "mill" },
    { name: "Gemini Graphics Pvt Ltd.", location: "Bidar, Karnataka", type: "industry" },
    { name: "Naini Tissues Limited (Naini Group of Industries)", location: "Kashipur, Uttarakhand", type: "mill" },
    { name: "Ruby Macons Limited (Paper Division)", location: "Vapi, Gujarat", type: "mill" },
    { name: "J. K. Paper Ltd.", location: "Gujarat", type: "mill" },
    { name: "Cosboard Industries Limited", location: "Cuttack, Orissa", type: "mill" },
  ];

  const typeMeta = {
    govt: { label: "Govt. / National Lab", icon: Landmark },
    research: { label: "Research Institute", icon: FlaskConical },
    mill: { label: "Paper / Pulp Mill", icon: Factory },
    pharma: { label: "Pharmaceuticals", icon: Building2 },
    industry: { label: "Industry", icon: Building2 },
    education: { label: "Academic Institute", icon: GraduationCap },
  };

  // Notable brands / marquee clients highlighted on the original logo wall
  const marqueeBrands = [
    "BILT", "Cadila Pharmaceuticals", "ITC Limited", "Indoco Remedies", "Larsen & Toubro",
    "Forest Research Institute", "Star Paper Mills", "CPPRI", "B K Birla Group", "Marico",
    "The Paper Specialist", "Three M Paper", "TNPL", "Reliance Industries", "Indian Institute of Packaging",
    "National Test House",
  ];

  const stats = [
    { value: "4", label: "National Test Houses Served" },
    { value: "15+", label: "Leading Paper & Pulp Mills" },
    { value: "10+", label: "Pharma & Research Labs" },
    { value: "500+", label: "Active Installations" },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400">Clientele / Reputed Clients</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Trusted by India&apos;s Leading Institutions</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            We take pride in having a long list of satisfied customers who always look up to us for their various
            requirements. Below are the names of a few of our major clients who reflect the goodwill we have generated
            over the years.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center space-y-1">
              <p className="text-3xl sm:text-4xl font-black text-blue-900">{s.value}</p>
              <p className="text-2xs sm:text-xs font-bold text-slate-500 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Marquee Brands Wall */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-blue-900">Marquee Clients</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Names That Trust Our Instruments</h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                From national testing houses and premier research institutes to leading paper mills and pharmaceutical
                majors — our equipment powers quality control across industries.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {marqueeBrands.map((brand) => (
                <div
                  key={brand}
                  className="flex items-center justify-center text-center bg-slate-50 border border-slate-100 rounded-xl px-4 py-6 hover:shadow-md hover:border-blue-100 transition-all"
                >
                  <span className="font-black text-slate-700 text-sm sm:text-base tracking-tight">{brand}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Client List */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Our Valued Clients</h2>
                <p className="text-slate-500 text-xs sm:text-sm">A representative list of organizations we proudly serve.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clients.map((client, idx) => {
                const meta = typeMeta[client.type];
                const Icon = meta.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-3 bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-md hover:border-blue-100 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h3 className="font-bold text-slate-800 text-sm leading-snug text-pretty">{client.name}</h3>
                      <p className="text-2xs text-slate-500 font-semibold">{client.location}</p>
                      <span className="inline-block text-4xs font-black uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded">
                        {meta.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-center text-xs text-slate-400 font-semibold italic pt-2">
              …and so many other satisfied clients across India and international markets.
            </p>
          </div>

          {/* Trust Callout */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-15" />
            <div className="relative z-10 space-y-5 max-w-3xl">
              <span className="inline-block text-amber-400 text-2xs font-bold uppercase tracking-wider">Why Clients Choose Us</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Long-Term Relationships Built on Quality</h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Most of our customers are satisfied with our products and services, and as a result we receive
                repeat orders. Our instruments are installed, calibrated, and certified working satisfactorily at
                India&apos;s most demanding research and industrial laboratories.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-slate-300 text-xs font-semibold">
                {[
                  "Repeat orders from national testing houses",
                  "Certified installations at CPPRI & IIT Roorkee",
                  "Serving paper mills nationwide",
                  "Trusted by leading pharma manufacturers",
                ].map((pt) => (
                  <div key={pt} className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
