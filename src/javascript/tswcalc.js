var buttonHandler = {};
var selectHandler = {};
var buttonBar = 0;
var summary = 0;
var exportModule = 0;

$(document).ready(function() {
    renderContainer(template_data);

    startSubModules();

    $('#summary').scrollToFixed();
});

function renderContainer(data) {
    dust.render('container', template_data,

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('.container').html(out);
    });
}

function startSubModules() {
    for (var i = 0; i < template_data.slots.length; i++) {
        startDistributionButtonHandler(template_data.slots[i].id_prefix);
        startSelectHandler(template_data.slots[i].id_prefix);
    }
    startButtonBar();
    startSummary();
    startExportModule();
}

function startDistributionButtonHandler(slotId) {
    buttonHandler[slotId] = new DistributionButtonHandler(slotId);
    buttonHandler[slotId].initiate();
};

function startSelectHandler(slotId) {
    selectHandler[slotId] = new SelectHandler(slotId);
    selectHandler[slotId].initiate();
};

function startButtonBar() {
    buttonBar = new ButtonBar();
    buttonBar.initiate();
};

function startSummary() {
    summary = new Summary();
};

function startExportModule() {
    exportModule = new Export();
    exportModule.initiate();
};