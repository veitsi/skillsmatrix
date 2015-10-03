var a=['java','sql','html','linux'];
var b=['scala','sql','python','java','css'];

function matchgv(v,r){
    var skills=[], counter=0, i, lv=v.length, j, lr= r.length;
    for (i=0;i<lv;i++){
        for (j=0;j<lr;j++){
            if (v[i]===r[j]){
                counter++;
                break;
                //we can delete r[j] after this
            }
        }
    }
    console.log("counter "+counter+"lv "+lv);
    return counter/lv;
}

document.write(matchgv(a,b));