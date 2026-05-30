"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What is IHG Hotels & Resorts?",
    a: "IHG Hotels & Resorts is one of the world's leading hotel companies, with more than 6,000 hotels and 21 brands across more than 100 countries."
  },
  {
    q: "Why book directly with IHG?",
    a: "Booking directly with IHG gives you access to exclusive member rates, flexible cancellation policies, free Wi-Fi, and the best price guarantee. Plus, you'll earn IHG One Rewards points on every eligible stay."
  },
  {
    q: "What is IHG One Rewards?",
    a: "IHG One Rewards is our award-winning loyalty program. Members earn points on every eligible stay that can be redeemed for free nights, and enjoy exclusive benefits and member-only rates."
  },
  {
    q: "How do I redeem IHG One Rewards points?",
    a: "You can redeem your IHG One Rewards points for free reward nights at any of our participating hotels and resorts worldwide. Points can also be used for a variety of other rewards through our points redemption program."
  },
  {
    q: "Does IHG have a mobile app?",
    a: "Yes! The IHG Hotels & Resorts mobile app is available on iOS and Android. It lets you search, book and manage your stays, check in and out, access your IHG One Rewards account, and much more."
  },
  {
    q: "How do I contact IHG Hotels & Resorts customer service?",
    a: "You can reach our customer service team 24/7 by phone, live chat on our website, or through our mobile app. Visit our Contact Us page for the most up-to-date contact details for your region."
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-14 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          IHG Hotels &amp; Resorts FAQs
        </h2>

        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-semibold text-gray-800 pr-8">{faq.q}</span>
                <span className="flex-shrink-0 text-gray-500">
                  {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>
              {open === i && (
                <div className="px-4 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
