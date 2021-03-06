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
            
            //トラブルが起きないかチェックする
            if(troubleCheck()){
                //発生判断フラグをfalseにする
                createFlag = false;
                game.replaceScene(createTroubleScean());
            }else{
                //週を進める
                weekEnd();
            }
            
            break;
        }
    }

    long.rotation = times[minutes];
    //完成したレイヤーを結合
    time.addChild(clock);
    time.addChild(short);
    time.addChild(long);
}