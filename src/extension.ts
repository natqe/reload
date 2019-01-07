import { StatusBarAlignment, window } from 'vscode'

export function activate() {

    const statusBar = window.createStatusBarItem(StatusBarAlignment.Right, 0)

    statusBar.text = `Reload`

    statusBar.command = `workbench.action.reloadWindow`

    statusBar.tooltip = `Reload window`

    statusBar.show()

}

export function deactivate() { }
