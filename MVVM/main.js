var chiang = {
    _data:{
        age:18,
        name:'chiang'
    }
}
for(let key in chiang._data){
Object.defineProperties(chiang,key,{
    get:function(){
            return chiang._data[key]
        },
    set:function(xxx){
            $('input[name="'+key+'"]').val(xxx)     //修改HTML
            chiang._data[key]=xxx
        }
})
}

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