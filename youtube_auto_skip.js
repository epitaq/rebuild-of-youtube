const host_url = location.host;

if (host_url === "www.youtube.com") {
    setInterval(
        function () {
            const pathname_url = location.pathname;
            //console.log(pathname_url);
            if (pathname_url.match("/watch")) {
                //console.log("あるよ〜〜〜");
                //動画を追従させる
                try {
                    const winsize = (window.innerHeight) + "px";
                    const primary = document.getElementById("primary-inner");
                    const player = document.getElementById("player");
                    const second = document.getElementById("secondary-inner");
                    const bod = document.getElementsByTagName("body");
                    primary.style.height = winsize;
                    primary.style.overflowY = "auto";
                    player.style.position = "sticky";
                    player.style.top = "0";
                    player.style.zIndex = "1000";
                    second.style.height = winsize;
                    second.style.overflowY = "auto";
                    //secondを動かさなければいい？
                    bod[0].style.overflowY = "hidden";
                    // スクロール要素の高さ
                    var scrollHeight = primary.scrollHeight;
                    console.log("scroll:", scrollHeight)
                    primary.scrollTop = scrollHeight+100;
                } catch (e) {
                    console.log("e:",e.message);
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
