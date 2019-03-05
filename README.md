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

#### Admin panel (Competitions)
##### Get to admin panel:
1.  Go to  http://localhost:8080 
2.  Push button "Авторизация" and fill User name and Password in opened pop up
3.  Push button "Забеги" in the navigation bar

##### Change competition name:
1.  Select the required competition using the rudio button from the second column
2.  Change competition name in input
3.  Push "Save Competition" button

##### Add new competition:
1.  Insert the correct url to input
2.  Push "Add" button

##### Recalculate competitions:
1.  Select the required competitions using the checkbox from the first column
2.  Push "Recalculate" button

##### Update all competitions:
1.  Push "Total Drop" button

#### Admin panel (Runners)
##### Get to admin panel:
1.  Go to  http://localhost:8080 
2.  Push button "Авторизация" and fill User name and Password in opened pop up
3.  Site redirects you to the correct rout

##### Update single runner:
1.  Select only one runner from the left table using checkbox
2.  Select this runner from the right table using radiobutton
3.  Change club name or sex if it need and push button "Обновить" 

##### Add runners to merge:
1.  Select more then one runner from the left table using checkbox
2.  Select needed runner from the right table using radiobutton
3.  Push button "Обьеденить"
4.  If you want to cancel merge push button "Отменить"
5.  If you want to confirm merge push button "Сохранить"
6.  If you want to delete only one runner from merge push the button in the shape of a red cross

#### User panel
##### Dashboard (http://localhost:4200/dashboard):
1.  Block called "Лидеры" (Show information about 3 first man (left table) and woman (right table) runners position in rating)
2.  Block called "Статистика" (Reflects general information about the competition)
3.  Block called "Изменения в таблице участников" (Show information about new runners, up in rating runners and down in rating runners respectively)

##### Runners (http://localhost:4200/runners):
1.  Displays sorted by points statistics of runners divided by gender (men - left table, woman - right table)
2.  To find the required runner you need start type name of this runner in input with placeholder "Поиск по имени или клубу" (The system automatically show all matching runners)

##### Single runner (http://localhost:4200/[some single runner ID]):
1.  On this page you can see general information about current runner
2.  To compare current runner with other: <br>
    2.1 Chose needed runner from select with placeholder "Сравнить с ..." and click button "Сравнить" <br>
    2.2 Pop up with general information appears on the screen <br>
    2.3 To close pop up click button "Закрыть"
3.  In the bottom of page you can see chart with information about points and places in different dates of current runner

##### Competitions (http://localhost:4200/competition):
1.  Displays sorted by date statistics of all competitions with its status <br>
    ("Blue clock" - competition counted but not used in statistics) <br>
    ("Red cross" - competition can`t be counted) <br>
    ("Green check" - competition counted and used in statistics)
2.  You can click on each competitions to find more information

##### Single competition (http://localhost:4200/competition/[some single competition ID]):
1.  On this page you can see general information about single competition in block what contains name of this competition
2.  Additional information about all runners who took part in the competition you can find under general information (only in competition with "Green check") <br>
    2.1 To navigate between runners groups you can use crisps 

##### About rating competition (http://localhost:4200/about-rating):
1.  On this page you can see general information about groups, limits points and points calculation system
2.  In the bottom of this page in expansion panel you can see all release progress
