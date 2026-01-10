export function aniwatchLink(oldUrl) {
    const newUrl = new URL(oldUrl.origin + oldUrl.pathname);

    if (oldUrl.searchParams.has('ep')) {
        newUrl.searchParams.set('ep', oldUrl.searchParams.get('ep'));
    }

    return newUrl.toString();
}
