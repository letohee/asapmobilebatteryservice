import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white pt-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-16">
        {/* Text Column */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Quality Car Care on a Budget <span className="text-red-500">Auto Maintenance & Repairs</span>
          </h1>
          <p className="mt-4 text-lg">
            Fast mobile battery and repair services for cars, vans, lorries &amp; more.
          </p>
          <div className="mt-6 space-x-4">
            <a href="#contact" className="bg-red-500 px-6 py-3 rounded-full font-medium hover:bg-red-600 transition">
              Quickly Contact
            </a>
            <a href="#how-it-works" className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition">
              How It Works
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full md:w-1/2 relative mb-8 md:mb-0">
          <Image
            src="/images/red-car.png"
            alt="Red Performance Car"
            width={600}
            height={400}
            className="mx-auto z-10"
          />
          <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">NEW!</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 text-red-500 text-4xl">
            &rarr;
          </div>
        </div>
      </div>
      {/* Curved white overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-white rounded-t-[50px]" />
    </section>
  );
}


// File: src/app/components/Features.jsx
export default function Features() {
  const features = [
    { icon: '🔧', title: 'Accurate Diagnosis Guaranteed' },
    { icon: '🛡️', title: 'Six Months Warranty' },
    { icon: '🤝', title: 'Excellent Customer Service' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((feat, idx) => (
          <div key={idx} className="p-6 bg-red-50 rounded-2xl flex flex-col items-center">
            <div className="text-red-500 text-5xl mb-4">{feat.icon}</div>
            <h3 className="text-lg font-semibold">{feat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

