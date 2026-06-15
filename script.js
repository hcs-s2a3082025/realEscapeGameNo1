let items = [];
let infos = [];

function startGame(){

    const name =
        document.getElementById("teamName").value;

    document.getElementById("teamLabel")
        .innerText = name;

    document.getElementById("start-screen")
        .classList.add("hidden");

    document.getElementById("game-screen")
        .classList.remove("hidden");

    startTimer();
}

function startTimer(){

    let time = 2700;

    setInterval(() => {

        let m =
            Math.floor(time / 60);

        let s =
            time % 60;

        document.getElementById("timer")
            .innerText =
            `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;

        time--;

    },1000);
}

function scanQR(){

    const content =
        document.getElementById("content");

    content.innerHTML = `
        <div class="event">
            <h3>解析中...</h3>
        </div>
    `;

    setTimeout(() => {

        items.push("USBメモリ");
        infos.push("管理者ログ");

        document.getElementById("itemCount")
            .innerText = items.length;

        document.getElementById("infoCount")
            .innerText = infos.length;

        content.innerHTML = `
            <div class="event">
                <h2>取得成功！</h2>
                <p>USBメモリを入手</p>
                <p>管理者ログを入手</p>
            </div>
        `;

    },1500);
}

function showItems(){

    document.getElementById("content")
        .innerHTML =
        "<h3>アイテム一覧</h3>" +
        items.map(x=>`<p>${x}</p>`).join("");
}

function showInfos(){

    document.getElementById("content")
        .innerHTML =
        "<h3>情報一覧</h3>" +
        infos.map(x=>`<p>${x}</p>`).join("");
}

function showPuzzle(){

    document.getElementById("content")
        .innerHTML = `
        <h3>認証コード入力</h3>

        <input id="answer">

        <button onclick="checkAnswer()">
            送信
        </button>
        `;
}

function checkAnswer(){

    const answer =
        document.getElementById("answer").value;

    if(answer === "1234"){

        document.getElementById("content")
            .innerHTML = `
            <h1>
                SYSTEM SHUTDOWN
            </h1>

            <h2>
                脱出成功
            </h2>
            `;

    }else{

        alert("不正解");
    }
}