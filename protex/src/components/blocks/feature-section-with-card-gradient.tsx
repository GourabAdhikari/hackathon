import React from "react";
import { useId } from "react";

export function FeaturesSectionWithCardGradient() {
  return (
    <div className="py-20 lg:py-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Real-Time Flood Alerts",
    description:
      "Get instant notifications for rising water levels and potential flood risks in your area.",
  },
  {
    title: "AI-Powered Predictions",
    description: "Advanced ML forecasts for early warnings.",
  },
  {
    title: "Interactive Risk Map",
    description: "View colour-coded flood zones in your area.",
  },
  {
    title: "Location-Based Insights",
    description: "Personalized flood risk updates for your region.",
  },
  {
    title: "Emergency Resource Finder",
    description: "Locate shelters, hospitals, and safe routes.",
  },
  {
    title: "Data-Driven Reports",
    description: "Track rainfall, river levels, and flood trends.",
  },
  {
    title: "Voice Assistant Support",
    description: "Hands-free flood updates and emergency SOS.",
  },
  {
    title: "Offline Mode",
    description: "Access vital flood info even without internet.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  // Add uniqueness check when generating random coordinates
  const generateUniquePattern = () => {
    const used = new Set();
    const pattern = [];

    while (pattern.length < 5) {
      const x = Math.floor(Math.random() * 4) + 7;
      const y = Math.floor(Math.random() * 6) + 1;
      const key = `${x}-${y}`;

      if (!used.has(key)) {
        used.add(key);
        pattern.push([x, y]);
      }
    }
    return pattern;
  };

  const p = pattern ?? generateUniquePattern();

  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: GridPatternProps) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map((square: number[]) => {
            const [x, y] = square;
            return (
              <rect
                strokeWidth="0"
                key={`${x}-${y}`}
                width={width + 1}
                height={height + 1}
                x={x * width}
                y={y * height}
              />
            );
          })}
        </svg>
      )}
    </svg>
  );
}
