var txt = "\n Java programming experience and SQL experience a must; experience with any of the below is a bonus.\n Full stack experience (all aspects of software development and software life cycle)\n Bachelors degree in computer science or electrical engineering\n Expertise in Java and enterprise Java\n Experienced with Spring framework\n Experienced with ORM\n Good understanding of relational database theory\n Working knowledge of SQL\n Swing\x2FVaadin experience major plus\n Mybatis major plus\n";

var sentence = 'По просьбам некоторых читателей решил написать топик про контекст в javascript',
    mas = [], j = 0;

document.write(extractgv(txt));

function extractgv(txt) {
    var skillsSet = ['java', 'sql', 'ember', 'bootstrap', 'mybatis', 'javascript', 'orm'];
    var skills = [];
    var possibleSkills = mysplit(txt);

    return matchgv(skillsSet,possibleSkills);
}

function matchgv(v,r){
    var skills=[], counter=0, i, lv=v.length, j, lr= r.length;
    for (i=0;i<lv;i++){
        for (j=0;j<lr;j++){
            if (v[i]===r[j]){
                skills.push(v[i]);
                counter++;
                break;
                //we can delete r[j] after this
            }
        }
    }
    //console.log("counter "+counter+"lv "+lv);
    return skills;
}

function mysplit(str){

for (i = 0; i < str.length; i++) {
    if (str[i] == " ") {
        j++;
        continue;
    }
    else {
        mas[j] ? mas[j] += str[i] : mas[j] = str[i];
    }
}
return mas;

}
