var createGameScene  = function(){
    time = new Group();

    /* 背景 */
    back = new Sprite(700, 500);
    //スプライトに画像を設定
    back.image = game.assets['./img/back.jpg'];

    /* 情報表示部分 */
    bord = new Sprite(500,150);
    bord.backgroundColor = "#0f0";

    /* マッチングボタン */
    machButton = new Sprite(150,50);
    machButton.backgroundColor = "#00f";
    machButton.x = 350;
    machButton.y = 100;

    machButton.addEventListener(Event.TOUCH_START,function(e){
        matching();
    });

    /* マッチングレーベル */
    machLabel = new Label("マッチング");
    machLabel.x = 355;
    machLabel.y = 110;
    machLabel.font  = "28px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";
    machLabel.addEventListener(Event.TOUCH_START,function(e){
        matching();
    });


    /* 時計の外枠作成 */
    //時計用スプライトの作成
    clock = new Sprite(100, 100);
    //画像の位置を指定
    clock.x = 580;
    clock.y = 20;
    //スプライトに画像を設定
    clock.image = game.assets['./img/WatchFrame.png'];


    /* 時計の針 */
    //長針
    long = new Sprite(50,12);
    long.image = game.assets['./img/long2.png'];
    long.x = 625;
    long.y = 65;
    long.originX = 5;
    long.originY = 6;
    long.rotation = longTimes[minutes];

    //短針
    short = new Sprite(35,12);
    short.image = game.assets['./img/short2.png'];
    short.x = 625;
    short.y = 65;
    short.originX = 5;
    short.originY = 5;
    short.rotation = shortTimes[hours];

    //完成したレイヤーを結合
    time.addChild(back);
    time.addChild(bord);
    time.addChild(machButton);
    time.addChild(machLabel);
    time.addChild(clock);
    time.addChild(short);
    time.addChild(long);
    //ゲーム画面の描写
    game.rootScene.addChild(time);
}
