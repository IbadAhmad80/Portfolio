import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [formData, setData] = React.useState({
    email: "",
    name: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("I will be in contact with you shortly");
    setData({ email: "", name: "", message: "" });
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
          name="hidden"
        />

        <br />
        <input
          id="input_field"
          type="email"
          value={formData.email}
          onChange={(e) => setData({ ...formData, email: e.target.value })}
          required
          placeholder="Email"
        />

        <br />
        <textarea
          id="message"
          type="text"
          value={formData.message}
          onChange={(e) => setData({ ...formData, message: e.target.value })}
          required
          placeholder="Message"
        />
        <br />
        <button type="submit" id="form_submit_btn">
          Send
        </button>
      </form>
    </div>
  );
}
