let host_url = location.host
let nowWatchId = '' // 処理を一回だけ実行する用、videoIDを保存
if (host_url === "www.youtube.com") {
    // playerを改良
    setInterval(() => {
        // playerの判定
        if (location.pathname == '/watch'){
            let watch = location.search // videoIDを取得
            if (nowWatchId != watch){
                console.log(watch)
                nowWatchId = watch // 実行済み
                player() // playerを変更
            }
        } else {
            restore() // player以外では変更を元に戻す
        }
    }, 500);
    //マウスオーバーを停止
    // マウスカーソルを合わせると再生される機能
    setInterval(() => {
        try{
            let lst = document.querySelectorAll('#mouseover-overlay')
            if (lst.length){
                for (let i=0; i<lst.length; i++){
                    lst[i].remove()
                }
            }
        } catch (e){
            console.log("e:",e.message)
        }
    }, 100);
}


// サイズの調整
window.addEventListener('resize', ()=>{
    try {
        let winSize = (window.innerHeight-56) + "px"
        let primary = document.getElementById("primary-inner")
        let second = document.getElementById("secondary-inner")
        primary.style.height = winSize
        second.style.height = winSize
    } catch (e){
        console.log("e:",e.message)
    }
})

// playerの変更
function player () {
    console.log('player')
    try {
        // コメント、横の動画を分離
        // let winsize = (window.innerHeight-56) + "px"
        let primary = document.getElementById("primary-inner")
        let player = document.getElementById("player")
        let second = document.getElementById("secondary-inner")
        // primary.style.height = winsize
        primary.style.overflowY = 'scroll'
        player.style.position = "sticky"
        player.style.top = "0"
        player.style.zIndex = "1000"
        player.style.background = '#000000'
        // second.style.height = winsize
        second.style.overflowY = "scroll"
        // 上を動かせるようにする
        let container = document.getElementById('masthead-container')
        let cssContainer = container.style.cssText
        container.style.cssText = cssContainer + 'position: static !important'
        //スクロールバーの非表示
        primary.classList.add('scroll-bar')
        second.classList.add('scroll-bar')
        //上の謎のマージンを削除
        let ueMargin = document.getElementById('page-manager')
        ueMargin.style.margin = 0
        // スクロールの禁止
        document.querySelector("body").style.overflowY = 'hidden'
    } catch (e) {
        console.log("e:",e.message)
    }
}

function restore(){
    try {
        //page-managerをいじったせいで崩れる 直す
        let ueMargin = document.getElementById('page-manager')
        let css_ue = ueMargin.style.cssText
        ueMargin.style.cssText = css_ue.replace('margin: 0px')
        //masthead-containerをいじったせいで崩れる 直す
        let container = document.getElementById('masthead-container')
        let cssContainer = container.style.cssText
        container.style.cssText = cssContainer.replace('position: static !important')
        // スクロールの禁止
        document.querySelector("body").style.overflowY = 'scroll'
    } catch (e) {
        console.log("e:",e.message);
    }
}