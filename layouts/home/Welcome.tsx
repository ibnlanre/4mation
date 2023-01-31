export function Welcome() {
  return (
    <div className="bg-white">
      <section className="container grid gap-6 text-center justify-items-center py-28 clump:py-[clamp(3rem,8vw,7rem)]">
        <h2 className="heading">Welcome to 4mation</h2>
        <hr className="border-t-4 border-t-midnight-blue w-9" />
        <p className="text-xl font-light">
          We render project management and advisory services, training, labour
          management, heavy duty logistics, renewable energy and general
          consultancy in the energy sector.
        </p>
      </section>
    </div>
  );
}
