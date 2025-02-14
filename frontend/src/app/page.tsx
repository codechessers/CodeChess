// import Image from "next/image";
import Hero from '@/components/Hero'
export default function Home() {
  return (
<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex flex-col max-h-screen">
  <div className='relative flex items-center justify-center'>
  <Hero />
    </div>
</div>
  );
}
