
/*
 * バークラス
 */
var SCREEN_WIDTH = 500;		// 幅
var nowTime;			// 現在時刻
var startTime;			// スタート時刻
// 定数
var IMG_BAR = "./img/bar.png";
var COUNTDOWN = 10;			// カウントダウン秒数

var Bar = Class.create(Sprite, {
    initialize: function(){
        Sprite.call(this, 32, 32);
        this.image = game.assets[IMG_BAR];
        this.zobun = game.width / (COUNTDOWN*100);	// 増分幅の設定（100分の1秒用に10を掛けている）
        this.timer = game.frame + this.zobun;
        this.width = SCREEN_WIDTH;
        this.update = this.countdown;
    },
    reset: function(){
        this.timer = game.frame + this.zobun;
        this.width = SCREEN_WIDTH;
        this.update = this.countdown;
    },
    countdown: function(){
        if(game.frame > this.timer){
            this.width -= this.zobun * 3.5;
            if(this.width < this.zobun) this.width = 1;
            this.timer += this.zobun;
        }
        if(this.width <= 1){
            this.update = this.stop;
        }
    },
    stop: function(){
        reStart();
        this.reset();
    },
    onenterframe: function(){
        this.update();
    },
});

function reStart(){
    restTurnNum--;
    if(restTurnNum == 3){
        resultBar.image = game.assets['./img/bar2.gif'];
        resultGauge.image = game.assets['./img/bar2.gif'];
    }
    //残りターンが0を切ったらマッチングを終了
    if(restTurnNum　<= 0){
        //マッチング結果ボードを呼び出す。
        game.pushScene(matchingResult());  
    }
    eComment.text = eCommentCreate();
    jComment.text = jCommentCreate();
    restTurn.text = "残り"+restTurnNum+"ターン";
}