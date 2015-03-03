function personInsert(level){

    //人材IDの決定
    for(var count = 0 in persons){
        count++;
    }
        var id = count + 10000;
        //人材のレベルによって処理がわかれる
        switch(level){
        case 0:
        var minSkil     = 3;
        var maxSkil     = 5;
        var minSumLevel = 25;
        var maxSumLevel = 25;
        var minPrice    = 16;
        var maxPrice    = 20;
        var minRemarks  = 0;
        var maxRemarks  = 3;
        break;
        case 1:
        var minSkil     = 5;
        var maxSkil     = 8;
        var minSumLevel = 60;
        var maxSumLevel = 70;
        var minPrice    = 20;
        var maxPrice    = 25;
        var minRemarks  = 0;
        var maxRemarks  = 3;
        break;
        case 2:
        var minSkil     = 7;
        var maxSkil     = 13;
        var minSumLevel = 130;
        var maxSumLevel = 175;
        var minPrice    = 25;
        var maxPrice    = 32;
        var minRemarks  = 2;
        var maxRemarks  = 3;
        break;
        case 3:
        var minSkil     = 7;
        var maxSkil     = 17;
        var minSumLevel = 195;
        var maxSumLevel = 289;
        var minPrice    = 35;
        var maxPrice    = 55;
        var minRemarks  = 2;
        var maxRemarks  = 4;
        break;
        case 4:
        var minSkil     = 7;
        var maxSkil     = 25;
        var minSumLevel = 310;
        var maxSumLevel = 500;
        var minPrice    = 60;
        var maxPrice    = 75;
        var minRemarks  = 3;
        var maxRemarks  = 5;
        break;
    }

    var skilCount = Math.floor(Math.random() * (maxSkil - minSkil) + minSkil);             //所持スキル数
    var price = Math.floor(Math.random() * (maxPrice - minPrice) + minPrice);              //単価
    var sumLevel = Math.floor(Math.random() * (maxSumLevel - minSumLevel) + minSumLevel);　//合計レベル
    var sumRemark = Math.floor(Math.random() * (maxRemarks - minRemarks) + minRemarks);  　//備考数

    //所持スキルのレベルを決める
    var personSkills = personSkilChose(skilCount,sumLevel);
    //備考の種類を決める
    var personRemarks = personRemarkChose(sumRemark);
    //人材の作成
    persons.push([id,personSkills,price,personRemarks]);
    console.log(persons);
    //時間を進める
    timeEnter(30);
}

function personSkilChose(skilCount,sumLevel){
    //スキル数と合計レベルを元に各スキルのレベルを決める
    //スキル抜き出し用のクローン
    var skillsClone = skills.slice();
    //返り値
    var personSkills = Array();

    var type = 1;
    if(type == 0){
        //特出型
    }else if(type == 1){
        //バランス型
        var average = Math.floor(sumLevel / skilCount);

        //スキルの数から先に入れたスキル１つ引いた数だけループする
        for(var i = 0; i < skilCount - 1; i++){

            //スキルをランダムで決定する
            var skillIndex = Math.floor(Math.random()*skillsClone.length);
            //クローンから配列の要素を抜きだす
            var personSkill = skillsClone[skillIndex];
            skillsClone.splice(skillIndex, 1);

            //返り値用の配列にプッシュする
            personSkills.push([personSkill,average]);
        }
    }
    return personSkills;
}
function personRemarkChose(sumRemark){
    //スキル抜き出し用のクローン
    var remarksClone = remarks.slice();
    //返り値
    var personRemarks = Array();
    //スキルの数から先に入れたスキル１つ引いた数だけループする
    for(var i = 0; i < sumRemark - 1; i++){

        //スキルをランダムで決定する
        var remarkIndex = Math.floor(Math.random()*remarksClone.length);
        //クローンから配列の要素を抜きだす
        var personRemark = remarksClone[remarkIndex];
        remarksClone.splice(remarkIndex, 1);

        //返り値用の配列にプッシュする
        personRemarks.push([personRemark]);
    }
    return personRemarks;
}