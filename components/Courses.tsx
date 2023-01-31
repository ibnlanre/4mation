export function Courses({ children }) {
  return (
    <div className="grid gap-10 auto-rows-max grid-cols-[repeat(auto-fit,_minmax(min(300px,100%),_1fr))] container mt-10 mb-28 duration-700">
      {children}
    </div>
  );
}
