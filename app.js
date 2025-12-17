// チャレンジデータ
const challenges = [
    {
        level: 1,
        description: '花を赤色にしてみよう！',
        goal: 'color プロパティの使い方',
        hint: 'color: red; を使って色を変えられるよ！',
        targetHTML: '🌸',
        targetClass: 'flower',
        initialCSS: '.flower {\n  \n}',
        validation: (element) => {
            const color = window.getComputedStyle(element).color;
            return color === 'rgb(255, 0, 0)' || color === 'red';
        }
    },
    {
        level: 2,
        description: '太陽を大きくしよう！（60pxに）',
        goal: 'font-size プロパティで大きさを変える',
        hint: 'font-size: 60px; で大きさを変えられるよ！',
        targetHTML: '☀️',
        targetClass: 'sun',
        initialCSS: '.sun {\n  \n}',
        validation: (element) => {
            const fontSize = window.getComputedStyle(element).fontSize;
            return fontSize === '60px';
        }
    },
    {
        level: 3,
        description: '星に背景色をつけよう！（黄色）',
        goal: 'background-color プロパティの使い方',
        hint: 'background-color: yellow; で背景色をつけられるよ！',
        targetHTML: '⭐',
        targetClass: 'star',
        initialCSS: '.star {\n  \n}',
        validation: (element) => {
            const bgColor = window.getComputedStyle(element).backgroundColor;
            return bgColor === 'rgb(255, 255, 0)' || bgColor === 'yellow';
        }
    },
    {
        level: 4,
        description: 'ハートに余白をつけよう！（padding: 20px）',
        goal: 'padding プロパティで内側の余白を作る',
        hint: 'padding: 20px; で要素の内側に余白を作れるよ！',
        targetHTML: '❤️',
        targetClass: 'heart',
        initialCSS: '.heart {\n  background-color: pink;\n  \n}',
        validation: (element) => {
            const padding = window.getComputedStyle(element).padding;
            return padding === '20px';
        }
    },
    {
        level: 5,
        description: '月を中央に配置しよう！',
        goal: 'text-align プロパティでテキストの位置を変える',
        hint: 'text-align: center; で中央揃えにできるよ！親要素に設定してね。',
        targetHTML: '<div class="moon-container"><span class="moon">🌙</span></div>',
        targetClass: 'moon-container',
        initialCSS: '.moon-container {\n  background: #333;\n  padding: 20px;\n  \n}',
        validation: (element) => {
            const textAlign = window.getComputedStyle(element).textAlign;
            return textAlign === 'center';
        }
    },
    {
        level: 6,
        description: '虹を角丸にしよう！（border-radius: 15px）',
        goal: 'border-radius プロパティで角を丸くする',
        hint: 'border-radius: 15px; で角を丸くできるよ！',
        targetHTML: '🌈',
        targetClass: 'rainbow',
        initialCSS: '.rainbow {\n  background: lightblue;\n  padding: 20px;\n  \n}',
        validation: (element) => {
            const borderRadius = window.getComputedStyle(element).borderRadius;
            return borderRadius === '15px';
        }
    },
    {
        level: 7,
        description: '木に影をつけよう！',
        goal: 'text-shadow プロパティで影をつける',
        hint: 'text-shadow: 2px 2px 4px black; で影をつけられるよ！',
        targetHTML: '🌳',
        targetClass: 'tree',
        initialCSS: '.tree {\n  \n}',
        validation: (element) => {
            const shadow = window.getComputedStyle(element).textShadow;
            return shadow !== 'none' && shadow.length > 0;
        }
    },
    {
        level: 8,
        description: '雲に枠線をつけよう！（3px solid blue）',
        goal: 'border プロパティで枠線を作る',
        hint: 'border: 3px solid blue; で青い枠線をつけられるよ！',
        targetHTML: '☁️',
        targetClass: 'cloud',
        initialCSS: '.cloud {\n  padding: 15px;\n  \n}',
        validation: (element) => {
            const border = window.getComputedStyle(element).border;
            const borderWidth = window.getComputedStyle(element).borderWidth;
            const borderStyle = window.getComputedStyle(element).borderStyle;
            const borderColor = window.getComputedStyle(element).borderColor;
            return borderWidth === '3px' && borderStyle === 'solid' &&
                   (borderColor === 'rgb(0, 0, 255)' || borderColor === 'blue');
        }
    },
    {
        level: 9,
        description: 'ロケットを回転させよう！（45度）',
        goal: 'transform プロパティで回転させる',
        hint: 'transform: rotate(45deg); で45度回転できるよ！',
        targetHTML: '🚀',
        targetClass: 'rocket',
        initialCSS: '.rocket {\n  \n}',
        validation: (element) => {
            const transform = window.getComputedStyle(element).transform;
            // matrix形式で返ってくるので、回転が適用されているかチェック
            return transform !== 'none' && transform.includes('matrix');
        }
    },
    {
        level: 10,
        description: 'トロフィーにグラデーション背景をつけよう！',
        goal: 'linear-gradient で美しいグラデーションを作る',
        hint: 'background: linear-gradient(to right, gold, orange); でグラデーションが作れるよ！',
        targetHTML: '🏆',
        targetClass: 'trophy',
        initialCSS: '.trophy {\n  padding: 30px;\n  \n}',
        validation: (element) => {
            const bg = window.getComputedStyle(element).background;
            return bg.includes('gradient');
        }
    }
];

// 現在のレベル
let currentLevel = 0;

// DOM要素
const levelNumber = document.getElementById('levelNumber');
const challengeDescription = document.getElementById('challengeDescription');
const goalText = document.getElementById('goalText');
const hintText = document.getElementById('hintText');
const hintBtn = document.getElementById('hintBtn');
const previewArea = document.getElementById('previewArea');
const codeInput = document.getElementById('codeInput');
const lineNumbers = document.getElementById('lineNumbers');
const applyBtn = document.getElementById('applyBtn');
const resetBtn = document.getElementById('resetBtn');
const checkBtn = document.getElementById('checkBtn');
const feedback = document.getElementById('feedback');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const celebration = document.getElementById('celebration');
const continueBtn = document.getElementById('continueBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');

// チャレンジを読み込む
function loadChallenge(level) {
    const challenge = challenges[level];

    // UI更新
    levelNumber.textContent = challenge.level;
    challengeDescription.textContent = challenge.description;
    goalText.textContent = challenge.goal;
    hintText.textContent = challenge.hint;
    hintText.classList.remove('show');

    // プレビューエリア更新
    previewArea.innerHTML = challenge.targetHTML;
    const targetElement = previewArea.querySelector(`.${challenge.targetClass}`) || previewArea.firstElementChild;
    if (targetElement) {
        targetElement.className = challenge.targetClass;
    }

    // コード入力リセット
    codeInput.value = challenge.initialCSS;
    updateLineNumbers();

    // フィードバッククリア
    feedback.classList.remove('show', 'success', 'error');

    // プログレスバー更新
    const progress = ((level + 1) / challenges.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `Level ${level + 1} / ${challenges.length}`;

    // ナビゲーションボタン
    prevBtn.disabled = level === 0;
    nextBtn.disabled = level === challenges.length - 1;
}

// 行番号を更新
function updateLineNumbers() {
    const lines = codeInput.value.split('\n').length;
    lineNumbers.textContent = Array.from({ length: lines }, (_, i) => i + 1).join('\n');
}

// CSSを適用
function applyCSS() {
    // 既存のスタイルタグを削除
    const existingStyle = document.getElementById('userStyle');
    if (existingStyle) {
        existingStyle.remove();
    }

    // 新しいスタイルタグを作成
    const style = document.createElement('style');
    style.id = 'userStyle';
    style.textContent = codeInput.value;
    document.head.appendChild(style);

    showFeedback('CSSを適用しました！', 'success');
}

// チェック
function checkSolution() {
    const challenge = challenges[currentLevel];
    const targetElement = previewArea.querySelector(`.${challenge.targetClass}`);

    if (!targetElement) {
        showFeedback('エラー: ターゲット要素が見つかりません', 'error');
        return;
    }

    if (challenge.validation(targetElement)) {
        showFeedback('正解です！素晴らしい！ 🎉', 'success');
        setTimeout(() => {
            celebration.classList.add('show');
        }, 500);
    } else {
        showFeedback('もう少し！ヒントを見てみよう 💡', 'error');
    }
}

// リセット
function resetCode() {
    const challenge = challenges[currentLevel];
    codeInput.value = challenge.initialCSS;
    updateLineNumbers();

    // スタイルを削除
    const existingStyle = document.getElementById('userStyle');
    if (existingStyle) {
        existingStyle.remove();
    }

    feedback.classList.remove('show');
}

// フィードバック表示
function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = 'feedback show ' + type;
}

// イベントリスナー
hintBtn.addEventListener('click', () => {
    hintText.classList.toggle('show');
});

codeInput.addEventListener('input', updateLineNumbers);

applyBtn.addEventListener('click', applyCSS);

resetBtn.addEventListener('click', resetCode);

checkBtn.addEventListener('click', checkSolution);

prevBtn.addEventListener('click', () => {
    if (currentLevel > 0) {
        currentLevel--;
        loadChallenge(currentLevel);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentLevel < challenges.length - 1) {
        currentLevel++;
        loadChallenge(currentLevel);
    }
});

continueBtn.addEventListener('click', () => {
    celebration.classList.remove('show');
    if (currentLevel < challenges.length - 1) {
        currentLevel++;
        loadChallenge(currentLevel);
    } else {
        // 全てクリア
        showFinalCelebration();
    }
});

// 最終お祝い
function showFinalCelebration() {
    const celebrationContent = document.querySelector('.celebration-content');
    celebrationContent.innerHTML = `
        <h2>🎊 完全クリア！ 🎊</h2>
        <p>全てのチャレンジをクリアしました！</p>
        <p>あなたはCSSマスターです！</p>
        <button class="btn btn-primary" onclick="location.reload()">最初から始める</button>
    `;
    celebration.classList.add('show');
}

// 初期化
loadChallenge(currentLevel);
