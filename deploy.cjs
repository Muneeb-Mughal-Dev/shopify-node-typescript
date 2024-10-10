const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Define the app folder path
const appFolderPath = path.join(__dirname, "web/app");

console.log("appFolderPath==>", appFolderPath);

// // Function to execute a shell command
// const execCommand = (command) => {
//   try {
//     execSync(command, { stdio: "inherit" });
//   } catch (error) {
//     console.error(`Error executing command: ${command}`);
//     process.exit(1);
//   }
// };

// Check if the app folder exists
if (fs.existsSync(appFolderPath)) {
  console.log("App folder already exists. Removing it...");
  fs.rmSync(appFolderPath, { recursive: true, force: true });
  console.log("App folder removed.");
} else {
  console.log("App folder does not exist.");
}

// // Create a new app folder and run the build command
// console.log("Creating new app folder and building the project...");

// const buildCommand = `
//     cd web && swc . -d app --copy-files --log-watch-compilation --include-dotfiles --ignore node_modules,frontend,inject-json-assertion.cjs,.eslintignore,.eslintrc,.prettierignore,prettier.config.js,nodemon.json,shopify.web.toml,tsconfig.json,yarn.lock,.env.example,server/logs &&
//     node inject-json-assertion.cjs &&
//     cd frontend &&
//     SHOPIFY_API_KEY='c6c9a82bf46e390335ee39b03ecfcef4' yarn build &&
//     cp -r ./dist ../app/frontend/dist
// `;

// // Execute the build command
// execCommand(buildCommand);

// console.log("Build completed successfully.");
