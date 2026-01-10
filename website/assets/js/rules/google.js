export function googleLink(oldUrl) {
    if (oldUrl.hostname.includes('google.com') && oldUrl.pathname === '/url' && oldUrl.searchParams.has('url')) {
        return oldUrl.searchParams.get('url');
    }

    const newUrl = new URL(oldUrl.origin + oldUrl.pathname);

    if (oldUrl.searchParams.has('q')) {
        newUrl.searchParams.set('q', oldUrl.searchParams.get('q'));
    }

    return newUrl.toString();
}