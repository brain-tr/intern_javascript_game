function personSkillChose(skilCount,sumLevel){
    //スキル数と合計レベルを元に各スキルのレベルを決める
    //スキル抜き出し用のクローン
    var mainSkillsClone = mainSkills.slice();
    var subSkillsClone = subSkills.slice();
    //返り値
    var personSkills = Array();

    var type = Math.floor(Math.random() * 2);
    if(type == 0){
        //特出型
        
        //得意なスキルに振る値を決定
        var maxSkill = Math.floor(sumLevel / 2);
        sumLevel -= maxSkill;
        
        //どのスキルが一番得意か確定する
        var skillIndex = Math.floor(Math.random()*mainSkillsClone.length);
        //クローンから配列の要素を抜き出す
        var personSkill = mainSkillsClone[skillIndex];
        mainSkillsClone.splice(skillIndex, 1);
        //取得スキルに入れる
        personSkills.push([personSkill,maxSkill]);
        //スキル数をマイナスする
        skilCount--;
        
        
        //残ったスキルを平均的に割り振る
        var average = Math.floor(sumLevel / skilCount);
        
        //スキルの数から先に入れたスキル１つ引いた数だけループする
        for(var i = 0; i < skilCount - 1; i++){

            //スキルをランダムで決定する
            var skillIndex = Math.floor(Math.random()*subSkillsClone.length);
            //クローンから配列の要素を抜きだす
            var personSkill = subSkillsClone[skillIndex];
            subSkillsClone.splice(skillIndex, 1);

            //返り値用の配列にプッシュする
            personSkills.push([personSkill,average]);
        }
        
        
        
    }else if(type == 1){
        //バランス型
        var average = Math.floor(sumLevel / skilCount);
        
        //メインスキルを確定する
        
        //スキルをランダムで決定する
        var skillIndex = Math.floor(Math.random()*mainSkillsClone.length);
        //クローンから配列の要素を抜きだす
        var personSkill = mainSkillsClone[skillIndex];
        mainSkillsClone.splice(skillIndex, 1);
        //返り値用の配列にプッシュする
        personSkills.push([personSkill,average]);
        //スキルの数を１引く
        skilCount--;
        
        //先に入れたスキルの数-１だけループする
        for(var i = 0; i < skilCount; i++){

            //スキルをランダムで決定する
            var skillIndex = Math.floor(Math.random()*subSkillsClone.length);
            //クローンから配列の要素を抜きだす
            var personSkill = subSkillsClone[skillIndex];
            subSkillsClone.splice(skillIndex, 1);

            //返り値用の配列にプッシュする
            personSkills.push([personSkill,average]);
        }
    }
    return personSkills;
}

function personRemarkChose(sumRemark){
    //備考抜き出し用のクローン
    var remarksClone = remarks.slice();
    //返り値
    var personRemarks = Array();
    //備考の数だけループする
    for(var i = 0; i < sumRemark; i++){

        //備考をランダムで決定する
        var remarkIndex = Math.floor(Math.random()*remarksClone.length);
        //クローンから配列の要素を抜きだす
        var personRemark = remarksClone[remarkIndex];
        remarksClone.splice(remarkIndex, 1);
        //返り値用の配列にプッシュする
        personRemarks.push(personRemark);
    }
    return personRemarks;
}

function personInsert(level){

    //人材名の決定
    for(var count = 0 in persons){
        count++;
    }
        var id = chance.name();
        //人材のレベルによって処理がわかれる
        switch(level){
        case 0:
        var minSkill     = 3;
        var maxSkill     = 5;
        var minSumLevel = 25;
        var maxSumLevel = 25;
        var minPrice    = 16;
        var maxPrice    = 20;
        break;
        case 1:
        var minSkill     = 5;
        var maxSkill     = 8;
        var minSumLevel = 60;
        var maxSumLevel = 70;
        var minPrice    = 20;
        var maxPrice    = 25;
        break;
        case 2:
        var minSkill     = 7;
        var maxSkill     = 13;
        var minSumLevel = 130;
        var maxSumLevel = 175;
        var minPrice    = 25;
        var maxPrice    = 32;
        break;
        case 3:
        var minSkill     = 7;
        var maxSkill     = 17;
        var minSumLevel = 195;
        var maxSumLevel = 289;
        var minPrice    = 35;
        var maxPrice    = 55;
        break;
        case 4:
        var minSkill     = 7;
        var maxSkill     = 20;
        var minSumLevel = 310;
        var maxSumLevel = 500;
        var minPrice    = 60;
        var maxPrice    = 75;
        break;
    }

    var skillCount = Math.floor(Math.random() * (maxSkill - minSkill) + minSkill);             //所持スキル数
    var price = Math.floor(Math.random() * (maxPrice - minPrice) + minPrice);              //単価
    var sumLevel = Math.floor(Math.random() * (maxSumLevel - minSumLevel) + minSumLevel);　//合計レベル
    var sumRemark = Math.floor(Math.random() * 3);  　//備考数

    //所持スキルのレベルを決める
    var personSkills = personSkillChose(skillCount,sumLevel);
    //備考の種類を決める
    var personRemarks = personRemarkChose(sumRemark);
    //人材の作成
    persons.push([id,personSkills,price,personRemarks]);
    
    //時間を進める
    timeEnter(30);
}
