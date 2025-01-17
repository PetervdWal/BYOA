# Learnings from Building the Framework

## Overview
This document captures my key learnings, insights, and challenges while building this framework inspired by Angular.

---

## Key Learnings
### Components
- Angular has two ways of compiling components. 
  - The JIT (just-in-time) compiler, which compiles during dev time. This is used for development
  - THe AOT (ahead-of-time) compiler, which compiles html files into strings to be part of javascript and runs that code.
- The `selector` matches HTML elements, and `templateUrl` links to an HTML template.
- Decorators are executed when the class is loaded into memory, which means imports must ensure they aren’t tree-shaken.
  - This is one of the reasons why angular requires modules! You have the files imported. 
  - With standalone components, the dependencies are directly in the component itself.

### Bootstrap Process
- The `bootstrap` function dynamically finds `<app-root>` in `index.html` and renders the root component.
- Angular handles finding this component by declaring the appcomponent in AppModule and initializing this during bootstrap
- Nested components are discovered by scanning for selectors inside rendered templates.

### Vite Plugin Challenges
- Traversing directories to find components was tricky because...
- Ensuring `templateUrl` resolves correctly requires careful handling of relative paths.

---

## Future Improvements
1. Add routing to handle dynamic navigation.
2. Optimize the registry for performance.
3. Implement lifecycle hooks like `onInit` and `onDestroy`.
---

