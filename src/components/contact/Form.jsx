import React from "react";
import toast, { Toaster } from "react-hot-toast";

// Where messages are delivered.
const CONTACT_EMAIL = "ibad23ahmad@gmail.com";

// Optional: set VITE_WEB3FORMS_ACCESS_KEY in .env for the spam-safe path
// (email not exposed in source). If unset, we fall back to FormSubmit,
// which needs zero config — the first submission sends a one-time
// confirmation email to CONTACT_EMAIL; click it once and you're live.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function ContactForm() {
  const [formData, setData] = React.useState({
    email: "",
    name: "",
    message: "",
  });
  const [sending, setSending] = React.useState(false);

  const submit = async () => {
    if (WEB3FORMS_KEY) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New message from ${formData.name} — Portfolio`,
          from_name: "Portfolio Contact Form",
          ...formData,
        }),
      });
      return (await res.json()).success;
    }

    // FormSubmit fallback (no key required).
    const res = await fetch(
      `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New message from ${formData.name} — Portfolio`,
          _template: "table",
          ...formData,
        }),
      }
    );
    const data = await res.json();
    return data.success === true || data.success === "true";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const ok = await submit();
      if (ok) {
        toast.success("Thanks! I'll be in contact with you shortly.");
        setData({ email: "", name: "", message: "" });
      } else {
        toast.error("Couldn't send right now. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          className="field"
          type="text"
          value={formData.name}
          onChange={(e) => setData({ ...formData, name: e.target.value })}
          required
          placeholder="Name"
          name="name"
        />
        <input
          className="field"
          type="email"
          value={formData.email}
          onChange={(e) => setData({ ...formData, email: e.target.value })}
          required
          placeholder="Email"
          name="email"
        />
        <textarea
          className="field field--textarea"
          value={formData.message}
          onChange={(e) => setData({ ...formData, message: e.target.value })}
          required
          placeholder="Message"
          name="message"
        />
        <button type="submit" className="submit-btn" disabled={sending}>
          {sending ? "Sending…" : "Send"}
        </button>
      </form>
    </div>
  );
}
