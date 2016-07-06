Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    
    launch: function() {
        this.add({
            xtype: 'rallygrid',
            columnCfgs: [
                'FormattedID',
                'Name',
                'Project'/*,
                'ScheduleState',
                'Parent'*/
            ],
            context: this.getContext(),
            /*features: [{
                ftype: 'groupingsummary',
                groupHeaderTpl: '{name} ({rows.length})'
            }],*/
            storeConfig: {
                model: 'Milestone',
                /*groupField: 'Project',
                groupDir: 'ASC',*/
                /*filters : [
                    {
                        property : 'Name',
                        operator : 'contains',
                        value : ' ' 
                    },
                ],*/
                //fetch: ['Project'],
                /*getGroupString: function(record) {
                    var owner = record.get('Project');
                    return (owner && owner._refObjectName) || 'No Project';
                }*/
            }
        });
    }
});
