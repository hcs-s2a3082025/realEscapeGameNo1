let items = [];
let infos = [];

function startGame(){

    document
        .getElementById("startScreen")
        .classList.add("hidden");

    document
        .getElementById("gameScreen")
        .classList.remove("hidden");

    startTimer();
}

function startTimer(){

    let time = 2700;

    setInterval(() => {

        let min =
            Math.floor(time / 60);

        let sec =
            time % 60;

        document
            .getElementById("timer")
            .innerText =
            `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;

        time--;

    },1000);
}

function scanQR(){

    const content =
        document.getElementById("content");

    content.innerHTML = `
        <div class="success">
            <h2>SCANNING...</h2>
            <div class="loader"></div>
        </div>
    `;

    setTimeout(() => {

        items.push("USBメモリ");
        infos.push("管理者ログ");

        updateStatus();

        content.innerHTML = `
            <div class="success">
                <h1>ACCESS GRANTED</h1>

                <p>USBメモリ取得</p>
                <p>管理者ログ取得</p>
            </div>
        `;

    },2000);
}

function updateStatus(){

    document
        .getElementById("itemCount")
        .innerText =
        items.length;

    document
        .getElementById("infoCount")
        .innerText =
        infos.length;
}

function showItems(){

    let html =
        "<h2>ITEM LIST</h2>";

    items.forEach(item => {

        html += `<p>▶ ${item}</p>`;
    });

    document
        .getElementById("content")
        .innerHTML = html;
}

function showInfos(){

    let html =
        "<h2>DATA LIST</h2>";

    infos.forEach(info => {

        html += `<p>▶ ${info}</p>`;
    });

    document
        .getElementById("content")
        .innerHTML = html;
}

function showPuzzle(){

    document
        .getElementById("content")
        .innerHTML = `

        <h2>認証コード入力</h2>

        <input
            id="answer"
            placeholder="コードを入力">

        <br><br>

        <button onclick="checkAnswer()">
            送信
        </button>
        `;
}

function checkAnswer(){

    const answer =
        document
        .getElementById("answer")
        .value;

    if(answer === "1234"){

        document
            .getElementById("content")
            .innerHTML = `

            <div class="success">

                <h1>
                SYSTEM SHUTDOWN
                </h1>

                <br>

                <h2>
                脱出成功
                </h2>

            </div>
            `;

    }else{

        alert("認証失敗");
    }
}