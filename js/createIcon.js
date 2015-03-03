
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
        if(choseFlag){
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
        var gametime = 5;
        icon.addEventListener('enterframe',function(e){
            if(game.frame % game.fps == 0 && createFlag){
                gametime --;
                if(gametime <= 0){
                    //１．４（時計進行）に引数として10を渡してアイコン削除。
                    timeEnter(10);
                    this.parentNode.removeChild( this );
                }
                    
            }
        });
        var x = Math.random()*(700-48);
        var y = Math.random()*(300-48) + 170;
        
        movePoint(icon,x,y,20);


        back.image = game.assets['./img/button/button'+ difficulty +'.png']; ;

        //グループにアイコンと背景を結合
        icon.addChild(back);
        icon.addChild(label);

        //どの範囲に描画するか指定する
        icon.moveTo(x,y);

        //１．３．アイコンの描画を行う
        game.rootScene.addChild(icon);
    }
}

function movePoint(icon,x,y,moveFrame){
    icon.tl.moveBy(30, 50, moveFrame).moveBy(156, -350, moveFrame).loop()
}