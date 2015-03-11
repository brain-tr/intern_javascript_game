//左上に表示されているボードの更新を行う
function loadBoard(){
    personinfo.text = "人材数:   "+String(person)+"人";
    levelinfo.text = "営業LV:   "+String(level)+"LV";
    matterinfo.text = "案件数:   "+String(matter)+"個";
}