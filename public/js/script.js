document.querySelectorAll('.lp2025-js-details').forEach((details) => {
    const summary = details.querySelector('.lp2025-js-summary');
    const content = details.querySelector('.lp2025-js-content');

    summary.addEventListener('click', (e) => {
        // 1. ブラウザ標準の「パカッ」と開く動きを止める
        e.preventDefault();

        // 2. 閉まっている状態なら「開く」処理
        if (!details.hasAttribute('open')) {
            details.setAttribute('open', 'true'); // まず開く（中身を表示）

            // アニメーションの開始（高さ0から）
            const openKeyframes = (content) => [{
                    height: 0,
                    opacity: 0
                },
                {
                    height: content.scrollHeight + 'px',
                    opacity: 1
                }
            ];

            const options = {
                duration: 300,
                easing: 'ease-out'
            };
            content.animate(openKeyframes(content), options);

            // クラスを付けて矢印を回転させる
            details.classList.add('is-open');

        } else {
            // 3. 開いている状態なら「閉じる」処理
            const closeKeyframes = (content) => [{
                    height: content.scrollHeight + 'px',
                    opacity: 1
                },
                {
                    height: 0,
                    opacity: 0
                }
            ];

            const options = {
                duration: 300,
                easing: 'ease-out'
            };

            // アニメーションを実行し、終わったら open 属性を消す
            content.animate(closeKeyframes(content), options).onfinish = () => {
                details.removeAttribute('open');
                details.classList.remove('is-open');
            };
        }
    });
});

// swiper
/* ▼▼▼ Swiperの初期化コードを追加 ▼▼▼ */
const swiper = new Swiper('.p-lp2025-result-card__swiper', {
    loop: true, // ループさせる
    speed: 600, // 切り替えのスピード
    slidesPerView: 1, // スマホでは1枚表示
    spaceBetween: 20, // スライド間の余白
    centeredSlides: true, // 真ん中に配置

    // PC画面（768px以上）の設定
    breakpoints: {
        768: {
            slidesPerView: 3, // PCでは3枚表示（デザインに合わせて調整してください）
            centeredSlides: false,
            spaceBetween: 30,
        }
    },

    // ページネーション（下部の点々）
    pagination: {
        el: '.lp2025-result-pagination',
        clickable: true,
    },

    // ナビゲーション（左右の矢印）
    navigation: {
        nextEl: '.lp2025-result-next',
        prevEl: '.lp2025-result-prev',
    },
});