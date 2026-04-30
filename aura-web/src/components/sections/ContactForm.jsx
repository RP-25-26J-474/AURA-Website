import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
          form.current.reset();
      }, (error) => {
          setStatus({ type: 'error', message: 'Something went wrong. Please try again or email us directly.' });
          console.error('EmailJS Error:', error);
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  };

  return (
    <section className="py-16 px-6 bg-base-100">
      <div className="max-w-2xl mx-auto">
        <div className="p-8 border border-base-300 rounded-2xl bg-base-200/30">
          <h2 className="text-3xl font-bold mb-2">Send us a message</h2>
          <p className="text-base-content/60 mb-8">
            Fill out the form below and we'll get back to you soon.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder="Name" 
                  className="input input-bordered w-full bg-base-100" 
                  required 
                />
              </div>
              <div className="form-control">
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="Email Address" 
                  className="input input-bordered w-full bg-base-100" 
                  required 
                />
              </div>
            </div>

            <div className="form-control">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                className="input input-bordered w-full bg-base-100" 
                required 
              />
            </div>

            <div className="form-control">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                className="textarea textarea-bordered w-full min-h-[120px] bg-base-100" 
                required
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn btn-primary px-8`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {status.message && (
              <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-error'} mt-4`}>
                <span>{status.message}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
