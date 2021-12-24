const host_url = location.host;


if (host_url === "www.youtube.com") {
    setInterval(
        function () {
            try {
                const elem1 = document.getElementsByClassName("ytp-ad-overlay-close-container");
                elem1[0].click();
            } catch (e) {
                ;
            }
            try {
                const elem2 = document.getElementsByClassName("ytp-ad-skip-button-container");
                elem2[0].click();
            } catch (e) {
                ;
            }
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
