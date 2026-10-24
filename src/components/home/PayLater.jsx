const logos = [
  { alt: 'Afterpay', src: '/images/afterpay.png', width: 847, height: 295 },
  { alt: 'Apple Pay', src: '/images/applepay.png', width: 275, height: 183 },
  { alt: 'Google Pay', src: '/images/googlepay.png', width: 500, height: 500 },
  { alt: 'Square Pay', src: '/images/squarepay.png', width: 1000, height: 560 },
]

export default function PayLater() {
  return (
    <section className="py-14 md:py-16 relative">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl border-[0.5px] border-[rgb(59,63,105)]/15 bg-gradient-to-b from-[rgb(59,63,105)]/12 to-[rgb(59,63,105)]/6 px-6 py-8 md:px-12 md:py-10 shadow-[0_10px_30px_rgba(59,63,105,0.15)]">
          <div className="absolute -top-16 -right-16 w-52 h-52 bg-[rgb(202,18,84)]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-[rgb(59,63,105)]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[rgb(59,63,105)] leading-snug mb-8">
              Don’t wait to feel better, <span className="text-[rgb(202,18,84)]">just pay later.</span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {logos.map((l) => (
                <img
                  key={l.alt}
                  alt={l.alt}
                  width={l.width}
                  height={l.height}
                  className="h-10 md:h-14 w-auto opacity-90 hover:opacity-100 transition object-contain"
                  src={l.src}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
