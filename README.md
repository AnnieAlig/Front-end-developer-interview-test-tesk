# Test task for front-end developer 

## Main task

Fork a project before starting working on it.

Most of the layout of test project is just a dummy dashboard template copied from bootstrap demos website. You will find a empty datarange component. 
Your task will be to copy datarange picker from google adwords interface.
Expected result: 
- Rendered month calendars for 2 years. Ignore month select dropdown and arrows.
- when date input is focused, date has a format of 7/17/2018, when out of focus - Jul 7, 2018
- Implement same styles for dates in calendar for selected state as in adwords implementation (start of range, end of range, date between start & end of selected range). Ignore 'invisible/gray' hover state for not yet selected ranges for now.
- In table heading section you can find 'Place for range'. Put a component, that shows the selected range and is updated on every range update. Localize 'MMMM d, y' format for it and localize it to French.
- For pre-defined ranges selector on the left column - implement all of them, but ignore 'Compare' functionality.
- You can't install 3rd-party daterange picker packages, but can use those implementations as a base for your solution if you need a clue.
- You can use any 3rd party library like jquery, momentjs or any other on your choice.
- Mobile layout is irrelevant for now. 

You can create as many components/services/pipes for this task as needed, but try to keep them as clean/readable as possible.
Don't dedicate to the task more then 8h. If 8h expired - push what you have done as it is.

If you want to add few more points to your score you can complete these additional tasks:
1. Transform Layout and Core modules to be singletons.
2. Provide app init factory that fetches auth data before app init. You can use dummy auth method from AuthenticationService, that just returns true;
If you know angular well - this will be fast tasks for you.

We use pug for the project, but if you are not familiar with pug/jade, you can switch to html by renaming file extension.
