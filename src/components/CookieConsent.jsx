import { useState, useEffect } from 'react';

function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        setIsFadingOut(true);
        localStorage.setItem('cookieConsent', 'true');
        setTimeout(() => {
            setIsVisible(false);
        }, 300); // 配合 CSS 動畫時間
    };

    if (!isVisible) {
        return null; // 防止 Hydration 閃現及後續不再渲染
    }

    return (
        <div className={`cookie-consent ${isFadingOut ? 'cookie-consent--hide' : ''}`}>
            <div className="cookie-consent__inner container">
                <div className="cookie-consent__content">
                    <h3 className="cookie-consent__title">🍪 我們重視您的隱私</h3>
                    <p className="cookie-consent__text">
                        我們使用 Cookie 來提升系統效能並提供個人化的使用體驗。繼續瀏覽即表示您同意我們的隱私權與 Cookie 政策。
                    </p>
                </div>
                <div className="cookie-consent__actions">
                    <button className="btn btn--primary" onClick={handleAccept}>
                        全部接受
                    </button>
                    <button className="btn btn--outline cookie-consent__close" onClick={handleAccept} aria-label="關閉">
                        ✕
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
