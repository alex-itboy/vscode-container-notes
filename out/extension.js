"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const webviewProvider_1 = require("./webviewProvider");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1000);
    context.subscriptions.push(statusBar);
    const provider = new webviewProvider_1.default(context.extensionUri, statusBar);
    // register some listener that make sure the status bar
    // item always up-to-date
    // context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(provider.updateStatusBar));
    // context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(provider.updateStatusBar));
    context.subscriptions.push(vscode.window.registerWebviewViewProvider(webviewProvider_1.default.viewId, provider));
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(vscode.commands.registerCommand('container-notes.togglePreview', () => {
        // The code you place here will be executed every time your command is executed
        provider.togglePreview();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('container-notes.previousPage', () => {
        provider.previousPage();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('container-notes.nextPage', () => {
        provider.nextPage();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('container-notes.resetData', () => {
        provider.resetData();
    }));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map