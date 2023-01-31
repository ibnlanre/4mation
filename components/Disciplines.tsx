export function Disciplines({ children = "Disciplines" }) {
  return (
    <header className="py-20 clump:py-[clamp(3rem,6vw,5rem)] bg-cultured">
      <h2 className="container heading">
        {children}
      </h2>
    </header>
  );
}
