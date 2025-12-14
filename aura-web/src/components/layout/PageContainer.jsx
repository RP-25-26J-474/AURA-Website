export default function PageContainer({
  children,
  size = "default", // sm | default | lg | full
  className = "",
}) {
  const sizes = {
    sm: "max-w-3xl",
    default: "max-w-6xl",
    lg: "max-w-7xl",
    full: "max-w-none",
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
