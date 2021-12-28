let host_url = location.host;
let watch_id = ''
if (host_url === "www.youtube.com") {
    setInterval(
        function () {
            let q = location.search;
            console.log('q:', q);
            let pathname_url = location.pathname;
            if (pathname_url.match("/watch")) {
                if (watch_id == q) {
                    console.log('if', q);
                } else {
                    console.log('else', q);
                    watch_id = q;
                    //動画を追従させる
                    try {
                        let winsize = (window.innerHeight-56) + "px";
                        let primary = document.getElementById("primary-inner");
                        let player = document.getElementById("player");
                        let second = document.getElementById("secondary-inner");
                        let bod = document.getElementsByTagName("body");
                        primary.style.height = winsize;
                        primary.style.overflowY = "auto";
                        player.style.position = "sticky";
                        player.style.top = "0";
                        player.style.zIndex = "1000";
                        second.style.height = winsize;
                        second.style.overflowY = "auto";
                        //bod[0].style.overflowY = "hidden";
                        bod[0].style.cssText = css_bod + "overflow-y: hidden !important;"
                    } catch (e) {
                        console.log("e:",e.message);
                    }
                }
            } else {
                console.log("ないよ〜〜〜");
            }
        }, 1000
    )
}

//これで判定できる本番に利用