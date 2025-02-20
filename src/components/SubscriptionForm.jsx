import React, { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdQhNarzX84rEFnKpMVVwNZjdhdkziqrwH0p6wN4O42QItMsA/formResponse";


  const GOOGLE_FORM_EMAIL_ID = "entry.1035966894"; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
  
      const iframeName = `hidden-iframe-${Date.now()}`;
      const iframe = document.createElement("iframe");
      iframe.name = iframeName;
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      const form = document.createElement("form");
      form.method = "POST";
      form.action = GOOGLE_FORM_URL;
      form.target = iframeName;
      form.style.display = "none";

      const input = document.createElement("input");
      input.name = GOOGLE_FORM_EMAIL_ID;
      input.value = email;

      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();

    
      setTimeout(() => {
        if (document.body.contains(form)) document.body.removeChild(form);
        if (document.body.contains(iframe)) document.body.removeChild(iframe);
      }, 1000);

      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      console.error("Submission error:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for updates"
          className="w-full px-6 py-4 rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent shadow-lg text-gray-800 pr-36"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          className={`absolute right-1 top-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-base font-medium hover:shadow-lg transition-all ${
            isSubmitting ? "opacity-70" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-2 text-sm ${
            message.includes("Thank you") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default SubscriptionForm;