// swiper
const swiper = new Swiper('.p-lp2025-result-card__swiper', {
    loop: true, // ループさせる
    speed: 600, // 切り替えのスピード
    slidesPerView: 1, // スマホでは1枚表示
    spaceBetween: 20, // スライド間の余白
    centeredSlides: true, // 真ん中に配置

    // PC画面（768px以上）の設定
    breakpoints: {
        1024: {
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: 0,
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