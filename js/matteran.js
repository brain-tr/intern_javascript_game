/**
 *
 * 案件or人材を行うメソッド
 *
 */
function matteran(){

    /****************************
    *    人材or案件の処理を書く    *
    ****************************/

    //長針のカウンタを更新し、針を動かす
    minutes += 3;

    //カウンタが１週していたら0に戻して短針を動かす
    if(minutes == 6){
        minutes = 0;
        hours++;
        if(hours == 12){
            hours = 0;
        }
        short.rotation = shortTimes[hours];
        //19時になったら業務を終了し、次の日へ
        if(hours > 6 && hours != 11 && hours != 0){

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
        }
    }

    long.rotation = longTimes[minutes];
    //完成したレイヤーを結合
    time.addChild(clock);
    time.addChild(short);
    time.addChild(long);
}