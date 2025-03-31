import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_29809245_a5ea_4687_af79_952998abab22 from '@/components/plugins/plugin-29809245-a5ea-4687-af79-952998abab22/src/wwPlugin.js';
import plugin_d66a250d_8468_469e_ad33_ee028f632398 from '@/components/plugins/plugin-d66a250d-8468-469e-ad33-ee028f632398/src/wwPlugin.js';
import plugin_1fa0dd68_5069_436c_9a7d_3b54c340f1fa from '@/components/plugins/plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa/src/wwPlugin.js';
import plugin_6a64802c_52f8_4637_9932_580bf178aaa7 from '@/components/plugins/plugin-6a64802c-52f8-4637-9932-580bf178aaa7/src/wwPlugin.js';
import plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/src/wwPlugin.js';
import plugin_9c40819b_4a8f_468f_9ba5_4b9699f3361f from '@/components/plugins/plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-29809245-a5ea-4687-af79-952998abab22', plugin_29809245_a5ea_4687_af79_952998abab22);
wwLib.wwPluginHelper.registerPlugin('plugin-d66a250d-8468-469e-ad33-ee028f632398', plugin_d66a250d_8468_469e_ad33_ee028f632398);
wwLib.wwPluginHelper.registerPlugin('plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa', plugin_1fa0dd68_5069_436c_9a7d_3b54c340f1fa);
wwLib.wwPluginHelper.registerPlugin('plugin-6a64802c-52f8-4637-9932-580bf178aaa7', plugin_6a64802c_52f8_4637_9932_580bf178aaa7);
wwLib.wwPluginHelper.registerPlugin('plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811', plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811);
wwLib.wwPluginHelper.registerPlugin('plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f', plugin_9c40819b_4a8f_468f_9ba5_4b9699f3361f);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"6e2d49af-ee1c-438c-aad7-cb0d84f9d37f":"#000000","428e5fcd-6175-41c4-94bf-8eae5338be39":"#6A9FC8","5a003667-3804-4d11-9877-2e393f405681":"#F6AE28","d1d5743d-e893-4cad-8b04-f67381536daf":"#3F3F46","41a2eba2-29f4-49a9-b2e7-6c6088d5e35f":"#FFFFFF","08c0e8cd-70b4-425d-bb33-9c9aab245f4f":"#33658A","9cf66ab6-e441-4915-8c03-2eb450fb7909":"#A6C6DE","b1eedf5d-862b-4b40-a1db-6f5d24a7db9a":"#2F4858","a7ca33e2-39ac-4a5b-972c-465c1cf69180":"#52525B","52be8b6a-2507-409b-bad3-0fc2fc08317a":"#F8C462","c6634b72-0692-4496-a0b4-e67aae1dcbb8":"#E29402","ec12db02-3baf-43ec-aa8e-22c2d121aa31":"#F16319","6e4e729f-c1a2-4962-b29b-4a2dca907d68":"#F9D38A","dea5492e-579e-45ac-a912-8a98f2252dab":"#BBBBC3","7e117e00-1ad2-4549-bb20-d2600417cfed":"#088C41","b9c9f089-0d10-4399-893f-cafb51a7f77f":"#AA0306","24c34ef7-35b9-4c94-93d1-76732cc8540f":"#1C2C36","794b0614-0160-4a44-826b-35522355fa61":"#E4EAED","cb6b895a-3741-4c78-b30d-b4e33c3bc60e":"#FFFFFF80"} : {"6e2d49af-ee1c-438c-aad7-cb0d84f9d37f":"#000000","428e5fcd-6175-41c4-94bf-8eae5338be39":"#6A9FC8","5a003667-3804-4d11-9877-2e393f405681":"#F6AE28","d1d5743d-e893-4cad-8b04-f67381536daf":"#3F3F46","41a2eba2-29f4-49a9-b2e7-6c6088d5e35f":"#FFFFFF","08c0e8cd-70b4-425d-bb33-9c9aab245f4f":"#33658A","9cf66ab6-e441-4915-8c03-2eb450fb7909":"#A6C6DE","b1eedf5d-862b-4b40-a1db-6f5d24a7db9a":"#2F4858","a7ca33e2-39ac-4a5b-972c-465c1cf69180":"#52525B","52be8b6a-2507-409b-bad3-0fc2fc08317a":"#F8C462","c6634b72-0692-4496-a0b4-e67aae1dcbb8":"#E29402","ec12db02-3baf-43ec-aa8e-22c2d121aa31":"#F16319","6e4e729f-c1a2-4962-b29b-4a2dca907d68":"#F9D38A","dea5492e-579e-45ac-a912-8a98f2252dab":"#BBBBC3","7e117e00-1ad2-4549-bb20-d2600417cfed":"#088C41","b9c9f089-0d10-4399-893f-cafb51a7f77f":"#AA0306","24c34ef7-35b9-4c94-93d1-76732cc8540f":"#1C2C36","794b0614-0160-4a44-826b-35522355fa61":"#E4EAED","cb6b895a-3741-4c78-b30d-b4e33c3bc60e":"#FFFFFF80"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"7300967a-796d-44e3-a8e3-2c0fee68b13f":"12px","5ed588bc-13c9-44d5-9fce-5345dcf7cddf":"16px","e15aa9f5-c557-4c66-bbe1-6890168782d8":"32px","992b896b-9208-4356-b5ae-b52277616597":"4px","f4de8d1f-54ec-49df-a1ab-cc3836152d30":"12px","e0cc0a62-b63d-40d8-998c-57dffec849d0":"20px","53d47ffc-e23d-43c3-a6d0-796212069680":"24px","578045c7-991b-4709-88a6-624a28984410":"28px","4482e330-8391-4f29-b844-b37cb98a3dae":"8px","d39e1943-688a-4b52-92ba-cb9a93ca0c67":"30px","976498db-e313-48c6-be90-0a5ba80c2aab":"40px","d33a1c22-374a-4420-9c89-3533717ee9b4":"60px","7a979126-dd7c-4210-9e79-999949af8f5d":"100%"},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"c80cad50-efa5-496f-b402-78a116f81bf8":"500 14px/normal 'Bakbak One', serif","aa1e71bf-2756-4a2d-a338-e0e1f9dd13e9":"500 18px/22px 'Bakbak One', serif","6aac7304-234b-4b13-8868-091d2d4855a9":"700 16px/normal 'Bakbak One', serif","860e3aaf-b28d-4809-b1fd-74b582f27405":"100 12px/normal 'Bakbak One', serif","26745f73-090b-4dcb-b51a-0b1ba1bbbfac":"500 24px/20px 'Bakbak One', serif","5bbb0e60-aa58-4369-b6f0-8ae573e9bed9":"500 18px/normal var(--ww-default-font-family, sans-serif)","a1358b5e-e80d-43f1-b502-bbd413a6d8ab":"500 16px/normal var(--ww-default-font-family, sans-serif)","65ed08de-16d0-46b8-8d07-ba6e828e6a07":"400 14px/normal var(--ww-default-font-family, sans-serif)","4a47d29a-58bc-4379-a78d-bf8d0733fa80":"400 10px/normal var(--ww-default-font-family, sans-serif)","58b60560-6320-4fee-80a7-f238c9188244":"400 12px/normal var(--ww-default-font-family, sans-serif)","60d10a6c-80be-44c1-9a47-93f222c270b8":"500 38px/100% 'Bakbak One', serif"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(process.env.VUE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
