const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// ضع مفتاح الـ API الخاص بك هنا
const API_KEY = "AIzaSyBe9fMsnSCTZqD1nyu538McCViP6CSbJGQ"; 

async function handleChat() {
    const text = userInput.value.trim();
    if (!text) return;

    // إضافة رسالة المستخدم للواجهة
    appendMessage(text, 'user-msg');
    userInput.value = "";

    // رسالة انتظار من الذكاء الاصطناعي
    const loadingId = appendMessage("جاري التفكير...", 'ai-msg');

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: text }] }]
            })
        });

        const data = await response.json();
        const aiResponse = data.candidates[0].content.parts[0].text;

        // تحديث رسالة الانتظار بالرد الحقيقي
        updateMessage(loadingId, aiResponse);
    } catch (error) {
        updateMessage(loadingId, "عذراً، حدث خطأ في الاتصال بالخادم.");
        console.error("Error:", error);
    }
}

function appendMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${className}`;
    msgDiv.textContent = text;
    const id = Date.now();
    msgDiv.setAttribute('id', id);
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    return id;
}

function updateMessage(id, newText) {
    const msgDiv = document.getElementById(id);
    if (msgDiv) {
        msgDiv.textContent = newText;
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

sendBtn.addEventListener('click', handleChat);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleChat();
});
