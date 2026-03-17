import { FAQ_DATA } from '../data/faq';

function FAQ() {
    return (
        <section className="faq" id="faq" aria-labelledby="faq-title">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">常見問題</span>
                    <h2 id="faq-title" className="section-header__title">
                        有疑問嗎？我們為您解答
                    </h2>
                    <p className="section-header__desc">
                        我們整理了一些用戶常見的問題，希望能幫助您更快上手。
                    </p>
                </div>

                <div className="faq__list">
                    {FAQ_DATA.map((item) => (
                        <details key={item.id} className="faq__item">
                            <summary className="faq__question">
                                <span>{item.question}</span>
                                <span className="faq__icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </span>
                            </summary>
                            <div className="faq__answer">
                                <p>{item.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
