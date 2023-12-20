import { getPageContent, onLinkNavigate } from '../../utils/page-utils.js';

onLinkNavigate(async ({ toPath }) => {
    const content = await getPageContent(toPath);

    document.startViewTransition(() => {
        document.body.innerHTML = content;
    });
});
