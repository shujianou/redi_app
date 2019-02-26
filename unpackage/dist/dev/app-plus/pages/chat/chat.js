
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { background: #F8F8F8; }\n",],undefined,{path:"./pages/chat/chat.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/chat/chat.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      