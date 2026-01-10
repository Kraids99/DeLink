export function youtubeLink(oldUrl) {
    const newUrl = new URL(oldUrl.origin + oldUrl.pathname);

    if (oldUrl.searchParams.has('v')) {
        newUrl.searchParams.set('v', oldUrl.searchParams.get('v'));
    }

    if (oldUrl.searchParams.has('t')) {
        newUrl.searchParams.set('t', oldUrl.searchParams.get('t'));
    }

    if (oldUrl.searchParams.has('list')) {
        newUrl.searchParams.set('list', oldUrl.searchParams.get('list'));
    }

    return newUrl.toString();
}
