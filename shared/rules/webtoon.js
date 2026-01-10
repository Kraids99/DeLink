export function webtoonLink(oldUrl) {
    const newUrl = new URL(oldUrl.origin + oldUrl.pathname);

    if (oldUrl.searchParams.has('title_no')) {
        newUrl.searchParams.set('title_no', oldUrl.searchParams.get('title_no'));
    }

    if (oldUrl.searchParams.has('episode_no')) {
        newUrl.searchParams.set('episode_no', oldUrl.searchParams.get('episode_no'));
    }

    return newUrl.toString();
}
