### Compiling TypeScript

| Command                            | Description                                                                                                                                   |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| tsc file.ts                        | Compile one file                                                                                                                              |
| tsc --init                         | input command when in project folder, sets up project to tsc whole project                                                                    |
| tsc                                | Compile whole project when 'tsc --init command has been used                                                                                  |
| --watch/-w                         | Compiles file whenever file is saved, optional after tsc 'file' command                                                                       |
| "exclude": ["file/projectfolder"], | in tsconfig.json this can be added to exclude files or folders when compiling                                                                 |
| "include": ["file/projectfolder"], | in tsconfig.json this can be added to compile only these files or folders                                                                     |
| "files": ["file"],                 | in tsconfig.json this can be added to only compile these files                                                                                |
| "target": "ES6"                    | in tsconfig.json this can be adjusted to accommodate your wish to compile the TypeScript to which JavaScript                                  |
| "sourceMap": true                  | in tsconfig.json this can be adjusted to accommodate your wish to debug ts files in browser/Sources                                           |
| "outDir": "./_folder_"             | in tsconfig.json this can be adjusted to accommodate your wish to set the output of the compiled files in a specified folder (usually ./dist) |
| "rootDir": "./_folder_"            | in tsconfig.json this can be adjusted to accommodate your wish to set the input of the compiled files in a specified folder (usually ./src)   |
| "removeComments": true             | in tsconfig.json this can be adjusted to accommodate your wish to set the emitting of comments to output                                      |
| "noEmitOnError": true,             | in tsconfig.json this can be _added_ to accommodate your wish to not emit output when there is an error                                       |
