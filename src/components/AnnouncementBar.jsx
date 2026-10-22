export default function AnnouncementBar({ message = 'Free Shipping on Order Above ₹1900' }) {
  if (!message) return null

  return (
    <div className="w-full max-w-[1920px] h-[35px] opacity-100 mx-auto bg-[#97173a] text-white flex items-center justify-center px-4 select-none relative z-30">
      <p className="text-[11px] sm:text-[11.5px] font-medium tracking-[0.18em] uppercase m-0 leading-none">
        {message}
      </p>
    </div>
  )
}
