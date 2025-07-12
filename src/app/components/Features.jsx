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
