//main
const C_H = (typ, cls, inner, eId) => {
    var e = CE_(typ);
    e.className = U_CSS(cls);
    e.innerHTML = inner;
    e.id = eId;
    return e;
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
    var logoArea = C_H("div", "WW H_P_30 NH_200 B_YE1", "test", "logoArea");
    var playScreen = C_H("div", "WW H_P_30 NH_200 B_YE1", "test", "playScreen");
    var btArea = C_H("div", "WW H_P_30 NH_200 B_YE1", "test", "btArea");
    root.appendChild(logoArea);
    root.appendChild(playScreen);
    root.appendChild(btArea);
})();