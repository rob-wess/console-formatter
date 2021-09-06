//const consoleFormatter = require('console-formatter');

const systemdStatus = require('systemd-status');
const printTitle = require('console-formatter').printTitle;
const printMsg = require('console-formatter').printMsg;

printTitle('Test Systemd Service Status');

const currentStatus = systemdStatus(['httpd', 'firewalld' ]);

for (i=0; i<currentStatus.length; i++) {
	serviceName = currentStatus[i].name;
	serviceState = currentStatus[i].state;


	if (serviceState == 'running') {
		var rc = 0;
	} else if (serviceState = 'dead') {
		var rc = 2;
	}

	printMsg("Check " + serviceName + " is running", rc );
}

console.log('\n');
