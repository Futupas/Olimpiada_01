function GetElements (selector){
    var Arr = [];
    var elements = document.querySelectorAll(selector);
    var l = elements.length;
    
     for (var i = 0; i < l; i++){
         Arr.push(elements[i]);
    }
    return Arr;
}
var Page = {
    Active: 0,
    Elements: [],
    Create: function () {
        Page.Set(0);
        Page.Refresh();
    },
    Refresh: function () {
        var screenwidth = document.documentElement.clientWidth;
        document.getElementById('parentdiv').style.width = screenwidth - 330 + 'px';
        document.getElementById('parentdiv').style.height = document.documentElement.clientHeight - 20 + 'px';
        GetElements('.bodydiv').forEach(function(item, i, arr) {
            item.style.height = document.documentElement.clientHeight - 20 + 'px';
            item.style.width = screenwidth - 330 + 'px';
            item.style.left = (document.documentElement.clientWidth - 330) * i + 'px';
        });

        document.getElementById('menu').style.height = document.documentElement.clientHeight - 20 + 'px';

        Page.Elements = GetElements('.bodydiv');
        Page.Length = GetElements('.bodydiv').length;
    },
    Length: 0,
    Change: function (side) { //  BACK < 0 < FORWARD
        if (side > 0 && Page.Active < Page.Length-1) {
            Page.Set(Page.Active + 1);
        }
        if (side < 0 && Page.Active > 0) {
            Page.Set(Page.Active - 1);
        }
    },
    Set: function (i) {
        Page.Active = i;
        document.querySelector('#parentdiv > div').style.left = -1*i*(document.documentElement.clientWidth - 330) + 'px';
    }
}

Page.Create();
