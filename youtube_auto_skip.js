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
                    const winsize = (window.innerHeight+100) + "px";
                    console.log(winsize);
                    const primary = document.getElementById("primary-inner");
                    const player = document.getElementById("player");
                    const second = document.getElementById("secondary-inner");
                    const bod = document.getElementsByTagName("body");
                    const css_bod = bod[0].style.cssText;
                    const css_player = player.style.cssText
                    //primary.style.height = winsize;
                    primary.style.overflowY = "auto";
                    player.style.cssText = css_player + "position: sticky !important;";
                    player.style.top = "0";
                    player.style.zIndex = "1000";
                    second.style.height = winsize;
                    second.style.overflowY = "auto";
                    bod[0].style.cssText = css_bod + "overflow-y: hidden !important;";
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
