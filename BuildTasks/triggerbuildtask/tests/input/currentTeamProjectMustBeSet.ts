import testhelper = require("../testhelper");
import tmrm = require("vsts-task-lib/mock-run");

let tmr : tmrm.TaskMockRunner = testhelper.setupTestRunner();

tmr.setInput("definitionIsInCurrentTeamProject", "");

tmr.run();