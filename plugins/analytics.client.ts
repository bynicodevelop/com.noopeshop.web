const init = (pixelId) => {
    console.log("init pixel", pixelId);

    if (pixelId === 'development') return;

    (window as any).fbq("init", pixelId);
};

function pageView(eventProperties = null) {
    console.log("PageView", eventProperties);

    (window as any).fbq("track", "PageView", eventProperties);
}

function contentView(eventProperties = null) {
    console.log("ViewContent", eventProperties);

    (window as any).fbq("track", "ViewContent", eventProperties);
}

function lead(eventProperties = null) {
    console.log("Prospect", eventProperties);

    (window as any).fbq("track", "Lead", eventProperties);
}

function addToCard(eventProperties = null) {
    console.log("AddToCart", eventProperties);

    (window as any).fbq("track", "AddToCart", eventProperties);
}

function initiateCheckout(eventProperties = null) {
    console.log("InitiateCheckout", eventProperties);

    (window as any).fbq("track", "InitiateCheckout", eventProperties);
}

function purchase(eventProperties = null) {
    console.log("Purchase", eventProperties);

    (window as any).fbq("track", "Purchase", eventProperties);
}

function subscribe(eventProperties = null) {
    console.log("Subscribe", eventProperties);

    (window as any).fbq("track", "Subscribe", eventProperties);
}

export default defineNuxtPlugin(async (nuxtApp) => {
    const { PIXEL_ID } = useRuntimeConfig();

    init(PIXEL_ID);

    return {
        provide: {
            tracker: {
                pageView,
                contentView,
                lead,
                addToCard,
                initiateCheckout,
                purchase,
                subscribe,
            },
        },
    }
})