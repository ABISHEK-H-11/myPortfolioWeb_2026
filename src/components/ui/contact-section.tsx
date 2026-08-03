'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, Github, Linkedin, MessageSquare, AlertCircle } from 'lucide-react';

export function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formState.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setSuccessMessage('Thank you! Your message has been sent successfully.');
        setFormState({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        const fallbackMsg = data.error || 'Failed to send message. Please check your connection or try again later.';
        setErrorMessage(fallbackMsg);
      }
    } catch (err) {
      setErrorMessage('Failed to send message. Please check your connection or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 w-full relative border-t border-white/5 bg-[#030303]">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-orange-400 uppercase">Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tight pb-2">
            Get In Touch
          </h2>
          <p className="text-neutral-400 mt-4 text-base md:text-lg font-light leading-relaxed">
            Have a project in mind or want to collaborate? Reach out and let's build something exceptional together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-xl font-display font-semibold text-white">Contact Information</h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                Feel free to contact me via email or social platforms. I am generally available for full-stack engineering roles, freelancing, and collaborative open-source projects.
              </p>

              <div className="space-y-4 pt-4">
                <a 
                  href="mailto:contact.abishekh@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/[0.02] transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20 transition-all">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-widest">Email Me</p>
                    <p className="text-sm font-medium text-white group-hover:text-orange-300 transition-colors">contact.abishekh@gmail.com</p>
                  </div>
                </a>

                <div className="flex gap-4">
                  <a 
                    href="https://github.com/ABISHEK-H-11" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/[0.02] transition-all duration-300 text-neutral-300 hover:text-white"
                  >
                    <Github className="size-5" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/[0.02] transition-all duration-300 text-neutral-300 hover:text-white"
                  >
                    <Linkedin className="size-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Quote Widget */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-orange-500/5 to-transparent relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <MessageSquare className="size-24 text-white" />
              </div>
              <h4 className="text-sm font-bold tracking-[0.15em] text-orange-400 uppercase mb-2">Availability</h4>
              <p className="text-white font-medium text-lg">Currently Open to Work</p>
              <p className="text-neutral-400 text-xs font-light mt-1 leading-relaxed">
                Ready to contribute to backend Spring Boot stacks, interactive React frontends, and robust database systems.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden">
              {isSubmitted ? (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="mx-auto w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <CheckCircle className="size-8 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-semibold text-white">Message Transmitted!</h3>
                    <p className="text-orange-400/90 text-base font-medium max-w-md mx-auto leading-relaxed">
                      {successMessage || "Thank you! Your message has been sent successfully."}
                    </p>
                    <p className="text-neutral-400 text-xs font-light max-w-md mx-auto pt-1">
                      Abishek will receive your notification and respond shortly.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setSuccessMessage(null);
                      setErrorMessage(null);
                    }}
                    className="px-6 py-2.5 rounded-full border border-white/10 text-xs font-medium text-neutral-300 hover:border-orange-500/30 hover:text-white transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-3">
                      <AlertCircle className="size-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        value={formState.name}
                        onChange={(e) => {
                          setFormState({ ...formState, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="John Doe"
                        className={`w-full px-5 py-4 rounded-2xl bg-white/[0.02] border ${
                          errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-orange-500/40'
                        } focus:bg-orange-500/[0.01] text-white text-sm outline-none transition-all placeholder:text-neutral-600 font-light`}
                      />
                      {errors.name && <p className="text-red-400 text-[11px] pl-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Your Email</label>
                      <input 
                        type="email" 
                        id="email"
                        value={formState.email}
                        onChange={(e) => {
                          setFormState({ ...formState, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="john@example.com"
                        className={`w-full px-5 py-4 rounded-2xl bg-white/[0.02] border ${
                          errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-orange-500/40'
                        } focus:bg-orange-500/[0.01] text-white text-sm outline-none transition-all placeholder:text-neutral-600 font-light`}
                      />
                      {errors.email && <p className="text-red-400 text-[11px] pl-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Message</label>
                    <textarea 
                      id="message"
                      rows={5}
                      value={formState.message}
                      onChange={(e) => {
                        setFormState({ ...formState, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Hi Abishek, I'd love to talk about..."
                      className={`w-full px-5 py-4 rounded-2xl bg-white/[0.02] border ${
                        errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-orange-500/40'
                      } focus:bg-orange-500/[0.01] text-white text-sm outline-none transition-all placeholder:text-neutral-600 font-light resize-none`}
                    />
                    {errors.message && <p className="text-red-400 text-[11px] pl-1">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm tracking-widest uppercase hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </div>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

