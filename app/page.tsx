export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Career Optimization
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate Optimal Effort for{" "}
          <span className="text-[#58a6ff]">Maximum Career Safety</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing how hard to work. Our AI analyzes your job description and performance metrics to find the exact effort level that keeps you employed — without burning out.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "📋", title: "Paste Job Description", desc: "AI extracts the real requirements from corporate jargon" },
          { icon: "📊", title: "Input Your Metrics", desc: "Hours worked, tasks completed, manager feedback" },
          { icon: "🎯", title: "Get Your Score", desc: "Personalized effort range to stay safe and sane" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              "Unlimited job description analyses",
              "AI-powered effort scoring",
              "Weekly recalibration reports",
              "Manager risk assessment",
              "Email alerts for threshold changes"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Is this ethical to use?",
              a: "Absolutely. Understanding what your job actually requires helps you set healthy boundaries, avoid burnout, and focus energy where it matters most. Working smarter is always ethical."
            },
            {
              q: "How accurate is the AI analysis?",
              a: "Our model is trained on thousands of job descriptions and performance review patterns. It identifies the core deliverables that actually drive performance ratings vs. busy work."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel with one click from your account dashboard. No questions asked, no cancellation fees, no lock-in periods."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Work Minimization Calculator. All rights reserved.
      </footer>
    </main>
  )
}
