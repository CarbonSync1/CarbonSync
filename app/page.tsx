import Link from "next/link";
import { ArrowRight, Leaf, BarChart3, Shield, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Trusted by 500+ enterprises worldwide
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
            Your Path to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Net Zero
            </span>
            <br />
            Starts Here
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            CarbonSync empowers enterprises to measure, track, and reduce their
            carbon footprint across the entire value chain with AI-driven
            insights and real-time analytics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-demo"
              className="bg-gray-900 text-white px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all hover:shadow-xl active:scale-[0.98]"
            >
              Book a Demo
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/solutions/supply-chain"
              className="bg-white text-gray-700 px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2 border border-gray-200 hover:border-green-300 hover:text-green-700 transition-all hover:shadow-lg active:scale-[0.98]"
            >
              Explore Platform
              <BarChart3 size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-green-600 tracking-[0.2em] uppercase mb-4">
              Platform Capabilities
            </p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Everything you need to manage carbon
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Carbon Tracking",
                desc: "Real-time Scope 1, 2 & 3 emissions monitoring across your entire organization",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                desc: "AI-powered insights and predictive modeling for informed decision-making",
              },
              {
                icon: Shield,
                title: "Compliance Ready",
                desc: "Automated ESG reporting aligned with global standards and frameworks",
              },
              {
                icon: Globe,
                title: "Supply Chain",
                desc: "End-to-end visibility into your value chain carbon footprint",
              },
            ].map((feat, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-100 transition-colors">
                  <feat.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
