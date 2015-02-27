var createGameScene  = function(){
    time = new Group();

    /* 背景 */
    back = new Sprite(700, 500);
    //スプライトに画像を設定
    back.image = game.assets['./img/back.jpg'];

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
    long.rotation = times[minutes];

    //短針
    short = new Sprite(35,12);
    short.image = game.assets['./img/short2.png'];
    short.x = 625;
    short.y = 65;
    short.originX = 5;
    short.originY = 5;
    short.rotation = times[hours];

    // 情報表示部分
    bord = new Sprite(500,150);                             // スプライトを作る
    bord.image = game.assets['./img/bord.png'];             // 画像を設定
    bord.x = 0;                                             // 横位置調整
    bord.y = 0;                                             // 縦位置調整
    // 資金
    moneyinfo = new Label("資金　:　"+String(money)+"万円"); // ラベルを作る
    moneyinfo.x = 20;                                       // 横位置調整
    moneyinfo.y = 10;                                       // 縦位置調整
    moneyinfo.font = "24px 'メイリオ'";　　　　　　　　　　　　　// フォント設定
    // 案件
    matterinfo = new Label("案件数:　"+String(matter)+"個"); // ラベルを作る
    matterinfo.x = 20;                                      // 横位置調整
    matterinfo.y = 45;                                      // 縦位置調整
    matterinfo.font = "24px 'メイリオ'";　　　　　　　　　　　　 // フォント設定
    // 人材
    personinfo = new Label("人材数:　"+String(person)+"人"); // ラベルを作る
    personinfo.x = 20;                                      // 横位置調整
    personinfo.y = 80;                                      // 縦位置調整
    personinfo.font = "24px 'メイリオ'";　　　　　　　　　　　　 // フォント設定
    // 営業レベル
    levelinfo = new Label("営業LV:　"+String(level)+"LV");   // ラベルを作る
    levelinfo.x = 20;                                       // 横位置調整
    levelinfo.y = 115;                                      // 縦位置調整
    levelinfo.font = "24px 'メイリオ'";　　　　　　　　　　　　　// フォント設定
    // 日付
    dateinfo = new Label("日付: "+String(month)+"月"+String(week)+"週");  // ラベルを作る
    dateinfo.x = 250;                                       // 横位置調整
    dateinfo.y = 10;                                        // 縦位置調整
    dateinfo.font = "24px 'メイリオ'";　　　　　　　　　　　　　 // フォント設定
    // 残り週数
    restinfo = new Label("残り: "+String(end)+"週");         // ラベルを作る
    restinfo.x = 250;                                       // 横位置調整
    restinfo.y = 45;                                        // 縦位置調整
    restinfo.font = "24px 'メイリオ'";　　　　　　　　　　　　　 // フォント設定
    // マッチングボタン
    matchButton = new Sprite(150,50);                       // スプライトを作る
    matchButton.image = game.assets['./img/match.png'];     // 画像を設定
    matchButton.x = 300;                                    // 横位置調整
    matchButton.y = 85;                                     // 縦位置調整
    matchButton.addEventListener(Event.TOUCH_START,function(e){
        matching();                                         //イベントを追加する
    });

    //完成したレイヤーを結合
    time.addChild(back);
    time.addChild(clock);
    time.addChild(short);
    time.addChild(long);
    time.addChild(bord);
    time.addChild(moneyinfo);
    time.addChild(matterinfo);
    time.addChild(personinfo);
    time.addChild(levelinfo);
    time.addChild(dateinfo);
    time.addChild(restinfo);
    time.addChild(matchButton);
    //ゲーム画面の描写
    game.rootScene.addChild(time);
}
