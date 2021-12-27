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
                }
            } else {
                console.log("ないよ〜〜〜");
            }
        }, 1000
    )
}

//これで判定できる本番に利用