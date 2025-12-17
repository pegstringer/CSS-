// チャレンジデータ
const challenges = [
    {
        level: 1,
        description: '花を赤色にしてみよう！',
        goal: 'color プロパティの使い方',
        explanation: `<strong>color</strong> プロパティは、テキストや絵文字の色を変えるために使います。<br><br>
            <strong>📝 基本の書き方：</strong><br>
            <code>color: 色の名前;</code><br><br>
            <strong>🎨 使える色の例：</strong><br>
            • red（赤）<br>
            • blue（青）<br>
            • green（緑）<br>
            • yellow（黄色）<br>
            • pink（ピンク）<br><br>
            <strong>⚠️ よくある間違い：</strong><br>
            ❌ <code>color red;</code> ← コロン(:)がない！<br>
            ❌ <code>color: red</code> ← セミコロン(;)がない！<br>
            ✅ <code>color: red;</code> ← 正解！`,
        hint: `ヒント：波括弧 { } の中に、以下のように書いてみよう！<br><br>
            <code>color: red;</code><br><br>
            💡 コロン(:)とセミコロン(;)を忘れずに！`,
        example: '.flower {\n  color: red;\n}',
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
        explanation: `<strong>font-size</strong> プロパティは、テキストや絵文字の大きさを変えるために使います。<br><br>
            <strong>📝 基本の書き方：</strong><br>
            <code>font-size: 数値px;</code><br><br>
            <strong>📏 pxって何？</strong><br>
            px（ピクセル）は画面上の点の数を表します。数値が大きいほど、文字も大きくなります！<br><br>
            <strong>💡 例：</strong><br>
            • <code>font-size: 20px;</code> ← 小さい<br>
            • <code>font-size: 60px;</code> ← 大きい<br>
            • <code>font-size: 100px;</code> ← とても大きい<br><br>
            <strong>⚠️ よくある間違い：</strong><br>
            ❌ <code>font-size: 60;</code> ← pxがない！<br>
            ❌ <code>fontsize: 60px;</code> ← ハイフン(-)がない！<br>
            ✅ <code>font-size: 60px;</code> ← 正解！`,
        hint: `ヒント：太陽を60ピクセルの大きさにするには<br><br>
            <code>font-size: 60px;</code><br><br>
            💡 数値の後に必ず「px」をつけてね！`,
        example: '.sun {\n  font-size: 60px;\n}',
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
        explanation: `<strong>background-color</strong> プロパティは、要素の背景（後ろ側）の色を変えるために使います。<br><br>
            <strong>📝 基本の書き方：</strong><br>
            <code>background-color: 色の名前;</code><br><br>
            <strong>🎨 colorとの違いは？</strong><br>
            • <code>color</code> → 文字の色を変える<br>
            • <code>background-color</code> → 背景の色を変える<br><br>
            <strong>💡 試してみよう：</strong><br>
            • <code>background-color: yellow;</code><br>
            • <code>background-color: lightblue;</code><br>
            • <code>background-color: pink;</code><br><br>
            <strong>⚠️ よくある間違い：</strong><br>
            ❌ <code>background: yellow;</code> ← これも動くけど詳しくは後で！<br>
            ✅ <code>background-color: yellow;</code> ← 今はこっちを使おう！`,
        hint: `ヒント：星の背景を黄色にするには<br><br>
            <code>background-color: yellow;</code><br><br>
            💡 「background-color」は長いけど、全部書いてね！`,
        example: '.star {\n  background-color: yellow;\n}',
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
        explanation: `<strong>padding</strong> プロパティは、要素の内側に余白（スペース）を作るために使います。<br><br>
            <strong>📝 基本の書き方：</strong><br>
            <code>padding: 数値px;</code><br><br>
            <strong>📦 paddingって何？</strong><br>
            要素の中身と枠の間に空間を作ります。数値が大きいほど、余白も広くなります！<br><br>
            <strong>👀 視覚的に理解しよう：</strong><br>
            padding: 0px → ❤️ ← ぎゅうぎゅう<br>
            padding: 10px → 　❤️　 ← ちょっと余裕<br>
            padding: 20px → 　　❤️　　 ← ゆったり<br><br>
            <strong>⚠️ よくある間違い：</strong><br>
            ❌ <code>padding: 20;</code> ← pxがない！<br>
            ✅ <code>padding: 20px;</code> ← 正解！`,
        hint: `ヒント：ハートの周りに20ピクセルの余白を作るには<br><br>
            <code>padding: 20px;</code><br><br>
            💡 プレビューを見て、ハートの周りに余白ができるのを確認してね！`,
        example: '.heart {\n  background-color: pink;\n  padding: 20px;\n}',
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
        explanation: `<strong>text-align</strong> プロパティは、テキストや絵文字の配置位置を変えるために使います。<br><br>
            <strong>📝 基本の書き方：</strong><br>
            <code>text-align: 配置;</code><br><br>
            <strong>📍 使える配置の種類：</strong><br>
            • <code>left</code> ← 左寄せ（デフォルト）<br>
            • <code>center</code> ← 中央寄せ<br>
            • <code>right</code> ← 右寄せ<br><br>
            <strong>💡 どう見える？</strong><br>
            left: 🌙　　　（左）<br>
            center: 　🌙　（中央）<br>
            right: 　　　🌙（右）<br><br>
            <strong>⚠️ よくある間違い：</strong><br>
            ❌ <code>text-align: middle;</code> ← middleじゃない！<br>
            ✅ <code>text-align: center;</code> ← centerが正解！`,
        hint: `ヒント：月を中央に配置するには<br><br>
            <code>text-align: center;</code><br><br>
            💡 左右の真ん中に月が来るのを確認してね！`,
        example: '.moon-container {\n  background: #333;\n  padding: 20px;\n  text-align: center;\n}',
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
        explanation: `<strong>border-radius</strong> プロパティは、要素の角を丸くするために使います。<br><br>
            <strong>📝 基本の書き方：</strong><br>
            <code>border-radius: 数値px;</code><br><br>
            <strong>📐 どんな形になる？</strong><br>
            数値が大きいほど、角が丸くなります！<br><br>
            <strong>💡 例で見てみよう：</strong><br>
            • <code>border-radius: 0px;</code> → 📦 角ばってる<br>
            • <code>border-radius: 15px;</code> → 📦̃ ちょっと丸い<br>
            • <code>border-radius: 50px;</code> → ⭕ すごく丸い<br><br>
            <strong>🎨 面白い使い方：</strong><br>
            <code>border-radius: 50%;</code> と書くと、完全な円になるよ！<br><br>
            <strong>⚠️ よくある間違い：</strong><br>
            ❌ <code>border-radius: 15;</code> ← pxがない！<br>
            ✅ <code>border-radius: 15px;</code> ← 正解！`,
        hint: `ヒント：虹の角を15ピクセル丸くするには<br><br>
            <code>border-radius: 15px;</code><br><br>
            💡 四隅が丸くなるのを確認してね！`,
        example: '.rainbow {\n  background: lightblue;\n  padding: 20px;\n  border-radius: 15px;\n}',
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
        explanation: `<strong>text-shadow</strong> プロパティは、テキストや絵文字に影をつけるために使います。<br><br>
            <strong>📝 基本の書き方：</strong><br>
            <code>text-shadow: 右 下 ぼかし 色;</code><br><br>
            <strong>🔢 それぞれの数値の意味：</strong><br>
            1. 右への移動（2px = 右に2px）<br>
            2. 下への移動（2px = 下に2px）<br>
            3. ぼかしの強さ（4px = 少しぼやける）<br>
            4. 影の色（black = 黒）<br><br>
            <strong>💡 具体例：</strong><br>
            <code>text-shadow: 2px 2px 4px black;</code><br>
            → 右に2px、下に2px、4pxぼかして、黒い影<br><br>
            <strong>⚠️ よくある間違い：</strong><br>
            ❌ <code>text-shadow: black;</code> ← 数値がない！<br>
            ❌ <code>text-shadow: 2px black;</code> ← 数値が足りない！<br>
            ✅ <code>text-shadow: 2px 2px 4px black;</code> ← 正解！`,
        hint: `ヒント：木に影をつけるには<br><br>
            <code>text-shadow: 2px 2px 4px black;</code><br><br>
            💡 4つの値をスペースで区切って書いてね！`,
        example: '.tree {\n  text-shadow: 2px 2px 4px black;\n}',
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
        explanation: `<strong>border</strong> プロパティは、要素の周りに枠線を引くために使います。<br><br>
            <strong>📝 基本の書き方：</strong><br>
            <code>border: 太さ 種類 色;</code><br><br>
            <strong>🔢 それぞれの値の意味：</strong><br>
            1. 太さ（3px = 3ピクセルの太さ）<br>
            2. 種類（solid = 実線、dashed = 破線）<br>
            3. 色（blue = 青、red = 赤）<br><br>
            <strong>💡 いろんな枠線：</strong><br>
            • <code>border: 1px solid black;</code> ← 細い黒線<br>
            • <code>border: 3px solid blue;</code> ← 太い青線<br>
            • <code>border: 5px dashed red;</code> ← 太い赤い破線<br><br>
            <strong>⚠️ よくある間違い：</strong><br>
            ❌ <code>border: blue;</code> ← 太さと種類がない！<br>
            ❌ <code>border: 3px blue;</code> ← solidなどの種類がない！<br>
            ✅ <code>border: 3px solid blue;</code> ← 正解！`,
        hint: `ヒント：雲に3ピクセルの青い実線をつけるには<br><br>
            <code>border: 3px solid blue;</code><br><br>
            💡 3つの値をスペースで区切って書いてね！`,
        example: '.cloud {\n  padding: 15px;\n  border: 3px solid blue;\n}',
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
        explanation: `<strong>transform</strong> プロパティは、要素を変形させるために使います。回転、拡大、移動などができます！<br><br>
            <strong>📝 基本の書き方（回転）：</strong><br>
            <code>transform: rotate(角度deg);</code><br><br>
            <strong>🔄 回転の仕方：</strong><br>
            • <code>rotate(45deg)</code> → 時計回りに45度<br>
            • <code>rotate(90deg)</code> → 時計回りに90度<br>
            • <code>rotate(-45deg)</code> → 反時計回りに45度<br><br>
            <strong>💡 degって何？</strong><br>
            deg（degree）は「度」という意味です。<br>
            360deg で1周します！<br><br>
            <strong>🎨 他にもできること：</strong><br>
            • <code>transform: scale(2);</code> → 2倍に拡大<br>
            • <code>transform: translateX(10px);</code> → 右に移動<br><br>
            <strong>⚠️ よくある間違い：</strong><br>
            ❌ <code>transform: rotate(45);</code> ← degがない！<br>
            ❌ <code>rotate: 45deg;</code> ← transformがない！<br>
            ✅ <code>transform: rotate(45deg);</code> ← 正解！`,
        hint: `ヒント：ロケットを45度回転させるには<br><br>
            <code>transform: rotate(45deg);</code><br><br>
            💡 ロケットが斜めになるのを確認してね！`,
        example: '.rocket {\n  transform: rotate(45deg);\n}',
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
        explanation: `<strong>linear-gradient</strong> は、色が徐々に変化するグラデーションを作る特殊な機能です！<br><br>
            <strong>📝 基本の書き方：</strong><br>
            <code>background: linear-gradient(方向, 色1, 色2);</code><br><br>
            <strong>🌈 グラデーションって？</strong><br>
            2つ以上の色が滑らかに混ざり合う、美しい効果です！<br><br>
            <strong>💡 方向の指定：</strong><br>
            • <code>to right</code> → 左から右へ<br>
            • <code>to bottom</code> → 上から下へ<br>
            • <code>to top</code> → 下から上へ<br>
            • <code>45deg</code> → 45度の角度で<br><br>
            <strong>🎨 いろんなグラデーション：</strong><br>
            • <code>linear-gradient(to right, red, blue)</code><br>
            • <code>linear-gradient(to bottom, yellow, orange)</code><br>
            • <code>linear-gradient(to right, gold, orange)</code><br><br>
            <strong>⚠️ よくある間違い：</strong><br>
            ❌ <code>background: gold, orange;</code> ← linear-gradientがない！<br>
            ✅ <code>background: linear-gradient(to right, gold, orange);</code> ← 正解！`,
        hint: `ヒント：金色からオレンジ色のグラデーションを作るには<br><br>
            <code>background: linear-gradient(to right, gold, orange);</code><br><br>
            💡 美しいグラデーションができるよ！`,
        example: '.trophy {\n  padding: 30px;\n  background: linear-gradient(to right, gold, orange);\n}',
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
const explanationText = document.getElementById('explanationText');
const explanationBtn = document.getElementById('explanationBtn');
const hintText = document.getElementById('hintText');
const hintBtn = document.getElementById('hintBtn');
const exampleText = document.getElementById('exampleText');
const exampleBtn = document.getElementById('exampleBtn');
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
    explanationText.innerHTML = challenge.explanation;
    hintText.innerHTML = challenge.hint;
    exampleText.textContent = challenge.example;

    // すべてのセクションを閉じる
    explanationText.classList.remove('show');
    hintText.classList.remove('show');
    exampleText.classList.remove('show');

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
explanationBtn.addEventListener('click', () => {
    explanationText.classList.toggle('show');
});

hintBtn.addEventListener('click', () => {
    hintText.classList.toggle('show');
});

exampleBtn.addEventListener('click', () => {
    exampleText.classList.toggle('show');
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
