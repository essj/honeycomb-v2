export const formatTruncatedString = ({
  value,
  maxCharsPerSide = 8,
}: {
  value: string;
  maxCharsPerSide?: number;
}) => {
  if (value.length < maxCharsPerSide * 2 + 1) return value;

  return (
    value.substring(0, maxCharsPerSide) + '...' + value.substring(value.length - maxCharsPerSide)
  );
};
