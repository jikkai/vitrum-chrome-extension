const KEY = 'VITRUM_CHROME_EXTENSION_STORAGE_KEY'

const $dataDOM = document.createElement('div')
$dataDOM.id = 'vitrum-chrome-extension'
$dataDOM.style.display = 'none'
document.body.appendChild($dataDOM)

// 保存
$dataDOM.addEventListener('EventSyncUploadChrome', () => {
  const data = JSON.parse($dataDOM.innerText)

  chrome.storage.sync.set({ [KEY]: data })
})

chrome.storage.sync.get([KEY], result => {
  if (!result[KEY]) return

  $dataDOM.innerText = JSON.stringify(result[KEY])
})
