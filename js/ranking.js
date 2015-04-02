RANKING_DATA = null;
function createRankingBoard(userScore){


    //ランキングの情報を更新する
    if (userScore == null) userScore = 0;
    getRanking(userScore);

}

function getRanking(userScore)
{
    $.ajax({
        type: "POST",
        url: "getRank.php",
        data: {'userScore' : userScore},
        dataType: "json",
        /**
             * Ajax通信が成功した場合に呼び出されるメソッド
             */
        success: function(data, dataType) 
        {
            //ランキングの結果を定数としてもつ
            RANKING_DATA = data;

            //ランキング用のシーンを呼び出す
            game.replaceScene(rankingScene(userScore));
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) 
        {
            //エラーメッセージの表示
            alert('Error : ' + errorThrown);
        }
    });
}

//ランキングのシーンを作成
function rankingScene(userScore){

    var scene = new Scene();

    var rankingBack = new Sprite(700,500);
    rankingBack.image = game.assets['./img/rankingborad.jpg'];

    var rankingTitle = new Label("ランキング");
    rankingTitle.font = "60px 'メイリオ'";
    rankingTitle.x = 200;

    //ランキング終了ボタンを生成
    var endButton = new Sprite(50,50);
    endButton.image = game.assets['./img/end.png'];
    endButton.x = 600;
    endButton.y = 20;
    endButton.addEventListener(Event.TOUCH_START,function(e){
        location.href = "./intern_create_game.html";
    });
    endButton.tl.scaleTo(1.3, 1.3, 10).scaleTo(1, 1, 10).loop();

    //ランキングの情報を生成
    var rankingText  = new Group(); 
    for(var i = 0; i < 3; i++){
        var label = new Label(String(RANKING_DATA[i]) + "万G");
        label.font = "60px 'メイリオ'";
        label.textAlign = 'right';
        //ユーザーの出した得点は色を替える
        if(RANKING_DATA[3] == i){
            label.color = "#f00";
            label.tl.moveBy(0,10,20).moveBy(0,-10,20).loop();
        }
        label.x = 200;
        label.y = (i * 80) + 80 + (i * 3);

        var batch = new Sprite(70,70);
        batch.image = game.assets['./img/rank/rank'+ (i + 1) +'.png'];
        batch.x = 120;
        batch.y = (i * 90) + 90 - (i * 7);

        rankingText.addChild(label);
        rankingText.addChild(batch);
    }
    //ユーザーの結果を表示
    if(userScore > 0){
        var yourText = new Label(userScore + "万G稼ぎました。");
        yourText.width = 700;
        yourText.font = "48px 'メイリオ'";
        yourText.textAlign = 'center';
        yourText.y = 340;
    }else if(userScore < 0){
        var yourText = new Label(userScore + "万Gの負債です。");
        yourText.width = 700;
        yourText.font = "48px 'メイリオ'";
        yourText.textAlign = 'center';
        yourText.y = 340;
    }

    //つぶやくボタンの作成
    var tweet = new Sprite(180,60);
    tweet.image = game.assets['./img/button/tweet.gif'];
    tweet.x = 240;
    tweet.y = 430;
    tweet.addEventListener(Event.TOUCH_START,function(e){
        var text = userScore + "万G稼いで歴代1位に";
        window.open('http://twitter.com/home?status='+encodeURI(document.title)+'%0A%0A'+ text +'%0A%0A'+encodeURI(location.href)+'+%23インターン+%23経営ゲーム','_blank');
    });
    rankingText.addChild(tweet);


    //レイヤーを追加する
    scene.addChild(rankingBack);
    scene.addChild(endButton);
    scene.addChild(rankingTitle);
    scene.addChild(rankingText);
    scene.addChild(yourText);

    //シーンを返す
    return scene;
}


