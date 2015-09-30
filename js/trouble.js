function troubleCheck(){
    for(var i = 0; i < matchings.length;i++){
        var randnum = Math.floor( Math.random() * 100 ); 
        if(randnum > matchings[i][2]){
            troublePerson = matchings[i];
            return true;
        }
    }
    return false;
}

function createTroubleScean(){
    var scene = new Scene();
    
    //どのトラブルが起きたか判定する
    trouble = troubleMessage[Math.floor(Math.random() * 7)];
    
    //背景
    var back = new Sprite(700, 500);
    back.backgroundColor = "#cc5c28";
    
    //内容
    var message =  new Label(trouble[0]);
    message.x = 0;
    message.y = 15;
    message.width = 700;
    message.textAlign = 'center';
    message.color = '#fff';
    message.font = '36px "Arial"';
    
    //ゲージ
    var bar = new Sprite(365,29);
    bar.image = game.assets['./img/troubleBar.gif'];
    bar.x = 175;
    bar.y = 350;
    
    //メーター
    var meter = new Sprite(5,29);
    var flag = true;
    var stopFlag = false;
    meter.backgroundColor = "#fff";
    meter.x = 175;
    meter.y = 350;

    game.fps = 150;
    meter.addEventListener(Event.ENTER_FRAME, function() {
        if(stopFlag == false){
            if(flag){
                meter.x += gaugeLevel[trouble[1]][5];
            }else{
                meter.x -= gaugeLevel[trouble[1]][5];
            }

            if(meter.x == 175 || meter.x == 535){
                flag = !flag;
            }
        }
    });
    
    //ストップボタン
    stopButton = new Sprite(150,50);
    stopButton.image = game.assets['./img/stopButton.gif'];
    stopButton.x = 275;
    stopButton.y = 420;
    //イベントリスナーをつけて成功か、失敗かを判定する。
    stopButton.addEventListener(Event.TOUCH_START,function(e){
        //止める
        stopFlag = true;
        //fpsを元に戻す
        game.fps = 24;
        
        var meterPosition = meter.x - 175;
        var result = checkResult(trouble[1],meterPosition);
        
        //罰金
        var fine = 0;
        
        switch(result){
            //セーフ
            case 0:
                break;
            
            //罰金退場(あえてbreakを書いてません)
            case 1:
                //削除
                matchings.splice(matchings.indexOf(troublePerson), 1);
            //罰金
            case 2:
                fine = Math.round(troublePerson[0][2] * (trouble[1] + 1) * 1.5);
                break;
        }
        troublePerson = null;
        
        var resultScene = new Scene();
    
        //結果ボタン
        button = new Sprite(150,50);
        button.image = game.assets['./img/resultButton.gif'];
        button.x = 275;
        button.y = 420;
        //イベントリスナーをつけて成功か、失敗かを判定する。
        button.addEventListener(Event.TOUCH_START,function(e){
            game.popScene();
            troubleResult(fine,result);
        });

        resultScene.addChild(button);

        game.pushScene(resultScene);
    });
    
    //追加
    scene.addChild(back);
    scene.addChild(message);
    scene.addChild(bar);
    scene.addChild(stopButton);
    scene.addChild(getTroubleGauge(trouble[1]));
    scene.addChild(meter);

    //シーンを返す
    return scene;
}

function getTroubleGauge(troubleLevel){
    var gauge   = new Group();
            
    var medium1 = new Sprite(gaugeLevel[troubleLevel][0],25);
    var auto1   = new Sprite(gaugeLevel[troubleLevel][1],25);
    var safe    = new Sprite(gaugeLevel[troubleLevel][2],25);
    var auto2   = new Sprite(gaugeLevel[troubleLevel][3],25);
    var medium2 = new Sprite(gaugeLevel[troubleLevel][4],25);
            
    medium1.backgroundColor = "#0f0";
    auto1.backgroundColor   = "#f00";
    safe.backgroundColor    = "#00f";
    auto2.backgroundColor   = "#f00";
    medium2.backgroundColor = "#0f0";
            
    medium1.x   = 0;
    auto1.x     = gaugeLevel[troubleLevel][0];
    safe.x      = auto1.x + gaugeLevel[troubleLevel][1];
    auto2.x     = safe.x + gaugeLevel[troubleLevel][2];
    medium2.x   = auto2.x + gaugeLevel[troubleLevel][3];
            
    gauge.addChild(medium1);
    gauge.addChild(auto1);
    gauge.addChild(safe);
    gauge.addChild(auto2);
    gauge.addChild(medium2);
    
    gauge.x = 175;
    gauge.y = 352;
            
    return gauge;
}


//セーフ：0　罰金退場：1　罰金：2
function checkResult(troubleLevel,param){
    if(param < gaugeLevel[troubleLevel][0]){
        return 2;
    }
    if(gaugeLevel[troubleLevel][0] < param && param < gaugeLevel[troubleLevel][0] + gaugeLevel[troubleLevel][1]){
        return 1;
    }
    if(gaugeLevel[troubleLevel][0] + gaugeLevel[troubleLevel][1] < param && param < gaugeLevel[troubleLevel][0] + gaugeLevel[troubleLevel][1] + gaugeLevel[troubleLevel][2]){
        return 0;
    }
    if(gaugeLevel[troubleLevel][0] + gaugeLevel[troubleLevel][1] + gaugeLevel[troubleLevel][2] < param && param < gaugeLevel[troubleLevel][0] + gaugeLevel[troubleLevel][1] + gaugeLevel[troubleLevel][2] + gaugeLevel[troubleLevel][3]){
        return 1;
    }
    if(gaugeLevel[troubleLevel][0] + gaugeLevel[troubleLevel][1] + gaugeLevel[troubleLevel][2] + gaugeLevel[troubleLevel][3] < param){
        return 2;
    }
}

//罰金 = fine　,　何も起きなかったら0を渡す
function troubleResult(fine,resultCode){
    
    outMoney -= fine;
    
    var resultScene = new Scene();
    var resultGroup = new Group();
    
    //ボード
    var resultBoard = new Sprite(500,400);
    resultBoard.backgroundColor = "#cc2828";
    resultBoard.x = 100;
    resultBoard.y = 85;
    
    //次へ
    button = new Sprite(150,50);
    button.image = game.assets['./img/nextButton.gif'];
    button.x = 275;
    button.y = 420;
    //イベントリスナーをつけて成功か、失敗かを判定する。
    button.addEventListener(Event.TOUCH_START,function(e){
        game.popScene();
        weekEnd();
    });
    
    //文章
    var message = "";
    switch(resultCode){
        case 0:
            message = "無事トラブルを回避した";
            break;
        case 1:
            message = "クビになってしまった。<br><br>";
        case 2:
            message += "賠償金" + fine + "G支払った";
            break;
    }
    var message =  new Label(message);
    message.x = 0;
    message.y = 100;
    message.width = 700;
    message.textAlign = 'center';
    message.color = '#fff';
    message.font = '36px "Arial"';
    
    resultGroup.addChild(resultBoard);
    resultGroup.addChild(message);
    resultGroup.addChild(button);
    
    resultScene.addChild(resultGroup);
    game.pushScene(resultScene);
}