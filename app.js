    //JSON output from an API into HTML
    
    async function fetchDataAndRenderTable() {
    // FETCH JSON DATA 
    const dataFromTheServer1 = await fetch('https://reqres.in/api/users').then(res => res.json())
    const dataFromTheServer2 = await fetch('https://reqres.in/api/users?page=2').then(res => res.json())
    console.log(dataFromTheServer1)
    const data = dataFromTheServer1.data.concat(dataFromTheServer2.data)
    console.log(data)
    
    // ADD JSON DATA TO THE TABLE 
    const tableHTMLElement = document.createElement('table')
    tableHTMLElement.innerHTML = `
      <table style="width:100%">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email ID</th>
          <th>USER ID</th>
          <th>Avatar</th>
        </tr>
        ${
          data.map(item => {
            return `
              <tr>
                <td>${item.first_name}</td>
                <td>${item.last_name}</td>
                <td>${item.email}</td>
                <td>${item.id}</td>
                <td><img src=${item.avatar}></td>
              </tr>
            `
          })
        }
      </table>
    `

    document.body.appendChild(tableHTMLElement)

  }

  fetchDataAndRenderTable()

module.exports = fetchDataAndRenderTable;