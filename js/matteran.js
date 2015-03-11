function requiredSkillChose(requiredSkillSum,matteranLevel){

    //メインスキル用のクローンを生成
    mainSkillsClone = mainSkills.slice();

    //返り値用の変数
    var requiredSkills = Array();

    for(var i = 0; i < requiredSkillSum; i++){
        //スキルをランダムで決定する
        var skillIndex = Math.floor(Math.random()*mainSkillsClone.length);
        //クローンから配列の要素を抜きだす
        var requiredSkill = mainSkillsClone[skillIndex];
        mainSkillsClone.splice(skillIndex, 1);

        //返り値用の配列にプッシュする
        requiredSkills.push([requiredSkill,matteranLevel*2]);
    }
    return requiredSkills;
}
function likeSkillChose(likeSkillSum,matteranLevel){

    //メインスキル用のクローンを生成
    subSkillsClone = subSkills.slice();

    //返り値用の変数
    var likeSkills = Array();

    for(var i = 0; i < likeSkillSum; i++){
        //スキルをランダムで決定する
        var skillIndex = Math.floor(Math.random()*subSkillsClone.length);
        //クローンから配列の要素を抜きだす
        var likeSkill = subSkillsClone[skillIndex];
        subSkillsClone.splice(likeSkill, 1);

        //返り値用の配列にプッシュする
        likeSkills.push([likeSkill,matteranLevel*1.5]);
    }
    return likeSkills;
}
function atmosphereChose(atmosphereSum){
    //備考抜き出し用のクローン
    var remarksClone = remarks.slice();
    //返り値
    var matteranRemarks = Array();
    //備考の数だけループする
    for(var i = 0; i < atmosphereSum; i++){

        //備考をランダムで決定する
        var remarkIndex = Math.floor(Math.random()*remarksClone.length);
        //クローンから配列の要素を抜きだす
        var matteranRemark = remarksClone[remarkIndex];
        remarksClone.splice(remarkIndex, 1);
        //返り値用の配列にプッシュする
        matteranRemarks.push(matteranRemark);
    }
    return matteranRemarks;
}

function matteran(level){

    //案件の選定

    //案件のレベルによって処理がわかれる
    switch(level){
        case 0:
            var minRequiredSkill = 1;
            var maxRequiredSkill = 1;
            var minLikeSkill = 2;
            var maxLikeSkill = 4;
            var minAtmosphere =1;
            var maxAtmosphere = 1;
            var minMatteranLevel = 1;
            var maxMatteranLevel = 5;
            var minMatteranPrice = 20;
            var maxMatteranPrice = 24;
            break;
        case 1:
            var minRequiredSkill = 1;
            var maxRequiredSkill = 2;
            var minLikeSkill = 3;
            var maxLikeSkill = 4;
            var minAtmosphere =1;
            var maxAtmosphere = 1;
            var minMatteranLevel = 3;
            var maxMatteranLevel = 10;
            var minMatteranPrice = 24;
            var maxMatteranPrice = 29;
            break;
        case 2:
            var minRequiredSkill = 2;
            var maxRequiredSkill = 2;
            var minLikeSkill = 3;
            var maxLikeSkill = 5;
            var minAtmosphere =1;
            var maxAtmosphere = 2;
            var minMatteranLevel = 8;
            var maxMatteranLevel = 18;
            var minMatteranPrice = 30;
            var maxMatteranPrice = 38;
            break;
        case 3:
            var minRequiredSkill = 2;
            var maxRequiredSkill = 3;
            var minLikeSkill = 3;
            var maxLikeSkill = 6;
            var minAtmosphere =1;
            var maxAtmosphere = 3;
            var minMatteranLevel = 17;
            var maxMatteranLevel = 25;
            var minMatteranPrice = 40;
            var maxMatteranPrice = 55;
            break;
        case 4:
            var minRequiredSkill = 3;
            var maxRequiredSkill = 4;
            var minLikeSkill = 4;
            var maxLikeSkill = 7;
            var minAtmosphere =2;
            var maxAtmosphere = 5;
            var minMatteranLevel = 25;
            var maxMatteranLevel = 40;
            var minMatteranPrice = 55;
            var maxMatteranPrice = 80;
            break;
    }

    var requiredSkillSum = Math.floor(Math.random() * (maxRequiredSkill - minRequiredSkill) + minRequiredSkill);
    var likeSkillSum = Math.floor(Math.random() * (maxLikeSkill - minLikeSkill) + minLikeSkill);
    var atmosphereSum = Math.floor(Math.random() * (maxAtmosphere - minAtmosphere) + minAtmosphere);
    var matteranLevel = Math.floor(Math.random() * (maxMatteranLevel - minMatteranLevel) + minMatteranLevel);
    var matteranPrice = Math.floor(Math.random() * (maxMatteranPrice - minMatteranPrice) + minMatteranPrice);

    //必須スキル確定
    requiredSkills = requiredSkillChose(requiredSkillSum,matteranLevel);
    //尚可スキル確定
    likeSkills = likeSkillChose(likeSkillSum,matteranLevel);
    //雰囲気確定
    atmospheres = atmosphereChose(atmosphereSum);
    
    //内容が記入されてるかされていないか
    
    //メイン
    var readMainFlag = 0;
    //サブ
    var readSubFlag = 0;
    
    //見える確率
    var readRange;
    
    //必須スキル情報
    switch(level){
        case 0:
            readRange = 100;
            break;
        case 1:
            readRange = 80 + level;
            break;
        case 2:
            readRange = 70 + level;
            break;
        case 3:
            readRange = 70 + level / 2;
            break;
        case 4:
            readRange = 60 + level / 3;
            break;
    }
    if(Math.floor(Math.random() * 100) + 1 <= readRange){
        readMainFlag = 1;
    }
    
    //尚可スキル情報
    switch(level){
        case 0:
            readRange = 100;
            break;
        case 1:
            readRange = 50 + level;
            break;
        case 2:
            readRange = 50 + level;
            break;
        case 3:
            readRange = 50 + level / 2;
            break;
        case 4:
            readRange = 40 + level / 3;
            break;
    }
    if(Math.floor(Math.random() * 100) + 1 <= readRange){
        readSubFlag = 1;
    }
    
    
    //期間の決定
    var interval = Math.floor(Math.random() * (12 - 4) + 4);
    
    //案件情報の挿入
    matters.push([requiredSkills,likeSkills,atmospheres,matteranLevel,matteranPrice,interval,readMainFlag,readSubFlag]);
    timeEnter(30);
}
