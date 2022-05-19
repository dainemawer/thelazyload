export const sendMetric = ({ name, value }) => {
    const URL = `https://qckm.io?m=${name}&v=${value}&k=${process.env.NEXT_PUBLIC_QUICK_METRICS_ID}`;   
    
    if (navigator.sendBeacon) {
        navigator.sendBeacon(URL);
    } else {
        fetch(URL, { method: "POST", keepalive: true });
    }
}

export const pageView = (url, title) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
        page_location: url,
        page_title: title,
    })
}

export const event = ({action, category, label, value}) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}