let host_url = location.host
let nowWatchId = '' // 処理を一回だけ実行する用、videoIDを保存
let path = ''
if (host_url === 'www.youtube.com') {
    // playerを改良
    function main (){
        // playerの判定
        if (location.pathname == '/watch'){
            let watch = location.search // videoIDを取得
            if (nowWatchId != watch){
                console.log(watch)
                nowWatchId = watch // 実行済み
                // setTimeout(player,100)
                player() // playerを変更
                path = location.pathname // restore
            }
        } else {
            if (location.pathname != path){
                console.log(path)
                restore() // player以外では変更を元に戻す
                path = location.pathname
            }
        }
        setTimeout(main, 500);
    }
    main()
    // マウスオーバーで再生を禁止
    function mouseOver(){
        try{
            let lst = document.querySelectorAll('#mouseover-overlay')
            if (lst.length){
                for (let i=0; i<lst.length; i++){
                    lst[i].remove()
                }
            }
        } catch (e){
            console.log('e:',e.message)
        }
        setTimeout(mouseOver, 100);
    }
    mouseOver()
}


// サイズの調整
window.addEventListener('resize', ()=>{
    try {
        let winSize = (window.innerHeight-56) + 'px'
        let primary = document.getElementById('primary-inner')
        let second = document.getElementById('secondary-inner')
        primary.style.height = winSize
        second.style.height = winSize
    } catch (e){
        console.log('e:',e.message)
    }
})

// playerの変更
function player() {
    console.log('player')
    try {
        // スクロールの禁止
        document.querySelector('html').style.overflow = 'hidden'
        // コメント、横の動画を分離
        let winSize = (window.innerHeight-56) + 'px'
        let primary = document.getElementById('primary-inner')
        let player = document.getElementById('player')
        let second = document.getElementById('secondary-inner')
        primary.style.height = winSize
        primary.style.overflowY = 'scroll'
        primary.style.overflowX = 'hidden'
        player.style.position = 'sticky'
        player.style.top = '0'
        player.style.zIndex = '1000'
        player.style.background = '#000000'
        second.style.height = winSize
        second.style.overflowY = 'scroll'
        second.style.overflowX = 'hidden'
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
        // マージン削除の影響かタイトルが見えない時がある
        document.querySelector('#primary-inner').scrollTo(0,0)
    } catch (e) {
        console.log('e:',e.message)
    }
}

function restore(){
    console.log('restore')
    try {
        //page-managerをいじったせいで崩れる 直す
        let ueMargin = document.getElementById('page-manager')
        let css_ue = ueMargin.style.cssText
        ueMargin.style.cssText = css_ue.replace('margin: 0px')
        //masthead-containerをいじったせいで崩れる 直す
        let container = document.getElementById('masthead-container')
        let cssContainer = container.style.cssText
        container.style.cssText = cssContainer.replace('position: static !important')
        // スクロールの禁止 解除
        document.querySelector('html').style.overflow = 'scroll'
    } catch (e) {
        console.log('e:',e.message);
    }
}

// 全画面化対策
document.addEventListener('keypress', fullDisplay)
document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-fullscreen-button.ytp-button").addEventListener('click', fullDisplay)
function fullDisplay(e) {
    if(e.code == 'KeyF' || location.pathname == '/watch') {
        let check = document.querySelector("#player-theater-container").innerHTML
        function tryFull(){
            if (document.querySelector("#player-theater-container").innerHTML != check){
                console.log('check')
                if (check == ''){
                    document.querySelector("#player-theater-container").scrollIntoView(true) // スクロール
                    console.log('スクロール')
                }
            } else {
                setTimeout(tryFull, 100);
            }
        }
        tryFull()
    } else {
        console.log(e)
    }
}

