export function FloralBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-pink-100/60 to-transparent blur-3xl" />
      <div className="absolute bottom-10 -left-16 h-72 w-72 rounded-full bg-gradient-to-tr from-rose-100/50 to-transparent blur-3xl" />
      <svg className="absolute left-6 top-24 w-48 opacity-30" viewBox="0 0 150 220" fill="none">
        <path d="M70 205C65 170 82 140 96 116C112 89 125 66 118 35" stroke="#f5b8cc" strokeWidth="1.2" />
        <path d="M98 115C83 111 72 98 70 82C84 81 97 87 104 99" stroke="#f5b8cc" strokeWidth="1.2" />
        <path d="M84 143C64 136 53 116 56 95C74 101 87 115 89 132" stroke="#f5b8cc" strokeWidth="1.2" />
      </svg>
      <svg className="absolute bottom-12 right-8 w-44 opacity-30" viewBox="0 0 150 220" fill="none">
        <path d="M72 210C79 165 63 136 50 110C36 82 24 58 34 24" stroke="#f0adc4" strokeWidth="1.2" />
        <path d="M51 110C68 108 81 94 84 78C68 75 55 83 48 95" stroke="#f0adc4" strokeWidth="1.2" />
        <path d="M64 142C83 136 96 116 95 95C76 101 64 113 60 129" stroke="#f0adc4" strokeWidth="1.2" />
      </svg>
    </div>
  );
}
