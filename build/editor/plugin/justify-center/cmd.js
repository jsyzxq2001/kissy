/*
Copyright 2013, KISSY v1.40dev
MIT Licensed
build time: Aug 27 21:55
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 editor/plugin/justify-center/cmd
*/

/**
 * Add justifyCenter command identifier for Editor.
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/justify-center/cmd", function (S, justifyUtils) {

    return {
        init:function (editor) {
            justifyUtils.addCommand(editor, "justifyCenter", "center");
        }
    };

}, {
    requires:['../justify-cmd']
});

