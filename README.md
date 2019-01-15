Project is under migration to Angular 6

#### Project setup

1. Fetch code from https://gitlab.com/oleksandrstarov/orienteering_ranking.git 
2. Download MySQL https://dev.mysql.com/downloads/file/?id=479861 and install
3. Configure mysql (user, password and port) according to settings.js data
4. Run [npm install]
5. Run [npm start] (from scripts of package.json) - make sure you have Mysql running

If everything was set correctly - the import should begin automatically,
navigate to http://localhost:8080 to see the application

#### Deployment
The deployment process is done by OpenShift.
The target branch for source code for OpenShift is [master]
Make sure to buld app before push (run [npm run build] to update version of app and create /dist folder).  


#### Branch naming

 1. Branch name must contain [feature/or-]+[number of task]
 2. Bugfix branch name should contain [bugfix/or-]+[number of task]

#### Project setup with Angular6 + life reload

 1. Fetch code from https://gitlab.com/oleksandrstarov/orienteering_ranking.git 
 2. Download MySQL https://dev.mysql.com/downloads/file/?id=479861 and install
 3. Configure mysql (user, password and port) according to settings.js data
 4. Run [npm install]
 5. Run [ng serve --open]

If everything was set correctly - the command [ng serve --open] should begin automatically,
navigate to http://localhost:4200/ to see the application


#### Configuring IDE
Run `npm install`. 

Do not forget to add `tslint.json` file from project root into your IDE. It makes your IDE adaptive to configured coding guidelines and will allow you to avoid linting errors during development.  
To configure WebStorm go to:
```
Settings > Languages and Frameworks > TypeScript > TSLint
```
And select `tslint.json` configuration file from the project root.

After Tslint you have to configure Stylelint.  
Go to:
```
Settings > Languages and Frameworks > Stylesheets > Stylelint
```
And enable stylelint.  
Please do not forget to check that you use 2 spaces indentation by default.

#### .ts .scss linting

There are git-hook set up to check linting of .ts and .scss files before commit. If linting fails - no commit will be done.

#### Admin panel 
Add new competition:
1.  Insert the correct url to input
2.  Push "Add" button

Recalculate competitions:
1.  Select the required competitions using the checkbox from the first column
2.  Push "Recalculate" button

Change competition name:
1.  Select the required competition using the rudio button from the second column
2.  Change competition name in input
3.  Push "Save Competition" button

Update all competitions:
1.  Push "Total Drop" button

Switch between competitions and runners panels:
1.  Push "Show Admin Runners" / "Show Admin Competitions" button