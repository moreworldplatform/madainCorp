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
    if (typ == "img") { e.src = inner; } else { if (inner !== "") { e.innerHTML = inner; } }
    if (eId) {
        e.id = eId;
    }

    return e;
}
const A_H = (p, c) => {
    for (var e = 0; e < c.length; e++) {
        p.appendChild(c[e]);
    }
}
const gameView = () => {
    var score = 0;
    var sysScoreN = 0;

    // game score
    var userScore = C_H("div", "POS_FX PD_3 LL_0 TT_0 _MR_20 B_GRE4 F_B B_R_15", "", "userScore");
    var userI = C_H("icon", "ICO-user-alt-7 PD_5 F_S_30 F_W MWIco", "", false);
    userScore.appendChild(userI);
    userScore.innerHTML += `User >> ${score}`;
    var sysScore = C_H("div", "POS_FX PD_3 RR_0 TT_0 _MR_20 B_RE7 F_B B_R_15", "", "sysScore");
    var sysI = C_H("icon", "ICO-user-alt-7 PD_5 F_S_30 F_W MWIco", "", false);
    sysScore.innerHTML = ` ${sysScoreN} << AzAzY`;
    sysScore.appendChild(sysI);
    var body = E_T("body")[0];
    body.appendChild(userScore);
    body.appendChild(sysScore);
    // btArea
    var btArea = E_I("btArea");
    var startBt = C_H("icon", "ICO-play-alt-3  PD_50 cr B_YE3 F_S_50 F_W MWIco", "", false);
    startBt.addEventListener("click", () => {
        gameStart();
    });
    var ti2 = C_H("h2", "F_B", "PLAY", false);


    A_H(btArea, [startBt, ti2]);


}
const _ = (function() {

    //Hi i use a small part of my library for css at mwn.js
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
    // basic contanier
    var root = E_I("root");
    var logoArea = C_H("div", "WW H_P_30 NH_200 MD_T", "", "logoArea");
    var playScreen = C_H("div", "WW H_P_30 NH_200 MD_T", "", "playScreen");
    var btArea = C_H("div", "WW H_P_30 NH_200 MD_T", "", "btArea");
    var logo = C_H("img", "MD W_150 mT_30", "/img/icon.png", "logo");
    var ti = C_H("h2", "F_B MD_T WW F_S_30", "RPS", "ti1");
    var p = C_H("p", "F_B F_S_30", "Rock  -  Paper  -  Scissors <br>", false);
    A_H(logoArea, [logo]);
    A_H(playScreen, [ti, p]);
    A_H(root, [logoArea, playScreen, btArea]);
    gameView();
})();