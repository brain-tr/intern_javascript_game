function matchingTime(){
    hours+=2;
    if(hours == 12){
        hours = 0;
    }
    short.rotation = shortTimes[hours];
    if(hours > 6){

        //時計の針を一時的に7時にする
        short.rotation = shortTimes[7];
        long.rotation = longTimes[0];
        time.addChild(clock);
        time.addChild(short);
        time.addChild(long);

        //1周間追加する
        week++;
        //残り週を減らす
        end--;

        if(week > 4){
            alert("次の月になりました。");
            week = 1;
            month++;

        }else{
            alert("業務を終了しました。次の週になります。");
        }
        hours = 10;
        minutes = 0;
        short.rotation = shortTimes[hours];
        document.getElementById("tuki").innerHTML = month;
        document.getElementById("syu").innerHTML = week;
        document.getElementById("end").innerHTML = end;
        dateinfo.text = "日付: "+String(month)+"月"+String(week)+"週";
        restinfo.text = "残り: "+String(end)+"週";
        time.addChild(dateinfo);
        time.addChild(restinfo);
    }
    //完成したレイヤーを結合
    time.addChild(clock);
    time.addChild(short);
    time.addChild(long);
    date.text = "aaa";
}
