// public var
var user = {};
var words = ["Rock", "Paper", "Scissors"];
var imgs = ["R-W.png", "P-W.png", "S-W.png"];
var wordsCount = ["1<br>Rock", "2<br>Paper", "3<br>Scissors"];
var colors = ["B_BL7", "B_RE5", "B_GRE5"];
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
const gameStart = () => {
    E_I("logo").className = "MD W_150 ROT_I";
    DEL_E("btArea");
    const createBt = (r) => {
        var imgClass = r == 0 ? "W_50 POS_ABS mT_10" : "W_50 POS_ABS";
        var btArea = E_I("btArea");
        var imgBt = C_H("img", imgClass, `/img/${imgs[r]}`, "logo");
        var classCss = ` W_80 H_80 cr _MR_10 ${colors[r]}`;
        var btimg = C_H("div", classCss, "", false);
        btimg.appendChild(imgBt);
        var ti = C_H("h2", "F_B", words[r], false);
        var btAll = C_H("div", "D_INB W_100 MWIco _MR_10", "", words[r]);
        btAll.addEventListener("click", () => {
            gameEnd(r);
        });
        A_H(btAll, [btimg, ti, ])
        btArea.appendChild(btAll);
    }
    for (var r = 0; r < words.length; r++) {
        createBt(r);
    }
    aniTx({ id: "playScreen", aniTxD: wordsCount });
    const stop = () => {
        aniTx();
        DEL_E("playScreen");
        var ti = C_H("h2", "F_YE4 F_S_50", "Choose ....?", false);
        var finishScreen = C_H("div", "WW", "", false);
        var f1 = C_H("div", "W_P_25 D_INB FL_L H_50", "", "f1");
        var f2 = C_H("div", "W_P_50 D_INB FL_L  H_50", "", "f2");
        var f3 = C_H("div", "W_P_25 D_INB FL_L H_50", "", "f3");
        var fB1 = C_H("div", "Box_100 MD B_W cr mT_50 F_GRE5 F_S_50", "?", "fB1");
        var fB2 = C_H("div", "WW", "", "fB2");
        var fB3 = C_H("div", "Box_100 MD B_W cr mT_50 F_RE6 F_S_50", "?", "fB3");
        fB2.appendChild(ti);
        f1.appendChild(fB1);
        f2.appendChild(fB2);
        f3.appendChild(fB3);
        A_H(finishScreen, [f1, f2, f3]);
        E_I("playScreen").appendChild(finishScreen);
        E_I("logo").className = "MD W_150";
    }
    setTimeout(stop, 9000);

}
const gameEnd = (r) => {
    var sysChoose = randomNum(0, 3);
    CL_(sysChoose)

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
    var logoArea = C_H("div", "WW H_P_30 NH_200 MD_T mT_30", "", "logoArea");
    var playScreen = C_H("div", "WW H_P_30 NH_200 MD_T B_PR_D", "", "playScreen");
    var btArea = C_H("div", "WW H_P_30 NH_200 MD_T", "", "btArea");
    var logo = C_H("img", "MD W_150 ", "/img/icon.png", "logo");
    var ti = C_H("h2", "F_B MD_T WW F_S_30", "RPS", "ti1");
    var p = C_H("p", "F_B F_S_30", "Rock  -  Paper  -  Scissors <br>", false);
    A_H(logoArea, [logo]);
    A_H(playScreen, [ti, p]);
    A_H(root, [logoArea, playScreen, btArea]);
    gameView();
})();