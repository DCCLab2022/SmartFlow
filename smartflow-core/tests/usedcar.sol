=============================================
SOLIDITY CODE
=============================================
pragma solidity ^0.4.25;

import "AbstractFactory";
import "AbstractProcess";
import "AbstractRegistry";

contract Usedcar_Business_Process_Factory is AbstractFactory {
    function newInstance(address parent, address processRegistry) public returns(address) {
        Usedcar_Business_Process_Contract newContract = new Usedcar_Business_Process_Contract(parent, worklist, processRegistry);
        return newContract;
    }

    function startInstanceExecution(address processAddress) public {
        Usedcar_Business_Process_Contract(processAddress).startExecution();
    }
}


contract Usedcar_Business_Process_Contract is AbstractProcess {

    uint public marking = uint(2);
    uint public startedActivities = 0;

    // invoice_paid
    event Event_0d5j0a0_Mesage(bytes32 messageText);

    // Process Variables

    uint[] public requestedID;


    function Usedcar_Business_Process_Contract(address _parent, address _worklist, address _processRegistry) public AbstractProcess(_parent, _worklist, _processRegistry) {
        for (uint i = 0; i < 1; i++)
            requestedID.push(0);
    }

    function startExecution() public {
        require(marking == uint(2) && startedActivities == 0);
        step(uint(2), 0);
    }

    function handleEvent(bytes32 code, bytes32 eventType, uint _instanceIndex, bool isInstanceCompleted) public {
        // Process without calls to external contracts.
        // No events to catch !!!
    }

    function killProcess() public {
        (marking, startedActivities) = killProcess(0, marking, startedActivities);
    }

    function killProcess(uint processElementIndex, uint tmpMarking, uint tmpStartedActivities) internal returns(uint, uint) {
        if(processElementIndex == 0)
            tmpMarking = tmpStartedActivities = 0;
        return (tmpMarking, tmpStartedActivities);
    }

    function broadcastSignal() public {
        uint tmpMarking;
        uint tmpStartedActivities;
        (tmpMarking, tmpStartedActivities) = broadcastSignal(marking, startedActivities, 0);
        step(tmpMarking, tmpStartedActivities);
    }

    function broadcastSignal(uint tmpMarking, uint tmpStartedActivities, uint sourceChild) internal returns(uint, uint) {
        return (tmpMarking, tmpStartedActivities);
    }



    function Select_a_car_complete(uint elementIndex) external {
      uint tmpMarking = marking;
      uint tmpStartedActivities = startedActivities;
        if(elementIndex == uint(2)) {
            require(msg.sender == worklist && tmpStartedActivities & uint(4) != 0);
            step(tmpMarking | uint(4), tmpStartedActivities & uint(~4));
            return;
        }
    }
    function receive_invoice_complete(uint elementIndex) external {
      uint tmpMarking = marking;
      uint tmpStartedActivities = startedActivities;
        if(elementIndex == uint(3)) {
            require(msg.sender == worklist && tmpStartedActivities & uint(8) != 0);
            step(tmpMarking | uint(16), tmpStartedActivities & uint(~8));
            return;
        }
    }
    function receive_car_complete(uint elementIndex) external {
      uint tmpMarking = marking;
      uint tmpStartedActivities = startedActivities;
        if(elementIndex == uint(5)) {
            require(msg.sender == worklist && tmpStartedActivities & uint(32) != 0);
            step(tmpMarking | uint(64), tmpStartedActivities & uint(~32));
            return;
        }
    }


    function step(uint tmpMarking, uint tmpStartedActivities) internal {
        while (true) {
            if (tmpMarking & uint(4) != 0) {
                tmpMarking = tmpMarking & uint(~4) | uint(8);
                continue;
            }
            if (tmpMarking & uint(2) != 0) {
                Usedcar_Business_Process_AbstractWorlist(worklist).Select_a_car_start(2);
                tmpMarking &= uint(~2);
                tmpStartedActivities |= uint(4);

                continue;
            }
            if (tmpMarking & uint(16) != 0) {
                tmpMarking = tmpMarking & uint(~16) | uint(32);
                Event_0d5j0a0_Mesage('invoice_paid');
                continue;
            }
            if (tmpMarking & uint(64) != 0) {
                tmpMarking &= uint(~64);
                if (tmpMarking & uint(126) == 0 && tmpStartedActivities & uint(62) == 0) {
                    (tmpMarking, tmpStartedActivities) = propagateEvent("Event_1yrcsro", "Default", tmpMarking, tmpStartedActivities, uint(64));
                }
                continue;
            }
            break;
        }
        if(marking != 0 || startedActivities != 0) {
            marking = tmpMarking;
            startedActivities = tmpStartedActivities;
        }
    }

    function getWorklistAddress() external view returns(address) {
        return worklist;
    }

    function getInstanceIndex() external view returns(uint) {
        return instanceIndex;
    }

}
pragma solidity ^0.4.25;

import "AbstractWorklist";

contract Usedcar_Business_Process_AbstractWorlist {

      function Select_a_car_start(uint) external;
      function receive_invoice_start(uint) external;
      function receive_car_start(uint) external;

      function Select_a_car_complete(uint) external;
      function receive_invoice_complete(uint) external;
      function receive_car_complete(uint) external;

}

contract Usedcar_Business_Process_Worklist is AbstractWorklist {

    // Events with the information to include in the Log when a workitem is registered
    event Select_a_car_Requested(uint);
    event receive_invoice_Requested(uint);
    event receive_car_Requested(uint);

    function Select_a_car_start(uint elementIndex) external {
        workitems.push(Workitem(elementIndex, msg.sender));
        Select_a_car_Requested(workitems.length - 1);
    }
    function receive_invoice_start(uint elementIndex) external {
        workitems.push(Workitem(elementIndex, msg.sender));
        receive_invoice_Requested(workitems.length - 1);
    }
    function receive_car_start(uint elementIndex) external {
        workitems.push(Workitem(elementIndex, msg.sender));
        receive_car_Requested(workitems.length - 1);
    }

    function Select_a_car(uint workitemId) external {
        require(workitemId < workitems.length && workitems[workitemId].processInstanceAddr != address(0) &&
        canPerform(msg.sender, workitems[workitemId].processInstanceAddr, workitems[workitemId].elementIndex));
        Usedcar_Business_Process_AbstractWorlist(workitems[workitemId].processInstanceAddr).Select_a_car_complete(workitems[workitemId].elementIndex);
        workitems[workitemId].processInstanceAddr = address(0);
    }
    function receive_invoice(uint workitemId) external {
        require(workitemId < workitems.length && workitems[workitemId].processInstanceAddr != address(0) &&
        canPerform(msg.sender, workitems[workitemId].processInstanceAddr, workitems[workitemId].elementIndex));
        Usedcar_Business_Process_AbstractWorlist(workitems[workitemId].processInstanceAddr).receive_invoice_complete(workitems[workitemId].elementIndex);
        workitems[workitemId].processInstanceAddr = address(0);
    }
    function receive_car(uint workitemId) external {
        require(workitemId < workitems.length && workitems[workitemId].processInstanceAddr != address(0) &&
        canPerform(msg.sender, workitems[workitemId].processInstanceAddr, workitems[workitemId].elementIndex));
        Usedcar_Business_Process_AbstractWorlist(workitems[workitemId].processInstanceAddr).receive_car_complete(workitems[workitemId].elementIndex);
        workitems[workitemId].processInstanceAddr = address(0);
    }

}
