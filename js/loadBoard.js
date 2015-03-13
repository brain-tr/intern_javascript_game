//左上に表示されているボードの更新を行う
function loadBoard(){
    personinfo.text = "人材数:   "+String(person)+"人";
    levelinfo.text = "営業LV:   "+String(level)+"LV";
    matterinfo.text = "案件数:   "+String(matter)+"個";
}

function CreateMatchingBoard(){

    var matchBoard = new Group();

    //背景
    var matchBack = new Sprite(700,500);
    matchBack.backgroundColor = 'rgba(34, 219, 91, 0.99)';

    //案件表示用ボード
    var matterBoard = createMatterBoard();

    //人材表示用ボード
    var personBoard = createPersonBoard();

    //ボタン
    var createMatchButton = new Sprite(350,40);
    createMatchButton.x = 175;
    createMatchButton.y = 455;
    createMatchButton.image = game.assets['./img/button/matching_button.gif'];

    //背景を追加
    matchBoard.addChild(matchBack);

    //案件表示用ボードを追加
    matchBoard.addChild(matterBoard);

    //人材表示用ボードを追加
    matchBoard.addChild(personBoard);

    //ボタンを追加
    matchBoard.addChild(createMatchButton);

    //作成したレイヤーにイベントリスナーをつける
    createMatchButton.addEventListener(Event.TOUCH_START,function(e){

        //人材と案件を減らす
        matter--;
        person--;
        loadBoard();

        //指定した人材と案件を配列に格納し退避させる
        matchings.push([matters,persons]);
        matters.splice(matterPointer - 1, 1);
        persons.splice(personPointer - 1, 1);

        //人材と案件が最低一つなければボタンを押せないようにする
        if(matters.length == 0 || persons.length == 0){
            matchButton.image = game.assets['./img/match_no.png'];  // 画像を設定
            matchButton.removeEventListener;
        }

        //マッチング画面へ移行する。

        //マッチング用のシーンを呼び出す
        game.replaceScene(interview()); 
        //ルートシーンへ戻る
        //game.popScene();
        
        //発生判断フラグをTrueにする
        //createFlag = true;
        
        //時計を進める
        //timeEnter(120);
    });

    return matchBoard;
}


/****************************************************************
以下案件ボード用
****************************************************************/

function createMatterBoard(){

    //案件表示用ボード
    var matterBoard = new Group();

    var matterBoardBack = new Sprite(330,440);
    matterBoardBack.backgroundColor = 'rgba(34, 219, 212, 0.99)';

    var pageInfo = createMatterPageInfo();

    matterBoard.addChild(matterBoardBack);
    matterBoard.addChild(pageInfo);

    matterBoard.x = 10;
    matterBoard.y = 5;

    return matterBoard;
}

function createMatterPageInfo(){
    //ページ更新用
    var pageInfo = new Group();
    var leftArrow = new Label("◀");
    leftArrow.x = 95;
    leftArrow.y = 410;
    leftArrow.font = "24px 'メイリオ'";
    var rightArrow = new Label("▶");
    rightArrow.x = 210;
    rightArrow.y = 410;
    rightArrow.font = "24px 'メイリオ'";
    var pageNum = new Label("1/" + matters.length);
    pageNum.x = 140;
    pageNum.y = 410;
    pageNum.font = "24px 'メイリオ'";

    //ポインタの初期化
    matterPointer = 1;

    matterBoardInner = createMatterBoardInner(matterPointer);

    //　◀　▶　のボタンを押された際の処理
    leftArrow.addEventListener(Event.TOUCH_START,function(e){
        matterPointer--;
        if(matterPointer == 0){
            matterPointer = matters.length;
        }
        pageInfo.removeChild(matterBoardInner);
        matterBoardInner = createMatterBoardInner(matterPointer);
        pageInfo.addChild(matterBoardInner);
        pageNum.text =  matterPointer + "/" + matters.length;
    });
    rightArrow.addEventListener(Event.TOUCH_START,function(e){
        matterPointer++;
        if(matterPointer > matters.length){
            matterPointer = 1;
        }
        pageInfo.removeChild(matterBoardInner);
        matterBoardInner = createMatterBoardInner(matterPointer);
        pageInfo.addChild(matterBoardInner);
        pageNum.text =  matterPointer + "/" + matters.length;
    });

    //追加
    pageInfo.addChild(leftArrow);
    pageInfo.addChild(rightArrow);
    pageInfo.addChild(pageNum);
    pageInfo.addChild(matterBoardInner);
    return pageInfo;
}

//案件ボードの内容枠生成
function createMatterBoardInner(num){

    matterBoardInner = new Group();

    var title = new Label("～案件情報～");
    title.x = 93;
    title.y = 5;
    title.font = "24px 'メイリオ'";

    //スキルエリアの生成
    var pSkillArea = new Group();

    //スキルエリアのタイトル
    var pSkillTitle = new Label("必須スキル：");
    pSkillTitle.font = "18px 'メイリオ'";
    pSkillTitle.x = 5;
    pSkillTitle.y = 30 + 50;
    pSkillArea.addChild(pSkillTitle);

    //必須スキルを表示する。
    num--;
    var pSkills = new Group();
    for(var i = 0; i < matters[num][0].length; i++){
        //readMainFlag 1:全部見える 0:全部見えない -1:スキルが見れない -2:レベルが見れない
        switch(matters[num][0][i][2]){
            case -2:
                var pSkillNameLabel = new Label(matters[num][0][i][0]);
                var pSkillLevelLabel = new Label("XXLV");
                break;
            case -1:
                var pSkillNameLabel = new Label("XXXX");
                var pSkillLevelLabel = new Label(matters[num][0][i][1]+"LV");
                break;
            case 0:
                var pSkillNameLabel = new Label("XXXX");
                var pSkillLevelLabel = new Label("XXLV");
                break;
            case 1:
                var pSkillNameLabel = new Label(matters[num][0][i][0]);
                var pSkillLevelLabel = new Label(matters[num][0][i][1]+"LV");
                break;
        }
        pSkillNameLabel.y = 55 + 50 + (i * 18);
        pSkillNameLabel.x = 5;
        pSkillNameLabel.font = "14px 'メイリオ'";
        pSkillLevelLabel.y = 55 + 50 + (i * 18);
        pSkillLevelLabel.x = 100;
        pSkillLevelLabel.font = "14px 'メイリオ'";
        pSkills.addChild(pSkillNameLabel);
        pSkills.addChild(pSkillLevelLabel);
    }

    //スキルエリアのタイトル
    var pSkillTitle = new Label("尚可スキル：");
    pSkillTitle.font = "18px 'メイリオ'";
    pSkillTitle.x = 5;
    pSkillTitle.y = 130 + 50;
    pSkillArea.addChild(pSkillTitle);

    //尚可スキルを表示する。
    var lSkills = new Group();
    for(var i = 0; i < matters[num][1].length; i++){
        //readMainFlag 1:全部見える 0:全部見えない -1:スキルが見れない -2:レベルが見れない
        switch(matters[num][1][i][2]){
            case -2:
                var lSkillNameLabel = new Label(matters[num][1][i][0]);
                var lSkillLevelLabel = new Label("XXLV");
                break;
            case -1:
                var lSkillNameLabel = new Label("XXXX");
                var lSkillLevelLabel = new Label(matters[num][1][i][1]+"LV");
                break;
            case 0:
                var lSkillNameLabel = new Label("XXXX");
                var lSkillLevelLabel = new Label("XXLV");
                break;
            case 1:
                var lSkillNameLabel = new Label(matters[num][1][i][0]);
                var lSkillLevelLabel = new Label(matters[num][1][i][1]+"LV");
                break;
        }
        lSkillNameLabel.y = 155 + 50 + (i * 18);
        lSkillNameLabel.x = 5;
        lSkillNameLabel.font = "14px 'メイリオ'";
        lSkillLevelLabel.y = 155 + 50 + (i * 18);
        lSkillLevelLabel.x = 100;
        lSkillLevelLabel.font = "14px 'メイリオ'";
        lSkills.addChild(lSkillNameLabel);
        lSkills.addChild(lSkillLevelLabel);
    }

    var matterPriceTitle = new Label("単価 ： ");
    matterPriceTitle.y = 290 + 50;
    matterPriceTitle.x = 5;
    matterPriceTitle.font = "14px 'メイリオ'";
    var matterPrice = new Label(matters[num][4]+"G");
    matterPrice.y = 290 + 50;
    matterPrice.x = 100;
    matterPrice.font = "14px 'メイリオ'";

    var matterIntervalTitle = new Label("期間 ： ");
    matterIntervalTitle.y = 308 + 50;
    matterIntervalTitle.x = 5;
    matterIntervalTitle.font = "14px 'メイリオ'";
    var matterInterval = new Label(matters[num][5]+"週");
    matterInterval.y = 308 + 50;
    matterInterval.x = 100;
    matterInterval.font = "14px 'メイリオ'";

    pSkillArea.addChild(pSkills);
    pSkillArea.addChild(lSkills);
    pSkillArea.addChild(matterPriceTitle);
    pSkillArea.addChild(matterPrice);
    pSkillArea.addChild(matterIntervalTitle);
    pSkillArea.addChild(matterInterval);

    matterBoardInner.addChild(title);
    matterBoardInner.addChild(pSkillArea);

    return matterBoardInner;
}

/****************************************************************
以下人材ボード用
****************************************************************/

function createPersonBoard(){

    //人材表示用ボード
    var personBoard = new Group();

    var personBoardBack = new Sprite(330,440);
    personBoardBack.backgroundColor = 'rgba(34, 219, 212, 0.99)';

    var pageInfo = createPersonPageInfo();

    personBoard.addChild(personBoardBack);
    personBoard.addChild(pageInfo);

    personBoard.x = 360;
    personBoard.y = 5;

    return personBoard;
}

function createPersonPageInfo(){
    //ページ更新用
    var pageInfo = new Group();
    var leftArrow = new Label("◀");
    leftArrow.x = 95;
    leftArrow.y = 410;
    leftArrow.font = "24px 'メイリオ'";
    var rightArrow = new Label("▶");
    rightArrow.x = 210;
    rightArrow.y = 410;
    rightArrow.font = "24px 'メイリオ'";
    var pageNum = new Label("1/" + persons.length);
    pageNum.x = 140;
    pageNum.y = 410;
    pageNum.font = "24px 'メイリオ'";

    personPointer = 1;
    personBoardInner = createPersonBoardInner(personPointer);

    leftArrow.addEventListener(Event.TOUCH_START,function(e){
        personPointer--;
        if(personPointer == 0){
            personPointer = persons.length;
        }
        pageInfo.removeChild(personBoardInner);
        personBoardInner = createPersonBoardInner(personPointer);
        pageInfo.addChild(personBoardInner);
        pageNum.text =  personPointer + "/" + persons.length;
    });
    rightArrow.addEventListener(Event.TOUCH_START,function(e){
        personPointer++;
        if(personPointer > persons.length){
            personPointer = 1;
        }
        pageInfo.removeChild(personBoardInner);
        personBoardInner = createPersonBoardInner(personPointer);
        pageInfo.addChild(personBoardInner);
        pageNum.text =  personPointer + "/" + persons.length;
    });

    //追加
    pageInfo.addChild(leftArrow);
    pageInfo.addChild(rightArrow);
    pageInfo.addChild(pageNum);
    pageInfo.addChild(personBoardInner);
    return pageInfo;
}

function createPersonBoardInner(num){

    //添字の数に1足された数が入るので、マイナス1しておく
    num--;

    //返り値のグループ
    personBoardInner = new Group();
    //タイトル
    var title = new Label("～人材情報～");
    title.x = 93;
    title.y = 5;
    title.font = "24px 'メイリオ'";

    //名前と単価
    var personNmaeTitle = new Label("名前：");
    personNmaeTitle.x = 5;
    personNmaeTitle.y = 50;
    personNmaeTitle.font = "18px 'メイリオ'";
    var personNmae = new Label(persons[num][0]);
    personNmae.x = 55;
    personNmae.y = 50;
    personNmae.font = "18px 'メイリオ'";
    var personPriceTitle = new Label("価格：");
    personPriceTitle.x = 220;
    personPriceTitle.y = 50;
    personPriceTitle.font = "18px 'メイリオ'";
    var personPrice = new Label(persons[num][2] + "G");
    personPrice.x = 285;
    personPrice.y = 50;
    personPrice.font = "18px 'メイリオ'";

    personBoardInner.addChild(personNmaeTitle);
    personBoardInner.addChild(personNmae);
    personBoardInner.addChild(personPriceTitle);
    personBoardInner.addChild(personPrice);

    //スキルエリアのタイトル
    var personSkillTitle = new Label("習得スキル：");
    personSkillTitle.font = "18px 'メイリオ'";
    personSkillTitle.x = 5;
    personSkillTitle.y = 30 + 50;
    personBoardInner.addChild(personSkillTitle);

    //スキルエリアの生成
    var personArea = new Group();

    for(var i = 0; i < persons[num][1].length; i++){
        //readMainFlag 1:全部見える 0:全部見えない -1:スキルが見れない -2:レベルが見れない

        var lSkillNameLabel = new Label(persons[num][1][i][0]);
        var lSkillLevelLabel = new Label(persons[num][1][i][1]+"LV");
        if(i <= Math.floor(MAX_SKILL_NUM) / 2){
            lSkillNameLabel.y = 105 + (i * 18);
            lSkillNameLabel.x = 5;
            lSkillNameLabel.font = "14px 'メイリオ'";
            lSkillLevelLabel.y = 105 + (i * 18);
            lSkillLevelLabel.x = 100;
            lSkillLevelLabel.font = "14px 'メイリオ'";
            personArea.addChild(lSkillNameLabel);
            personArea.addChild(lSkillLevelLabel);            
        }else{
            lSkillNameLabel.y = 105 + ((i - Math.floor(MAX_SKILL_NUM / 2) - 1) * 18);
            lSkillNameLabel.x = 155;
            lSkillNameLabel.font = "14px 'メイリオ'";
            lSkillLevelLabel.y = 105 + ((i - Math.floor(MAX_SKILL_NUM / 2) - 1) * 18);
            lSkillLevelLabel.x = 250;
            lSkillLevelLabel.font = "14px 'メイリオ'";
            personArea.addChild(lSkillNameLabel);
            personArea.addChild(lSkillLevelLabel);
        }

    }

    personBoardInner.addChild(title);
    personBoardInner.addChild(personArea);
    return personBoardInner;
}

/****************************************************************
以下面談画面用
****************************************************************/

//面談のシーンを作成
var interview = function(){

    var scene = new Scene();

    //面談シーンのグループ
    var interviewGroup = new Group();

    //面談シーンの背景
    var interviewBack = new Sprite(700,500);
    interviewBack.backgroundColor = "#999";

    var interviewDisplay = CreateInterviewDisplay();

    //レイヤーを追加する
    scene.addChild(interviewBack);
    scene.addChild(interviewDisplay);

    //シーンを返す
    return scene;
}

function CreateInterviewDisplay(){
    var interviewDisplay = new Group();

    //残りターン数を表示

    //採用バーを表示
    var bar = new Bar();
    bar.x = 150;
    bar.y = 370;
    var clock = new Sprite(50,50);
    clock.image = game.assets['./img/clock.png'];
    clock.x = 95;
    clock.y = 360;

    //営業コメント欄を表示

    //人材コメント欄を表示

    //制限時間バーを表示


    //フォローボタンを表示
    var follow = new Sprite(100,48);
    follow.image = game.assets['./img/button/follow.gif'];
    follow.x = 170;
    follow.y = 430;
    
    //イベントリスナーをつけて成功か、失敗かを判定する。

    //プッシュボタンを表示
    var push = new Sprite(100,48);
    push.image = game.assets['./img/button/push.gif'];
    push.x = 430;
    push.y = 430;
    //イベントリスナーをつけて成功か、失敗かを判定する。

    //残り回数を表示

    
    interviewDisplay.addChild(bar);
    interviewDisplay.addChild(clock);
    interviewDisplay.addChild(push);
    interviewDisplay.addChild(follow);
    
    
    return interviewDisplay;

}

/*
 * バークラス
 */
var SCREEN_WIDTH = 500;		// 幅

/*
 * グローバル変数
 */
var nowTime;			// 現在時刻
var startTime;			// スタート時刻
// 定数
var IMG_BAR = "./img/bar.png";
var COUNTDOWN = 10;			// カウントダウン秒数

var Bar = Class.create(Sprite, {
	initialize: function(){
		Sprite.call(this, 32, 32);
		this.image = game.assets[IMG_BAR];
		this.zobun = game.width / (COUNTDOWN*100);	// 増分幅の設定（100分の1秒用に10を掛けている）
		this.timer = game.frame + this.zobun;
		this.width = SCREEN_WIDTH;
		this.update = this.countdown;
	},
	reset: function(){
		this.timer = game.frame + this.zobun;
		this.width = SCREEN_WIDTH;
		this.update = this.countdown;
	},
	countdown: function(){
		if(game.frame > this.timer){
			this.width -= this.zobun * 3.5;
			if(this.width < this.zobun) this.width = 1;
			this.timer += this.zobun;
		}
		if(this.width <= 1){
			this.update = this.stop;
		}
	},
	stop: function(){
        this.reset();
	},
	onenterframe: function(){
		this.update();
	},
});