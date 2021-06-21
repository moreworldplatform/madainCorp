/*
BASIC.JS
author:Mohamed Elazazy
*/
var MW_CONSOLE = ["MWN", "///", "Mohamed El AzAzy"];
//string var
var MW_APP = {
    style: {
        theme: "dark"
    }
};
const _T = [
    't',
    'tt',
    'head',
    'https://apis.google.com/js/platform.js',
    'script',
    'google-jssdk',
    'MW',
    'MWN',
    'http://',
    'https://',
    'http://www.w3.org/2000/svg',
    '0123456789ABCDEF',
    'plus',
    'mins',
    'mult',
    'div',
    'vOfPer',
    'perOf',
    'sum',
    'sumMult',
    'none',
    'block',
    'up',
    'in',
    'please-insert-all-data',
    'FALSE',
    'TRUE',
    'YES',
    'NO', [{ "typ": "tr", "elm": [{ "typ": "td", "cls": ["MD_T", "F_RE7", "ST_RE7_5", "B_R_10"], "col": "10", "elm": [{ "typ": "tx", "txt": [{ "t": "icon", "d": "ICO-worried F_S_50" }, { "t": "&" }, { "t": "s", "d": "no-results-found" }] }] }] }],
    "error-occurred-try-again"
];
//public 
const CL_ = (m) => { console.log(m) }
const URL = () => { return window.location.origin; }
const URLH = () => { return window.location.origin; }
const GT = (mw) => { return window.location = mw; }
const IND = (m, w) => { return window.localStorage.setItem(m, w) }
const GTD = (mw) => { return window.localStorage.getItem(mw) }
const E_I = (mw) => { var o = document.getElementById(mw); if (o !== null) { return o; } else { return false; } }
const E_N = (mw) => { return document.getElementsByName(mw) }
const E_C = (mw) => { return document.getElementsByClassName(mw) }
const E_T = (mw) => { return document.getElementsByTagName(mw) }
const Clr = (mw) => { return E_I(mw).innerHTML = ''; }
const In = (m, w) => { return E_I(m).innerHTML = w; }
const InV_ = (m, w) => { return E_I(m).value = w; }
const Hide = (mw) => { return E_I(mw).style.display = _T[20]; }
const Show = (mw) => { return E_I(mw).style.display = _T[21]; }
const EC_ = (mw) => { var n = atob(mw); return n; }
const DC_ = (mw) => { var n = btoa(unescape(encodeURIComponent(mw))); return n; }
const JD_ = (mw) => { try { return JSON.parse(mw) } catch (e) { CL_(["ERROR JD_: ", mw]); return false; } }
const JDS_ = (mw) => { return JSON.stringify(mw) }
const AL_ = (mw) => { alert(mw) }
const CE_ = (mw) => { return document.createElement(mw) }
const MW_COPY_OB = (mw) => { return JSON.parse(JSON.stringify(mw)) }
const MW_CQCO = async(mw, n, gg) => {
    var R = n == "n" ? "" : n;
    var myRoot = '';
    for (const JJ of mw) {
        myRoot += `--${JJ.k}${R} : ${JJ.v};`;
    }
    E_I(gg).innerHTML = `:root { ${myRoot} }`;
}
const DEL_E = (mw) => {
    const myNode = E_I(mw);
    if (myNode.childNodes.length > 0) {
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }
}
const UP_COLOR = (mTh) => {


    var thC = [];
    var LC = {};
    LC.theme = [];
    LC.color = [];
    if (mTh == "dark") {
        thC = MW_APP.style.dc;
    } else if (mTh == "light") {
        thC = MW_APP.style.lc;
    }
    for (var e = 0; e < thC.length; e++) {
        LC.theme.push(thC[e]);
    }
    for (var e = 0; e < MW_APP.colors.length; e++) {
        LC.color.push(MW_APP.colors[e]);
    }
    var w = "";
    var b = "";
    for (var l = 0; l < LC.theme.length; l++) {
        if (LC.theme[l].k == "W") { w = LC.theme[l].v; }
        if (LC.theme[l].k == "B") { b = LC.theme[l].v; }
    }


    var newCss = `:root {
        --BODYB: ${w};
        --BODYF: ${b};
    }`;
    var BL = 'left';
    var BR = 'right';
    if (this.F_D == 'r') {

        BL = 'right';
        BR = 'left';
    }
    var newDir = `:root {
        --DirL: ${BL};
        --DirR:  ${BR};
        --WH__ :${window.innerHeight}px;
        --WW__ :${window.innerWidth}px;
        }`;
    var autoDir = '',
        autoDirP = '';
    for (var at = 0; at < 1001; at++) {
        autoDir += `.A_L_${at} { ${BL}:${at}px} `;
        autoDir += `.A_R_${at} { ${BR}:${at}px} `;
        if (at < 101) {
            autoDirP += `.A_L_P_${at} { ${BL}:${at}%} `;
            autoDirP += `.A_R_P_${at} { ${BR}:${at}px} `;

        }
    }
    E_I("PASSSTYLE").innerHTML = newCss;
    //newUp 
    E_I("STYLE_DIR").innerHTML = newDir;
    E_I("AUTO_DIR").innerHTML = autoDir + ' ' + autoDirP;
    this.colorAr = LC;
}
const randomNum = (min, max) => {
    var n = Math.random() * (max - min) + min;
    return parseInt(n);
}
const makeAiTime = () => {

    var res = '';

    for (var w = 1; w < 101; w++) {
        var r = w + 0.5;
        res +=
            `.aniT_${w} {animation-duration: ${w}s;}   .aniT_${w}_5 {animation-duration: ${r}s;}  
            `;
    }
    return res;
}
var aniTxOB = [];
var aniState;
var txtState;
const aniTx = (m) => {
    if (!m) {
        aniTxOB = [];
        window.clearTimeout(aniState);
        window.clearTimeout(txtState);
    } else {
        const ani = () => {
            var exTx = false;
            var curTx = m;
            var txRoll = 0;
            var txSize = 10;
            for (var e = 0; e < aniTxOB.length; e++) {
                if (aniTxOB[e].i == m.i) {
                    exTx = true;
                    aniTxOB[e].aniN = aniTxOB[e].aniN == curTx.aniTxD.length - 1 ? 0 : aniTxOB[e].aniN + 1;
                    curTx = aniTxOB[e];
                }
            }
            if (exTx) {
                txRoll = curTx.aniN;
            } else {
                m.aniN = 0;
                aniTxOB.push(m);
            }
            var neTx = curTx.aniTxD[txRoll];
            DEL_E(curTx.id);
            var teE = CE_("h2");
            teE.id = "teE";
            teE.className = U_CSS("F_S_1 F_B");
            teE.innerHTML = neTx;
            E_I(curTx.id).appendChild(teE);
            const sizF = () => {
                if (txSize < 51) {
                    E_I("teE").style.cssText = `font-size:${txSize}px; color:var(--B); position: absolute;    text-align: center;width:100%`;
                    txSize = txSize + 5;
                    txtState = window.setTimeout(sizF, 100);
                }
            }
            CL_(["aniTest", m])
            sizF();
            aniState = window.setTimeout(ani, 3000);

        }
        ani();
    }
}
const G_CSS = (cs) => {
    const c = cs.split("_");
    if (c[0] == "sc" && c.length == 3) {
        return `.${cs} {transform: scale(${c[1]}.${c[2]});} `;
    } else if (c[0] == "XO" && c[1] !== "ST") {
        const cc = c[1];
        if (c.length == 3 && c[1] == "PR" && c[2] == "D") {
            cc = "PR_D";
        }
        const ssB = `.XO_${cc}{ width: 100%; height: 100%; background: transparent;}`;
        const ssC = `.XO_${cc}::before { content: ""; clip-path: polygon(100% 50%, 88% 81%, 0% 82%, 0% 81%,87.7% 80%,99% 50.00%,87.7% 19%, 0% 19%,0% 18%, 88% 18%); background:var(--${cc}); width: 50%; height: 100%; position: absolute; left: 0;}`;
        const ssD = `.XO_${cc}::after { content: ""; clip-path: polygon(0% 50%, 12% 82%, 100% 82%, 100% 81%,12.3% 80%,0.8% 50.00%,12.3% 19%, 100% 19%,100% 18%, 12% 18%); background:var(--${cc}); width: 50%; height: 100%; position: absolute; left: 50%;}`;
        const cssD = [ssB, ssC, ssD];
        return cssD;
    } else if (c[0] == "hex" && c[1] !== "ST") {
        const cc = c[1];
        if (c.length == 3 && c[1] == "PR" && c[2] == "D") {
            cc = "PR_D";
        }
        const ssA = `.hex_${cc} { content: ""; clip-path: polygon(16.67% 50.00%, 33.33% 78.87%, 66.67% 78.87%, 83.33% 50.00%, 66.67% 21.13%, 33.33% 21.13%); background:var(--${cc}); width: 100%; height: 100%;}`;
        return ssA;
    } else if (c[0] == "OPC" && c.length == 2) {
        return `.${cs} {opacity: 0.${c[1]};} `;
    } else if (c[0] == "B" && c[1] == "R" && c.length == 3) {
        return `.${cs} {border-radius: ${c[2]}px}  `;
    } else if (c[0] == "B" && c[1] == "R" && c[2] == "T" && c[3] == "L" && c.length == 5) {
        return `.${cs} {border-top-left-radius: ${c[4]}px;} `;
    } else if (c[0] == "B" && c[1] == "R" && c[2] == "T" && c[3] == "R" && c.length == 5) {
        return `.${cs} {border-top-left-radius: ${c[4]}px;} `;
    } else if (c[0] == "B" && c[1] == "R" && c[2] == "B" && c[3] == "L" && c.length == 5) {
        return `.${cs} {border-top-left-radius: ${c[4]}px;} `;
    } else if (c[0] == "B" && c[1] == "R" && c[2] == "B" && c[3] == "R" && c.length == 5) {
        return `.${cs} {border-top-left-radius: ${c[4]}px;} `;
    } else if (c[0] == "LH" && c.length == 2) {
        return `.${cs} { line-height:  ${c[1]};} `;
    } else if (c[0] == "F" && c[1] == "S" && c.length == 3) {
        return `.${cs} { font-size:${c[2]}px;}  `;
    } else if (c[0] == "PD" && c.length == 2) {
        return `.${cs} { padding:${c[1]}px;}  `;
    } else if (c[0] == "PD" && c[1] == "P" && c.length == 3) {
        return `.${cs} { padding:${c[2]}%;}  `;
    } else if (c[0] == "" && c[1] == "MR" && c.length == 3) {
        return `.${cs} { margin:${c[2]}px;} `;
    } else if (c[0] == "H" && c[1] == "P" && c.length == 3) {
        return `.${cs} {height:${c[2]}%;}   `;
    } else if (c[0] == "W" && c[1] == "P" && c.length == 3) {
        return `.${cs} {width:${c[2]}%;}   `;
    } else if (c[0] == "MHP" && c.length == 2) {
        return `.${cs} {max-height:${c[1]}%;} `;
    } else if (c[0] == "MWP" && c.length == 2) {
        return `.${cs} {max-width:${c[1]}%;}  `;
    } else if (c[0] == "NHP" && c.length == 2) {
        return `.${cs} {min-height:${c[1]}%;}  `;
    } else if (c[0] == "NHP" && c.length == 2) {
        return `.${cs} {min-width:${c[1]}%;} `;
    } else if (c[0] == "Line" && c[1] == "H" && c[2] == "P" && c.length == 4) {
        return `.${cs} {line-height:${c[3]}%;}  `;
    } else if (c[0] == "Z" && c[1] == "I" && c.length == 3) {
        return `.${cs} {z-index:${c[2]};} `;
    } else if (c[0] == "Box" && c.length == 2) {
        return `.${cs} {width:${c[1]}px;height:${c[1]}px;} `;
    } else if (c[0] == "pT" && c.length == 2) {
        return `.${cs} {padding-top:${c[1]}px;} `;
    } else if (c[0] == "pT" && c[1] == "P" && c.length == 3) {
        return `.${cs} {padding-top:${c[2]}%;}  `;
    } else if (c[0] == "pL" && c.length == 2) {
        return `.${cs} {padding-left:${c[1]}px;} `;
    } else if (c[0] == "pT" && c[1] == "P" && c.length == 3) {
        return `.${cs} {padding-left:${c[2]}%;}  `;
    } else if (c[0] == "pR" && c.length == 2) {
        return `.${cs} {padding-right:${c[1]}px;} `;
    } else if (c[0] == "pT" && c[1] == "P" && c.length == 3) {
        return `.${cs} {padding-right:${c[2]}%;}  `;
    } else if (c[0] == "pB" && c.length == 2) {
        return `.${cs} {padding-bottom:${c[1]}px;} `;
    } else if (c[0] == "pT" && c[1] == "P" && c.length == 3) {
        return `.${cs} {padding-bottom:${c[2]}%;}  `;
    } else if (c[0] == "W" && c.length == 2) {
        return `.${cs} {width:${c[1]}px;}  `;
    } else if (c[0] == "H" && c.length == 2) {
        return `.${cs} {height:${c[1]}px;}  `;
    } else if (c[0] == "MH" && c.length == 2) {
        return `.${cs} {max-height:${c[1]}px;}  `;
    } else if (c[0] == "MW" && c.length == 2) {
        return `.${cs} {max-width:${c[1]}px;}  `;
    } else if (c[0] == "NH" && c.length == 2) {
        return `.${cs} {min-height:${c[1]}px;}  `;
    } else if (c[0] == "NW" && c.length == 2) {
        return `.${cs} {min-width:${c[1]}px;}  `;
    } else if (c[0] == "mT" && c.length == 2) {
        return `.${cs} {margin-top:${c[1]}px;} `;
    } else if (c[0] == "mL" && c.length == 2) {
        return `.${cs} {margin-left:${c[1]}px;} `;
    } else if (c[0] == "mR" && c.length == 2) {
        return `.${cs} {margin-right:${c[1]}px;} `;
    } else if (c[0] == "mB" && c.length == 2) {
        return `.${cs} {margin-bottom:${c[1]}px;} `;
    } else if (c[0] == "mP" && c.length == 2) {
        return `.${cs} {margin:${c[1]}%;} `;
    } else if (c[0] == "mTP" && c.length == 2) {
        return `.${cs} {margin-top:${c[1]}%;} `;
    } else if (c[0] == "mLP" && c.length == 2) {
        return `.${cs} {margin-left:${c[1]}%;} `;
    } else if (c[0] == "mRP" && c.length == 2) {
        return `.${cs} {margin-right:${c[1]}%;} `;
    } else if (c[0] == "mBP" && c.length == 2) {
        return `.${cs} {margin-bottom:${c[1]}%;} `;
    } else if (c[0] == "TT" && c.length == 2) {
        return `.${cs} {top:${c[1]}px;} `;
    } else if (c[0] == "LL" && c.length == 2) {
        return `.${cs} {left:${c[1]}px;} `;
    } else if (c[0] == "RR" && c.length == 2) {
        return `.${cs} {right:${c[1]}px;} `;
    } else if (c[0] == "BB" && c.length == 2) {
        return `.${cs} {bottom:${c[1]}px;} `;
    } else if (c[0] == "TT" && c[1] == "P" && c.length == 3) {
        return `.${cs} {top:${c[2]}%;}  `;
    } else if (c[0] == "LL" && c[1] == "P" && c.length == 3) {
        return `.${cs} {left:${c[2]}%;}  `;
    } else if (c[0] == "RR" && c[1] == "P" && c.length == 3) {
        return `.${cs} {right:${c[2]}%;}  `;
    } else if (c[0] == "BB" && c[1] == "P" && c.length == 3) {
        return `.${cs} {bottom:${c[2]}%;}  `;
    } else if (c[0] == "F" && c.length == 2) {
        return `.${cs} {color: var(--${c[1]});} `;
    } else if (c[0] == "F" && c[1] == "PR" && c[2] == "D" && c.length == 3) {
        return `.${cs} {color: var(--PR_D);} `;
    } else if (c[0] == "B" && c.length == 2) {
        return `.${cs} {background-color: var(--${c[1]});}  `;
    } else if (c[0] == "B" && c[1] == "PR" && c[2] == "D" && c.length == 3) {
        return `.${cs} {background-color: var(--PR_D);}  `;
    } else if (c[0] == "BG" && c[2] == "W" && c.length == 3) {
        return `.${cs} {background-image: linear-gradient(to right, var(--${c[1]}) 0%, #ffffff 51%, var(--${c[1]}) 100%)} `;
    } else if (c[0] == "BG" && c[2] == "B" && c.length == 3) {
        return `.${cs} {background-image: linear-gradient(to right, var(--${c[1]}) 0%, #000000 51%, var(--${c[1]}) 100%)} `;
    } else if (c[0] == "BG" && c[2] == "BL" && c.length == 3) {
        return `.${cs} {background-image: linear-gradient(to right, var(--${c[1]}) 0%, #0300c0 51%, var(--${c[1]}) 100%)} `;
    } else if (c[0] == "BG" && c[2] == "YL" && c.length == 3) {
        return `.${cs} {background-image: linear-gradient(to right, var(--${c[1]}) 0%, #f7fb00 51%, var(--${c[1]}) 100%)} `;
    } else if (c[0] == "BG" && c[2] == "GR" && c.length == 3) {
        return `.${cs} {background-image: linear-gradient(to right, var(--${c[1]}) 0%, #04ff00 51%, var(--${c[1]}) 100%)} `;
    } else if (c[0] == "V" && c[1] == "B" && c.length == 3) {
        return `.V.${cs} {border-color: var(--${c[2]}) transparent transparent transparent;} `;
    } else if (c[0] == "V" && c[1] == "B" && c[2] == "PR" && c[3] == "D" && c.length == 4) {
        return `.V.V_B_PR_D {border-color: var(--PR_D) transparent transparent transparent;} `;
    } else if (c[0] == "ST" && c.length == 3) {
        return `.${cs} { border:${c[2]}px var(--${c[1]}) solid;} `;
    } else if (c[0] == "ST" && c[1] == "T" && c.length == 4) {
        return `.${cs} { border-top:${c[3]}px var(--${c[2]}) solid;} `;
    } else if (c[0] == "ST" && c[1] == "L" && c.length == 4) {
        return `.${cs} { border-left:${c[3]}px var(--${c[2]}) solid;} `;
    } else if (c[0] == "ST" && c[1] == "R" && c.length == 4) {
        return `.${cs} { border-right:${c[3]}px var(--${c[2]}) solid;} `;
    } else if (c[0] == "ST" && c[1] == "B" && c.length == 4) {
        return `.${cs} { border-bottom:${c[3]}px var(--${c[2]}) solid;} `;
    } else if (c[0] == "ST" && c[1] == "T" && c[3] !== "D" && c[4] == "D" && c.length == 5) {
        return `.${cs} { border-top:${c[3]}px var(--${c[2]}) dotted;} `;
    } else if (c[0] == "ST" && c[1] == "L" && c[3] !== "D" && c[4] == "D" && c.length == 5) {
        return `.${cs} { border-left:${c[3]}px var(--${c[2]}) dotted;} `;
    } else if (c[0] == "ST" && c[1] == "R" && c[3] !== "D" && c[4] == "D" && c.length == 5) {
        return `.${cs} { border-right:${c[3]}px var(--${c[2]}) dotted;} `;
    } else if (c[0] == "ST" && c[1] == "B" && c[3] !== "D" && c[4] == "D" && c.length == 5) {
        return `.${cs} { border-bottom:${c[3]}px var(--${c[2]}) dotted;} `;
    } else if (c[0] == "ST" && c[1] == "PR" && c[2] == "D" && c.length == 4) {
        return `.${cs} { border:${c[3]}px var(--PR_D) solid;} `;
    } else if (c[0] == "ST" && c[1] == "T" && c[2] == "PR" && c[3] == "D" && c.length == 5) {
        return `.${cs} { border-top:${c[4]}px var(--PR_D) solid;} `;
    } else if (c[0] == "ST" && c[1] == "L" && c[2] == "PR" && c[3] == "D" && c.length == 5) {
        return `.${cs} { border-left:${c[4]}px var(--PR_D) solid;} `;
    } else if (c[0] == "ST" && c[1] == "R" && c[2] == "PR" && c[3] == "D" && c.length == 5) {
        return `.${cs} { border-right:${c[4]}px var(--PR_D) solid;} `;
    } else if (c[0] == "ST" && c[1] == "B" && c[2] == "PR" && c[3] == "D" && c.length == 5) {
        return `.${cs} { border-bottom:${c[4]}px var(--PR_D) solid;} `;
    } else if (c[0] == "ST" && c[1] == "T" && c[1] == "PR" && c[3] == "D" && c[5] == "D" && c.length == 6) {
        return `.${cs} { border-top:${c[5]}px var(--PR_D) dotted;} `;
    } else if (c[0] == "ST" && c[1] == "L" && c[1] == "PR" && c[3] == "D" && c[5] == "D" && c.length == 6) {
        return `.${cs} { border-left:${c[5]}px var(--PR_D) dotted;} `;
    } else if (c[0] == "ST" && c[1] == "R" && c[1] == "PR" && c[3] == "D" && c[5] == "D" && c.length == 6) {
        return `.${cs} { border-right:${c[5]}px var(--PR_D) dotted;} `;
    } else if (c[0] == "ST" && c[1] == "B" && c[1] == "PR" && c[3] == "D" && c[5] == "D" && c.length == 6) {
        return `.${cs} { border-bottom:${c[5]}px var(--PR_D) dotted;} `;
    } else {
        return false;
    }
}
const C_CSS = (c) => {
    var isNew = true;
    for (const style of document.styleSheets) {
        if (style.ownerNode.id == "F_ASS") {
            for (const rule of style.rules) {
                if (rule.selectorText == `.${c}`) {
                    isNew = false;
                }
            }

            if (isNew) {
                var cssT = G_CSS(c);
                var cssAR = [];
                if (cssT && cssT !== undefined) {
                    if (Array.isArray(cssT)) {
                        cssAR = cssT;
                    } else {
                        cssAR.push(cssT);
                    }
                    for (const cssC of cssAR) {
                        if (style.cssRules) {
                            style.insertRule(cssC, style.cssRules.length);
                        } else {
                            style.insertRule(cssC, 0);
                        }
                    }


                }

            }
        }
    }

}


const U_CSS = (cs) => {
    var csAr = [];

    if (Array.isArray(cs)) {
        csAr = cs;
    } else {
        var mcs = cs.split(" ");
        for (const c of mcs) {
            if (c !== "" && c !== " " && c !== null) {
                csAr.push(c);
            }
        }
    }
    for (var w = 0; w < csAr.length; w++) {
        C_CSS(csAr[w]);
    }
    return cs;
}
const MW_STYLE = async(mw) => {
    var theme = [];

    if (mw.theme == "dark") {
        theme = mw.dc;
    } else if (mw.theme == "light") {
        theme = mw.lc;
    }
    MW_CQCO(theme, "n", "T_ASS");

}
const themeName = () => {
    var th = GTD("U_THEME");
    var last_ = th && th !== null ? th : MW_APP.style.theme;
    return last_;
}
const S_SW_TH = () => {
    var lb = CE_("label");
    lb.className = U_CSS("switch");
    var last_ = themeName();
    MW_APP.style.theme = last_;
    CL_(["U_THEME", last_])
    var inP = CE_("input");


    inP.type = "checkbox";
    if (last_ == "light") {
        inP.click();
    }
    inP.addEventListener("change", SW_TH)
    var sp = CE_("span");
    sp.className = "slider round";
    lb.appendChild(inP);
    lb.appendChild(sp);
    var upIco = CE_("icon");
    var icoClass = last_ == "dark" ? "ICO-sun PD_2 F_S_20 F_B " : "ICO-night PD_2 F_S_20 F_B ";
    upIco.className = U_CSS(icoClass);
    upIco.id = "thIco";
    var swB = CE_("div");
    swB.className = U_CSS("POS_FX BB_0 LL_0");
    swB.appendChild(lb);
    swB.appendChild(upIco);

    E_T("body")[0].appendChild(swB);

}
const SW_TH = () => {
    var cur_ = MW_APP.style.theme;
    var new_ = cur_ == "dark" ? "light" : "dark";
    MW_APP.style.theme = new_;
    var icoClass = new_ == "dark" ? "ICO-sun PD_2 F_S_20 F_B " : "ICO-night PD_2 F_S_20 F_B ";
    E_I("thIco").className = U_CSS(icoClass);
    IND("U_THEME", new_);
    UP_COLOR(new_);
    MW_STYLE(MW_APP.style);
}
const startStyle = () => {

    fetch('./css/style.json').then(response => {
        return response.json();
    }).then(data => {

        MW_APP.style = data;
        MW_APP.style.theme = themeName();
        MW_STYLE(data);
    }).catch(err => {
        CL_("error")
    });
    fetch('./css/colors.json').then(response => {
        return response.json();
    }).then(data => {
        MW_APP.colors = data;
        MW_CQCO(data, "n", "TC_ASS");
    }).catch(err => {
        CL_("error")
    });

}