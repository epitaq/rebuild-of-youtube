const host_url = location.host;


if (host_url === "www.youtube.com") {
    setInterval(
        function () {
            const pathname_url = location.pathname;
            if (pathname_url.match("/watch")) {
            //動画を追従させる
                try {
                    let primary = document.getElementById("primary-inner");
                    let player = document.getElementById("player");
                    let second = document.getElementById("secondary-inner");
                    primary.style.height = "1400px";
                    primary.style.overflow = "auto";
                    player.style.position = "sticky";
                    player.style.top = "0";
                    player.style.zIndex = "1000";
                    second.style.height = "1400px";
                    second.style.overflow = "auto";
                } catch (e) {
                    console.log("e:",e.message);
                }
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
