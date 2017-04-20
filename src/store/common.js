const common = {

    //  从联系人中提取出首字母 再排序 

    sortArr:function(arr, sortStr){
        // 排序函数（用以返回次序关系）
        var bySort = function() {
            return function(o, p) {  // p 是 o 的下一项
                var a = o[sortStr],
                    b = p[sortStr];
                if (isNaN(a)) {  // 非数字排序
                    return a.localeCompare(b);  // 用本地特定顺序来比较(支持中文)
                } else {
                    if (a === b) {
                        return 0;
                    } else {
                        return a > b ? 1 : -1;
                    }
                }
            }
        };
        
        return arr.sort(bySort(sortStr))
        
    }
}

export default common
