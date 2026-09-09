import Image, { type ImageProps } from "next/image";

type SiteImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

export function SiteImage({ src, alt, className = "", ...props }: SiteImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  );
}
