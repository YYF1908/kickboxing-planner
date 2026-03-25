const translations = {
    en: {
        title: "Jordan Kickboxing", langBtn: "العربية", formHead: "Your Profile", 
        agePh: "Enter Age", genBtn: "Generate My Plan", tech: "🥋 Technical Lab", fit: "💪 Fitness Engine", back: "Back"
    },
    ar: {
        title: "كيك بوكسينج الأردن", langBtn: "English", formHead: "ملفك الشخصي", 
        agePh: "أدخل العمر", genBtn: "إظهار الخطة", tech: "🥋 المختبر الفني", fit: "💪 محرك اللياقة", back: "رجوع"
    }
};

function toggleLanguage() {
    const html = document.getElementById('main-html');
    const isEn = html.getAttribute('dir') === 'ltr';
    const lang = isEn ? 'ar' : 'en';
    html.setAttribute('dir', isEn ? 'rtl' : 'ltr');
    html.setAttribute('lang', lang);

    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('lang-btn').innerText = translations[lang].langBtn;
    document.getElementById('form-head').innerText = translations[lang].formHead;
    document.getElementById('age').placeholder = translations[lang].agePh;
    document.getElementById('generate-btn').innerText = translations[lang].genBtn;
}

const danMoves = {
    white: { en: "Jab-Cross & Stance", ar: "لكمة الجاب والكرووس والوقفة (Jab-Cross & Stance)" },
    dan1: { en: "Spinning Back-fist & Jump Kicks", ar: "لكمة القبضة الخلفية الدوارة والركلات القافزة (Spinning Back-fist & Jump Kicks)" },
    dan2: { en: "Clinch Knee Strikes & Tactics", ar: "ضربات الركبة في الكلينش والتكتيكات (Clinch Knees)" },
    dan3: { en: "Defensive Mastery & Slip-flows", ar: "إتقان الدفاع وانزلاق الضربات (Defensive Slip-flows)" },
    dan4: { en: "Axe Kicks & Feint Setups", ar: "ركلة الفأس والتمويه المتقدم (Axe Kicks & Feints)" },
    dan5: { en: "Complex 5-Hit Combinations", ar: "تركيبات معقدة من 5 ضربات (5-Hit Combos)" },
    dan6: { en: "Master Footwork & Rhythm", ar: "حركة القدمين المتقدمة والإيقاع (Master Footwork)" },
    dan7: { en: "Elite Strategy & Timing", ar: "استراتيجية النخبة والتوقيت (Elite Strategy)" },
    dan8: { en: "Refereing & Philosophy", ar: "فلسفة القتال والتحكيم (Philosophy & Refereeing)" },
    dan9: { en: "Grandmaster Legacy Strategy", ar: "استراتيجية الخبير الكبير (Grandmaster Legacy)" }
};

function generatePlan() {
    const belt = document.getElementById('belt-level').value;
    const fitness = document.getElementById('fitness').value;
    const lang = document.getElementById('main-html').getAttribute('lang') || 'en';
    
    let tech = danMoves[belt] ? danMoves[belt][lang] : danMoves['white'][lang];
    let fit = fitness === "high" ? "5x3m Rounds HIIT" : "20m Steady Cardio";

    document.getElementById('setup-form').style.display = 'none';
    const display = document.getElementById('plan-display');
    display.style.display = 'block';
    display.innerHTML = `
        <h2>${translations[lang].tech}</h2><p>${tech}</p><hr>
        <h2>${translations[lang].fit}</h2><p>${fit}</p>
        <button onclick="location.reload()">${translations[lang].back}</button>
    `;
}