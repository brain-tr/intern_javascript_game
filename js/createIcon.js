
function createIcon(){
    //１．アイコンは（共通変数）発生判断フラグを確認する。
    // false:発生しない　true:発生
    if(createFlag){

        //アイコン表示用のグループ生成
        var icon = new Group();
        //アイコンの背景
        var back = new Sprite(48, 48);
        var surface = new Surface(48, 48);	// サーフェス生成

        //１．１．案件か人材か抽選し更に難易度の抽選を行う
        // 0:人材 1:案件
        var choseFlag = Math.floor(Math.random()*2);
        if(choseFlag){
            //どの案件かを抽選
            matterNum = Math.floor(Math.random()*skills.length);
            //難易度を抽選
            difficulty = Math.floor((Math.random()*5));
            //表示する文字
            var label = new Label(skills[matterNum]);
            label.x = 0;
            label.y = 15;

            //１．２．アイコンをクリックした時に呼び出す処理を設定する。
            icon.addEventListener(Event.TOUCH_START,function(e){

                //１．２．１．（共通変数）案件数のカウントアップ
                matter++;

                //１．２．２．（時計進行）に引数として30を渡す。
                matteran();

                //１．２．３．アイコン削除
                this.parentNode.removeChild( this );

            });
        }else{
            //レベルを抽選
            difficulty = Math.floor((Math.random()*5));
            //表示する文字
            var label = new Label("人材");
            label.x = 0;
            label.y = 15;

            //１．２．アイコンをクリックした時に呼び出す処理を設定する。
            icon.addEventListener(Event.TOUCH_START,function(e){

                //１．２．１．（共通変数）人材数のカウントアップ
                person++;

                //１．２．２．（時計進行）に引数として30を渡す。
                matteran();

                //１．２．３．アイコン削除
                this.parentNode.removeChild( this );

            });
        }
        
        //背景用の円を生成
        surface.context.beginPath();
        surface.context.arc(25, 25, 23, 0, Math.PI*2, false);
        surface.context.fillStyle = colors[difficulty];
        surface.context.fill();
        back.image = surface;

        //グループにアイコンと背景を結合
        icon.addChild(back);
        icon.addChild(label);

        //どの範囲に描画するか指定する
        icon.moveTo(Math.random()*(700-48), Math.random()*(300-48) +170);
        
        //１．３．アイコンの描画を行う
        game.rootScene.addChild(icon);
    }
    
    //１．２．４．（案件抽選処理）or（人材抽選処理）を呼び出す（引数として難易度を送る）
    //１．２．５．（共通変数）時間が定時を超えてる場合（業務終了処理）を実行する。
    //１．４．アイコンのアニメーションを抽選してアニメーションを実行する
    //アニメーション終了後（共通変数）発生判断フラグがTrueの場合
    //１．４．１．（時計進行）に引数として10を渡してアイコン削除。
    //１．４．２．（共通変数）時間が定時を超えてる場合（業務終了処理）を実行する。
    //２．次のアイコン描写を行う時間の抽選（2～5秒）を行いアイコン描写の予約を行う
}