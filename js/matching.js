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
        
        var matchBoard = CreateMatchingBoard();
        
        //レイヤーを追加する
        scene.addChild(matchBoard);

        //シーンを返す
        return scene;
    }

    //マッチング用のシーンを呼び出す
    game.replaceScene(matchingScene());  
}
