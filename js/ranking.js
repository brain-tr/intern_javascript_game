function getRanking(userScore)
{
    if (userScore == null) userScore = 0;
    $.ajax({
        type: "POST",
        url: "../getRank.php",
        data: {'userScore' : userScore},
        dataType: "json",
        /**
             * Ajax通信が成功した場合に呼び出されるメソッド
             */
        success: function(data, dataType) 
        {
            //ランキングの結果を定数としてもつ
            RANKING_DATA = data;
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) 
        {
            //エラーメッセージの表示
            alert('Error : ' + errorThrown);
        }
    });
}