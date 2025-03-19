export function Button({ children, className, ...props }) {
    return (
      <button
        className={`bg-[#0a2a3b] hover:bg-[#0a2a3b]/90 text-white px-8 py-6 text-lg rounded-md ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  