export function RevenueSkeleton({
  color,
  label,
}: {
  color: "red" | "green";
  label: string;
}) {
  const barColor = color === "red" ? "bg-red-900/40" : "bg-green-900/40";

  return (
    <div className="animate-pulse space-y-4">
      <div className={`h-10 w-3/4 rounded ${barColor}`} />
      <div className="space-y-2 pt-2">
        <div className={`h-3 w-full rounded ${barColor}`} />
        <div className={`h-3 w-1/2 rounded ${barColor}`} />
      </div>
      <div
        className={`text-xs ${color === "red" ? "text-red-500" : "text-green-500"} font-mono mt-2`}
      >
        {label}
      </div>
    </div>
  );
}
