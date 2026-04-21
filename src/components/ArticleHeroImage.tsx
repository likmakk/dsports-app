"use client";

import { useState } from "react";
import Image from "next/image";
import { resolveImagePosition } from "@/lib/utils";

interface ArticleHeroImageProps {
  src: string;
  alt: string;
  gradient: string;
  orientation: "landscape" | "portrait";
  imagePosition?: string;
}

export default function ArticleHeroImage({ src, alt, gradient, orientation, imagePosition }: ArticleHeroImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="w-full aspect-[16/9] rounded-md mb-3"
        style={{ background: gradient }}
        role="img"
        aria-label={alt}
        itemProp="image"
      />
    );
  }

  return (
    <div className="w-full aspect-[16/9] rounded-md mb-3 relative overflow-hidden" itemProp="image">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition: resolveImagePosition({ imageOrientation: orientation, imagePosition }) }}
        sizes="(max-width: 1240px) 70vw, 880px"
        priority
        onError={() => setFailed(true)}
      />
    </div>
  );
}
