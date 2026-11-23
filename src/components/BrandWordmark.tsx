import Link from "next/link";

type BrandWordmarkSize = "sm" | "md" | "lg";

interface BrandWordmarkProps {
  size?: BrandWordmarkSize;
  dark?: boolean;
  cream?: boolean;
  className?: string;
  mobileResponsive?: boolean;
}

const sizeConfig = {
  sm: { wordmark: "text-[20px]", gap: "gap-0.5" },
  md: { wordmark: "text-[26px]", gap: "gap-0.5" },
  lg: { wordmark: "text-[34px]", gap: "gap-1" },
};

const mobileSizeConfig = {
  sm: { wordmark: "text-[clamp(16px,4vw,20px)]" },
  md: { wordmark: "text-[clamp(20px,5vw,26px)]" },
  lg: { wordmark: "text-[clamp(26px,6vw,34px)]" },
};

export default function BrandWordmark({
  size = "md",
  dark = false,
  cream = false,
  className = "",
  mobileResponsive = false,
}: BrandWordmarkProps) {
  const config = sizeConfig[size];
  const mobileConfig = mobileSizeConfig[size];
  const gap = config.gap;

  const textColor = dark || cream ? "text-[#FAF8F4]" : "text-[#1C1917]";
  const wordmarkSize = mobileResponsive ? mobileConfig.wordmark : config.wordmark;

  return (
    <Link
      href="/"
      className={`flex items-center ${gap} font-barlow-condensed font-extrabold italic uppercase tracking-tight leading-none ${className}`}
    >
      <span className={`${wordmarkSize} ${textColor} tracking-[0.08em]`}>Soleil</span>
    </Link>
  );
}
