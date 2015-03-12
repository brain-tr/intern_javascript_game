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
    
    //収入
    inMoney = 0;
    
    //支出
    outMoney = 0;
    
    
    //メインスキル
    mainSkills = ['Java','JavaScript','PHP','Oracle'];
    
    //サブスキル
    subSkills = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ];
    
    //人材備考一覧

    matterInfo = null;  //表示用案件情報
    matters = [];     //案件情報


    /* 人材用変数 */
    personInfo = null;  //表示用人材情報
    persons = [];     //人材情報
    
    //スキルの最大値
    MAX_SKILL_NUM = 24;
    
    //使用するスキル一覧
    skills = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y"
    ];

    //備考一覧
    remarks = [
        "AA",
        "BB",
        "CC",
        "DD",
        "EE"
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
