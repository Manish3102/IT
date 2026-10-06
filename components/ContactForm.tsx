"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ChevronDown, Loader2, Send } from "lucide-react";
import { services } from "@/data/services";

type Fields = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  website: string; // honeypot
};

const empty: Fields = { fullName: "", company: "", email: "", phone: "", service: "", budget: "", message: "", website: "" };

const budgets = ["Under ₹1 Lakh", "₹1 – 3 Lakh", "₹3 – 10 Lakh", "₹10 Lakh+", "Not sure yet"];

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.phone.trim() && !/^[+\d][\d\s()-]{6,18}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!f.service) e.service = "Please choose a service.";
  if (f.message.trim().length < 20) e.message = "Tell us a little more (at least 20 characters).";
  return e;
}

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [fields, setFields] = useState<Fields>({ ...empty, service: defaultService });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (k: keyof Fields, v: string) => {
    const next = { ...fields, [k]: v };
    setFields(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k: keyof Fields) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(fields));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(fields);
    setErrors(v);
    setTouched({ fullName: true, email: true, phone: true, service: true, message: true });
    if (Object.keys(v).length) {
      const first = Object.keys(v)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFields({ ...empty });
      setTouched({});
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full scroll-mt-32 rounded-xl border bg-white px-4 py-3 text-[15px] text-text outline-none transition-all placeholder:text-muted/60 focus:border-brand-500 focus:ring-4 focus:ring-brand-100";
  const border = (k: keyof Fields) => (errors[k] && touched[k] ? "border-red-400" : "border-line");

  const Field = ({
    k,
    label,
    required,
    children,
  }: {
    k: keyof Fields;
    label: string;
    required?: boolean;
    children: React.ReactNode;
  }) => (
    <div>
      <label htmlFor={`cf-${k}`} className="mb-1.5 block text-sm font-semibold text-text">
        {label} {required ? <span className="text-brand-600">*</span> : <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {errors[k] && touched[k] && (
        <p id={`cf-${k}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-[13px] text-red-600">
          <AlertCircle aria-hidden className="size-3.5" /> {errors[k]}
        </p>
      )}
    </div>
  );

  const aria = (k: keyof Fields) => ({
    id: `cf-${k}`,
    name: k,
    "aria-invalid": !!(errors[k] && touched[k]),
    "aria-describedby": errors[k] && touched[k] ? `cf-${k}-error` : undefined,
  });

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-16 text-center"
            role="status"
          >
            <span className="inline-flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="size-8" />
            </span>
            <h3 className="mt-6 text-2xl font-semibold">Thank you — inquiry received!</h3>
            <p className="mt-3 max-w-sm text-muted">
              Our team will review your requirements and get back to you within one business day.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm font-semibold text-brand-700 hover:underline"
            >
              Send another inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" initial={false}>
            {/* honeypot — hidden from people, catches bots */}
            <div className="hidden" aria-hidden>
              <label>
                Website
                <input tabIndex={-1} autoComplete="off" value={fields.website} onChange={(e) => set("website", e.target.value)} />
              </label>
            </div>
            {Field({
              k: "fullName",
              label: "Full Name",
              required: true,
              children: (
                <input
                  {...aria("fullName")}
                  autoComplete="name"
                  className={`${input} ${border("fullName")}`}
                  placeholder="Your name"
                  value={fields.fullName}
                  onChange={(e) => set("fullName", e.target.value)}
                  onBlur={() => blur("fullName")}
                />
              ),
            })}
            {Field({
              k: "company",
              label: "Company Name",
              children: (
                <input
                  {...aria("company")}
                  autoComplete="organization"
                  className={`${input} ${border("company")}`}
                  placeholder="Company / brand"
                  value={fields.company}
                  onChange={(e) => set("company", e.target.value)}
                />
              ),
            })}
            {Field({
              k: "email",
              label: "Email",
              required: true,
              children: (
                <input
                  {...aria("email")}
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  className={`${input} ${border("email")}`}
                  placeholder="you@company.com"
                  value={fields.email}
                  onChange={(e) => set("email", e.target.value)}
                  onBlur={() => blur("email")}
                />
              ),
            })}
            {Field({
              k: "phone",
              label: "Phone Number",
              children: (
                <input
                  {...aria("phone")}
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  className={`${input} ${border("phone")}`}
                  placeholder="+91 98765 43210"
                  value={fields.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  onBlur={() => blur("phone")}
                />
              ),
            })}
            {Field({
              k: "service",
              label: "Service Required",
              required: true,
              children: (
                <div className="relative">
                <select
                  {...aria("service")}
                  className={`${input} ${border("service")} appearance-none pr-10`}
                  value={fields.service}
                  onChange={(e) => set("service", e.target.value)}
                  onBlur={() => blur("service")}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other / Not sure">Other / Not sure</option>
                </select>
                <ChevronDown aria-hidden className="pointer-events-none absolute right-3.5 top-1/2 size-4.5 -translate-y-1/2 text-muted" />
                </div>
              ),
            })}
            {Field({
              k: "budget",
              label: "Budget",
              children: (
                <div className="relative">
                <select
                  {...aria("budget")}
                  className={`${input} ${border("budget")} appearance-none pr-10`}
                  value={fields.budget}
                  onChange={(e) => set("budget", e.target.value)}
                >
                  <option value="">Select a range</option>
                  {budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
                <ChevronDown aria-hidden className="pointer-events-none absolute right-3.5 top-1/2 size-4.5 -translate-y-1/2 text-muted" />
                </div>
              ),
            })}
            <div className="sm:col-span-2">
              {Field({
                k: "message",
                label: "Message",
                required: true,
                children: (
                  <textarea
                    {...aria("message")}
                    rows={5}
                    className={`${input} ${border("message")} resize-y`}
                    placeholder="Tell us about your project, goals and timeline…"
                    value={fields.message}
                    onChange={(e) => set("message", e.target.value)}
                    onBlur={() => blur("message")}
                  />
                ),
              })}
            </div>
            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-relaxed text-muted">
                By submitting, you agree to our{" "}
                <a href="/privacy-policy" className="font-semibold text-brand-700 hover:underline">
                  Privacy Policy
                </a>
                . We never share your details.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 font-semibold text-white shadow-[0_10px_30px_-10px_rgb(42_149_224/0.6)] transition-all hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 aria-hidden className="size-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send Inquiry <Send aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
            {status === "error" && (
              <p role="alert" className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
                <AlertCircle aria-hidden className="size-4 shrink-0" />
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
