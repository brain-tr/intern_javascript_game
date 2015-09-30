/****************************************************************
以下面談画面用
****************************************************************/

//面談のシーンを作成
var interview = function(person,matter){

    tempPerson = person;
    tempMatter = matter;

    var scene = new Scene();

    //面談シーンのグループ
    var interviewGroup = new Group();

    //面談シーンの背景
    var interviewBack = new Sprite(700,500);
    interviewBack.image = game.assets['./img/kaigi.jpg'];

    var interviewDisplay = CreateInterviewDisplay();

    //レイヤーを追加する
    scene.addChild(interviewBack);
    scene.addChild(interviewDisplay);

    //シーンを返す
    return scene;
}

function CreateInterviewDisplay(){
    var interviewDisplay = new Group();
    
    //マッチングの合否を確定する変数
    matchingPoint = 0;
    
    var interviewHead = new Sprite(700,80);
    interviewHead.backgroundColor = 'rgba(230, 173, 65, 0.50)';
    
    var interviewBottom = new Sprite(700,140);
    interviewBottom.y = 360;
    interviewBottom.backgroundColor = 'rgba(230, 173, 65, 0.50)';

    //残りターン数を表示
    restTurnNum = 10;
    restTurn = new Label("残り"+restTurnNum+"ターン");
    restTurn.x = 60;
    restTurn.y = 10;
    restTurn.font = "18px 'メイリオ'";
    restTurn.color = "#fff";

    //採用バーを表示
    resultBar = new Sprite(584,28);
    resultBar.image = game.assets['./img/bar.gif'];
    resultBar.x = 60;
    resultBar.y = 40;
    
    //採用バーのゲージを表示
    resultGauge = new Sprite(584,28);
    resultGauge.image = game.assets['./img/bar3.png'];
    resultGauge.x = 60;
    resultGauge.y = 40;
    resultGauge.width = 0;


    //制限時間バーを表示
    bar = new Bar();
    bar.x = 150;
    bar.y = 370;
    var clock = new Sprite(50,50);
    clock.image = game.assets['./img/clock.png'];
    clock.x = 95;
    clock.y = 360;

    //フォローボタンを表示
    follow = new Sprite(100,48);
    follow.image = game.assets['./img/button/follow.gif'];
    follow.x = 170;
    follow.y = 440;
    //イベントリスナーをつけて成功か、失敗かを判定する。
    follow.addEventListener(Event.TOUCH_START,function(e){
        restNum = requirementCheck("follow");
    });

    //プッシュボタンを表示
    push = new Sprite(100,48);
    push.image = game.assets['./img/button/push.gif'];
    push.x = 430;
    push.y = 440;
    //イベントリスナーをつけて成功か、失敗かを判定する。
    push.addEventListener(Event.TOUCH_START,function(e){
        restNum = requirementCheck("push");
    });
    
    //フォロー、プッシュの2度押しの防止フラグ
    actionButtonFlag = 0;
    
    //スルーボタンを
    var through = new Sprite(100,48);
    through.image = game.assets['./img/button/through.gif'];
    through.x = 300;
    through.y = 440;
    //イベントリスナーをつけて成功か、失敗かを判定する。
    through.addEventListener(Event.TOUCH_START,function(e){
        reStart();
        bar.reset();
    });
    
    //残り回数を表示
    restNum = 3;
    rest = new Label("残り"+restNum+"回");
    rest.x = 310;
    rest.y = 410;
    rest.font = "20px 'メイリオ'";

    //営業コメント欄を表示
    eGroup = new Group();
    eFukidashi = new Sprite(700,120);
    eFukidashi.image = game.assets['./img/character2.png'];
    eFukidashi.y = 75;
    eComment = new Label(eCommentCreate());
    eComment.font = "20px 'メイリオ'";
    eComment.color = "#fff";
    eComment.x = 30;
    eComment.y = 90;
    eName = new Label("クライアント");
    eName.font = "14px 'メイリオ'";
    eName.color ="#fff";
    eName.x = 560;
    eName.y = 160;
    eGroup.addChild(eFukidashi);
    eGroup.addChild(eComment);
    eGroup.addChild(eName);

    //人材コメント欄を表示
    jGroup = new Group();
    jFukidashi = new Sprite(700,120);
    jFukidashi.image = game.assets['./img/character.png'];
    jFukidashi.y = 240;
    jComment = new Label(jCommentCreate());
    jComment.font = "20px 'メイリオ'";
    jComment.color = "#fff";
    jComment.x = 30;
    jComment.y = 285;
    jName = new Label(tempPerson[0]);
    jName.font = "14px 'メイリオ'";
    jName.color ="#fff";
    jName.x = 45;
    jName.y = 255;
    jGroup.addChild(jFukidashi);
    jGroup.addChild(jComment);
    jGroup.addChild(jName);

    interviewDisplay.addChild(interviewHead);
    interviewDisplay.addChild(restTurn);
    interviewDisplay.addChild(resultBar);
    interviewDisplay.addChild(resultGauge);
    interviewDisplay.addChild(interviewBottom);
    interviewDisplay.addChild(bar);
    interviewDisplay.addChild(eGroup);
    interviewDisplay.addChild(jGroup);
    interviewDisplay.addChild(clock);
    interviewDisplay.addChild(push);
    interviewDisplay.addChild(follow);
    interviewDisplay.addChild(through);
    interviewDisplay.addChild(rest);

    return interviewDisplay;

}

//プッシュ・フォローの処理
function requirementCheck(mode){
    //残り回数を確認して1以上残ってるなおかつまだ押されていなかったら処理を行う
    if(restNum > 0 && actionButtonFlag == 0){
    
        switch(mode){
            //聞かれたことを押し出した場合
            case 'push':
                switch(skillCheckResult){
                    //全く満たしていない場合
                    case 0:
                        jComment.text = "だからできないって言ってるじゃないですか！！";
                        if(resultGauge.width - GAUGE_LOW < 0){
                            resultGauge.width = 0
                        }else{
                            resultGauge.width -= GAUGE_LOW;
                        }
                        break;
                    //若干満たしている場合
                     case 1:   
                        jComment.text = "自信がもてるように頑張ってみますね…"
                        if(resultGauge.width + GAUGE_MEDIUM >= 584){
                            resultGauge.width = 584;
                        }else{
                            resultGauge.width += GAUGE_MEDIUM;
                        }
                        break;
                    //満たしていた場合
                     case 10:
                        jComment.text = "しっかり頑張りますからね！！";
                        if(resultGauge.width + GAUGE_HIGH >= 584){
                            resultGauge.width = 584;
                        }else{
                            resultGauge.width += GAUGE_HIGH;
                        }
                        break;
                    }
                    break;
            //聞かれたことをフォローした場合
            case 'follow':
                switch(skillCheckResult){
                    case 0:
                        jComment.text = "本当ですか？それじゃあ頑張ってみますけど。";
                        if(resultGauge.width + GAUGE_LOW > 584){
                            resultGauge.width = 584
                        }else{
                            resultGauge.width += GAUGE_LOW;
                        }
                        break;
                     case 1:   
                        jComment.text = "いや…できないとは言ってないんですけどね？"
                        if(resultGauge.width - GAUGE_MEDIUM  <= 0){
                            resultGauge.width = 0;
                        }else{
                            resultGauge.width -= GAUGE_MEDIUM;
                        }
                        break;
                     case 10:
                        jComment.text = "できるって言ってるのに、なんなんですか？";
                        if(resultGauge.width - GAUGE_HIGH  <= 0){
                            resultGauge.width = 0;
                        }else{
                            resultGauge.width -= GAUGE_HIGH;
                        }
                        break;
                    }
                    break;
            }
            push.image = game.assets['./img/button/pushNg.png'];
            follow.image = game.assets['./img/button/followNg.png'];
            actionButtonFlag = 1;

            //残り回数を減算して返却する
            restNum--;
            rest.text = "残り"+ restNum +"回";
        }
        
    return restNum;
}

//matchingの結果表示用ボード表示
var matchingResult = function(){
    var scene = new Scene();

    //文字を表示する領域を作成0
    var textBoard = new Sprite(500,400);
    textBoard.image = game.assets['./img/wood_kanban.png'];
    textBoard.x = 100;
    //textBoard.y = 85;
    var matchingResultEnd = new Label("終了");
    matchingResultEnd.font = "96px 'メイリオ'";
    matchingResultEnd.x = 700;
    matchingResultEnd.y = 155;
    matchingResultEnd.tl.moveTo(255,130,10).moveTo(255,130,50).moveTo(-300,130,10);

    if(resultGauge.width > 514){
        //トラブルが起きる確率
        var trouble = Math.floor(resultGauge.width / 584 * 100);
        var matchingResultText = new Label("採用");
        matchingResultText.font = "96px 'メイリオ'";
        matchingResultText.x = 700;
        matchingResultText.y = 155;
        matchingResultText.tl.moveTo(700,130,70).moveTo(255,130,10).moveTo(255,130,50);
        matchings.push([tempPerson,tempMatter,trouble]);
    }else{
        var matchingResultText = new Label("不採用");
        matchingResultText.font = "96px 'メイリオ'";
        matchingResultText.x = 700;
        matchingResultText.y = 155;
        matchingResultText.tl.moveTo(700,130,70).moveTo(210,130,10).moveTo(210,130,50);
    }
    var matchingResultEndButton = new Sprite(200,75);
    matchingResultEndButton.image = game.assets['./img/arrow.png'];
    matchingResultEndButton.x = 700;
    matchingResultEndButton.y = 135;
    matchingResultEndButton.scaleX = -1;
    matchingResultEndButton.tl.moveTo(700,155,110).moveTo(250,250,1);
    matchingResultEndButton.addEventListener(Event.TOUCH_START,function(e){
        //ルートシーンへ戻る
        game.replaceScene(game.rootScene);

        //発生判断フラグをTrueにする
        createFlag = true;

        //時計を進める
        timeEnter(120);  
    });

    scene.addChild(textBoard);
    scene.addChild(matchingResultEnd);
    scene.addChild(matchingResultText);
    scene.addChild(matchingResultEndButton);

    return scene;
}

/****************************************************************
コメント生成用
****************************************************************/

function eCommentCreate(){
    var Comment = "";
    var mode = Math.floor(Math.random() * 3);
    eCommentMode = mode;
    //0:メインスキル確認　1:サブスキル確認 2:備考
    switch(mode){
        case 0:
            var rand = Math.floor((Math.random()*tempMatter[1].length));
            Comment = tempMatter[1][rand][0] + "には<br>自信がありますか？";
            checkSkill = tempMatter[1][rand][0];
            checkSkillNum = tempMatter[1][rand][1];
            break;
        case 1:
            var rand = Math.floor((Math.random()*tempMatter[0].length));
            Comment = tempMatter[0][rand][0] + "には<br>自信がありますか？";
            checkSkill = tempMatter[0][rand][0];
            checkSkillNum = tempMatter[0][rand][1];
            break;
        case 2:
            var rand = Math.floor((Math.random()*tempMatter[2].length));
            Comment = tempMatter[2][rand];
            push.image = game.assets['./img/button/pushNg.png'];
            follow.image = game.assets['./img/button/followNg.png'];
            actionButtonFlag = 1;
            break;
    }
    return Comment;
}


function jCommentCreate(){
    var Comment = "";
    //0:メインスキル確認　1:サブスキル確認 2:備考
    //スキル確認が行われる場合はfor文を使い、スキルを持っているかを確認。持っていた場合はレベルを確認
    switch(eCommentMode){
        case 0:
        case 1:
            skillCheckResult = personSkillCheck();
            switch(skillCheckResult){
                 case 0:
                    Comment = "100％無理です自信ありません";
                    if(resultGauge.width - GAUGE_LOW < 0){
                        resultGauge.width = 0
                    }else{
                        resultGauge.width -= GAUGE_LOW;
                    }
                    break;
                 case 1:   
                    Comment = "自信がないってことは<br>ないんですけど…"
                    if(resultGauge.width + GAUGE_MEDIUM >= 584){
                        resultGauge.width = 584;
                    }else{
                        resultGauge.width += GAUGE_MEDIUM;
                    }
                    break;
                 case 10:
                    Comment = "大丈夫です<br>それにはかなり自信があります。";
                    if(resultGauge.width + GAUGE_HIGH >= 584){
                        resultGauge.width = 584;
                    }else{
                        resultGauge.width += GAUGE_HIGH;
                    }
                    break;
            }
            break;
        case 2:
            Comment = "本当ですか？<br>それは助かります。";
            if(resultGauge.width + GAUGE_BONUS >= 584){
                resultGauge.width = 584;
            }else{
                resultGauge.width += GAUGE_BONUS;
            }
            break;
    }
    return Comment;
}

function personSkillCheck(){
    var resultFlag;
    for(var i = 0; i < tempPerson[1].length; i++){
        if(checkSkill == tempPerson[1][i][0]){
            //スキルを持っていた場合
            if(checkSkillNum < tempPerson[1][i][1]){
                //スキルを持っていてなおかつ必要レベルを満たしていた場合
                resultFlag = 10;
                break;
            }else{
                //スキルを持っているが必要レベルが足りない場合
                resultFlag =1;
                break;
            }
        }else{
            //スキルを持っていなかった場合
            resultFlag = 0;
        }
    }
    return resultFlag;
}