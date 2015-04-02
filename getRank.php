<?php
$userScore = $_POST['userScore'];

//ファイルを読み込み専用でオープンする
$fp = fopen('ranking.txt', 'r');

//ファイルからランキングを読み込む
$line = fgets($fp);

//ランキングを分割する
$ranking = explode(",", $line);

//ユーザーのスコアとランキングと比較する
for($i = 0; $i < count($ranking); $i++){
    //ユーザーのスコアがランキングを上回ってたらランキング更新
    if($ranking[$i] < $userScore){
        array_splice($ranking, $i, 0, array($userScore));
        array_pop($ranking);
        break;
    }
}

//ユーザーの取った点数にフラグを立てる
for($i = 0; $i < count($ranking); $i++){
    if($ranking[$i] == $userScore){
        array_push($ranking,$i);
    }
}

$json = json_encode($ranking);

echo $json;