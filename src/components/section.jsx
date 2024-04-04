export default function Section({ sectionHeader, children }) {
  return (
    <section className="bg-white text-black flex flex-row px-32 py-24">
      <div className="container p-4 w-80">
        <h1 className="text-gray-500 tracking-widest font-light">About</h1>
      </div>
      <div className="container">
        <h1 className="text-black text-3xl tracking-widest font-semibold text-left">
          {sectionHeader}
        </h1>
        <div className="flex flex-row">{children}</div>
      </div>
    </section>
  );
}
