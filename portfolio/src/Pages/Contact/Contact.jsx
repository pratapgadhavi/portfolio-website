import React, { useState, useEffect } from "react";
import "./Contact.css";
import Button from "../../Components/Button/Button";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollReveal from "../../Components/AnimatedSection/ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toastStyle, setToastStyle] = useState(getToastStyle());

  // Function to calculate top margin dynamically
  function getToastStyle() {
    return { marginTop: window.innerWidth >= 768 ? "50px" : "0px" };
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setLoading(true);

      emailjs
        .send(
          "service_u10md7n",
          "template_vyv2qie",
          formData,
          "GnhNrUSivGzwn3hod"
        )
        .then(
          () => {
            toast.dismiss();
            toast.success("Form Successfully Submitted!", {
              position: "top-right",
              autoClose: 3000,
              closeButton: true,
              progressBar: true,
              pauseOnHover: false,
              theme: "colored",
            });
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
            setErrors({});
          },
          () => {
            toast.dismiss();
            toast.error("Failed to send message, please try again.", {
              position: "top-right",
              autoClose: 2500,
              pauseOnHover: false,
              closeButton: true,
              progressBar: true,
              theme: "colored",
            });
          }
        )
        .finally(() => setLoading(false));
    } else {
      toast.dismiss();
      toast.warning("Please fill all required fields!", {
        position: "top-right",
        autoClose: 2500,
        pauseOnHover: false,
        closeButton: true,
        theme: "colored",
      });
    }
  };

  return (
    <section
      id="contact"
      className="contact-section min-h-screen md:min-h-96 flex flex-col items-center justify-center text-white relative"
    >
      <div className="absolute inset-0 z-0"></div>

      <ScrollReveal direction="up" duration={1} delay={0.2}>
        <h2 className="text-5xl font-extrabold text-center z-10 mb-16">
          Contact <span className="text-sky-600">Me!</span>
        </h2>
      </ScrollReveal>

      <form
        onSubmit={handleSubmit}
        className="contact-form z-10 w-[100%] sm:w-[90%] md:w-[85%] lg:w-[50%] border-2 border-sky-600 rounded-xl p-6 md:p-8 backdrop-blur-sm"
      >
        {/* Row 1 */}
        <ScrollReveal direction="up" duration={1.9}>
          <div className="flex flex-col sm:flex-row gap-6 mb-5">
            <div className="flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="input-box w-full"
              />
              {errors.name && <p className="erro-msg mt-1">{errors.name}</p>}
            </div>

            <div className="flex-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="input-box w-full"
              />
              {errors.email && <p className="erro-msg mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <div className="flex-1">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="input-box w-full"
              />
              {errors.phone && <p className="erro-msg mt-1">{errors.phone}</p>}
            </div>

            <div className="flex-1">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="input-box w-full"
              />
              {errors.subject && (
                <p className="erro-msg mt-1">{errors.subject}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="input-box w-full"
            ></textarea>
            {errors.message && (
              <p className="erro-msg mt-1">{errors.message}</p>
            )}
          </div>

          <div className="text-center">
            <Button type="submit" text={loading ? "Sending..." : "Submit"} />
          </div>
        </ScrollReveal>
      </form>

      {/* Toast Container with dynamic margin */}
      <ToastContainer style={toastStyle} limit={1} />
    </section>
  );
};

export default Contact;
