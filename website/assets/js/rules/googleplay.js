export function googleplayLink(oldUrl) {
  const newUrl = new URL(oldUrl.origin + oldUrl.pathname);

  if (oldUrl.searchParams.has('id')) {
    newUrl.searchParams.set('id', oldUrl.searchParams.get('id'));
  }

  return newUrl.toString();
}
