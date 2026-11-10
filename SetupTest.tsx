import {
  AbsoluteFill,
  Composition,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const SetupTestComposition = () => {
  return (
    <Composition
      id="SetupTest"
      component={SetupTest}
      durationInFrames={90}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

export const SetupTest: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in over the first 20 frames
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Springy scale from 80% to 100%
  const scale = interpolate(spring({ frame, fps }), [0, 1], [0.8, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0b0d12",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          color: "white",
          fontSize: 120,
          fontWeight: 700,
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        Setup complete ✓
      </div>
    </AbsoluteFill>
  );
};
