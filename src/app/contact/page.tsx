"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Award, User } from "lucide-react";
import PageHero from "@/components/PageHero";
import PageBackground from "@/components/reactbits/PageBackground";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import StarBorder from "@/components/reactbits/StarBorder";

interface ContactFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const inputBase =
  "w-full rounded-lg border bg-surface-2/60 px-3 py-2 text-sm text-foreground placeholder:text-muted transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary-bright";
const labelBase = "block text-[0.6rem] font-bold uppercase tracking-wider text-muted mb-1.5";

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
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Contact Support"
        title="Get in Touch With Our Team"
        description="Reach out to SALEHEEN SIDDIQUI and our engineering team for quotes, custom specs, and technical assistance."
      />

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <PageBackground variant="particles" />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">

          {/* Left: Contact Details */}
          <div className="space-y-6 lg:col-span-5">
            {/* Contact Person Card */}
            <div className="glass-panel border-glow-ring relative overflow-hidden rounded-2xl p-6">
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent-bright">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[0.6rem] font-bold uppercase tracking-wider text-accent-bright">Contact Person</p>
                    <p className="text-lg font-bold text-foreground">SALEHEEN SIDDIQUI</p>
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <a href="tel:+919760577862" className="flex items-center gap-2.5 text-sm text-muted-strong transition-colors hover:text-primary-bright">
                    <Phone className="h-4 w-4 shrink-0 text-accent" /><span>(+91) 9760577862</span>
                  </a>
                  <a href="tel:+919412131200" className="flex items-center gap-2.5 text-sm text-muted-strong transition-colors hover:text-primary-bright">
                    <Phone className="h-4 w-4 shrink-0 text-accent" /><span>(+91) 9412131200</span>
                  </a>
                  <a href="mailto:info@angelsinstruments.in" className="flex items-center gap-2.5 text-sm text-muted-strong transition-colors hover:text-primary-bright">
                    <Mail className="h-4 w-4 shrink-0 text-accent" /><span>info@angelsinstruments.in</span>
                  </a>
                  <a href="mailto:angelsinstruments@gmail.com" className="flex items-center gap-2.5 text-sm text-muted-strong transition-colors hover:text-primary-bright">
                    <Mail className="h-4 w-4 shrink-0 text-accent" /><span>angelsinstruments@gmail.com</span>
                  </a>
                  <a href="https://wa.me/919760577862" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300">
                    <MessageSquare className="h-4 w-4 shrink-0" /><span>24/7 WhatsApp: +91-97605-77862</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <SpotlightCard className="space-y-4 p-6">
              <h4 className="border-b border-border pb-2 text-sm font-bold text-foreground">Office &amp; Factory Addresses</h4>
              <div className="space-y-4">
                <div className="flex gap-3 text-xs text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="mb-0.5 font-bold text-foreground">Office Address</p>
                    <p className="leading-relaxed">Angels Instruments (An ISO 9001:2008 Certified Company)<br />11-B/2902, Lane No. 15,<br />Sahin Bagh, Saharanpur - 247001 (U.P.) India</p>
                  </div>
                </div>
                <div className="flex gap-3 text-xs text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-bright" />
                  <div>
                    <p className="mb-0.5 font-bold text-foreground">Factory Address</p>
                    <p className="leading-relaxed">ANGELS INSTRUMENTS<br />Plot No. 24, Opp. S.R.S. Hospital,<br />Baalpur Road, Near Brown Wood School – Back Gate,<br />Chilkana Road, Saharanpur (UP) - 247001 India</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* ISO Badge */}
            <div className="flex items-center gap-3 rounded-xl border border-accent/20 bg-accent/10 p-4 text-xs font-semibold text-accent-bright">
              <Award className="h-5 w-5 shrink-0 text-accent" />
              <span>An NS-EN ISO 9001:2008 / ISO 9001:2008 Certified Company (KVQA, Norway)</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="space-y-6 lg:col-span-7">
            <SpotlightCard className="p-6 sm:p-8">
              {!isSubmitted ? (
                <>
                  <h3 className="mb-1 text-xl font-bold text-foreground">Technical Inquiry Form</h3>
                  <p className="mb-6 text-xs text-muted">ANGELS INSTRUMENTS • Share specifications and requirements. We respond within 24 hours.</p>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelBase}>Full Name *</label>
                        <input type="text" placeholder="John Doe"
                          className={`${inputBase} ${errors.name ? "border-red-500/60" : "border-border"}`}
                          {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className="mt-1 text-[0.65rem] text-red-400">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className={labelBase}>Company Name *</label>
                        <input type="text" placeholder="Acme Paper Ltd"
                          className={`${inputBase} ${errors.companyName ? "border-red-500/60" : "border-border"}`}
                          {...register("companyName", { required: "Company name is required" })} />
                        {errors.companyName && <p className="mt-1 text-[0.65rem] text-red-400">{errors.companyName.message}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelBase}>Email Address *</label>
                        <input type="email" placeholder="john@company.com"
                          className={`${inputBase} ${errors.email ? "border-red-500/60" : "border-border"}`}
                          {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" } })} />
                        {errors.email && <p className="mt-1 text-[0.65rem] text-red-400">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className={labelBase}>Phone Number *</label>
                        <input type="tel" placeholder="+91 XXXXX XXXXX"
                          className={`${inputBase} ${errors.phone ? "border-red-500/60" : "border-border"}`}
                          {...register("phone", { required: "Phone number is required" })} />
                        {errors.phone && <p className="mt-1 text-[0.65rem] text-red-400">{errors.phone.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className={labelBase}>Inquiry Department</label>
                      <select className={`${inputBase} border-border`} {...register("subject")}>
                        <option value="general">General Sales Inquiry</option>
                        <option value="specs">Custom Instrument Specifications</option>
                        <option value="calibration">Annual Calibration / AMC Packages</option>
                        <option value="export">International Exporting Support</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelBase}>Technical Requirements / Message *</label>
                      <textarea rows={4} placeholder="Please detail testing requirements, standards (TAPPI, ISO, ASTM), capacities, and deadlines..."
                        className={`${inputBase} ${errors.message ? "border-red-500/60" : "border-border"}`}
                        {...register("message", { required: "Message is required" })} />
                      {errors.message && <p className="mt-1 text-[0.65rem] text-red-400">{errors.message.message}</p>}
                    </div>
                    <StarBorder type="submit" disabled={isSubmitting} className="w-full">
                      <span className="glare-hover inline-flex w-full items-center justify-center gap-2 rounded-[calc(0.5rem-1px)] bg-accent py-3 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-colors group-hover:bg-accent-bright">
                        {isSubmitting ? (
                          <><div className="h-5 w-5 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent" />Sending Inquiry...</>
                        ) : (
                          <><Send className="h-4 w-4" />Send Message</>
                        )}
                      </span>
                    </StarBorder>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center px-4 py-10 text-center">
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 className="h-9 w-9" />
                  </motion.div>
                  <h3 className="mb-1 text-xl font-bold text-foreground">Message Sent!</h3>
                  <p className="mb-6 max-w-sm text-xs leading-relaxed text-muted">
                    Thank you. Your inquiry has been sent to SALEHEEN SIDDIQUI and our team. We will respond within 24 hours.
                  </p>
                  <button onClick={() => { reset(); setIsSubmitted(false); }}
                    className="rounded-lg bg-primary px-5 py-2 font-semibold text-primary-foreground transition-colors hover:bg-primary-bright glow-primary">
                    Submit New Inquiry
                  </button>
                </div>
              )}
            </SpotlightCard>

            {/* Live Google Map — factory location */}
            <div className="relative h-[240px] overflow-hidden rounded-2xl border border-border bg-surface-2">
              <iframe
                title="Angels Instruments location on Google Maps"
                src="https://maps.google.com/maps?q=XGWM%2B2XX%20Chilkana%20Road%2C%20Khatakheri%2C%20Saharanpur%2C%20Uttar%20Pradesh%20247001&z=15&output=embed"
                className="absolute inset-0 h-full w-full border-0 opacity-90 [filter:invert(0.9)_hue-rotate(180deg)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href="https://maps.google.com/maps?q=XGWM%2B2XX%20Chilkana%20Road%2C%20Khatakheri%2C%20Saharanpur%2C%20Uttar%20Pradesh%20247001"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 z-10 rounded-lg border border-border-strong bg-surface/90 px-3 py-1.5 font-mono text-[0.6rem] font-bold uppercase tracking-wide text-foreground backdrop-blur-sm transition-colors hover:border-primary-bright"
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
