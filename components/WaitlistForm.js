"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, firebaseReady } from "@/lib/firebase";

const initialFormState = {
  name: "",
  email: "",
  organization: "",
};

const labels = {
  vi: {
    firebaseMissing:
      "Firebase chưa được cấu hình. Hãy thêm biến NEXT_PUBLIC_FIREBASE_* vào .env.local.",
    success: "Cảm ơn bạn! Bạn đã được thêm vào danh sách chờ.",
    submitError: "Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại.",
    fullName: "Họ và tên",
    email: "Địa chỉ email",
    organization: "Tổ chức",
    fullNamePlaceholder: "Họ và tên",
    emailPlaceholder: "Địa chỉ email",
    organizationPlaceholder: "Tổ chức (không bắt buộc)",
    submitting: "Đang gửi...",
    submit: "Đăng ký danh sách chờ",
  },
  en: {
    firebaseMissing:
      "Firebase is not configured yet. Add NEXT_PUBLIC_FIREBASE_* values to .env.local.",
    success: "Thanks! You are on the waitlist.",
    submitError: "Something went wrong while submitting. Please try again.",
    fullName: "Full name",
    email: "Email address",
    organization: "Organization",
    fullNamePlaceholder: "Full name",
    emailPlaceholder: "Email address",
    organizationPlaceholder: "Organization (optional)",
    submitting: "Submitting...",
    submit: "Join Waitlist",
  },
};

export default function WaitlistForm({ locale = "vi" }) {
  const t = labels[locale] ?? labels.vi;
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firebaseReady || !db) {
      setStatus({
        type: "error",
        message: t.firebaseMissing,
      });
      return;
    }

    try {
      setSubmitting(true);
      setStatus({ type: "", message: "" });

      await addDoc(collection(db, "waitlist"), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        organization: formData.organization.trim(),
        createdAt: serverTimestamp(),
      });

      setFormData(initialFormState);
      setStatus({
        type: "success",
        message: t.success,
      });
    } catch {
      setStatus({
        type: "error",
        message: t.submitError,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="waitlist" onSubmit={handleSubmit}>
      <div className="waitlist-fields">
        <label>
          <span className="sr-only">{t.fullName}</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.fullNamePlaceholder}
            required
            autoComplete="name"
          />
        </label>

        <label>
          <span className="sr-only">{t.email}</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.emailPlaceholder}
            required
            autoComplete="email"
          />
        </label>

        <label>
          <span className="sr-only">{t.organization}</span>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder={t.organizationPlaceholder}
            autoComplete="organization"
          />
        </label>
      </div>

      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? t.submitting : t.submit}
      </button>

      <p className={`waitlist-message ${status.type}`}>{status.message}</p>
    </form>
  );
}
