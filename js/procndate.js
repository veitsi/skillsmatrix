calcMatrix();

function calcMatrix(){
    var itkeys=['java', 'sql', 'css','mysql', 'node', 'aspnet', 'ember', 'bootstrap', 'mybatis', 'javascript',
        'photoshop', 'english', 'swing', 'orm', 'backbone', 'angularjs'];
    var ptrnkeys=extractgv(ptrn, itkeys);
    console.log('resume: '+ptrnkeys);
    var i;
    for (i=0;i<txts.length;i++) {
        console.log( extractgv(txts[i], itkeys));
        cm[i]=matchgv(ptrnkeys, extractgv(txts[i], itkeys))}
}
console.log(cm);

function matchgv(v,r){
    return v.reduce(function(s,v) {return r.indexOf(v)>-1 ? s+1:s;},0)/ v.length;
}

function extractgv(txt, v) {
    var keywords=[];
    var lv = v.length;
    var r = txt.toLowerCase().split(/[;.: ]/);
    for (i = 0; i < lv; i++){
        if (r.indexOf(v[i])>-1){
            keywords.push(v[i]);
        }
    }
    return keywords;
}

var cm=[];
var ptrn="css backbone Objective\n\n java, photoshop Applying professional experience, skills and knowledge. Get new knowledge and skills as a programmer.\n Learn JavaScript perfectly.\n Find new friends, people with the same interests.\n\nSummary\n\n Have 2 years of working experience in sql.\n Expertise in HTML5, CSS, junior JavaScript, Photoshop.\n Self-motivated, team player, quick learner.\n More than 8 years working to maintain and repair computers.\n\n Finished professional photography course.\n\nExperience\n\nSenior computer-service\nFeb 2011 - Sep 2013 (2 years 8 months)\n\nBrain-Computers(http:\x2F\x2Fbrain.com.ua)\nover 500 employees IT-consulting \x2F Services \x2F Equipment Manufacturing\nEducation\n\nCherkassy national university n. b. B. Khmelnytskyi(Cherkassy, Ukraine)\nEnd date 2014\nPhysics, Mathematics and Computer Information Systems, Specialist degree in physic\nLanguage skills\n\nEnglish - elementary ";

var txts=["java programming experience and SQL css experience a must; experience with any of the below is a bonus.\n Full stack experience (all aspects of software development and software life cycle)\n Bachelors degree in computer science or electrical engineering\n Expertise in Java and enterprise Java\n Experienced with Spring framework\n Experienced with ORM\n Good understanding of relational database theory\n Working knowledge of SQL\n Swing\x2FVaadin experience major plus\n mybatis major plus",
    "Back-en Developer - Node.js, MySQL, WebAPI\nDuration: 3-6 Months + Possible extensions\nRate: \u00a3350-\u00a3450\nStart date: ASAP\nJob: This is a  ASP .NET.MVC\n\u2014 Experience in working with AngularJS, Backbone fantastic contract role for a back end or full stack developer specialising in Node.js and MySQL technologies.\nIf you like working in a great environment with great team of people around you then please apply for this contract ASAP.\nYou can apply by sending your resume to : kaveh @isluk.co.uk or call: 01174 280 600\nApplicants m",
    "Professional requirements:\n\u2014 At least 5-year experience within css software development\n\u2014 Deep understanding software product lifecycle, quality assurance approaches\n\u2014 Offshoring projects experience\n\u2014 Experience of work in distributed team\x2Fenvironment\n\u2014 Experience of direct communication with client\nTechnical experience:\n\u2014 Experience in working with C#.\n\u2014 Experience in working with ASP .NET.MVC\n\u2014 Experience in working with AngularJS, Backbone\n\u2014 Experience in working with Oracle or MSSQL\n\u2014 Knowledge of unit-testing, continuous integration\nEducation \& Language:\n\u2014 Master degree or Bachelor degree from technological university\x2Fcollege.\n\u2014 English css : intermediate, both oral and written.\nPersonal requirements:\n\u2014 Excellent communication skills\n\u2014 Responsible and loyal\n\u2014 Self-organized\n\u2014 Team player\n\u2014 Company offers:\n" ];

