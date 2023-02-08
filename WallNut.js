oWallNut1 = InheritO(oWallNut, {
    EName: "oWallNut1",
    CName: "松鼠坚果",
    del: function() {
           window.松鼠 = window.松鼠 - 1
    },
    Die: function(a) {
        var b = this,
        c = b.id;
        b.oTrigger && oT.delP(b);
        b.HP = 0;
        delete $P[c];
        delete oGd.$[b.R + "_" + b.C + "_" + b.PKind];
        $P.length -= 1; ! a && ClearChild($(c));
        b.PrivateDie(b),
        this.del(),confirm('你找到了一只松鼠')
    }
})
