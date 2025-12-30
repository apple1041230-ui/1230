// 點擊顯示愛心＋文字
function showHearts() {
    document.getElementById("hearts").innerText =
        "💗 💗 💗 💗 💗 💗 💗";

    document.getElementById("helloText").style.display = "block";
}

// 留言送出＋愛心上升
function addComment() {
    const input = document.getElementById("commentInput");
    const text = input.value;

    if (text === "") return;

    // 新增留言
    const li = document.createElement("li");
    li.innerText = text;
    document.getElementById("commentList").appendChild(li);

    // 愛心動畫
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerText = "💗";

    const rect = input.getBoundingClientRect();
    heart.style.left = rect.left + rect.width / 2 + "px";
    heart.style.top = rect.top + window.scrollY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1200);

    input.value = "";
}