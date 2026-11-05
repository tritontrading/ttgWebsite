import { community } from "@/lib/content";
import { SiteImage } from "@/components/ui/SiteImage";

// Continuous CSS marquee: the list is rendered twice and translated -50% so it loops seamlessly.
// Pauses on hover; globals.css stops it under prefers-reduced-motion.
export function CommunityCarousel() {
  const photos = [...community.photos, ...community.photos];

  return (
    <div className="mt-4 overflow-hidden md:mt-6" aria-label="Community photos">
      <div className="animate-community-marquee flex">
        {photos.map((photo, index) => (
          <div
            key={`${photo.src}-${index}`}
            aria-hidden={index >= community.photos.length || undefined}
            className="relative mr-4 h-64 w-72 shrink-0 md:mr-6 overflow-hidden md:h-80 md:w-96"
          >
            <SiteImage src={photo.src} alt={photo.alt} fill className="object-cover" sizes="384px" />
          </div>
        ))}
      </div>
    </div>
  );
}
