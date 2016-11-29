import { IExportData } from 'export.js/types/custom'

export function dataToTable(data: IExportData[]) {
  let tables = ''
  data.forEach((d) => {
    tables += '<table>'
    if (d.th) {
      const joinTh = d.th.join('</th><th>')
      tables += `
          <thead><tr>
            <th>${joinTh}</th>
          </tr></thead>
        `
    }

    const tds = d.td.map((td) => {
      return `<td>${td.join('</td><td>')}</td>`
    })

    tables += `
        <tbody><tr>
        ${tds.join('</tr><tr>')}    
        </tr></tbody>
      `
    tables += '</table>'
  })
  return tables
}
