"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckIcon, MailIcon } from "@/components/Icons";

const CONTACT_EMAIL = "sales@cgcein.com";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  company: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const initialValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  subject: "Managed Support Services",
  message: "",
  company: "",
};

const subjects = [
  "Managed Support Services",
  "Cloud Infrastructure",
  "IT Infrastructure Solutions",
  "IT & OT Cyber Security",
  "Data Backup / DR / BCP",
  "Staff Augmentation",
  "Other",
];

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((errs) => ({ ...errs, [name]: undefined }));
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please enter your full name.";
    if (!values.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!/^[0-9+\-\s()]{10,16}$/.test(values.phone.trim()))
      next.phone = "Enter a valid phone number.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Enter a valid email address.";
    if (!values.message.trim() || values.message.trim().length < 10)
      next.message = "Please describe your requirement (at least 10 characters).";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (values.company) {
      setStatus("sent");
      return;
    }

    if (!validate()) return;

    setStatus("sending");

    const subject = `${values.subject} — Enquiry from ${values.name}`;
    const body = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Subject: ${values.subject}`,
      ``,
      `Message:`,
      values.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => setStatus("sent"), 600);
  };

  return (
    <div className="contact-form-card">
      <div className="contact-form-head">
        <span className="contact-form-icon">
          <MailIcon />
        </span>
        <div>
          <h2>Get Free Consultation</h2>
          <p>Fill in the form and we&apos;ll get back to you within 24 hours.</p>
        </div>
      </div>

      {status === "sent" ? (
        <div className="form-success" role="status">
          <span className="form-success-icon">
            <CheckIcon />
          </span>
          <h3>Almost there!</h3>
          <p>
            Your email client should have opened with your enquiry. If not, email us directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
          <button
            type="button"
            className="btn btn-light form-again"
            onClick={() => {
              setValues(initialValues);
              setStatus("idle");
            }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={values.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                value={values.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              value={values.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject" value={values.subject} onChange={handleChange}>
              {subjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your requirement..."
              value={values.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          <input
            type="text"
            name="company"
            value={values.company}
            onChange={handleChange}
            className="hp-field"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <button
            type="submit"
            className="btn btn-grad contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Preparing..." : "Send Message"}
          </button>
          <p className="contact-form-note">
            By submitting, you agree to be contacted by our team. We respect your privacy.
          </p>
        </form>
      )}
    </div>
  );
}
