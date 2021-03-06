/**
* タイトルシーン
*/
var createStartScene = function() {
    var scene = new Scene();                                // 新しいシーンを作る

    // 背景
    var back = new Sprite(700, 500);                        //スプライトを作る
    back.image = game.assets['./img/back.jpg'];             //背景画像を設定
    scene.addChild(back);                                   // シーンに追加
    // タイトル設定
    var title = new Sprite(400, 150);                       // スプライトを作る
    title.image = game.assets['./img/title.png'];           // タイトル画像を設定
    title.x = 150;                                          // 横位置調整
    title.y = 10;                                           // 縦位置調整
    scene.addChild(title);                                  // シーンに追加
    // ゲーム説明1設定
    var instImage1 = new Sprite(200, 200);                  // スプライトを作る
    instImage1.image = game.assets['./img/inst1.png'];      // ゲーム説明1画像を設定
    instImage1.x = 100;                                     // 横位置調整
    instImage1.y = 170;                                     // 縦位置調整
    scene.addChild(instImage1);                             // シーンに追加
    // ゲーム説明2設定
    var instImage2 = new Sprite(200, 200);                  // スプライトを作る
    instImage2.image = game.assets['./img/inst2.png'];      // ゲーム説明2画像を設定
    instImage2.x = 400;                                     // 横位置調整
    instImage2.y = 170;                                     // 縦位置調整
    scene.addChild(instImage2);                             // シーンに追加
    // スタート画像設定
    var startImage = new Sprite(400, 100);                  // スプライトを作る
    startImage.image = game.assets['./img/start.png'];      // スタート画像を設定
    startImage.x = 150;                                     // 横位置調整
    startImage.y = 385;                                     // 縦位置調整
    scene.addChild(startImage);                             // シーンに追加
    //ランキング画像設定
    var rankingImage = new Sprite(100, 100);                  // スプライトを作る
    rankingImage.image = game.assets['./img/rank.png'];      // スタート画像を設定
    rankingImage.x = 575;                                     // 横位置調整
    rankingImage.y = 385;                                     // 縦位置調整
    scene.addChild(rankingImage);                             // シーンに追加

    // スタート画像にタッチイベントを設定
    startImage.addEventListener(Event.TOUCH_START, function(e) {
        constructor();
        startfnc();
        game.replaceScene(createGameScene());    // 現在表示しているシーンをゲームシーンに置き換える
    });

    // ランキング画像にタッチイベントを設定
    rankingImage.addEventListener(Event.TOUCH_START, function(e) {
        createRankingBoard(0);
    });
    // タイトルシーンを返します。
    game.pushScene(scene);
};
