import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div tw="font-extrabold px-3 py-1 text-foreground bg-background text-foreground rounded-md">
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
