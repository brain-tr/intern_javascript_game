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
    createFlag = true;  //アイコン発生フラグ
    
    //使用するスキル一覧
    skills = ["PHP","C","C#","JavaScript"];
    //難易度別の背景色
    colors = ["#4a86e8","#00ffff","#fff2cc","#f9cb9c","#e06666"];
    
    //針が差す位置（短針長針が変わらないのでまとめました。）
    times = [270,300,330,360,30,60,90,120,150,180,210,240];
    //プレイ日時
    date = 2;
}
