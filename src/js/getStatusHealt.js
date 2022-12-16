export default function getStatusHealt(object) {
  if (object.healt < 15) {
    return 'critical';
  }
  if (object.healt > 50) {
    return 'healthy';
  }
  return 'wounded';
}
