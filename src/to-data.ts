import { IExportData } from 'export.js/types/custom'

export function toData(str: string): IExportData[] {
  const lines = str.trim().split('\n')
  const data = lines.map((line) => {
    return line.split(',').map((l) => l.trim())
  })
  const res: IExportData = {
    td: data
  }

  return [res]
}
