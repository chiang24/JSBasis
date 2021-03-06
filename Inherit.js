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

/*以上继承共有属性的时候操作了_proto_，这种方法有缺陷，因为有些浏览器不允许操作_proto_，
为了解决这个问题以及new带来的副作用（污染新的对象），我们引入一个extend()函数 */

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
Animal.prototype = extend(Bio.prototype)    //Animal.prototype._proto_ = Bio.prototype
Animal.prototype.walk = function(){
    console.log('我能走路')
}
Animal.prototype.constructor = Animal


function Human(species,name){
    Animal.apply(this,arguments)    //继承私有属性，可以传参数
    this.name = name
}
Human.prototype = extend(Animal.prototype)  //Human.prototype._proto_ = Animal.prototype 
Human.prototype.useTools =function(){
    console.log(我会使用工具)
}
Human.prototype.social = function(){
    console.log('我会社交')
}
Human.prototype.constructor = Human


var h =new Human('人类','chiang')
console.dir(h)

/* 引入一个空的函数，指定空对象的_proto_为传入的对象*/
function extend(o){
    function F() {}
    F.prototype = o
    // return new F()
    var temp = new F()
    return temp
}

/* 代替extend函数语法糖：Object.create*/

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
Animal.prototype = Object.create(Bio.prototype,{
    walk:{value:function(){
    console.log('我能走路')
    }},
    constructor:Animal
})

function Human(species,name){
    Animal.apply(this,arguments)    //继承私有属性，可以传参数
    this.name = name
}
Human.prototype = Object.create(Animal.prototype,{
    useTools:function(){
    console.log(我会使用工具)
    },
    social:function(){
    console.log('我会社交')
    },
    constructor:Human
}) //继承共有属性
var h =new Human('人类','chiang')
console.dir(h)

/* 语法糖：Class&Extends */

class Bio{
    constructor(){}
    birth(){ 
    console.log('我出生了')
    }
    die(){
    console.log('我死亡了')
    }
}
class Animal extends Bio{
    constructor(species){
        super() //父类的构造函数 Bio的constructor
        this.body = '我的身体'
        this.species = species  
    }
    walk(){
        console.log('我能走路')
    }
}
class Human extends Animal{
    constructor(species,name){
        super(species)
        this.name=name
    }
    useTools(){
    console.log(我会使用工具)
    }
    social(){
    console.log('我会社交')
    }
}
var h =new Human('人类','chiang')
console.dir(h)