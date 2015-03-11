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
    game.replaceScene(matchingScene());  

    //５．収支を表示する。


}

//次週へsceneの生成
var matchingScene = function(){


    var scene = new Scene();
    scene.backgroundColor = 'rgba(0, 0, 255, 0.5)';

    var label = new Label('次週へ');      // ラベルを作る スコアを代入
    label.textAlign = 'center';                   // 文字を中央寄せ
    label.color = '#fff';                         // 文字を白色に
    label.x = 400;                                  // 横位置調整
    label.y = 400;                                 // 縦位置調整
    label.font = '40px sans-serif';               // 40pxのゴシック体にする

    //作成したレイヤーにイベントリスナーをつける
    label.addEventListener(Event.TOUCH_START,function(e){

        //６．次週へボタンを表示する。
        //ボタン押下時処理
        //６．１．（共通変数）月、週を変更する。
        dateinfo.text = "日付: "+String(month)+"月"+String(week)+"週";
        restinfo.text = "残り: "+String(end)+"週";

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

    //シーンを返す
    return scene;
}