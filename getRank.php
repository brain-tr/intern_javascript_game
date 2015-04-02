<?php
$userScore = $_POST['userScore'];

if(!is_numeric($userScore)){
    $error = Array(
        "不正な操作",
        "不正な操作",
        "不正な操作"
    );
    
    $json = json_encode($error);
    echo $json;
    
    exit;
}
if(9999 < $userScore){
    $userScore = 9999;
}

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

//ファイルを更新
$fp = fopen("ranking.txt", "w");
fwrite($fp, $ranking[0] . "," .  $ranking[1] . "," . $ranking[2]);
fclose($fp);

//ユーザーの取った点数にフラグを立てる
for($i = 0; $i < count($ranking); $i++){
    if($ranking[$i] == $userScore){
        array_push($ranking,$i);
    }
}

$json = json_encode($ranking);

echo $json;