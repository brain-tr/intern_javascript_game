enchant();
window.onload = function() {

    //ゲーム内変数の初期化
    game = new Core(700, 500);
    game.fps = 24;
    //ゲームにつかう画像を予め読み込んでおく
    game.preload(
        './img/bord.png',
        './img/back.jpg',
        './img/long2.png',
        './img/short2.png',
        './img/WatchFrame.png',
        './img/start.png',
        './img/inst1.png',
        './img/inst2.png',
        './img/title.png',
        './img/match.png',
        './img/match_no.png',
        './img/button/button0.png',
        './img/button/button1.png',
        './img/button/button2.png',
        './img/button/button3.png',
        './img/button/button4.png',
        './img/button/matching_button.png',
        './img/button/matching_buttonNG.png',
        './img/button/matching_button_cancel.png',
        './img/bar.png',
        './img/clock.png',
        './img/bar.gif',
        './img/bar2.gif',
        './img/bar3.png',
        './img/button/push.gif',
        './img/button/follow.gif',
        './img/button/pushNg.png',
        './img/button/followNg.png',
        './img/button/through.gif',
        './img/human.png',
        './img/paper.png',
        './img/character.png',
        './img/character2.png',
        './img/paper.jpg',
        './img/resultBack.jpg',
        './img/board.jpg',
        './img/kaigi.jpg',
        './img/wood_kanban.png',
        './img/arrow.png',
        './img/rankingborad.jpg',
        './img/rank.png',
        './img/end.png',
        './img/rank/rank1.png',
        './img/rank/rank2.png',
        './img/rank/rank3.png',
        './img/rank/rank4.png',
        './img/rank/rank5.png',
        './img/button/tweet.gif'
    );
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
