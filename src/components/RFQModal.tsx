"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Phone, Mail, Clock } from "lucide-react";
import { useRFQ } from "@/context/RFQContext";

interface RFQFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  instrumentChoice: string;
  message: string;
}

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

  // Update prefilled field when modal opens/context changes
  useEffect(() => {
    if (isOpen) {
      setValue("instrumentChoice", prefilledInstrument);
      setIsSubmitted(false);
    }
  }, [isOpen, prefilledInstrument, setValue]);

  const onSubmit = async (data: RFQFormData) => {
    // Simulate API Request
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
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100 flex flex-col md:flex-row"
          >
            {/* Sidebar with Info (visible on desktop) */}
            <div className="hidden md:flex md:w-1/3 bg-blue-900 text-white p-6 flex-col justify-between relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-800/40" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-blue-800/30" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Request Quote</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Submit this form to receive a customized technical proposal and pricing.
                </p>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <p className="font-semibold">Call Support</p>
                    <p className="text-blue-200">+91-97605-77862</p>
                    <p className="text-blue-200">+91-94121-31200</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-blue-200 break-all">info@angelsinstruments.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <p className="font-semibold">Response Time</p>
                    <p className="text-blue-200">Within 24 Hours</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 text-xs text-blue-200">
                ANGELS INSTRUMENTS
                <br />
                ISO 9001:2008 Certified
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 p-6 sm:p-8 relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                    Request for Quote
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">
                    ANGELS INSTRUMENTS • High Precision Quality Control
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all ${
                            errors.name ? "border-red-500 focus:ring-red-500" : "border-slate-200"
                          }`}
                          placeholder="John Doe"
                          {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all ${
                            errors.companyName
                              ? "border-red-500 focus:ring-red-500"
                              : "border-slate-200"
                          }`}
                          placeholder="Acme Paper Ltd."
                          {...register("companyName", { required: "Company name is required" })}
                        />
                        {errors.companyName && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors.companyName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all ${
                            errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-200"
                          }`}
                          placeholder="john@company.com"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all ${
                            errors.phone ? "border-red-500 focus:ring-red-500" : "border-slate-200"
                          }`}
                          placeholder="+91 XXXXX XXXXX"
                          {...register("phone", { required: "Phone number is required" })}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Instrument Choice */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">
                        Selected Instrument / Category *
                      </label>
                      <input
                        type="text"
                        className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all ${
                          errors.instrumentChoice
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-200"
                        }`}
                        placeholder="e.g. Bursting Strength Tester"
                        {...register("instrumentChoice", {
                          required: "Please specify the instrument you are inquiring about",
                        })}
                      />
                      {errors.instrumentChoice && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.instrumentChoice.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">
                        Additional Message / Special Requirements
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
                        placeholder="Please include details like capacity, size, custom standards, or delivery timelines..."
                        {...register("message")}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-900 font-bold px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                          Processing RFQ...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Quote Request
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-12 px-4 h-full">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4 border border-green-100"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Sent!</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-8">
                    Thank you for contacting Angels Instruments. Our technical sales team is
                    reviewing your specifications and will respond with an official quotation within
                    24 hours.
                  </p>
                  <button
                    onClick={handleClose}
                    className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg transition-colors shadow-md"
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
