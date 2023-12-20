import {getPageContent, onLinkNavigate, getLink} from '../../utils/page-utils.js';

function getNavigationType(fromPath, toPath) {
    if (fromPath.includes("/cats")) {
        return 'cat-page-to-gallery';
    }

    if (toPath.includes("/cats")) {
        return 'gallery-to-cat-page';
    }

    return "other"
}

onLinkNavigate(async ({fromPath, toPath}) => {
    const content = await getPageContent(toPath);

    const navigationType = getNavigationType(fromPath, toPath)

    let targetThumbnail;

    if (navigationType === 'gallery-to-cat-page') {
        targetThumbnail = getLink(toPath).querySelector('img');
        targetThumbnail.style.viewTransitionName = 'banner-img';
    }

    const transition = document.startViewTransition(() => {
        document.body.innerHTML = content;

        if (navigationType === 'cat-page-to-gallery') {
            console.log(fromPath, toPath)
            targetThumbnail = getLink(fromPath).querySelector('img');
            targetThumbnail.style.viewTransitionName = 'banner-img';
        }
    })

    transition.finished.finally(() => {
        if (targetThumbnail) targetThumbnail.style.viewTransitionName = '';
    });
});
