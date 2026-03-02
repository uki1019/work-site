// ========================================
// 作品データ
// ========================================
const worksData = [
    {
        id: 1,
        title: "キャンプ日和公式サイト",
        category: "web",
        year: "2026",
        tags: ["個人"],
        thumbnail: "image/zuopin1-1.png",
        images: ["works/work1-1.jpg", "works/work1-2.jpg", "works/work1-3.jpg"],
        description: "日常から少し離れ、自然の中で心と身体を整える体験をテーマにした、架空のキャンプイベント公式サイトです。",
        tools: "Figma / HTML / CSS / JavaScript",
        duration: "3ヶ月",
        role: "UIUXデザイン / プロトタイピング",
        url: "work1.html"  // 作品详情页链接
    },
    {
        id: 2,
        title: "MMS SHINJUKU ザイリュウログ",
        category: "web",
        year: "2025",
        tags: ["グループ"],
        thumbnail: "image/work2-1.png",
        images: ["works/work2-1.jpg", "works/work2-2.jpg"],
        description: "宇宙人の新宿滞在記録サイト！",
        tools: "Figma / HTML / CSS / JavaScript",
        duration: "3ヶ月",
        role: "情報設計 / WEBデザイン / UI設計",
        url: "work2.html"
    },
    {
        id: 3,
        title: "カフェ＆ベーカリー Webサイト",
        category: "web",
        year: "2025",
        tags: ["個人"],
        thumbnail: "image/work3.png",
        images: ["image/work3-1.png", "image/work3-2.JPG"],
        description: "カフェとベーカリー、2つのお店の世界観をひとつのWebサイトにまとめたデザインです。コーヒーの香りと焼き立てパンの温かさが伝わるようにビジュアルと言葉を設計しました。",
        tools: "Figma / Photoshop",
        duration: "2週間",
        role: "情報設計 / Webデザイン / UIデザイン",
        url: "work3.html"
    },
    {
        id: 4,
        title: "XG紹介サイト",
        category: "web",
        year: "2024",
        tags: ["個人"],
        thumbnail: "image/work4-n.png",
        images: [
            "image/work4-1.png",
            "image/work4-2.png",
            "image/work4-3.png",
            "image/work4-4.png",
            "image/work4-5.jpg",
            "image/work4-6.jpg",
            "image/work4daohang.jpg",
            "image/work4-n.jpg"
        ],
        description: "グローバルガールズグループXGの世界観や魅力を紹介するために制作したファンサイトです。楽曲・メンバー・ビジュアルの情報を整理し、初めて訪れた人でもXGの魅力が直感的に伝わる構成を意識しました。",
        tools: "Figma / Photoshop / HTML / CSS / JavaScript",
        duration: "1ヶ月",
        role: "情報設計 / Webデザイン / UIデザイン / コーディング",
        url: "work4.html"
    },
    {
        id: 5,
        title: "かき氷おじさん",
        category: "graphic",
        year: "2025",
        tags: ["グループ"],
        thumbnail: "image/work5-1.jpg",
        images: ["image/work5-1.jpg", "image/work5-2.jpg", "image/work5-3.jpg", "image/work5-4.jpg"],
        description: "世界がますます暑くなり、終末の危機が迫る中、かき氷を愛するおじさんが“食べること”で自らを救おうとする物語です。",
        tools: "figma / Photoshop",
        duration: "1ヶ月",
        role: "イベントデザイン / グラフィック",
        url: "work5.html"
    },
    {
        id: 6,
        title: "ラーメンの好みを可視化するキャラクター設計",
        category: "graphic",
        year: "2025",
        tags: ["個人"],
        thumbnail: "image/work7-1.JPG",
        images: [
            "image/work7-1.JPG",
            "image/work7-2.JPG",
            "image/work7-3.JPG",
            "image/work7-4.JPG",
            "image/work7-5.JPG",
            "image/work7-6.JPG",
            "image/work7-9.JPG",
            "image/work7-10.PNG",
            "image/work7-11.JPG"
        ],
        description: "ラーメンの好みを視覚的なキャラクターへと変換することをテーマに制作したデザイン研究プロジェクトです。",
        tools: "Procreate / Photoshop",
        duration: "3ヶ月",
        role: "コンセプト設計 / キャラクターデザイン / ビジュアル制作",
        url: "work7.html"
    },
    {
        id: 7,
        title: "Other Works",
        category: "other",
        year: "2016-",
        tags: ["個人"],
        thumbnail: "image/work6feng.jpg",
        images: ["image/work6-1.png", "image/work6-2.png", "image/work6-3.png", "image/work6-4.png"],
        description: "WebデザインやUIUX設計、グラフィック制作以外の表現領域で制作した作品をまとめたアーカイブです。",
        tools: "鉛筆 / 水彩 / アクリル / Procreate",
        duration: "随時制作",
        role: "イラストレーション / ドローイング",
        url: "work6.html"
    }
];

// ========================================
// ナビゲーション
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// ハンバーガーメニュー
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ナビゲーションリンククリック時
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// スクロール時のナビゲーション背景変更
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ========================================
// スムーススクロール
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// 作品表示
// ========================================
const worksGrid = document.getElementById('worksGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// 作品カード生成
function createWorkCard(work, index) {
    const card = document.createElement('div');
    card.className = 'work-card';
    card.dataset.category = work.category;
    card.dataset.id = work.id;
    
    // 根据不同的category分配不同的颜色
    const tagColors = {
        'web': 'blue',
        'graphic': 'green',
        'other': 'orange'
    };
    const tagColor = tagColors[work.category] || 'pink';
    
    card.innerHTML = `
        <div class="work-image">
            <img src="${work.thumbnail}" alt="${work.title}" onerror="this.parentElement.innerHTML='<div style=\\'padding:2rem;text-align:center;color:#999;\\'>${work.title}</div>'">
        </div>
        <div class="work-info">
            <div class="work-number">${String(index + 1).padStart(2, '0')}</div>
            <div class="work-tags">
                <span class="work-tag ${tagColor}">${getCategoryName(work.category)}</span>
                ${work.tags ? work.tags.map(tag => `<span class="work-tag ${tagColor}">${tag}</span>`).join('') : ''}
            </div>
            <h3 class="work-card-title">${work.title}</h3>
            <p class="work-card-description">${work.description ? work.description.substring(0, 60) + '...' : ''}</p>
        </div>
    `;
    
    // 点击跳转到作品详情页
    card.addEventListener('click', () => {
        if (work.url) {
            window.location.href = work.url;
        }
    });
    
    return card;
}

// カテゴリー名取得
function getCategoryName(category) {
    const categoryNames = {
        'web': 'WEBデザイン',
        'graphic': 'UIUX Design',
        'other': 'Other'
    };
    return categoryNames[category] || category;
}

// 作品表示
function displayWorks(category = 'all') {
    worksGrid.innerHTML = '';
    
    const filteredWorks = category === 'all' 
        ? worksData 
        : worksData.filter(work => work.category === category);
    
    filteredWorks.forEach((work, index) => {
        worksGrid.appendChild(createWorkCard(work, index));
    });
    
    // アニメーション
    const cards = worksGrid.querySelectorAll('.work-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 50);
    });
}

// フィルターボタン
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        displayWorks(category);
    });
});

// 初期表示
displayWorks();

// ========================================
// モーダル
// ========================================
const modal = document.getElementById('workModal');
const modalOverlay = modal.querySelector('.modal-overlay');
const modalClose = modal.querySelector('.modal-close');

function openModal(work) {
    const modalBody = modal.querySelector('.modal-body');
    
    // 画像生成
    let imagesHTML = '';
    work.images.forEach(img => {
        imagesHTML += `<img src="${img}" alt="${work.title}" onerror="this.style.display='none'">`;
    });
    
    modalBody.innerHTML = `
        <div class="modal-images">
            ${imagesHTML}
        </div>
        <div class="modal-info">
            <h3 class="work-title">${work.title}</h3>
            <div class="work-meta">
                <span class="work-category">${getCategoryName(work.category)}</span>
                <span class="work-year">${work.year}</span>
            </div>
            <div class="work-description">
                <p>${work.description}</p>
            </div>
            <div class="work-details">
                <div class="detail-item">
                    <h4>使用ツール</h4>
                    <p class="work-tools">${work.tools}</p>
                </div>
                <div class="detail-item">
                    <h4>制作期間</h4>
                    <p class="work-duration">${work.duration}</p>
                </div>
                <div class="detail-item">
                    <h4>担当範囲</h4>
                    <p class="work-role">${work.role}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// ESCキーでモーダルを閉じる
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ========================================
// スクロールアニメーション
// ========================================

// 导航栏滚动隐藏/显示
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
let scrollTimer = null;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 清除之前的计时器
    if (scrollTimer !== null) {
        clearTimeout(scrollTimer);
    }
    
    if (scrollTop > lastScrollTop && scrollTop > 80) {
        // 向下滚动 - 隐藏导航栏
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // 向上滚动 - 显示导航栏
        navbar.style.transform = 'translateY(0)';
    }
    
    // 设置计时器,滚动停止后确保导航栏显示
    scrollTimer = setTimeout(() => {
        navbar.style.transform = 'translateY(0)';
    }, 1000);
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 要素を監視
document.addEventListener('DOMContentLoaded', () => {
    // 滚动动画元素
    const animateElements = document.querySelectorAll('.profile-content, .section-title, .work-card, .profile-motto, .profile-interests, .profile-skills, .profile-info, .contact-text, .contact-info');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.25s ease ${index * 0.02}s`;
        observer.observe(el);
    });
    
    // 添加作品卡片悬停音效提示
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
    
    // 筛选按钮点击波纹效果
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// ========================================
// ページ読み込み時のアニメーション
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// スクロール進捗インジケーター
// ========================================
function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    
    // 必要に応じてプログレスバーを追加できます
}

window.addEventListener('scroll', updateScrollProgress);

// ========================================
// パララックス効果 - 無効化
// ========================================
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const parallaxElements = document.querySelectorAll('.avatar-circle');
//     
//     parallaxElements.forEach(el => {
//         const speed = 0.5;
//         el.style.transform = `translateY(${scrolled * speed}px)`;
//     });
// });

// ========================================
// 额外交互效果
// ========================================

// 平滑的页面滚动进度指示
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateScrollProgress();
            ticking = false;
        });
        ticking = true;
    }
});

// 鼠标跟随效果（可选）
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// 添加视差滚动效果到某些元素
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.scroll-indicator');
    
    parallaxElements.forEach(el => {
        const speed = 0.3;
        el.style.transform = `translateX(-50%) translateY(${scrolled * speed}px)`;
    });
});

// 为链接添加平滑的颜色过渡
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transition = 'color 0.3s ease';
    });
});

// 作品卡片加载动画
const observeWorkCards = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            observeWorkCards.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// 页面加载完成后初始化
window.addEventListener('load', () => {
    // 为作品卡片添加观察
    const cards = document.querySelectorAll('.work-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observeWorkCards.observe(card);
    });
});

// ========================================
// 作品カードホバーサークル追従
// ========================================
(function() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-circle';
    cursor.innerHTML = '見る';
    document.body.appendChild(cursor);
    
    let isOnCard = false;
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.work-card')) {
            isOnCard = true;
            cursor.classList.add('active');
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        const card = e.target.closest('.work-card');
        if (card && !card.contains(e.relatedTarget)) {
            isOnCard = false;
            cursor.classList.remove('active');
        }
    });
})();

// ========================================
// コンソールメッセージ
// ========================================
console.log('%c Portfolio Site ', 'background: #E8A5A5; color: white; padding: 5px 10px; border-radius: 3px; font-weight: bold;');
console.log('Designed by Yuki Matsuo');
console.log('ご覧いただきありがとうございます!');
