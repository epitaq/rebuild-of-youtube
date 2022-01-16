let host_url = location.host;
let watch_id = ''
if (host_url === "www.youtube.com") {
    setInterval(
        function () {
            let q = location.search;
            let pathname_url = location.pathname;
            if (pathname_url.match("/watch")) {
                if (watch_id == q) {
                    //console.log('if', q);
                } else {
                    //一度だけ実行
                    console.log('else', q);
                    watch_id = q;
                    //動画を追従させる
                    try {
                        // コメント、横の動画を分離
                        let winsize = (window.innerHeight-56) + "px";
                        let primary = document.getElementById("primary-inner");
                        let player = document.getElementById("player");
                        let second = document.getElementById("secondary-inner");
                        primary.style.height = winsize;
                        primary.style.overflowY = "auto";
                        player.style.position = "sticky";
                        player.style.top = "0";
                        player.style.zIndex = "1000";
                        player.style.background = '#000000'
                        second.style.height = winsize;
                        second.style.overflowY = "auto";
                        //!important付けないとうまくいかない コメント読み込みの邪魔だから消した
                        //let bod = document.getElementsByTagName("body");
                        //let css_bod = bod[0].style.cssText;
                        //bod[0].style.cssText = css_bod + "overflow-y: hidden !important;"
                        // 上を動かせるようにする
                        let container = document.getElementById('masthead-container');
                        let css_container = container.style.cssText;
                        container.style.cssText = css_container + 'position: static !important';
                        //スクロールバーの非表示
                        primary.classList.add('scroll-bar');
                        second.classList.add('scroll-bar');
                    } catch (e) {
                        console.log("e:",e.message);
                    }
                }
            } else {
                //console.log("ないよ〜〜〜");
            }
        }, 1000
    )
    //仕様変更で消えた？
    // setInterval(
    //     function () {
    //         //マウスオーバーを停止したい
    //         try {
    //             var elm = document.getElementById("mouseover-overlay");
    //             elm.remove();
    //         } catch (e) {
    //             ;
    //         }
    //     }, 100
    // )
}
