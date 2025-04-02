import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"87f2db50-a21d-4ef6-afdc-1ab7f71670a5","homePageId":"040d2a99-4eae-493b-9257-9163875f4b80","authPluginId":"6a64802c-52f8-4637-9932-580bf178aaa7","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[{"id":"2ccecd6e-6d8c-4cc1-8753-b83fd9d1882c","actions":{"5bed7fb9-650f-491f-ac47-27dcc3d96140":{"id":"5bed7fb9-650f-491f-ac47-27dcc3d96140","code":"function getRootDomain() {\n  const hostname = window.location.hostname;\n  const parts = hostname.split('.').reverse();\n  if (parts.length > 2) {\n    return parts[1] + '.' + parts[0]; // Handles subdomains\n  }\n  return hostname; // Direct domain\n}","name":"gtRootomain","next":"9660f4e3-cb7b-4aa2-b86d-9509c59e761c","type":"custom-js"},"9660f4e3-cb7b-4aa2-b86d-9509c59e761c":{"id":"9660f4e3-cb7b-4aa2-b86d-9509c59e761c","name":"update rootDomain","type":"variable","varId":"13d6bed5-6a17-412a-93e1-7edfdfa786b4","internal":false,"varValue":{"code":"context.workflow['5bed7fb9-650f-491f-ac47-27dcc3d96140'].result","__wwtype":"f"}}},"trigger":"onload","firstAction":"5bed7fb9-650f-491f-ac47-27dcc3d96140","triggerConditions":null}],"pages":[{"id":"040d2a99-4eae-493b-9257-9163875f4b80","linkId":"040d2a99-4eae-493b-9257-9163875f4b80","name":"Landingpage","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"bf35f710-a25c-417d-a815-2adbfa261076","sectionTitle":"SectionHeader","linkId":"919ebbaa-6d0c-4b58-a650-2eb2f08c977d"},{"uid":"a05b2883-650b-4c6a-9a8c-94d4f7694fdf","sectionTitle":"Section Sidemenu Mobile","linkId":"7c3cac55-a812-4c66-907a-2ae43887de65"},{"uid":"8ac62bb0-823d-4bbb-a945-6b5a6690337b","sectionTitle":"Section2","linkId":"a6a0f61b-9063-4df6-bd05-b2ee50a77405"},{"uid":"af308e2b-1ba7-405c-8d1a-ad818a27e3b1","sectionTitle":"Section3","linkId":"6991b99a-c084-42fd-a9bb-2bba9f1dd649"},{"uid":"8c069555-957d-4095-8073-8f7fe201ed20","sectionTitle":"Section4","linkId":"32b39e53-d9a3-47d6-aa38-2e08bdfb5ab5"},{"uid":"e1ffaf7d-59f0-4dbd-99b4-bd6fd186cd17","sectionTitle":"Section5","linkId":"89eac5c0-2585-471f-9d7b-60fa1427270c"},{"uid":"7bf6624e-5b4d-4604-a225-3d153515376a","sectionTitle":"Section6","linkId":"1ad352f0-59e2-47a1-b1e9-8a3b6d920f11"},{"uid":"3042a9cc-c3a7-4cef-8cdf-6d90aca1262d","sectionTitle":"Section7","linkId":"e42ba700-4e95-4437-b43a-1d0173256bd9"},{"uid":"0148632b-6c2d-47f7-8ea9-4eeff58d6bd2","sectionTitle":"Section8","linkId":"81a834e3-8340-4c4d-88d4-27a30179756b"},{"uid":"c6eda5c0-e796-41f1-baa3-46e5dae9be3b","sectionTitle":"Section9","linkId":"ca705a04-212a-44ba-95f2-076921957cec"},{"uid":"e3ec82dc-fbd6-4c63-b774-b86d5abfc0d1","sectionTitle":"Section Footer","linkId":"182e8647-3fde-4f38-ad2a-327b58ed9000"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{"en":""}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"29809245-a5ea-4687-af79-952998abab22","name":"Airtable","namespace":"airtable"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"d66a250d-8468-469e-ad33-ee028f632398","name":"OpenAI","namespace":"openai"},{"id":"6a64802c-52f8-4637-9932-580bf178aaa7","name":"WeWeb Auth","namespace":"wewebAuth"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 14;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
