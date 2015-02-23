
function createIcon(){
    var icon = new Group();
    //難易度用背景色
    var back = new Sprite(48, 48);
    back.backgroundColor = "#f00";
    //表示する文字
    var label = new Label('PHP');
    label.x = 0;
    label.y = 15;
    
    
    icon.addChild(back);
    icon.addChild(label);

    icon.moveTo(Math.random()*(700-48), 500 - Math.random()*(400-48));

    //人材・案件取得の処理を行う
    icon.addEventListener('enterframe', function(){
        if(Math.random() * 100 < 30){
            var x = Math.random()*2;
            var y = Math.random()*2;
            if(Math.random() * 2 > 1){
                this.moveBy(x, y);            
            }else{
                this.moveBy(-x, -y);    
            }
            if (this.x < 0) {
                this.vx*=-1;
                this.x = 0;
            }
            else if (this.x > 700-48) {
                this.vx*= -1;
                this.x = 700-48;
            } if (this.y < 0) {
                this.y = 0;
            }
            else if (this.y > 400-48) {
                this.y = 500-48;
            }
        }
    });

    icon.addEventListener(Event.TOUCH_START,function(e){
        this.parentNode.removeChild( this );
        matteran();
    });

    game.rootScene.addChild(icon);
}