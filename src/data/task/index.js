//----------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// See LICENCE for licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

const Task = require('./_task');

module.exports = {
  of: Task.of,
  rejected: Task.rejected,
  task: require('./task'),
  _Task: Task,
  _TaskExecution: require('./_task-execution')
};
