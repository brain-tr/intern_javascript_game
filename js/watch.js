function create(){
    var game = new Core(700, 500);
    game.fps = 24;
    game.preload('./img/back.jpg','./img/long2.png','./img/short2.png','./img/WatchFrame.png'); 
    game.onload = function() { 
        var time = new Group();

        /* 背景 */
        //時計用スプライトの作成
        var back = new Sprite(800, 800);
        //スプライトに画像を設定
        back.image = game.assets['./img/back.jpg'];


        /* 時計の外枠作成 */
        //時計用スプライトの作成
        var clock = new Sprite(100, 100);
        //画像の位置を指定
        clock.x = 580;
        clock.y = 20;
        //スプライトに画像を設定
        clock.image = game.assets['./img/WatchFrame.png'];


        /* 時計の針 */
        //長針
        var long = new Sprite(50,12);
        long.image = game.assets['./img/long2.png'];
        long.x = 625;
        long.y = 65;
        long.originX = 5;
        long.originY = 6;
        long.rotation = longTimes[longCount];

        //短針
        var short = new Sprite(35,12);
        short.image = game.assets['./img/short2.png'];
        short.x = 625;
        short.y = 65;
        short.originX = 5;
        short.originY = 5;
        short.rotation = shortTimes[shortCount];
        
        //時間の制御を行う
        long.addEventListener('touchend',function(){ //イベントリスナーを追加する
            //長針のカウンタを更新し、針を動かす
            longCount++;
            //カウンタが１週していたら0に戻して短針を動かす
            if(longCount == 6){
                longCount = 0;
                shortCount++;
                if(shortCount == 12){
                    shortCount = 0;
                }
                short.rotation = shortTimes[shortCount];
                //19時になったら業務を終了し、次の日へ
                if(shortCount == 7){
                    short.rotation = shortTimes[7];
                    long.rotation = longTimes[0];
                    window.setTimeout(alert("業務を終了しました。次の日になります。"), 1000);
                    shortCount = 10;
                    short.rotation = shortTimes[shortCount];
                }

            }
            long.rotation = longTimes[longCount];
        });


        //完成したレイヤーを結合
        time.addChild(back);
        time.addChild(clock);
        time.addChild(short);
        time.addChild(long);

        game.rootScene.addChild(time);
    }
    game.start();
}