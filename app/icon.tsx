import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: 'linear-gradient(135deg, #7C5FF0 0%, #4FC3F7 100%)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          fontWeight: 800,
          fontSize: 13,
          color: 'white',
          letterSpacing: '-0.5px',
        }}
      >
        PS
      </div>
    ),
    { width: 32, height: 32 }
  );
}
