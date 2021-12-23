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
                var movie = document.getElementById('movie_player');
                movie.elements.classList.add()
                console.log(movie);
            } catch (e) {
                ;
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
        }, 1000
    )
}
//XPathResult {resultType: 4, invalidIteratorState: false}
