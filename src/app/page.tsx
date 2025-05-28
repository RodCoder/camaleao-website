import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/camaleao-cover.jpeg"
          alt="Camaleão Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo SVG */}
        <div className="mb-8 flex items-center justify-center">
          <Image
            src="/CAMALEÃO_GRANDE.svg"
            alt="Camaleão Logo"
            width={600}
            height={200}
            className="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            priority
          />
        </div>
        
        {/* "Brevemente" text */}
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white tracking-wide">
            brevemente
          </p>
        </div>
      </div>
    </div>
  )
}