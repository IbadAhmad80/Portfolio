import React from "react";
import toast, { Toaster } from "react-hot-toast";

// Web3Forms access key (free, no account): https://web3forms.com
// Put your key in a .env file as VITE_WEB3FORMS_ACCESS_KEY=xxxx
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function ContactForm() {
  const [formData, setData] = React.useState({
    email: "",
    name: "",
    message: "",
  });
  const [sending, setSending] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ACCESS_KEY) {
      toast.error("Contact form isn't configured yet.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New message from ${formData.name} — Portfolio`,
          from_name: "Portfolio Contact Form",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Thanks! I'll be in contact with you shortly.");
        setData({ email: "", name: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ zIndex: "100" }} data-aos="fade-up" data-aos-duration="1000">
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          id="input_field"
          type="text"
          value={formData.name}
          onChange={(e) => setData({ ...formData, name: e.target.value })}
          required
          placeholder="Name"
          name="name"
        />

        <br />
        <input
          id="input_field"
          type="email"
          value={formData.email}
          onChange={(e) => setData({ ...formData, email: e.target.value })}
          required
          placeholder="Email"
          name="email"
        />

        <br />
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setData({ ...formData, message: e.target.value })}
          required
          placeholder="Message"
          name="message"
        />
        <br />
        <button type="submit" id="form_submit_btn" disabled={sending}>
          {sending ? "Sending…" : "Send"}
        </button>
      </form>
    </div>
  );
}
