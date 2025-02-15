import localFont from 'next/font/local';

const cairoli = localFont({
  src: [
    {
      path: '../assets/fonts/cairoliclassic/Italiantype - CairoliClassic Regular.ttf',
    },
  ],
  variable: '--font-cairoli',
});
export { cairoli };