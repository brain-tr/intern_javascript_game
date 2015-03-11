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
        
        var matchBoard = new Group();
        
        //背景
        var matchBack = new Sprite(700,500);
        matchBack.backgroundColor = 'rgba(34, 219, 91, 0.99)';
        
        //案件表示用ボード
        var matterBoard = new Sprite(330,440);
        matterBoard.backgroundColor = 'rgba(34, 219, 212, 0.99)';
        matterBoard.x = 10;
        matterBoard.y = 5;
        
        //人材表示用ボード
        var personBoard = new Sprite(330,440);
        personBoard.backgroundColor = 'rgba(34, 219, 212, 0.99)';
        personBoard.x = 360;
        personBoard.y = 5;
        
        //ボタン
        var createMatchButton = new Sprite(350,40);
        createMatchButton.x = 175;
        createMatchButton.y = 455;
        createMatchButton.image = game.assets['./img/button/matching_button.gif'];
        
        //背景を追加
        matchBoard.addChild(matchBack);
        
        //案件表示用ボードを追加
        matchBoard.addChild(matterBoard);
        
        //人材表示用ボードを追加
        matchBoard.addChild(personBoard);
        
        //ボタンを追加
        matchBoard.addChild(createMatchButton);

        //作成したレイヤーにイベントリスナーをつける
        createMatchButton.addEventListener(Event.TOUCH_START,function(e){

            //発生判断フラグをTrueにする
            createFlag = true;

            //人材と案件を減らす
            matter--;
            person--;
            loadBoard();
            //人材と案件が最低一つなければボタンを押せないようにする
            if(matter == 0 || person == 0){
                matchButton.image = game.assets['./img/match_no.png'];  // 画像を設定
                matchButton.removeEventListener;
            }

            //ルートシーンへ戻る
            game.popScene();

            //時計を進める
            timeEnter(120);
        });
        
        //レイヤーを追加する
        scene.addChild(matchBoard);

        //シーンを返す
        return scene;
    }

    //マッチング用のシーンを呼び出す
    game.replaceScene(matchingScene());  
}
