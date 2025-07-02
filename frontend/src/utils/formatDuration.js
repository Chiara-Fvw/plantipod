export const formatDuration = (duration) => {
  if (!duration) return "00:00:00";

  const hh = String(duration.hours || 0).padStart(2, '0');
  const mm = String(duration.minutes || 0).padStart(2, '0');
  const ss = String(duration.seconds || 0).padStart(2, '0');

  return `${hh}:${mm}:${ss}`;
}