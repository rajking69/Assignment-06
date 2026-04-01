import { bannerImage, playIcon } from "../assets/uiAssets";

const HeroSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-600">
            <span className="relative inline-flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full bg-purple-200/80" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-purple-600" />
            </span>
            New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>

          <p className="max-w-md text-base leading-relaxed text-gray-500">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            <br />
            Explore Products
          </p>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="#products"
              className="rounded-full bg-purple-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-purple-700"
            >
              Explore Products
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full border border-purple-300 px-6 py-3 text-sm font-medium text-purple-600 transition hover:bg-purple-50"
            >
              <img src={playIcon} alt="Play" className="h-4 w-4" />
              Watch Demo
            </a>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <img src={bannerImage} alt="Digital Workflow" className="w-full max-w-md rounded-xl object-cover" />
        </div>
      </div>

      <div className="mt-12 w-full bg-gradient-to-r from-purple-600 to-indigo-500 py-10">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-around px-6 text-center text-white">
          <div>
            <p className="text-4xl font-bold">50K+</p>
            <p className="mt-1 text-sm text-purple-100">Active Users</p>
          </div>
          <div className="h-12 w-px bg-white/30" />
          <div>
            <p className="text-4xl font-bold">200+</p>
            <p className="mt-1 text-sm text-purple-100">Premium Tools</p>
          </div>
          <div className="h-12 w-px bg-white/30" />
          <div>
            <p className="text-4xl font-bold">4.9</p>
            <p className="mt-1 text-sm text-purple-100">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
