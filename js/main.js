// public var
var user = {};
var words = ["Rock", "Paper", "Scissors"];

//main
const C_H = (typ, cls, inner, eId) => {
    /* In fact, my library is more complicated than what I write of code here ,
     so I will try to use it, but in a simple way to explain my point, 
     I will make a tool for  creating HTML pieces,
      to be clear and I will Call it C_H = Create Html  
      */
    var e = CE_(typ);
    /*  U_CSS generate css classes and append
     page style if class is not exists */
    e.className = U_CSS(cls);

    if (typ == "img") {
        e.src = inner;
    } else {
        e.innerHTML = inner;
    }

    e.id = eId;
    return e;
}
const A_H = (p, c) => {
    for (var e = 0; e < c.length; e++) {
        p.appendChild(c[e]);
    }
}
const _ = (function() {

    //Hi i use a small part of my library for css 
    startStyle();
    S_SW_TH();
    //i will happy to discuss any part of it
    /*
    as default my contaniar called root
    i will split to three parts
    1-logoArea
    2-play screen
    3-buttons 
    */
    var root = E_I("root");
    var logoArea = C_H("div", "WW H_P_30 NH_200 MD_T", "", "logoArea");
    var playScreen = C_H("div", "WW H_P_30 NH_200 ", "", "playScreen");
    var btArea = C_H("div", "WW H_P_30 NH_200 ", "", "btArea");
    var logo = C_H("img", "MD W_150", "/img/icon.png", "logo");
    var ti = C_H("h2", "F_B MD_T WW F_S_30", "RPS", "ti1");
    var p = C_H("p", "F_B F_S_50", "Rock  -  Paper  -  Scissors <br>", "p1");
    A_H(logoArea, [logo, ti, p]);
    A_H(root, [logoArea, playScreen, btArea]);

})();