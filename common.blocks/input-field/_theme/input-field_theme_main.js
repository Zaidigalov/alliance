modules.define('input', function(provide, Input) {

provide(Input.declMod({ modName: 'theme', modVal: 'main' }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
