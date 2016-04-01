/* Create the necessary configuration section for MathJax */
(function () {
    var configText = 'MathJax.Hub.Config({config: ["MMLorHTML.js"], jax: ["input/AsciiMath","output/HTML-CSS","output/NativeMML", "output/PreviewHTML"], extensions: ["asciimath2jax.js","MathMenu.js","MathZoom.js", "fast-preview.js", "AssistiveMML.js"]});';
    var config = document.createElement('script');
    config.type = 'text/x-mathjax-config';
    if (window.opera) {
        config.innerHTML = configText;
    }
    else {
        config.text = configText;
    }
    var scripts = document.getElementsByTagName('script');
    var thisScript = scripts[scripts.length - 1];
    thisScript.parentNode.insertBefore(config, thisScript.nextSibling);
})();
