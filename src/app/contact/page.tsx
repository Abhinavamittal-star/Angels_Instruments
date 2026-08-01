"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare, Award, User } from "lucide-react";

interface ContactFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    defaultValues: { name: "", companyName: "", email: "", phone: "", subject: "general", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact Form:", data);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-white flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400">Contact Support</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Get in Touch With Our Team</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reach out to SALEHEEN SIDDIQUI and our engineering team for quotes, custom specs, and technical assistance.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Contact Details */}
          <div className="lg:col-span-5 space-y-6">

            {/* Contact Person Card */}
            <div className="bg-blue-900 text-white p-6 rounded-2xl relative overflow-hidden shadow-lg">
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-blue-800/40" />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-3xs font-bold uppercase tracking-wider text-amber-400">Contact Person</p>
                    <p className="text-lg font-black text-white">SALEHEEN SIDDIQUI</p>
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <a href="tel:+919760577862" className="flex items-center gap-2.5 text-sm text-blue-100 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>(+91) 9760577862</span>
                  </a>
                  <a href="tel:+919412131200" className="flex items-center gap-2.5 text-sm text-blue-100 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>(+91) 9412131200</span>
                  </a>
                  <a href="mailto:info@angelsinstruments.in" className="flex items-center gap-2.5 text-sm text-blue-100 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>info@angelsinstruments.in</span>
                  </a>
                  <a href="mailto:angelsinstruments@gmail.com" className="flex items-center gap-2.5 text-sm text-blue-100 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>angelsinstruments@gmail.com</span>
                  </a>
                  <a href="https://wa.me/919760577862" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-green-300 hover:text-green-200 font-semibold transition-colors">
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>24/7 WhatsApp: +91-97605-77862</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-slate-900 text-sm border-b border-slate-200 pb-2">Office &amp; Factory Addresses</h4>
              <div className="space-y-4">
                <div className="flex gap-3 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 mb-0.5">Office Address</p>
                    <p className="leading-relaxed">Angels Instruments (An ISO 9001:2008 Certified Company)<br />11-B/2902, Lane No. 15,<br />Sahin Bagh, Saharanpur - 247001 (U.P.) India</p>
                  </div>
                </div>
                <div className="flex gap-3 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 mb-0.5">Factory Address</p>
                    <p className="leading-relaxed">ANGELS INSTRUMENTS<br />Plot No. 24, Opp. S.R.S. Hospital,<br />Baalpur Road, Near Brown Wood School – Back Gate,<br />Chilkana Road, Saharanpur (UP) - 247001 India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ISO Badge */}
            <div className="flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 text-amber-700 p-4 rounded-xl text-xs font-semibold">
              <Award className="w-5 h-5 text-amber-500 shrink-0" />
              <span>An NS-EN ISO 9001:2008 / ISO 9001:2008 Certified Company (KVQA, Norway)</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              {!isSubmitted ? (
                <>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Technical Inquiry Form</h3>
                  <p className="text-slate-500 text-xs mb-6">ANGELS INSTRUMENTS • Share specifications and requirements. We respond within 24 hours.</p>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-2xs font-bold uppercase text-slate-500 mb-1.5">Full Name *</label>
                        <input type="text" placeholder="John Doe"
                          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all ${errors.name ? "border-red-500" : "border-slate-200"}`}
                          {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className="text-2xs text-red-500 mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-2xs font-bold uppercase text-slate-500 mb-1.5">Company Name *</label>
                        <input type="text" placeholder="Acme Paper Ltd"
                          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all ${errors.companyName ? "border-red-500" : "border-slate-200"}`}
                          {...register("companyName", { required: "Company name is required" })} />
                        {errors.companyName && <p className="text-2xs text-red-500 mt-1">{errors.companyName.message}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-2xs font-bold uppercase text-slate-500 mb-1.5">Email Address *</label>
                        <input type="email" placeholder="john@company.com"
                          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all ${errors.email ? "border-red-500" : "border-slate-200"}`}
                          {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" } })} />
                        {errors.email && <p className="text-2xs text-red-500 mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-2xs font-bold uppercase text-slate-500 mb-1.5">Phone Number *</label>
                        <input type="tel" placeholder="+91 XXXXX XXXXX"
                          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all ${errors.phone ? "border-red-500" : "border-slate-200"}`}
                          {...register("phone", { required: "Phone number is required" })} />
                        {errors.phone && <p className="text-2xs text-red-500 mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-2xs font-bold uppercase text-slate-500 mb-1.5">Inquiry Department</label>
                      <select className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white" {...register("subject")}>
                        <option value="general">General Sales Inquiry</option>
                        <option value="specs">Custom Instrument Specifications</option>
                        <option value="calibration">Annual Calibration / AMC Packages</option>
                        <option value="export">International Exporting Support</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-2xs font-bold uppercase text-slate-500 mb-1.5">Technical Requirements / Message *</label>
                      <textarea rows={4} placeholder="Please detail testing requirements, standards (TAPPI, ISO, ASTM), capacities, and deadlines..."
                        className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all ${errors.message ? "border-red-500" : "border-slate-200"}`}
                        {...register("message", { required: "Message is required" })} />
                      {errors.message && <p className="text-2xs text-red-500 mt-1">{errors.message.message}</p>}
                    </div>
                    <button type="submit" disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-sm py-3 rounded-lg shadow hover:shadow-lg transition-all disabled:opacity-75">
                      {isSubmitting ? (
                        <><div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />Sending Inquiry...</>
                      ) : (
                        <><Send className="w-4 h-4" />Send Message</>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-10 px-4">
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4 border border-green-100">
                    <CheckCircle2 className="w-9 h-9" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Message Sent!</h3>
                  <p className="text-slate-600 text-xs max-w-sm mb-6 leading-relaxed">
                    Thank you. Your inquiry has been sent to SALEHEEN SIDDIQUI and our team. We will respond within 24 hours.
                  </p>
                  <button onClick={() => { reset(); setIsSubmitted(false); }}
                    className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg transition-colors shadow">
                    Submit New Inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Live Google Map — factory location */}
            <div className="border border-slate-100 rounded-2xl overflow-hidden relative h-[240px] bg-slate-100">
              <iframe
                title="Angels Instruments location on Google Maps"
                src="https://maps.google.com/maps?q=XGWM%2B2XX%20Chilkana%20Road%2C%20Khatakheri%2C%20Saharanpur%2C%20Uttar%20Pradesh%20247001&z=15&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href="https://maps.google.com/maps?q=XGWM%2B2XX%20Chilkana%20Road%2C%20Khatakheri%2C%20Saharanpur%2C%20Uttar%20Pradesh%20247001"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 z-10 bg-slate-900/90 hover:bg-slate-900 text-white text-3xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg shadow border border-slate-800"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
