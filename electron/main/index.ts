import { app, BrowserWindow, shell } from 'electron'

import path from 'node:path'
import os from 'node:os'
import { update } from './update'
import { createIPCHandler } from 'electron-trpc/main';
import { router } from './api'
import { registerRoute } from '../lib/router'
import { RENDERER_DIST, __dirname } from '../lib/config'

// Disable GPU Acceleration for Windows 7
if (os.release().startsWith('6.1')) app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

// App lifecycle listeners
let win: BrowserWindow | null = null

app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    createWindow()
  }
})

// Window setup
const preload = path.join(__dirname, '../preload/index.mjs')
const indexHtml = path.join(RENDERER_DIST, 'index.html')

async function createWindow() {
  win = new BrowserWindow({
    title: 'Main window',
    icon: path.join(process.env.VITE_PUBLIC, 'favicon.ico'),
    webPreferences: {
      preload,
    },
  })

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url)
    return { action: 'deny' }
  })

  createIPCHandler({ router, windows: [win] });

  registerRoute({
    id: 'main',
    browserWindow: win,
    htmlFile: indexHtml,
  })

  // Auto update
  update(win)
}

app.whenReady().then(createWindow)