
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
            matterNum = Math.floor(Math.random()*mainSkills.length);
            //表示する文字
            var label = new Label(mainSkills[matterNum]);
            label.x = 20;
            label.y = 15;

            //難易度を抽選
            var difficulty = Math.floor((Math.random()*5));

            //１．２．アイコンをクリックした時に呼び出す処理を設定する。
            icon.addEventListener(Event.TOUCH_START,function(e){

                //１．２．１．（共通変数）案件数のカウントアップ
                matter++;

                //１．２．２. 案件追加メソッドの実行
                matteran(difficulty);

                //１．２．３．アイコン削除
                this.parentNode.removeChild( this );

                if(matter > 0 && person > 0){
                    matchButton.image = game.assets['./img/match.png'];  // 画像を設定
                }

                //経験値を取得位
                experience++;
                //アイコンを押した時にレベルが上がっていたら営業レベルを上げる
                if(exp[level] == experience){
                    level++;
                }

                //左上のボードの更新を行う
                loadBoard();

                //時間を進める
                timeEnter(30);
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

                //１．２．２. 人材追加メソッドの実行
                personInsert(difficulty);

                //１．２．３．アイコン削除
                this.parentNode.removeChild( this );

                if(matter > 0 && person > 0){
                    matchButton.image = game.assets['./img/match.png'];  // 画像を設定
                }

                //経験値を取得位
                experience++;
                //アイコンを押した時にレベルが上がっていたら営業レベルを上げる
                if(exp[level] == experience){
                    level++;
                }

                //左上のボードの更新を行う
                loadBoard();

                //時間を進める
                timeEnter(30);
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

        //アイコンの移動方向決定
        var moveX = Math.random()*(700-48) - x;
        var moveY = Math.random()*(300-48) + 170 - y;
        icon.tl.moveBy(moveX, moveY, 30).moveBy(100, 0, 20).moveBy(-100, 30, 20).loop

        back.image = game.assets['./img/button/button'+ difficulty +'.png']; ;

        //グループにアイコンと背景を結合
        icon.addChild(back);
        icon.addChild(label);

        //どこに現れたのかを取得しどの範囲に描画するか指定する
        icon.moveTo(x,y);

        //１．３．アイコンの描画を行う
        game.rootScene.addChild(icon);
    }
}
