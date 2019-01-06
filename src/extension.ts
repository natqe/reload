import { StatusBarAlignment, window } from 'vscode'

export function activate() {

    const statusBar = window.createStatusBarItem(StatusBarAlignment.Right, 1)

    statusBar.text = `Reload`

    statusBar.command = `workbench.action.reloadWindow`

    statusBar.tooltip = `reload window`

    statusBar.show()

}

export function deactivate() { }
