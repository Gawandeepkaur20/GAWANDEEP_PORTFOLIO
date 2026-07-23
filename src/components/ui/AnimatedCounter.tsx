import { useCountUp } from "@/hooks/useCountUp";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const count = useCountUp(value);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
