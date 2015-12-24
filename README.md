# angular2-vs2015-example
Angular2 Setup in Visual Studio 2015 with ASP.NET WebAPI backend

This is a work in progress. The current state of the repo should work with some tweaking, but I only have it working on one machine at the moment.

### TypeScript configuration in VS2015
The biggest issue I ran into while trying to get this working was just getting the VS2015 environment to play nicely with TypeScript and the Angular2 beta. VS2015 apparently has support for `tsconfig.json` files, but only *really* supports them for ASP.NET vNext projects. In versions prior to vNext, the project file takes over even if you have a `tsconfig.json`.

The first issue is that Angular2 no longer uses a `.d.ts` file for typings. If you install the latest version, it is basically a README saying to use `node` style module resolution. Also, Angular2 uses es7 style decorators, so we need to enable the experimental decorators feature. The *Project Properties* -> *TypeScript Build* section doesn't have anything for us to configure for these unfortunately. To get it working, right click your project in Solution Explorer, unload the project, then edit the project file. Add the following to the `<PropertyGroup>` towards the bottom with all the `<TypeScript*>` tags:

```
<TypeScriptExperimentalDecorators>True</TypeScriptExperimentalDecorators>
<TypeScriptModuleResolution>NodeJs</TypeScriptModuleResolution>
```

Don't close out the file yet, as we have one more change to make. The above changes will get the editor to work and recognize all the Angular2 `import` statements correctly. However, if you try to build the solution now.....KABOOM. VS2015 apparently passes the flag `--moduleResolution=NodeJs` instead of the correct `--moduleResolution=node`. Since the build depends on the TS transpiling correctly the whole project fails to build. No bueno. To fix it, we need to add the following in the first `<PropertyGroup>` of the project file:

```
<TypeScriptCompileBlocked>true</TypeScriptCompileBlocked>
```

This will turn off TS transpilation in the IDE. You'll need to use some kind of external build tool, but why wouldn't you want to? I'm using webpack for this example.

I'll update with more info as I iron out any issues in the project.

#### MIT &copy; [bodiddlie](https://twitter.com/bodiddlie)
