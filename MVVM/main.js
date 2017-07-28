var chiang = {
    _data: {
        age: 18,
        name: 'chiang'
    }
}
for (let key in chiang._data) {
    Object.defineProperties(chiang, key, {
        get: function () {
            return chiang._data[key]
        },
        set: function (xxx) {
            $('input[name="' + key + '"]').val(xxx) //修改HTML
            chiang._data[key] = xxx
        }
    })
}

/* 提供一个API可以监听新的属性 */
function createAndSet(key, defaultValue) {
    Object.defineProperties(chiang, key, {
        get: function () {
            return chiang._data[key]
        },
        set: function (xxx) {
            $('input[name="' + key + '"]').val(xxx) //修改HTML
            chiang._data[key] = xxx
        }
    })
    chiang._data[key] = defaultValue
}

/* HTML到内存的一个映射 */
$('form').on('input', 'input[name]', function (e) {
    let $input = e.currentTarget()
    let name = $input.attr('name')
    let value = name.val()
    chiang[name] = value //修改内存里的name值
})

createAndSet('hobby', 0)

/* HTML初始化 */
$('input[name="name"]').val(chiang.name)
$('input[name="age"]').val(chiang.age)
$('input[name="hobby"]').val(chiang.hobby)
$('form').on('submit', function (e) {
    e.preventDefault()
})