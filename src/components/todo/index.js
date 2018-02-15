import todoComponent from './todo.component';

const todoModule = angular.module('todo', []);

// loading components, services, directives, specific to this module.
todoModule.component('todo', todoComponent);

// export this module
export default todoModule;
