import { exportCSV } from 'export.js/csv'
import { Data } from './data'
import { toData } from './to-data'
import { dataToTable } from './data-to-table'
const downloadButton = document.getElementById('download')
const uploadInput = document.getElementById('upload')
const content = document.getElementById('content')

content.innerHTML = dataToTable(Data)

downloadButton.addEventListener('click', () => {
  exportCSV('数据', Data)
})

const fileReader = new FileReader()

fileReader.addEventListener('load', (event) => {
  const text = event.target['result']
  content.innerHTML = dataToTable(toData(text))
})

uploadInput.addEventListener('change', (event) => {
  const files = event.target['files']
  if (files.length === 0) {
    return
  }
  const file = files[0]

  fileReader.readAsText(file)
})
