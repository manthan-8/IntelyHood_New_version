export function Border({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl p-[2px] overflow-hidden">
      {/* Glow Layer */}
      <div className="absolute inset-0 rounded-2xl animate-rotateGlow">
        <div className="absolute -inset-[40%] bg-[conic-gradient(from_0deg,#00E7FFaa_0deg,#00E7FFaa_20deg,transparent_20deg,transparent_360deg)] blur-md" />
      </div>

      {/* Inner Background + Content */}
      <div className="relative inset-0 rounded-2xl bg-gray-900/90 backdrop-blur">
        {children}
      </div>
    </div>
  );
}
