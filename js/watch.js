function watch(){
    var game = new Game(window.innerWidth, window.innerHeight);
    game.fps = 24;
    game.preload('./img/WatchFrame.png'); 
    game.onload = function() { 
        var time = new Group();
        
        /* 時計の外枠作成 */
        //時計用スプライトの作成
        var clock = new Sprite(480, 480);

        //画像の大きさを調整
        clock.scale(0.5,0.5);
        
        //スプライトに画像を設定
        clock.image = game.assets['./img/WatchFrame.png'];

        //時計の位置を相対的に決める
        clock.x = window.innerWidth-450;
        clock.y = -60;
        
        /* 時計の針作成 */
        //Spriteを作ります
        sprite = new Sprite(480,480);        
        //Surfaceを作ります
        surface = new Surface(480,480);
        
        //spriteのimageにsurfaceを代入します
        sprite.image = surface;
        
        //コンテキストを取得します
        context = surface.context;
        
        
        surface.context.strokeStyle = "red";
surface.context.strokeRect (0, 100, 100, 0);
        sprite.x = window.innerWidth-300;
        sprite.y = 80;
        
        
        //完成した2つのレイヤーを結合
        time.addChild(clock);
        time.addChild(sprite);

        game.rootScene.addChild(time);
    }
    game.start();
}