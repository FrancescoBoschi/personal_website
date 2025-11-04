'use client';

import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import PageLayout from '../components/PageLayout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [turnstileToken, setTurnstileToken] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      setErrorMessage('Please complete the captcha verification.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTurnstileToken('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageLayout>
      <section className="bg-[#1e1e1f] rounded-2xl p-8 border border-[#2a2a2a]">
        <h2 className="text-3xl font-bold mb-8">
          Contact
          <span className="block w-12 h-1 bg-[#ffd700] mt-2"></span>
        </h2>

        <div className="mb-8 rounded-2xl overflow-hidden border border-[#3a3a3a]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91924.35673405624!2d12.163863984374998!3d44.13958365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ca5094c22ae77%3A0x407d98677d80cc6!2sCesena%2C%20Province%20of%20Forl%C3%AC-Cesena%2C%20Italy!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffd700] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffd700] transition-colors"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffd700] transition-colors"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                required
                className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffd700] transition-colors resize-none"
              />
            </div>

            <div className="flex justify-center">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
                onSuccess={(token) => setTurnstileToken(token)}
                onError={() => setTurnstileToken('')}
                onExpire={() => setTurnstileToken('')}
                options={{
                  theme: 'dark',
                }}
              />
            </div>

            {status === 'success' && (
              <div className="bg-green-900/30 border border-green-700 text-green-300 px-4 py-3 rounded-xl">
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded-xl">
                {errorMessage || 'Failed to send message. Please try again or email me directly.'}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-[#ffd700] text-black px-8 py-3 rounded-xl font-semibold hover:bg-[#e6c200] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
