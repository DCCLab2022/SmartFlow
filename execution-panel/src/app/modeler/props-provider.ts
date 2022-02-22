declare function require(name: string);

const inherits = require('inherits');

var PropertiesActivator = require('bpmn-js-properties-panel/lib/PropertiesActivator');

// Require all properties you need from existing providers.
// In this case all available bpmn relevant properties without camunda extensions.
var processProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/ProcessProps'),
    eventProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/EventProps'),
    linkProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/LinkProps'),
    documentationProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/DocumentationProps'),
    idProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/IdProps'),
    nameProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/NameProps'),
    sequenceFlowProps = require('bpmn-js-properties-panel/lib/provider/camunda/parts/SequenceFlowProps'),
    scriptTaskProps = require('bpmn-js-properties-panel/lib/provider/camunda/parts/ScriptTaskProps'),
    userTaskProps = require('bpmn-js-properties-panel/lib/provider/camunda/parts/UserTaskProps'),
    serviceTaskDelegateProps = require('bpmn-js-properties-panel/lib/provider/camunda/parts/ServiceTaskDelegateProps'),
    multiInstanceLoopProps = require('bpmn-js-properties-panel/lib/provider/camunda/parts/MultiInstanceLoopProps'),
    taskManagerContractProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/TaskManagerContractProps'),
    smartContractAddressProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/SmartContractAddressProps');
    var entryFactory = require('bpmn-js-properties-panel/lib/factory/EntryFactory'),
    getBusinessObject = require('bpmn-js/lib/util/ModelUtil').getBusinessObject,
    utils = require('bpmn-js-properties-panel/lib/Utils'),
    cmdHelper = require('bpmn-js-properties-panel/lib/helper/CmdHelper');
// The general tab contains all bpmn relevant properties.
// The properties are organized in groups.
function createGeneralTabGroups(element: any, bpmnFactory: any, elementRegistry: any) {

    const generalGroup = {
        id: 'general',
        label: 'General',
        entries: new Array,
    };

    idProps(generalGroup, element, elementRegistry);
    nameProps(generalGroup, element);
    processProps(generalGroup, element);

    const detailsGroup = {
        id: 'details',
        label: 'Details',
        entries: new Array,
    };
    linkProps(detailsGroup, element);
    eventProps(detailsGroup, element, bpmnFactory, elementRegistry);
    sequenceFlowProps(detailsGroup, element, bpmnFactory, elementRegistry);
    scriptTaskProps(detailsGroup, element, bpmnFactory, elementRegistry);
    userTaskProps(detailsGroup, element, bpmnFactory, elementRegistry);
    serviceTaskDelegateProps(detailsGroup, element, bpmnFactory, elementRegistry);
    multiInstanceLoopProps(detailsGroup, element, bpmnFactory, elementRegistry);

    const documentationGroup = {
        id: 'documentation',
        label: 'Documentation',
        entries: new Array,
    };

    documentationProps(documentationGroup, element, bpmnFactory);

    return [
        generalGroup,
        detailsGroup,
        documentationGroup
    ];
}

function createAccessPermissionTabGroups(element: any, bpmnFactory: any, elementRegistry: any) {

    const generalGroup = {
        id: 'accessControl',
        label: 'Access Control',
        entries: new Array,
    };

    taskManagerContractProps(generalGroup, element, elementRegistry);
    smartContractAddressProps(generalGroup, element, bpmnFactory);
    for (let index = 1; index < 4; index++) {
        generalGroup.entries.push(entryFactory.validationAwareTextField({
            id: 'Attribute' + index,
            label: 'Attribute' + index,
            modelProperty: 'Attribute' + index,
            getProperty: function(element) {
            //   debugger
              return getBusinessObject(element).$attrs['Attribute' + index];
            },
            setProperty: function(element, properties) {
            //   debugger
              element = element.labelTarget || element;
              return cmdHelper.updateProperties(element, properties);
            },
            validate: function(element, values) {
              var idValue = values['Attribute' + index];
              // debugger
              var bo = getBusinessObject(element);
        
              var idError = utils.isIdValid(bo, idValue);
        
              return idError ? { id: idError } : {};
            }
          }));
    }
   
    return [
        generalGroup,
    ];
}


export function CustomPropertiesProvider(eventBus: any, bpmnFactory: any, elementRegistry: any) {

    PropertiesActivator.call(this, eventBus);

    this.getTabs = function (element: any) {

        const generalTab = {
            id: 'general',
            label: 'General',
            groups: createGeneralTabGroups(element, bpmnFactory, elementRegistry)
        };

        const accessPermissionTab = {
            id: 'accessPermission',
            label: 'Access Permission',
            groups:  createAccessPermissionTabGroups(element, bpmnFactory, elementRegistry),
        };

        return [
            generalTab,accessPermissionTab
        ];
    };
}

inherits(CustomPropertiesProvider, PropertiesActivator);
