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
    
    /* 案件用変数 */
    matters = [];     //案件情報
    
    /* 人材用変数 */
    persons = [];       //人材情報 
    
    //メインスキル
    mainSkills = ['A','B','C','D'];
    
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
