import { useSiteInfo } from "../../hooks/useSiteInfo";
import styles from "./StaleVersionBanner.module.css";

export function StaleVersionBanner() {
    const siteInfo = useSiteInfo();
    const bundleVersion = __APP_VERSION__;

    if (bundleVersion === "dev" || !siteInfo.version || siteInfo.version === "dev") {
        return null;
    }

    if (siteInfo.version === bundleVersion) {
        return null;
    }

    function handleReload() {
        window.location.reload();
    }

    return (
        <div className={styles.banner} role="alert">
            <span className={styles.text}>A new version of the site is available. Please reload to update.</span>
            <button type="button" onClick={handleReload} className={styles.button}>
                Reload now
            </button>
        </div>
    );
}
