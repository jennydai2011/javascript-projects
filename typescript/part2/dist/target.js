console.log("test");
System.register("m", [], function (exports_1, context_1) {
    "use strict";
    var hi;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("hi", hi = "hello");
        }
    };
});
System.register("app", ["m"], function (exports_2, context_2) {
    "use strict";
    var m_js_1, a;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (m_js_1_1) {
                m_js_1 = m_js_1_1;
            }
        ],
        execute: function () {
            a = 10;
            console.log('hello');
            console.log(m_js_1.hi);
        }
    };
});
