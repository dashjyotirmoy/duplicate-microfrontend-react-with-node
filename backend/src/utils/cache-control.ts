export function noStore(req: any, res: any, next: any) {
  res.setHeader('cache-control', 'no-store');
  return next();
}

export default {
  noStore,
};
