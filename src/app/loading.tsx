export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: '#FDFAF7' }}
      role="status"
      aria-label="Loading The Alpine Homestay"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Mountain pulse */}
        <svg
          viewBox="0 0 80 48"
          className="w-20 animate-pulse"
          aria-hidden="true"
        >
          <polygon points="40,4 70,44 10,44" fill="#B8861E" opacity="0.5" />
          <polygon points="22,22 46,44 0,44" fill="#3E5235" opacity="0.4" />
          <polygon points="40,4 50,22 30,22" fill="#FDFAF7" opacity="0.9" />
        </svg>

        {/* Progress bar */}
        <div className="w-24 h-[1px] bg-[rgba(58,37,24,0.1)] overflow-hidden rounded-full">
          <div
            className="h-full bg-gold rounded-full"
            style={{
              animation: 'loadingBar 1.4s ease-in-out infinite',
              width: '40%',
            }}
          />
        </div>

        <p className="text-[0.6rem] tracking-[0.22em] uppercase text-text-light">
          The Alpine Homestay
        </p>
      </div>

      <style>{`
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(350%); }
        }
      `}</style>
    </div>
  )
}
