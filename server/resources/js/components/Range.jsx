export function Range() {
  const range = { min: 0, max: 150 };

  const defaultValue =
    range.max < range.min
      ? range.min
      : range.min + (range.max - range.min) / 2;

  return <input
    type="range"
    min={range.min}
    max={range.max}
    defaultValue={defaultValue}
  />;
}