import {
    googleLink,
    youtubeLink,
    facebookLink,
    googleplayLink,
    webtoonLink,
    aniwatchLink,
    sitkulLink
} from './assets/js/rules/index.js';

export function cleanLink(input) {
    let url;

    try {
        url = new URL(input);
    } catch {
        return console.log('Invalid URL, try again...');
    }

    const host = url.hostname;

    if (host === 'play.google.com') {
        return googleplayLink(url);
    }

    if (host.includes('google.com')) {
        return googleLink(url);
    }

    if (host.includes('youtube.com') || host === 'youtu.be') {
        return youtubeLink(url);
    }

    if (host.includes('facebook.com') || host === 'l.facebook.com') {
        return facebookLink(url);
    }

    if (host.includes('webtoons.com')) {
        return webtoonLink(url);
    }

    if (host.includes('aniwatch.to')) {
        return aniwatchLink(url);
    }

    if (host.includes('kuliah.uajy.ac.id')) {
        return sitkulLink(url);
    }

    return new URL(url.origin + url.pathname).toString();
}