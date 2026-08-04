"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Phone, Mail, Clock } from "lucide-react";
import { useRFQ } from "@/context/RFQContext";
import StarBorder from "@/components/reactbits/StarBorder";

interface RFQFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  instrumentChoice: string;
  message: string;
}

const inputBase =
  "w-full rounded-lg border bg-surface-2/60 px-3 py-2 text-sm text-foreground placeholder:text-muted transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary-bright";
const labelBase = "block text-[0.6rem] font-bold uppercase tracking-wider text-muted mb-1.5";

export default function RFQModal() {
  const { isOpen, prefilledInstrument, closeRFQ } = useRFQ();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RFQFormData>({
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      instrumentChoice: "",
      message: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      setValue("instrumentChoice", prefilledInstrument);
      setIsSubmitted(false);
    }
  }, [isOpen, prefilledInstrument, setValue]);

  const onSubmit = async (data: RFQFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("RFQ Submission Data:", data);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    reset();
    closeRFQ();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="glass-panel border-glow-ring relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl shadow-2xl md:flex-row"
          >
            {/* Sidebar with Info (visible on desktop) */}
            <div className="relative hidden flex-col justify-between overflow-hidden border-r border-border bg-gradient-to-b from-primary/20 via-surface-2 to-surface p-6 md:flex md:w-1/3">
              <div className="pointer-events-none absolute inset-0 bg-dot-fade opacity-50" />
              <div className="animate-aurora pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/30 blur-3xl" />

              <div className="relative z-10">
                <h3 className="mb-2 text-xl font-bold text-foreground">Request Quote</h3>
                <p className="text-sm leading-relaxed text-muted">
                  Submit this form to receive a customized technical proposal and pricing.
                </p>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">Call Support</p>
                    <p className="text-muted">+91-97605-77862</p>
                    <p className="text-muted">+91-94121-31200</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">Email Us</p>
                    <p className="break-all text-muted">info@angelsinstruments.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">Response Time</p>
                    <p className="text-muted">Within 24 Hours</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                ANGELS INSTRUMENTS
                <br />
                ISO 9001:2008 Certified
              </div>
            </div>

            {/* Form Content */}
            <div className="relative flex-1 p-6 sm:p-8">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 rounded-lg p-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {!isSubmitted ? (
                <>
                  <h2 className="mb-1 text-xl font-bold text-foreground sm:text-2xl">Request for Quote</h2>
                  <p className="mb-6 text-sm text-muted">ANGELS INSTRUMENTS • High Precision Quality Control</p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelBase}>Your Name *</label>
                        <input
                          type="text"
                          className={`${inputBase} ${errors.name ? "border-red-500/60" : "border-border"}`}
                          placeholder="John Doe"
                          {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="mt-1 text-[0.65rem] text-red-400">{errors.name.message}</p>}
                      </div>

                      <div>
                        <label className={labelBase}>Company Name *</label>
                        <input
                          type="text"
                          className={`${inputBase} ${errors.companyName ? "border-red-500/60" : "border-border"}`}
                          placeholder="Acme Paper Ltd."
                          {...register("companyName", { required: "Company name is required" })}
                        />
                        {errors.companyName && <p className="mt-1 text-[0.65rem] text-red-400">{errors.companyName.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelBase}>Email Address *</label>
                        <input
                          type="email"
                          className={`${inputBase} ${errors.email ? "border-red-500/60" : "border-border"}`}
                          placeholder="john@company.com"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && <p className="mt-1 text-[0.65rem] text-red-400">{errors.email.message}</p>}
                      </div>

                      <div>
                        <label className={labelBase}>Phone Number *</label>
                        <input
                          type="tel"
                          className={`${inputBase} ${errors.phone ? "border-red-500/60" : "border-border"}`}
                          placeholder="+91 XXXXX XXXXX"
                          {...register("phone", { required: "Phone number is required" })}
                        />
                        {errors.phone && <p className="mt-1 text-[0.65rem] text-red-400">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className={labelBase}>Selected Instrument / Category *</label>
                      <input
                        type="text"
                        className={`${inputBase} ${errors.instrumentChoice ? "border-red-500/60" : "border-border"}`}
                        placeholder="e.g. Bursting Strength Tester"
                        {...register("instrumentChoice", {
                          required: "Please specify the instrument you are inquiring about",
                        })}
                      />
                      {errors.instrumentChoice && <p className="mt-1 text-[0.65rem] text-red-400">{errors.instrumentChoice.message}</p>}
                    </div>

                    <div>
                      <label className={labelBase}>Additional Message / Special Requirements</label>
                      <textarea
                        rows={3}
                        className={`${inputBase} border-border`}
                        placeholder="Please include details like capacity, size, custom standards, or delivery timelines..."
                        {...register("message")}
                      />
                    </div>

                    <StarBorder type="submit" disabled={isSubmitting} className="mt-4 w-full">
                      <span className="glare-hover inline-flex w-full items-center justify-center gap-2 rounded-[calc(0.5rem-1px)] bg-accent px-5 py-3 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-colors group-hover:bg-accent-bright">
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent" />
                            Processing RFQ...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Quote Request
                          </>
                        )}
                      </span>
                    </StarBorder>
                  </form>
                </>
              ) : (
                <div className="flex h-full flex-col items-center justify-center px-4 py-12 text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  >
                    <CheckCircle2 className="h-10 w-10" />
                  </motion.div>
                  <h3 className="mb-2 text-2xl font-bold text-foreground">Quote Request Sent!</h3>
                  <p className="mb-8 max-w-sm text-sm leading-relaxed text-muted">
                    Thank you for contacting Angels Instruments. Our technical sales team is reviewing your specifications and will respond with an official quotation within 24 hours.
                  </p>
                  <button
                    onClick={handleClose}
                    className="rounded-lg bg-primary px-6 py-2 font-semibold text-primary-foreground transition-colors hover:bg-primary-bright glow-primary"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
