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

    matterInfo = null;  //表示用案件情報
    matters = null;     //案件情報


    /* 人材用変数 */
    personInfo = null;  //表示用人材情報
    persons = [];     //人材情報

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
    

    //移動方向のフラグ管理
    //上：0 右上:1 右:2 、右下:3 下:4 左下:5 左:6 左上:7

    //上段
    //moveIcon[0] = [2,3,4];
    //moveIcon[1] = [2,3,4,5,6];
    //moveIcon[2] = [4,5,6];

    //中段
    //moveIcon[3] = [0,1,2,3,4];
    //moveIcon[4] = [0,1,2,3,4,5,6,7];
    //moveIcon[5] = [0,4,5,6,7];

    //下段
    //moveIcon[6] = [0,1,2];
    //moveIcon[7] = [0,1,2,6,7];
    //moveIcon[8] = [0,6,7];

    //針が差す位置（短針長針が変わらないのでまとめました。）
    times = [270,300,330,360,30,60,90,120,150,180,210,240];
    //プレイ日時
    date = 2;
}
