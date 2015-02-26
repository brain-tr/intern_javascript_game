function constructor(){
    // 共通変数初期設定
    month = 4;     //月
    week = 1;      //週
    hours = 10;    //時間
    minutes = 0;   //分
    end = 48;      //残り週
    money = 100    //資金
    matter = 0     //案件数
    person = 0     //人材数
    level = 1      //営業LV
    //長針のカウンタと、針が指す位置
    longTimes = [270,330,30,90,150,210];
    //短針のカウンタと、針が指す位置
    shortTimes = [270,300,330,360,30,60,90,120,150,180,210,240];
    //プレイ日時
    date = 2;
}
