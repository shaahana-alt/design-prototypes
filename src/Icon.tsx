type IconProps = {
  src: string;
  size: number;
  alt?: string;
};

export function Icon({ src, size, alt = "" }: IconProps) {
  return (
    <span className="icon" style={{ width: size, height: size }}>
      <img src={src} alt={alt} width={size} height={size} />
    </span>
  );
}
