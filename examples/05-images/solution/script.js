import {getPageContent, onLinkNavigate, getLink} from '../../utils/page-utils.js';

const galleryPath = '/05-images/solution/index.html';
const catsPath = `/05-images/solution/cats/`;

function getNavigationType(fromPath, toPath) {
    if (fromPath.includes(catsPath) && toPath.includes(galleryPath)) {
        return 'cat-page-to-gallery';
    }

    if (fromPath.includes(galleryPath) && toPath.includes(catsPath)) {
        return 'gallery-to-cat-page';
    }

    return 'other';
}

onLinkNavigate(async ({fromPath, toPath}) => {
    const navigationType = getNavigationType(fromPath, toPath)
    const content = await getPageContent(toPath);

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
    })

    transition.finished.finally(() => {
        if (targetThumbnail) targetThumbnail.style.viewTransitionName = '';
    });
});
