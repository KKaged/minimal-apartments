export default function Section({ sectionHeader, children, sectionTitle }) {
  return (
    <section className="bg-white text-black flex flex-row px-32 py-24">
      <div className="container w-80">
        <h1 className="text-gray-500 tracking-widest font-light">
          {sectionTitle}
        </h1>
      </div>
      <div className="container pl-12">
        <h1 className="text-black text-3xl tracking-widest font-semibold text-left">
          {sectionHeader}
        </h1>
        <div className="flex flex-row gap-5 py-12 ">{children}</div>
      </div>
    </section>
  );
}
