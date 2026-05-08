const VARIANTS = ["primary", "secondary", "ghost"] as const;
type Variant = (typeof VARIANTS)[number];  // "primary" | "secondary" | "ghost"

type BadgeProps = {
  label: string;
  variant?: Variant;
};

export function Badge({ label, variant = "primary" }: BadgeProps) {
  const styles: Record<Variant, React.CSSProperties> = {
    primary: {
      color: "red",
    },
    secondary: {
      color: "yellow",
    },
    ghost: {
      color: "white",
    },
  };

  return <span style={styles[variant]}>{label}</span>;
}
