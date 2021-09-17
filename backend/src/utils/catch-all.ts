export function catchAll(req: any, res: any) {
  if (req.path === '/') {
    return res.status(404).send();
  }
  return res.redirect(`/#${req.path.substring(1)}`);
}

export default catchAll;
