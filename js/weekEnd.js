function weekEnd(){
    //１．週を追加し、残り週を減らす
    week++;
    end--;

    //２．業務報告ボードを表示する。
    if(week > 4){
        alert("次の月になりました。");
        week = 1;
        month++;
    }else{
        alert("業務を終了しました。次の週になります。");
    }

    //３．（共通変数）発生判断フラグをFalseにする。
    createFlag = false;

    //４．（共通変数）稼働情報を元に収支計算と残稼働数を減らす
    //５．収支を表示する。
    //６．次週へボタンを表示する。
    //ボタン押下時処理
        //６．１．（共通変数）月、週を変更する。
        dateinfo.text = "日付: "+String(month)+"月"+String(week)+"週";
        restinfo.text = "残り: "+String(end)+"週";
    
        //６．２．時間を１０：００に変更する。
        hours = 10;
        minutes = 12;
        
        //６．３．（共通変数）発生判断フラグをTrueにする。
        createFlag = true;
        
        //６．４．時計の針を１０：００にする。
        short.rotation = times[hours];
        time.addChild(dateinfo);
        time.addChild(restinfo);
        
        //６．５．業務報告ボードを消す

}