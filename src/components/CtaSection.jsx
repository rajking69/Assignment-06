const CtaSection = () => {
  return (
    <>
      <div id="testimonials" className="scroll-mt-24" />
      <section id="get-started" className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">Ready To Transform Your Workflow?</h2>
          <p className="mt-4 text-sm text-purple-100 md:text-base">
            Join thousands of creators and teams already using DigiTools to work smarter.
            <br />
            Start your free trial today.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#products" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-purple-600 shadow transition hover:bg-purple-50">
              Explore Products
            </a>
            <a href="#pricing" className="rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              View Pricing
            </a>
          </div>

          <p className="mt-6 text-xs text-purple-200">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
