/**
 *
 * マッチングを行うメソッド
 *
 */
var matching = function(){
    //発生判断フラグをfalseにする
     createFlag = false;
    
    //マッチングのシーンを作成
    var matchingScene = function(){
        
        
        var scene = new Scene();
        scene.backgroundColor = '#fcc8f0';

        var label = new Label('マッチングの実行');      // ラベルを作る スコアを代入
        label.textAlign = 'center';                   // 文字を中央寄せ
        label.color = '#fff';                         // 文字を白色に
        label.x = 0;                                  // 横位置調整
        label.y = 60;                                 // 縦位置調整
        label.font = '40px sans-serif';               // 40pxのゴシック体にする
        
        //作成したレイヤーにイベントリスナーをつける
        label.addEventListener(Event.TOUCH_START,function(e){
            
            //発生判断フラグをTrueにする
            createFlag = true;
            
            //時計を進める
            timeEnter(120);
            
            //ルートシーンへ戻る
            game.popScene();
        });
        
        //レイヤーを追加する
        scene.addChild(label);
        
        //シーンを返す
        return scene;
    }
    
    //マッチング用のシーンを呼び出す
    game.replaceScene(matchingScene());  
}
