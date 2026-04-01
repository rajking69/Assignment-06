import { packageIcon, rocketIcon, userIcon } from "../assets/uiAssets";

const StepsSection = () => {
  return (
    <section id="features" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Get Started In 3 Steps</h2>
        <p className="mt-3 text-gray-500">Start using premium digital tools in minutes, not hours.</p>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="relative rounded-xl bg-white p-8 text-center shadow-sm transition hover:shadow-md">
            <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
              01
            </span>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
              <img src={userIcon} alt="Create Account" className="h-7 w-7" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Create Account</h3>
            <p className="text-sm text-gray-500">Sign up for free in seconds. No credit card required to get started.</p>
          </div>

          <div className="relative rounded-xl bg-white p-8 text-center shadow-sm transition hover:shadow-md">
            <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
              02
            </span>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
              <img src={packageIcon} alt="Choose Products" className="h-7 w-7" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Choose Products</h3>
            <p className="text-sm text-gray-500">Browse our catalog and select the tools that fit your needs.</p>
          </div>

          <div className="relative rounded-xl bg-white p-8 text-center shadow-sm transition hover:shadow-md">
            <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
              03
            </span>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
              <img src={rocketIcon} alt="Start Creating" className="h-7 w-7" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Start Creating</h3>
            <p className="text-sm text-gray-500">Download and start using your assets or tools immediately.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
