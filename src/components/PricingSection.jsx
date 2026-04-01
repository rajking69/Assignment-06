const PricingSection = () => {
  return (
    <section id="pricing" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Simple, Transparent Pricing</h2>
        <p className="mt-3 text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 text-left">
            <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
            <p className="mt-1 text-sm text-gray-400">Perfect for getting started</p>
            <p className="mt-6">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-sm text-gray-400">/Month</span>
            </p>

            <ul className="mt-6 flex-1 space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-purple-500">✓</span>Access to 10 free tools</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-purple-500">✓</span>Basic templates</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-purple-500">✓</span>Community support</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-purple-500">✓</span>1 export per month</li>
            </ul>

            <a href="#" className="mt-8 block rounded-full border border-purple-500 py-3 text-center text-sm font-medium text-purple-600 transition hover:bg-purple-50">
              Get Started Free
            </a>
          </div>

          <div className="relative flex scale-105 flex-col rounded-2xl bg-gradient-to-b from-purple-600 to-indigo-600 p-8 text-left text-white shadow-xl">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-amber-200 bg-amber-100 px-4 py-1 text-xs font-semibold text-orange-600 shadow-sm">
              Most Popular
            </span>
            <h3 className="text-lg font-semibold">Pro</h3>
            <p className="mt-1 text-sm text-purple-200">Best for professionals</p>
            <p className="mt-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-sm text-purple-200">/Month</span>
            </p>

            <ul className="mt-6 flex-1 space-y-3 text-sm text-purple-100">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-white">✓</span>Access to all premium tools</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-white">✓</span>Unlimited templates</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-white">✓</span>Priority support</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-white">✓</span>Unlimited projects</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-white">✓</span>Cloud sync</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-white">✓</span>Advanced analytics</li>
            </ul>

            <a href="#" className="mt-8 block rounded-full bg-white py-3 text-center text-sm font-medium text-purple-600 transition hover:bg-purple-50">
              Start Pro Trial
            </a>
          </div>

          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 text-left">
            <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
            <p className="mt-1 text-sm text-gray-400">For teams and enterprises</p>
            <p className="mt-6">
              <span className="text-4xl font-bold text-gray-900">$99</span>
              <span className="text-sm text-gray-400">/Month</span>
            </p>

            <ul className="mt-6 flex-1 space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-purple-500">✓</span>Everything in Pro</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-purple-500">✓</span>Team collaboration</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-purple-500">✓</span>Custom integrations</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-purple-500">✓</span>Dedicated support</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-purple-500">✓</span>SLA guarantee</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-purple-500">✓</span>Custom branding</li>
            </ul>

            <a href="#" className="mt-8 block rounded-full border border-purple-500 py-3 text-center text-sm font-medium text-purple-600 transition hover:bg-purple-50">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
