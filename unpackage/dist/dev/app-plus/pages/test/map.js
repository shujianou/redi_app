
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"_map { width: 100%; height: ",[0,800],"; }\n.",[1],"test { background: #fff; height: ",[0,100],"; text-align: center; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin: ",[0,30],"; }\n",],undefined,{path:"./pages/test/map.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/test/map.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      