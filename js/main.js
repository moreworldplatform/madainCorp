//main
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
    var logoArea = CE_("div");
    logoArea.className = U_CSS("WW H_P_30 NH_200 B_YE1");
    var playScreen = CE_("div");
    playScreen.className = U_CSS("WW H_P_30 NH_200 B_YE5");
    var btArea = CE_("div");
    btArea.className = U_CSS("WW H_P_30 NH_200 B_YE8");
    logoArea.innerHTML = "test";
    playScreen.innerHTML = "test";
    btArea.innerHTML = "test";
    root.appendChild(logoArea);
    root.appendChild(playScreen);
    root.appendChild(btArea);
})();