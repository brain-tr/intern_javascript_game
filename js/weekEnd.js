function weekEnd(){
    //１．週を追加し、残り週を減らす
    week++;
    end--;

    //２．業務報告ボードを表示する。
    if(week > 4){
        week = 1;
        month++;
    }else{
    }

    //３．（共通変数）発生判断フラグをFalseにする。
    createFlag = false;

    //４．（共通変数）稼働情報を元に収支計算と残稼働数を減らす

    //マッチング用のシーンを呼び出す
    game.replaceScene(resultBoard());  

    //５．収支を表示する。


}

//次週へsceneの生成
var resultBoard = function(){

    var scene = new Scene();
    scene.backgroundColor = '#5f28cc';

    var weekEndTitle = new Label("～業務終了～");
    weekEndTitle.textAlign = 'center';
    weekEndTitle.color = '#fff';
    weekEndTitle.x = 200;
    weekEndTitle.y = 10;
    weekEndTitle.font = '40px sans-serif';

    var datetime = new Label(""+String(month)+"月 第"+String(week)+"週");
    datetime.color = '#fff';
    datetime.x = 30;
    datetime.y = 60;
    datetime.font = '28px sans-serif';

    //支出ラベル
    var inMoneyTitle = new Label("収入");
    inMoneyTitle.textAlign = 'center';
    inMoneyTitle.color = '#fff';
    inMoneyTitle.x = 50;
    inMoneyTitle.y = 130;
    inMoneyTitle.font = '40px sans-serif';

    var outMoneyTitle = new Label("支出");
    outMoneyTitle.textAlign = 'center';
    outMoneyTitle.color = '#fff';
    outMoneyTitle.x = 50;
    outMoneyTitle.y = 230;
    outMoneyTitle.font = '40px sans-serif';

    var moneyTitle = new Label("差額");
    moneyTitle.textAlign = 'center';
    moneyTitle.color = '#fff';
    moneyTitle.x = 50;
    moneyTitle.y = 330;
    moneyTitle.font = '40px sans-serif';

    //支出表示
    var inMoneyLabel = new Label(String(inMoney));
    inMoneyLabel.textAlign = 'center';
    inMoneyLabel.color = '#fff';
    inMoneyLabel.x = 250;
    inMoneyLabel.y = 130;
    inMoneyLabel.font = '40px sans-serif';
    var outMoneyLabel = new Label(String(outMoney));
    outMoneyLabel.textAlign = 'center';
    outMoneyLabel.color = '#fff';
    outMoneyLabel.x = 250;
    outMoneyLabel.y = 230;
    outMoneyLabel.font = '40px sans-serif';
    var moneyLabel = new Label(String(money));
    moneyLabel.textAlign = 'center';
    moneyLabel.color = '#fff';
    moneyLabel.x = 250;
    moneyLabel.y = 330;
    moneyLabel.font = '40px sans-serif';


    var label = new Label('次週へ');
    label.textAlign = 'center';
    label.color = '#fff';
    label.x = 190;
    label.y = 430;
    label.font = '40px sans-serif';

    //作成したレイヤーにイベントリスナーをつける
    label.addEventListener(Event.TOUCH_START,function(e){

        //６．次週へボタンを表示する。
        //ボタン押下時処理
        //６．１．（共通変数）月、週を変更する。
        dateinfo.text = "日付: "+String(month)+"月"+String(week)+"週";
        restinfo.text = "残り: "+String(end)+"週";
        moneyinfo.text = "資金　:　"+String(money)+"万円";
        
        //支出をリセットする
        inMoney = 0;
        outMoney = 0;
        
        //アイコンをリセットする
        //game.rootScene.removeChild(icon);

        //６．２．時間を１０：００に変更する。
        hours = 10;
        minutes = 0;

        //６．３．（共通変数）発生判断フラグをTrueにする。
        createFlag = true;

        //６．４．時計の針を１０：００にする。
        short.rotation = times[hours];
        long.rotation = times[minutes];
        time.addChild(dateinfo);
        time.addChild(restinfo);

        //６．５．業務報告ボードを消す

        //ルートシーンへ戻る
        game.popScene();
    });

    //レイヤーを追加する
    scene.addChild(label);
    scene.addChild(weekEndTitle);
    scene.addChild(datetime);
    scene.addChild(inMoneyTitle);
    scene.addChild(inMoneyLabel);
    scene.addChild(outMoneyTitle);
    scene.addChild(outMoneyLabel);
    scene.addChild(moneyTitle);
    scene.addChild(moneyLabel);

    //シーンを返す
    return scene;
}