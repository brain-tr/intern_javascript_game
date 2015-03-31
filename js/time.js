function timeEnter(enterMinutes){
    
    //長針のカウンタを更新し、針を動かす
    minutes += enterMinutes / 5;
    
    //カウンタが１週していたら0に戻して短針を動かす
    for(;minutes >= 12;minutes -= 12){
        hours++;
        if(hours == 12){
            hours = 0;
        }
        short.rotation = times[hours];
        //19時になったら業務を終了し、次の日へ
        if(hours > 6 && hours != 11 && hours != 0){

            //時計の針を一時的に7時にする
            short.rotation = times[7];
            long.rotation = times[0];
            time.addChild(clock);
            time.addChild(short);
            time.addChild(long);
            
            //支出の計算
            for(var i = 0; i < matchings.length; i++){
                //週の単価を足す
                if(matchings[i][1][4] - matchings[i][0][2] < 0){
                    var inMoneyTemp = 0;
                }else{
                    var inMoneyTemp = matchings[i][1][4] - matchings[i][0][2];
                }
                inMoney += inMoneyTemp;
                //残り期間を計算
                matchings[i][1][5]--;
                if(matchings[i][1][5] == 0){
                    //任期満了になった人材名を変数に格納
                    endPerson.push(matchings[i][0][0]);
                    //期間満了になったら終了
                    matchings.splice(i, 1);
                }
            }
            //維持費の減額
            outMoney += 20;
            //今日の成果を出す。
            money = money + inMoney - outMoney;
            
            //週を進める
            weekEnd();
            
            break;
        }
    }

    long.rotation = times[minutes];
    //完成したレイヤーを結合
    time.addChild(clock);
    time.addChild(short);
    time.addChild(long);
}