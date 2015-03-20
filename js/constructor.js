function constructor(){
    // 共通変数初期設定
    month = 4;          //月
    week = 1;           //週
    hours = 10;         //時間
    minutes = 0;        //分
    end = 48;           //残り週
    money = 100;        //資金
    matter = 0;         //案件数
    person = 0;         //人材数
    level = 1;          //営業LV
    experience = 0;     //経験値
    createFlag = true;  //アイコン発生フラグ
    personPointer = 0;  //マッチング時のポインタ（人材）
    matterPointer = 0;  //マッチング時のポインタ（案件）
    matchings = [];     //マッチング確定後の案件と人材を入れる用
    
    //収入
    inMoney = 0;
    
    //支出
    outMoney = 0;
    
    
    //メインスキル
    mainSkills = ['Java','JavaScript','PHP','Oracle'];
    
    //スキルの最大値
    MAX_SKILL_NUM = 24;
    
    //サブスキル
    subSkills = [
        "世渡り上手さ",
        "物覚えの良さ",
        "一般教養",
        "人間性",
        "読解力",
        "文章力",
        "人当たりの良さ",
        "素直さ",
        "容姿",
        "体力",
        "デザインセンス",
        "学歴",
        "精神力",
        "清潔さ",
        "真面目さ",
        "勤勉さ",
        "協調性",
        "空気を読む力",
        "仕事の丁寧さ",
        "根気の良さ",
        "行動力",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ];
    
    //人材備考一覧

    matterInfo = null;  //表示用案件情報
    matters = [];     //案件情報


    /* 人材用変数 */
    personInfo = null;  //表示用人材情報
    persons = [];     //人材情報
    

    //備考一覧
    remarks = [
        "アットホームな<br>雰囲気の職場です。",
        "オフィスの雰囲気<br>がいいです。",
        "若い年齢層の人が<br>多いです。",
        "残業ありません",
        "土日休みです。"
    ];
    
    //営業レベルUP必要経験値
    exp = [
        0,
        5,
        10,
        15,
        25,
        45,
        65,
    ]

    //針が差す位置（短針長針が変わらないのでまとめました。）
    times = [270,300,330,360,30,60,90,120,150,180,210,240];
    //プレイ日時
    date = 2;
}
