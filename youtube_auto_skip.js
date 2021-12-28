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
                    console.log('else', q);
                    watch_id = q;
                    //動画を追従させる
                    try {
                        // コメント、横の動画を分離＆全体のスクロール禁止
                        let winsize = (window.innerHeight-56) + "px";
                        let primary = document.getElementById("primary-inner");
                        let player = document.getElementById("player");
                        let second = document.getElementById("secondary-inner");
                        let bod = document.getElementsByTagName("body");
                        let css_bod = bod[0].style.cssText;
                        primary.style.height = winsize;
                        primary.style.overflowY = "auto";
                        player.style.position = "sticky";
                        player.style.top = "0";
                        player.style.zIndex = "1000";
                        second.style.height = winsize;
                        second.style.overflowY = "auto";
                        //!important付けないとうまくいかない
                        bod[0].style.cssText = css_bod + "overflow-y: hidden !important;"
                        // コメントを読み込み もっと見るをれんだ
                        document.getElementById('more').click()
                        let scrollHeight = primary.scrollHeight;
                        console.log(scrollHeight)
                        window.scroll(0,scrollHeight)
                        //document.getElementById('less').click()
                        window.scroll(0,0)
                    } catch (e) {
                        console.log("e:",e.message);
                    }
                }
            } else {
                //console.log("ないよ〜〜〜");
            }
        }, 1000
    )
    setInterval(
        function () {
            //マウスオーバーを停止したい
            try {
                var elm = document.getElementById("mouseover-overlay");
                elm.remove();
            } catch (e) {
                ;
            }
        }, 100
    )
}
