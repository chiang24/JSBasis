/* 原型链继承 */
function Bio(){ }
Bio.prototype.birth = function(){ 
    console.log('我出生了')
}
Bio.prototype.die = function(){
    console.log('我死亡了')
}

function Animal(species){
    //Bio.call(this) 继承私有属性
    this.body = '我的身体'
    this.species = species  
}
Animal.prototype.walk = function(){
    console.log('我能走路')
}
Animal.prototype._proto_ = Bio.prototype    //继承共有属性

function Human(species,name){
    Animal.apply(this,arguments)    //继承私有属性，可以传参数
    this.name = name
}
Human.prototype.useTools =function(){
    console.log(我会使用工具)
}
Human.prototype.social = function(){
    console.log('我会社交')
}
Human.prototype._proto_ = Animal.prototype  //继承共有属性

var h =new Human('人类','chiang')
console.dir(h)