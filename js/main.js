enchant();
window.onload = function() {

    //ゲーム内変数の初期化
    game = new Core(700, 500);
    game.fps = 24;
    //ゲームにつかう画像を予め読み込んでおく
    game.preload('./img/bord.png','./img/back.jpg','./img/long2.png','./img/short2.png','./img/WatchFrame.png','./img/start.png','./img/inst1.png','./img/inst2.png','./img/title.png','./img/match.png');
    game.onload = function() {
        //タイトルシーンの作成
        createStartScene();
    }
    game.start();
};
function load(){
    long.addEventListener('touchend',function(){ //イベントリスナーを追加する
        //touchendイベントのイベントリスナー
        this.rotation = longTimes[1];
    });
}
