export function PageSection({
  children,
  className = "",
  padded = true,
}) {
  return (
    <section
      className={`${
        padded ? "py-6 sm:py-8" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
