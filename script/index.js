const text = "🐑 Well, look who's back for more 👀";
const typingDelay = 100;
let textIndex = 0;

function typeWriter() {
    if (textIndex < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(textIndex);
        textIndex++;
        setTimeout(typeWriter, typingDelay);
    } else {
        setTimeout(resetTyping, 3000); // 等待一段时间后重置
    }
}

function resetTyping() {
    document.getElementById("typewriter").innerHTML = '';
    textIndex = 0;
    typeWriter();
}

// 当文档可见性改变时重置打字效果
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        resetTyping();
    }
});

typeWriter(); // 初始调用
