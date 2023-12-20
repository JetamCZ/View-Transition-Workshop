import { getPageContent, onLinkNavigate } from '../../utils/page-utils.js';

function getNavigationType(fromPath, toPath) {
    if (fromPath.includes("/cats")) {
        return 'cat-page-to-gallery';
    }

    return 'gallery-to-cat-page';
}

onLinkNavigate(async ({ fromPath, toPath }) => {
    const content = await getPageContent(toPath);

    const navigationType  = getNavigationType(fromPath, toPath)

    let targetThumbnail;

    if (navigationType === 'gallery-to-cat-page') {
        targetThumbnail = getLink(toPath).querySelector('img');
        targetThumbnail.style.viewTransitionName = 'banner-img';
    }

    const transition = document.startViewTransition(() => {
        document.body.innerHTML = content;

        if (navigationType === 'cat-page-to-gallery') {
            targetThumbnail = getLink(fromPath).querySelector('img');
            targetThumbnail.style.viewTransitionName = 'banner-img';
        }
    });

    transition.finished.finally(() => {
        if (targetThumbnail) targetThumbnail.style.viewTransitionName = '';
    });
});
