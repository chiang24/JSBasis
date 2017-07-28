var chiang = {
    _data:{
        age:18,
        name:'chiang'
    }
}
Object.defineProperties(frank,'age',{
    get:function(){
            return chiang._data.age
        },
        set:function(xxx){
            chiang._data.age=xxx
        }
})
    chiang.age = 21
    console.log(chiang.age)
    console.dir(chiang)