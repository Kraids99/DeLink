export function facebookLink(oldUrl) {
    if (oldUrl.hostname === 'l.facebook.com' && oldUrl.searchParams.has('u')) {
        return decodeURIComponent(oldUrl.searchParams.get('u'));
    }

    const newUrl = new URL(oldUrl.origin + oldUrl.pathname);

    if (oldUrl.pathname.includes('story.php')) {
        if (oldUrl.searchParams.has('story_fbid')) {
            newUrl.searchParams.set('story_fbid', oldUrl.searchParams.get('story_fbid'));
        }

        if (oldUrl.searchParams.has('id')) {
            newUrl.searchParams.set('id', oldUrl.searchParams.get('id'));
        }
    }

    return newUrl.toString();
}
