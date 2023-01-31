export function OurServices() {
  return (
    <div className="bg-white">
      <section className="grid gap-6 container font-light py-28 clump:py-[clamp(3rem,8vw,7rem)] sm:justify-items-center sm:text-center">
        <header className="grid gap-3 sm:justify-items-center">
          <h2 className="heading">Our Services</h2>
          <hr className="border-t-4 border-t-midnight-blue w-9" />
        </header>
        <p className="text-lg">
          Our solutions are developed by subject matter experts to help
          organizations and individuals improve personal competence and skills -
          core enablers of sustainable business development and competitive
          advantage
        </p>

        <ul className="w-full gap-2 text-lg list-disc list-inside sm:flex sm:list-none">
          <li className="flex-1 lg:flex-auto">Project Management</li>
          <span className="hidden sm:block">&bull;</span>
          <li className="flex-1 lg:flex-auto">Human Capital Development</li>
          <span className="hidden sm:block">&bull;</span>
          <li className="flex-1 lg:flex-auto">Turnkey Drilling Services</li>
          <span className="hidden sm:block">&bull;</span>
          <li className="flex-1 lg:flex-auto">Renewable Energy</li>
          <span className="hidden sm:block">&bull;</span>
          <li className="flex-1 lg:flex-auto">Logistics</li>
        </ul>
      </section>
    </div>
  );
}
