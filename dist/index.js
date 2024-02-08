"use strict";var n=(a,s)=>()=>(s||a((s={exports:{}}).exports,s),s.exports);var t=n((f,i)=>{var c=[];i.exports=c});var l=n((y,r)=>{var x=[];r.exports=x});var o=n((j,d)=>{d.exports={name:"eslint-plugin-maintainable",version:"0.2.0",description:"Eslint config to keep code clean and in maintainable state",author:{name:"asmyshlyaev177",email:"asmyshlyaev177@gmail.com",url:"https://www.linkedin.com/in/asmyshlyaev177/"},license:"MIT",keywords:["eslint","eslintplugin","eslint-plugin","eslint-config","eslintconfig","typescript","clean code","quality","prettier","code format","maintainable code","maintainability","manageable code","readable code","readability","coding-style"],main:"./dist/index.js",exports:"./dist/index.js",scripts:{build:"esbuild lib/index.cjs --bundle --minify --platform=node --target=node16 --outfile=dist/index.js",lint:'npm-run-all "lint:*"',"lint_docs:eslint-docs":'npm-run-all "update:eslint-docs -- --check"',"lint:js":"eslint .",test:"echo 'tbd'","update:eslint-docs":"eslint-doc-generator"},dependencies:{"@typescript-eslint/eslint-plugin":"^6.x.x","@typescript-eslint/parser":"^6.x.x","eslint-config-prettier":"^9.x.x","eslint-plugin-compat":"^4.x.x","eslint-plugin-cypress":"^2.x.x","eslint-plugin-deprecation":"^2.x.x","eslint-plugin-disable":"^2.x.x","eslint-plugin-jsonc":"^2.x.x","eslint-plugin-jsx-a11y":"^6.x.x","eslint-plugin-no-secrets":"^0.x.x","eslint-plugin-prettier":"^5.x.x","eslint-plugin-react":">=7.x.x","eslint-plugin-react-hooks":">=4.6.0","eslint-plugin-react-redux":">=4.1.0","eslint-plugin-sonarjs":"^0.x.x","eslint-plugin-unicorn":">=50.x.x"},devDependencies:{esbuild:"^0.20.0",eslint:"^8.19.0","eslint-doc-generator":"^1.0.0","eslint-plugin-eslint-plugin":"^5.0.0","eslint-plugin-node":"^11.1.0","npm-run-all":"^4.1.5"},engines:{node:"^16.0.0 || >= 18.0.0"},peerDependencies:{"@typescript-eslint/eslint-plugin":"^6.x.x","@typescript-eslint/parser":"^6.x.x",eslint:"^8.x.x","eslint-config-prettier":"^9.x.x","eslint-plugin-compat":"^4.x.x","eslint-plugin-cypress":"^2.x.x","eslint-plugin-deprecation":"^2.x.x","eslint-plugin-disable":"^2.x.x","eslint-plugin-jsonc":"^2.x.x","eslint-plugin-jsx-a11y":"^6.x.x","eslint-plugin-no-secrets":"^0.x.x","eslint-plugin-prettier":"^5.x.x","eslint-plugin-react":">=7.x.x","eslint-plugin-react-hooks":">=4.6.0","eslint-plugin-react-redux":">=4.1.0","eslint-plugin-sonarjs":"^0.x.x","eslint-plugin-unicorn":">=50.x.x",prettier:"^3.x.x"}}});var u=t(),m=l();module.exports.rules=u;module.exports.processors=m;var p=o();module.exports.meta={name:p.name,version:p.version};var e={env:{es2023:!0,"shared-node-browser":!0},parser:"@typescript-eslint/parser",processor:"disable/disable",parserOptions:{ecmaFeatures:{jsx:!0},ecmaVersion:2023,sourceType:"module",project:!0},rules:{"prettier/prettier":["warn",{},{usePrettierrc:!0}],"arrow-body-style":"off","prefer-arrow-callback":"off"},extends:["eslint:recommended","plugin:jsx-a11y/recommended","plugin:prettier/recommended","plugin:@typescript-eslint/recommended","plugin:compat/recommended","plugin:jsonc/recommended-with-jsonc"],plugins:["@typescript-eslint","disable","jsx-a11y","compat","no-secrets"],overrides:[{files:["*.json","*.json5","*.jsonc"],parser:"jsonc-eslint-parser"}]};module.exports.configs={base:e,recommended:{...e,extends:[...e.extends,"plugin:sonarjs/recommended","plugin:deprecation/recommended","plugin:jsonc/recommended-with-jsonc"],plugins:[...e.plugins,"unicorn","sonarjs","deprecation"],rules:{...e.rules,"sonarjs/cognitive-complexity":["error",9],complexity:["error",11],"no-secrets/no-secrets":"error","max-statements":["error",30],"max-params":["error",3],"max-nested-callbacks":["error",4],"max-lines-per-function":["error",{max:150,skipBlankLines:!0,skipComments:!0}],"max-lines":["error",400],"max-len":["error",80],"max-depth":["error",1]},overrides:[...e.overrides,{files:["*.test.js","*.test.ts","*.test.jsx","*.test.tsx","*.spec.js","*.spec.ts","*.spec.jsx","*.spec.tsx"],rules:{"sonarjs/no-duplicate-string":"off","max-statements":"off","max-lines":"off","max-lines-per-function":"off","max-nested-callbacks":["error",7]}}]},react:{...e,extends:[...e.extends,"plugin:react/recommended","plugin:react-hooks/recommended","plugin:react-redux/recommended"],plugins:[...e.plugins,"react","react-hooks","react-redux"],rules:{...e.rules,"react-hooks/rules-of-hooks":"error","react-hooks/exhaustive-deps":"warn","react/display-name":"off","react/prop-types":"off"}}};
