"use client"

import { useLanguage } from "@/contexts/language-context"

export function FAQ() {
  const { t } = useLanguage()

  return (
    <section className="bg-white px-4 py-16 text-[#2D2D2D] md:py-24" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-title" className="mb-8 text-center text-3xl md:text-4xl">
          {t.faq.title}
        </h2>
        {[t.faq.general, t.faq.owners, t.faq.sitters].map((category, index) => (
          <details className="rounded-2xl border border-gray-200 px-6" key={category.title} open={index === 0}>
            <summary className="cursor-pointer py-4 text-lg font-medium">{category.title}</summary>
            <div className="flex flex-col gap-6 border-t border-gray-200 pb-5 pt-5 text-base leading-relaxed text-[#6B6B6B]">
              {category.items.map((item) => (
                <div key={item.question}>
                  <h3 className="mb-2 font-medium text-[#2D2D2D]">{item.question}</h3>
                  <p className="whitespace-pre-line">{item.answer}</p>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
