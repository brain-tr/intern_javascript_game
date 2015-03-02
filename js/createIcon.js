
function createIcon(){
    //１．アイコンは（共通変数）発生判断フラグを確認する。
    // false:発生しない　true:発生
    if(createFlag){

        //アイコン表示用のグループ生成
        var icon = new Group();
        //アイコンの背景
        var back = new Sprite(72, 48);

        //１．１．案件か人材か抽選し更に難易度の抽選を行う
        // 0:案件 1:人材
        var choseFlag = Math.floor(Math.random()*2);
        if(0){
            //どの案件かを抽選
            matterNum = Math.floor(Math.random()*skills.length);
            //表示する文字
            var label = new Label(skills[matterNum]);
            label.x = 20;
            label.y = 15;
            
            //難易度を抽選
            var difficulty = Math.floor((Math.random()*5));

            //１．２．アイコンをクリックした時に呼び出す処理を設定する。
            icon.addEventListener(Event.TOUCH_START,function(e){

                //１．２．１．（共通変数）案件数のカウントアップ
                matter++;
                matterinfo.text = "案件数:   "+String(matter)+"個";
                
                //１．２．２. 人材追加メソッドの実行
                matteran(difficulty);

                //１．２．３．アイコン削除
                this.parentNode.removeChild( this );

            });
        }else{
            //レベルを抽選
            var difficulty = Math.floor((Math.random()*5));
            //表示する文字
            var label = new Label("人材");
            label.x = 20;
            label.y = 15;

            //１．２．アイコンをクリックした時に呼び出す処理を設定する。
            icon.addEventListener(Event.TOUCH_START,function(e){

                //１．２．１．（共通変数）人材数のカウントアップ
                person++;
                personinfo.text = "人材数:   "+String(person)+"人";

                //１．２．２. 人材追加メソッドの実行
                personInsert(difficulty);

                //１．２．３．アイコン削除
                this.parentNode.removeChild( this );

            });
        }
        back.image = game.assets['./img/button/button'+ difficulty +'.png']; ;

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