var chiang = {
    _data:{
        age:18,
        name:'chiang'
    }
}
Object.defineProperties(chiang,'age',{
    get:function(){
            return chiang._data.age
        },
    set:function(xxx){
            $('input[name="age"]').val(xxx)
            chiang._data.age=xxx
        }
})
Object.defineProperties(chiang,'name',{
    get:function(){
            return chiang._data.name
        },
    set:function(xxx){
            $('input[name="name"]').val(xxx)
            chiang._data.name=xxx
        }
})
/* HTML到内存的一个映射 */
$('form').on('input','input[name]',function(e){
    let $input = e.currentTarget()
    let name = $input.attr('name')
    let value = name.val()
    chiang[name] = value    //修改内存里的name值
})

/* HTML初始化 */
$('input[name="name"]').val(chiang.name)
$('input[name="age"]').val(chiang.age)