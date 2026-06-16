function show(id){
    document.querySelectorAll('.screen').forEach(s =>
        s.classList.remove('active')
    );

    document.getElementById(id)
        .classList.add('active');
}

function startGame(){

    show('screen-main');

    startTimer();
}

let started = false;

function startTimer(){

    if(started) return;

    started = true;

    let t = 2700;

    setInterval(() => {

        let m = Math.floor(t / 60);
        let s = t % 60;

        document.getElementById('timer')
            .textContent =
            String(m).padStart(2,'0')
            + ':'
            + String(s).padStart(2,'0');

        if(t <= 0){

            show('screen-over');
        }

        t--;

    },1000);
}

function openModal(type){

    const modal =
        document.getElementById('modal');

    const content =
        document.getElementById('modalContent');

    if(type === 'qr'){

        content.innerHTML = `
            <h3>QRコード読取画面</h3>
            <p>QRコードを読み取ってください</p>

            <button onclick="closeModal()">
                閉じる
            </button>
        `;
    }

    if(type === 'info'){

        content.innerHTML = `
            <h3>取得情報</h3>

            <ul>
                <li>メモ</li>
                <li>サーバーログ</li>
            </ul>

            <button onclick="closeModal()">
                閉じる
            </button>
        `;
    }

    if(type === 'item'){

        content.innerHTML = `
            <h3>アイテム一覧</h3>

            <ul>
                <li>USBメモリ</li>
                <li>鍵</li>
            </ul>

            <button onclick="closeModal()">
                閉じる
            </button>
        `;
    }

    if(type === 'hint'){

        content.innerHTML = `
            <h3>ヒント</h3>

            <p>残り2回</p>

            <button onclick="closeModal()">
                閉じる
            </button>
        `;
    }

    modal.classList.remove('hidden');
}

function closeModal(){

    document.getElementById('modal')
        .classList.add('hidden');
}

function checkAnswer(){

    const answer =
        document.getElementById('answer').value;

    if(answer === '1234'){

        show('screen-clear');
    }
    else{

        alert('不正解');
    }
}